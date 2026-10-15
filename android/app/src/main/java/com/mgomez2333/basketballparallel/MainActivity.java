package com.mgomez2333.basketballparallel;

import android.app.Activity;
import android.app.AlertDialog;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.*;
import android.widget.Toast;
import java.io.ByteArrayInputStream;
import java.util.Collections;
import java.util.HashMap;
import org.json.JSONObject;
import java.nio.charset.StandardCharsets;
import java.io.InputStream;
import java.io.ByteArrayOutputStream;

public class MainActivity extends Activity {
    static final String HOST = "appassets.androidplatform.net";
    static final String BASE = "/perfect-player/basketball-parallel/";
    WebView webView;

    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        getWindow().setStatusBarColor(Color.rgb(22,59,54));
        getWindow().setNavigationBarColor(Color.rgb(22,59,54));
        webView = new WebView(this);
        webView.setBackgroundColor(Color.rgb(247,245,235));
        webView.setOnApplyWindowInsetsListener((view, insets) -> {
            view.setPadding(insets.getSystemWindowInsetLeft(), insets.getSystemWindowInsetTop(),
                    insets.getSystemWindowInsetRight(), insets.getSystemWindowInsetBottom());
            return insets.consumeSystemWindowInsets();
        });
        setContentView(webView);
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        settings.setSupportMultipleWindows(false);
        settings.setMediaPlaybackRequiresUserGesture(true);
        CookieManager.getInstance().setAcceptThirdPartyCookies(webView, false);
        webView.addJavascriptInterface(new HostBridge(), "OfflineHost");
        HashMap<String,String> offlineImages = new HashMap<>();
        try (InputStream in = getAssets().open("offline-urls.json")) {
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] buffer = new byte[8192]; int size;
            while ((size = in.read(buffer)) != -1) out.write(buffer, 0, size);
            JSONObject urls = new JSONObject(new String(out.toByteArray(), StandardCharsets.UTF_8));
            java.util.Iterator<String> keys = urls.keys();
            while (keys.hasNext()) { String key = keys.next(); offlineImages.put(key, urls.getString(key)); }
        } catch (Exception error) { throw new IllegalStateException("Bundled image map is missing", error); }
        webView.setWebViewClient(new WebViewClient() {
            @Override public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest req) {
                Uri uri = req.getUrl();
                String imagePath = offlineImages.get(uri.toString());
                if (imagePath != null) uri = Uri.parse("https://" + HOST + imagePath);
                WebResourceResponse response = localAsset(uri);
                if (response != null) return response;
                return new WebResourceResponse("text/plain", "UTF-8", 404, "Offline resource unavailable",
                        Collections.emptyMap(), new ByteArrayInputStream(new byte[0]));
            }
            @Override public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest req) {
                Uri url = req.getUrl();
                if ("https".equals(url.getScheme()) && HOST.equals(url.getHost()) && url.getPath().startsWith(BASE)) return false;
                Toast.makeText(MainActivity.this, "离线版不打开外部网页", Toast.LENGTH_SHORT).show();
                return true;
            }
            @Override public void onReceivedError(WebView view, WebResourceRequest req, WebResourceError error) {
                if (req.isForMainFrame()) new AlertDialog.Builder(MainActivity.this)
                        .setTitle("页面加载失败")
                        .setMessage("请更新系统 Android System WebView 后重新打开。应用不会清除你的存档。\n" + error.getDescription())
                        .setPositiveButton("重新加载", (d,w) -> webView.reload()).setNegativeButton("关闭", null).show();
            }
        });
        webView.setWebChromeClient(new WebChromeClient());
        webView.loadUrl("https://" + HOST + BASE + "index.html");
    }

    // Serve bundled content at one secure origin, including module/Worker fetches.
    // No file:// access and no network fallback.
    WebResourceResponse localAsset(Uri uri) {
        if (!"https".equals(uri.getScheme()) || !HOST.equals(uri.getHost())) return null;
        String path = uri.getPath();
        if (path == null || !path.startsWith(BASE)) return null;
        String relative = path.substring(BASE.length());
        if (relative.isEmpty()) relative = "index.html";
        if (relative.contains("..") || relative.contains("\\") || relative.indexOf('\0') >= 0) return null;
        String suffix = relative.substring(relative.lastIndexOf('.') + 1).toLowerCase(java.util.Locale.ROOT);
        String mime;
        switch (suffix) {
            case "js": mime="text/javascript"; break;
            case "html": mime="text/html"; break;
            case "css": mime="text/css"; break;
            case "json": mime="application/json"; break;
            case "svg": mime="image/svg+xml"; break;
            case "webp": mime="image/webp"; break;
            case "png": mime="image/png"; break;
            case "jpg": case "jpeg": mime="image/jpeg"; break;
            case "gif": mime="image/gif"; break;
            case "woff": mime="font/woff"; break;
            case "woff2": mime="font/woff2"; break;
            default: mime="application/octet-stream";
        }
        try { return new WebResourceResponse(mime,
                mime.startsWith("text/") || suffix.equals("json") || suffix.equals("svg") ? "UTF-8" : null,
                200, "OK", Collections.singletonMap("Cache-Control", "no-cache"), getAssets().open(relative));
        } catch (java.io.IOException error) { return null; }
    }

    @Override public void onBackPressed() {
        webView.evaluateJavascript("window.ParallelOffline?.back()", null);
    }

    @Override protected void onPause() {
        webView.evaluateJavascript("window.ParallelOffline?.flush()", null);
        super.onPause();
    }

    final class HostBridge {
        @JavascriptInterface public void confirmExit() {
            runOnUiThread(() -> new AlertDialog.Builder(MainActivity.this)
                    .setTitle("退出游戏？").setMessage("当前王朝进度已保存，下次可以继续。")
                    .setPositiveButton("退出", (d,w) -> finish())
                    .setNegativeButton("继续玩", null).show());
        }
        @JavascriptInterface public void message(String message) {
            runOnUiThread(() -> Toast.makeText(MainActivity.this, message, Toast.LENGTH_LONG).show());
        }
    }
}

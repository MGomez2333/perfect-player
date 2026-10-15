# 篮球平行时空：离线 Android APK

首版基于网页 r39（1b86e4a7fd5152ff022bb64e6ea9f61a246440f4）。应用 ID 为 `com.mgomez2333.basketballparallel`，版本 `20261014-r39-offline.1`。

Android 8.0 及以上，使用系统 Android System WebView；游戏使用现代 JavaScript，建议保持系统 WebView 更新。没有联网、联系人、相册或外部存储权限。全部游戏资源随包提供；外部网页和在线分享服务不可用。

## 存档

沿用原有 IndexedDB 存储服务，独立位于应用数据中。网页存档不自动迁移。新建王朝保留已有档；原生返回键先保存并回主页，再次返回确认退出。模拟中需先停止推进，再返回。切后台会请求保存，但系统强制终止时仍以最后成功的自动存档为准。

以同一签名和应用 ID 覆盖安装更新会保留应用数据。卸载或清除应用数据会删除本地存档；目前没有跨设备同步或导入导出。

## 构建

依赖 JDK 17、Gradle 8.10.2、Android SDK Platform 35 / Build Tools 35.0.0。

1. 在 `android/local.properties` 设置 `sdk.dir`。
2. 从私密签名备份恢复 `release.jks` 和 `signing.properties` 到本目录。不要提交密钥或密码，也不要重新生成密钥来更新已安装版本。
3. 仓库根目录运行 `python android/package_assets.py`，仅复制已发布资源，不从网络下载游戏内容。
4. `gradle -p android assembleRelease`
5. `python android/verify_apk.py android/app/build/outputs/apk/release/app-release.apk`
6. 使用 SDK 的 `apksigner verify --verbose` 和 `zipalign -c -P 16 4` 检查安装包。

也可运行 `python android/build_sdk.py --sdk /path/to/android-sdk`，直接使用 SDK 的 aapt2、javac、D8、zipalign、apksigner 完成同样的构建，无需下载 Gradle 依赖。

生成资源和密钥不纳入 Git。应用只加载可信的内置资源，通过 WebViewClient 的 HTTPS 本地域资源拦截保留 ES 模块、Worker、fetch 和 IndexedDB 的同源行为，不启用 file URL 的通用访问。

首次交付已验证构建、签名、资源完整性、模块引用和现有存档/模拟回归；没有把桌面浏览器测试当成 Android 真机验收。

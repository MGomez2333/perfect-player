"""Build using installed official Android SDK tools; no remote build dependencies."""
import argparse, os, subprocess, zipfile, shutil
from pathlib import Path
parser=argparse.ArgumentParser();parser.add_argument('--sdk',required=True);args=parser.parse_args()
root=Path(__file__).resolve().parent
sdk=Path(args.sdk).resolve(); tools=sdk/'build-tools/35.0.0'; platform=sdk/'platforms/android-35/android.jar'
out=root/'app/build/sdk';out.mkdir(parents=True,exist_ok=True)
def run(*cmd,**kw): subprocess.run([str(x) for x in cmd],check=True,**kw)
run('python3',root/'package_assets.py')
run(tools/'aapt2','compile','--dir',root/'app/src/main/res','-o',out/'res.zip')
gen=out/'gen';gen.mkdir(exist_ok=True)
manifest=out/'AndroidManifest.xml'
manifest.write_text((root/'app/src/main/AndroidManifest.xml').read_text().replace('<manifest ', '<manifest package="com.mgomez2333.basketballparallel" ',1))
run(tools/'aapt2','link','-o',out/'resources.apk','-I',platform,'--manifest',manifest,
    '--java',gen,'--min-sdk-version','26','--target-sdk-version','35','--version-code','39','--version-name','20261014-r39-offline.1',
    '-A',root/'app/src/main/assets',out/'res.zip')
classes=out/'classes';classes.mkdir(exist_ok=True)
run('javac','-encoding','UTF-8','--release','8','-classpath',platform,'-d',classes,
    *sorted((root/'app/src/main/java').rglob('*.java')),*sorted(gen.rglob('*.java')))
run('jar','cf',out/'classes.jar','-C',classes,'.')
dex=out/'dex';dex.mkdir(exist_ok=True)
run(tools/'d8','--release','--min-api','26','--lib',platform,'--output',dex,out/'classes.jar')
unsigned=out/'unsigned.apk';shutil.copy2(out/'resources.apk',unsigned)
with zipfile.ZipFile(unsigned,'a',zipfile.ZIP_DEFLATED) as apk:
    for f in dex.glob('*.dex'):apk.write(f,f.name)
run(tools/'zipalign','-f','-P','16','4',unsigned,out/'aligned.apk')
props=dict(line.split('=',1) for line in (root/'signing.properties').read_text().splitlines() if '=' in line)
env=os.environ.copy();env['APK_STORE_PASSWORD']=props['storePassword'];env['APK_KEY_PASSWORD']=props['keyPassword']
release=root/'app/build/outputs/apk/release/app-release.apk';release.parent.mkdir(parents=True,exist_ok=True)
run(tools/'apksigner','sign','--ks',root/props['storeFile'],'--ks-key-alias',props['keyAlias'],
    '--ks-pass','env:APK_STORE_PASSWORD','--key-pass','env:APK_KEY_PASSWORD','--out',release,out/'aligned.apk',env=env)
run(tools/'apksigner','verify','--verbose',release)
run(tools/'zipalign','-c','-P','16','4',release)
run('python3',root/'verify_apk.py',release)
print('APK:',release)

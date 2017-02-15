# ionic-cometchat

This Git repository is a simple ionic default project (from "tabs" sample) where cometchat has been integrated with a simple button "launch cometchat".
It is intented to work as a standalone demo of ionic+cometchat.

As Cometchat has made weird cordova plugin, we need to build one cordova plugin for ios and another for android.
Both could be installed in the same project.
Main difference is when using Ready UI js :
- for ios ReadyUI
- for Android Readyui (ui in lowercase)


Important Note : (2017.02.09) Currently, Android version is not working on our tested devices. login button doesn't open cometchat window :(
A ticket is opened to the cometchat support

Pre-requisites :

- Buy cometchat mobile SDK from cometchat
https://www.cometchat.com/features/mobile-chat-sdk

- install a local environment with ionic and cordova available (check ionicframework and ionicforum docs).
https://ionicframework.com


To install :


- download this GIT repository

- copy your SDK cometchat folder in another folder than your IONIC (so not inside). Do it for the ios SDK AND the android SDK.
if you downlaod the SDK from the cometchat licences page, you should have unzipped android-sdk-6.3.2.zip and ios-sdk-6.3.2.zip (or whatever version you have)
Then path to the SDK plugin will be {YOUR_PATH}/Cordova/sdk_plugin  (where there is plugin.xml file). This path will be used on next steps

- install cometchat cordova plugin pointing this path (from command line) :
    cordova plugin add {YOUR_IOS_SDK_PLUGIN_PATH}
    cordova plugin add {YOUR_ANDROID_SDK_PLUGIN_PATH}

- add ios platform using command line (here logs from command line will indicate if plugins was well added)
	cordova platform add ios --save
- Emulate this app with XCode	


For Android :
- add ios platform using command line (here logs from command line will indicate if plugins was well added)
	cordova platform add android  --save	

Then on your ionic folder, then platform/android, open file build.gradle and add before the end curly bracket of android{ :
	
	packagingOptions {
		exclude 'META-INF/DEPENDENCIES.txt'
        exclude 'META-INF/LICENSE.txt'
        exclude 'META-INF/NOTICE.txt'
        exclude 'META-INF/NOTICE'
        exclude 'META-INF/LICENSE'
        exclude 'META-INF/DEPENDENCIES'
        exclude 'META-INF/notice.txt'
        exclude 'META-INF/license.txt'
        exclude 'META-INF/dependencies.txt'
        exclude 'META-INF/LGPL2.1'
	}

Then on the same file (build.gradle), add in dependencies{ part, after these line :
dependencies {
    compile fileTree(dir: 'libs', include: '*.jar')
    
You need to add :

    compile 'com.android.support:appcompat-v7:23.0.0'
    compile 'com.android.support:support-v4:23.2.0'
    compile 'com.android.support:design:23.2.0'
    compile 'com.google.code.gson:gson:2.3'
    compile 'com.google.firebase:firebase-messaging:9.0.0'
    compile 'com.mcxiaoke.volley:library:1.0.17'
    compile 'com.squareup.picasso:picasso:2.5.2'
    compile 'com.github.clans:fab:1.6.2'
    compile 'org.jsoup:jsoup:1.8.1'
    compile 'org.apache.httpcomponents:httpcore:4.3.2'
    compile 'org.apache.httpcomponents:httpmime:4.3.3'
    compile 'com.parse.bolts:bolts-tasks:1.4.0'
    compile 'com.commit451:PhotoView:1.2.4'
    compile 'com.android.support:multidex:1.0.0'
    compile 'com.splitwise:tokenautocomplete:1.3.3'
    compile 'com.tubb.smrv:swipemenu-recyclerview:5.2.1'
    compile 'com.github.bumptech.glide:glide:3.5.2'
    compile 'se.emilsjolander:stickylistheaders:2.7.0'    

You need to add :

    defaultConfig {
            ...
            minSdkVersion 21 
            targetSdkVersion 25
            multiDexEnabled true
    }

Add android dependencies :

Create a file ChatApplication.java in folder /platforms/android/src/com/ionicframework/tabs631558/

Put this in your file :

    package com.ionicframework.tabs631558;

    import com.inscripts.activities.CCApplication;

    public class ChatApplication extends CCApplication {
    }

In your AndroidManifest.xml file add these lines : 

	<application 
		android:name=".ChatApplication" 
		... 
	>

And also these lines :

	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
	<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
	<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
	<uses-permission android:name="android.permission.CAMERA" />
	<uses-permission android:name="android.permission.RECORD_AUDIO" />
	<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
	<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
	<uses-permission android:name="android.permission.READ_CONTACTS" />
	<uses-permission android:name="android.permission.READ_PHONE_STATE" />
	<uses-permission android:name="android.permission.READ_PHONE_STATE" />
	<uses-permission android:name="android.permission.SEND_SMS" />
	<uses-permission android:name="android.permission.VIBRATE" />
	<uses-permission android:name="android.permission.INTERNET" />



- then compile for android from command line
     ionic build android
- then locate your apk YOUR_IONIC_APP/platforms/android/build/outputs/apk/android-debug.apk and launch it on your android device.


FAQ :
If you have this kind of error message while trying to add ios platform, it means you have not installed the cordova plugin cometchat BEFORE adding the ios platform...
  Failed to restore plugin "com.cometchat.msgsdk" from config.xml. You might need to try adding it again. Error: Failed to fetch plugin plugins/com.cometchat.msgsdk via registry.
  Probably this is either a connection problem, or plugin spec is incorrect.
  Check your connection and plugin name/version/URL.

Add this elements in info tabs :
- Privacy - Photo Library Usage Description
- Privacy - Camera Usage Description
- Privacy - Microphone Usage Description

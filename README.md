# ionic-cometchat

This Git repository is a simple ionic default project (from "tabs" sample) where cometchat has been integrated with a simple button "launch cometchat".
It is intented to work as a standalone demo of ionic+cometchat.

This repository is only working for ios yet. We will try to update it to work also with android.



Pre-requisites :

- Buy cometchat mobile SDK from cometchat

- install a local environment with ionic and cordova available (check ionicframework and ionicforum docs).


To install :


- download this GIT repository

- copy your SDK cometchat folder into your IONIC app under plugins/ subfolders.

- install cometchat cordova plugin pointing this path (from command line) :
    cordova plugin add {YOUR_IONIC_APP_PATH}/plugins/com.cometchat.msgsdk

- add ios platform using command line
	cordova platform add ios --save
- Emulate this app with XCode	




FAQ :
If you have this kind of error message while trying to add ios platform, it means you have not installed the cordova plugin cometchat BEFORE adding the ios platform...
  Failed to restore plugin "com.cometchat.msgsdk" from config.xml. You might need to try adding it again. Error: Failed to fetch plugin plugins/com.cometchat.msgsdk via registry.
  Probably this is either a connection problem, or plugin spec is incorrect.
  Check your connection and plugin name/version/URL.

Add this elements in info tabs :
- Privacy - Photo Library Usage Description
- Privacy - Camera Usage Description
- Privacy - Microphone Usage Description

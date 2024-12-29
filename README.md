# Documentation

## Installation

### Prerequisites

- Node.js v16.20.2

- npm or Yarn

- Git

- Rbenv

- Ruby v2.7.6

- CocoaPods (for iOS)

---

## General Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/DannyDzib/rn-gamer-mvvm.git
    ```

2. Navigate to the project directory:

    ```bash
    cd rn-gamer-mvvm
    ```

    ### Firebase Configuration (before install dependencies)

    1. Go to the [Firebase Console](https://console.firebase.google.com/).

    #### iOS Setup

    1. Download the `GoogleService-Info.plist` file.
    2. Add the file to the `ios/` folder.

    #### Android Setup

    1. Download the `google-services.json` file.
    2. Add the file to the `android/app/` folder.

3. Install the project dependencies:

    ```bash
    yarn install
    ```

---

### Installation for iOS

1. Install the Pods:

    ```bash
    cd ios && pod install
    cd ..
    ```

2. Modify the `FlipperTransportTypes.h` file to fix issues with Flipper:

    - In **Xcode**:
      Open `Pods/Flipper/FlipperTransportTypes.h` and add the following line:

        ```cpp
        #include <functional>
        ```

    - In **VSCode**:
      Open `ios/Pods/Flipper/xplat/Flipper/FlipperTransportTypes.h` and add the following line:
        ```cpp
        #include <functional>
        ```

3. Run the application on iOS:

    ```bash
    yarn ios
    ```

---

### Installation for Android

1. Make sure you have the `debug.keystore` file:  
   This file is used to sign the application in debug mode. If you don't have it, you can generate it with the following command:

    ```bash
    keytool -genkeypair -v -keystore android/app/debug.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias androiddebugkey -dname "CN=Android Debug O=Android,C=US"
    ```

2. Clean the build files (optional):

    ```bash
    cd android && ./gradlew clean
    cd ..
    ```

3. Run the application on Android:

    ```bash
    yarn android
    ```

---

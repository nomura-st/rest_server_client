# 初回 
https://docs.expo.dev/guides/typescript/#starting-from-scratch-using-a-typescript-template


1. Android Studioインストール
2. SDK Component Installer (Virtual Deviceインストール) → 起動
https://docs.expo.dev/workflow/android-studio-emulator/

3. プロジェクト作成
```
npx create-expo-app -t expo-template-blank-typescript

cd 【プロジェクト名】
npm install react-native-maps
```

4. プロジェクト起動
```
npm run android
```


# 開発時

1. Android Studio 起動
    1. Virtual Device Manager 起動
    2. 対象の Device 起動

2. プロジェクト起動
```
npm run android
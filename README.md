
# react-native-sample

## Getting started

`$ npm install react-native-sample --save`

### Mostly automatic installation

`$ react-native link react-native-sample`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-sample` and add `RNSample.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNSample.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.hemant.reactnative.RNSamplePackage;` to the imports at the top of the file
  - Add `new RNSamplePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-sample'
  	project(':react-native-sample').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-sample/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-sample')
  	```


## Usage
```javascript
import RNSample from 'react-native-sample';

// TODO: What to do with the module?
RNSample;
```
  
import { Platform } from "react-native";

import SampleIos from "./index.ios.js";
import SampleAndroid from "./index.android.js";

const Sample = Platform.OS === "ios" ? SampleIos : SampleAndroid

export default Sample;
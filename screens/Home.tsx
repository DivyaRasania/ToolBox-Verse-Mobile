import { View, Text } from "react-native";
import GlobalStyles from "../constants/GlobalStyles";

export default function Home() {
  return (
    <View style={GlobalStyles.commonStyles.container}>
      <Text style={GlobalStyles.commonStyles.heading}>ToolBox Verse</Text>
      <Text style={GlobalStyles.commonStyles.description}>
        ToolBox Verse is a collection of web-based tools that can be used to
        help you with your daily tasks. The tools are designed to be simple and
        easy to use. The tools are also designed to be mobile-friendly, so you
        can use them on your phone or tablet.
      </Text>
    </View>
  );
}

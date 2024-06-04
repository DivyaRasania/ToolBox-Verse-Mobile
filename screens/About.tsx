import { View, Text } from "react-native";
import GlobalStyles from "../constants/GlobalStyles";

export default function About() {
  return (
    <View style={GlobalStyles.commonStyles.container}>
      <Text style={GlobalStyles.commonStyles.heading}>About</Text>
      <Text style={GlobalStyles.commonStyles.description}>
        ToolBox Verse is a collection of web applications created for learning
        and practicing web development. HTML, CSS, and JavaScript have been used
        to create these applications. I have also used Bootstrap and API in some
        of these the applications.
      </Text>
    </View>
  );
}

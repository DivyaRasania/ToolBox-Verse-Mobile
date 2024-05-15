import { View } from "react-native";
import { useState } from "react";
import * as Clipboard from "expo-clipboard";
import GlobalStyles from "../constants/GlobalStyles";
import CustomButton from "../components/CustomButton";
import ColorChangingText from "../components/ColorChangingText";

export default function HexColorPicker() {
  const [currentColor, setCurrentColor] = useState("#1a1a1a");

  const copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
  };

  return (
    <View
      style={[
        GlobalStyles.commonStyles.container,
        { backgroundColor: currentColor },
      ]}
    >
      <ColorChangingText
        text="Hex Color Picker"
        style={GlobalStyles.hexColorPicker.title}
      />
      <ColorChangingText
        text="Click the button below to display the hex code of a random color."
        style={GlobalStyles.hexColorPicker.text}
      />

      <View>
        <ColorChangingText
          text="The hex code of this color is: "
          style={GlobalStyles.hexColorPicker.text}
        />
        <ColorChangingText
          text={currentColor.toUpperCase()}
          style={GlobalStyles.hexColorPicker.colorCode}
        />
        <CustomButton
          title="Generate Color"
          onPress={() => {
            setCurrentColor(
              `#${Math.floor(Math.random() * 16777215).toString(16)}`
            );
          }}
        />
        <CustomButton
          title="Copy Color"
          onPress={() => {
            copyToClipboard(currentColor);
            alert("Color copied to clipboard!");
          }}
        />
      </View>
    </View>
  );
}

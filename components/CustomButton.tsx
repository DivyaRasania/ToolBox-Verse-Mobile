import { Text, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import GlobalStyles from "../constants/GlobalStyles";

interface ButtonProps {
  onPress: () => void;
  title: string;
  icon?: any;
  style?: StyleProp<ViewStyle>;
  width?: number;
  height?: number;
}

export default function CustomButton({
  onPress,
  title,
  icon,
  style,
  width,
  height,
}: ButtonProps) {
  const buttonStyle = [
    GlobalStyles.customButton.background,
    style,
    { width, height },
  ];

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={GlobalStyles.customButton.text}>{icon ? icon : title}</Text>
    </TouchableOpacity>
  );
}

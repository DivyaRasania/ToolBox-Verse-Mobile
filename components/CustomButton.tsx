import { Text, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import GlobalStyles from "../constants/GlobalStyles";

interface ButtonProps {
  onPress: () => void;
  title: string;
  icon?: any;
  style?: StyleProp<ViewStyle>;
}

export default function CustomButton({
  onPress,
  title,
  icon,
  style,
}: ButtonProps) {
  const buttonStyle = [GlobalStyles.customButton.background, style];

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={GlobalStyles.customButton.text}>{icon ? icon : title}</Text>
    </TouchableOpacity>
  );
}

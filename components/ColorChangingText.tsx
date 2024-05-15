import { Text, TextStyle } from "react-native";
import React, { useState, useEffect } from "react";
import Colors from "../constants/Colors";

interface ColorChangingTextProps {
  text?: string;
  style?: TextStyle;
}

export default function ColorChangingText({
  text,
  style,
}: ColorChangingTextProps) {
  const [color, setColor] = useState(Colors.text);
  const [currentIndex, setCurrentIndex] = useState(0);
  const colorList = [
    "violet",
    "indigo",
    "blue",
    "green",
    "yellow",
    "orange",
    "red",
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const newIndex = (currentIndex + 1) % colorList.length;
      setColor(colorList[newIndex]);
      setCurrentIndex(newIndex);
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  return <Text style={[{ color }, style]}>{text}</Text>;
}

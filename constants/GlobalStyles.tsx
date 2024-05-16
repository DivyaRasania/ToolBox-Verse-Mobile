import { StyleSheet } from "react-native";
import Colors from "./Colors";

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    color: Colors.text,
    fontSize: 48,
    fontWeight: "bold",
  },

  description: {
    color: Colors.text,
    fontSize: 18,
    padding: 20,
    textAlign: "center",
  },

  textField: {
    backgroundColor: Colors.textField,
    color: Colors.background,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    width: "100%",
    borderRadius: 10,
  },
});

const customButton = StyleSheet.create({
  text: {
    color: Colors.text,
    fontSize: 18,
    padding: 16,
    textAlign: "center",
  },

  background: {
    backgroundColor: Colors.btnBg,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.btnBorder,
  },
});

const counter = StyleSheet.create({
  container: {
    fontSize: 24,
    flexDirection: "row",
  },
});

const hexColorPicker = StyleSheet.create({
  title: {
    fontSize: 48,
    fontWeight: "bold",
  },

  text: {
    fontSize: 18,
    padding: 20,
    textAlign: "center",
  },

  colorCode: {
    marginTop: -36,
    fontSize: 28,
    padding: 20,
    textAlign: "center",
  },
});

const todo = StyleSheet.create({
  container: {
    fontSize: 24,
    flexDirection: "row",
  },

  text: {
    color: Colors.text,
    fontSize: 22,
    padding: 16,
    textAlign: "left",
  },
});

const calculator = StyleSheet.create({
  display: {
    height: 100,
    width: "90%",
    overflow: "hidden",
    fontSize: 40,
    color: Colors.text,
    borderRadius: 16,
    padding: 16,
    backgroundColor: Colors.calcDisplayBg,
    textAlign: "right",
  },
});

export default {
  commonStyles,
  customButton,
  counter,
  hexColorPicker,
  todo,
  calculator,
};

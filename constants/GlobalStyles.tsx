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

  input: {
    backgroundColor: Colors.text,
    color: Colors.background,
    fontSize: 18,
    padding: 16,
    width: "80%",
    borderRadius: 10,
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

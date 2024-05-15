import { TextInput, View } from "react-native";
import GlobalStyles from "../constants/GlobalStyles";
import { useState } from "react";
import CustomButton from "../components/CustomButton";

export default function Calculator() {
  const [displayText, setDisplayText] = useState("");
  const [clearPending, setClearPending] = useState(false);

  function updateDisplay(text: string) {
    if (clearPending) {
      setDisplayText(text);
      setClearPending(false);
    } else {
      setDisplayText(displayText + text);
    }
  }

  return (
    <View style={GlobalStyles.commonStyles.container}>
      <TextInput style={GlobalStyles.calculator.display} keyboardType="numeric">
        {displayText}
      </TextInput>

      <View style={{ flexDirection: "row", marginTop: 18 }}>
        <CustomButton
          width={78}
          title="C"
          onPress={() => {
            setDisplayText("");
          }}
        />
        <CustomButton
          width={78}
          title="/"
          onPress={() => {
            setDisplayText(displayText + "/");
            setClearPending(false);
          }}
        />
        <CustomButton
          width={78}
          title="*"
          onPress={() => {
            setDisplayText(displayText + "*");
            setClearPending(false);
          }}
        />
        <CustomButton
          width={78}
          title="+"
          onPress={() => {
            setDisplayText(displayText + "+");
            setClearPending(false);
          }}
        />
        <CustomButton
          width={78}
          title="-"
          onPress={() => {
            setDisplayText(displayText + "-");
            setClearPending(false);
          }}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <CustomButton
          width={100}
          title="6"
          onPress={() => {
            updateDisplay("6");
          }}
        />
        <CustomButton
          width={100}
          title="7"
          onPress={() => {
            updateDisplay("7");
          }}
        />
        <CustomButton
          width={100}
          title="8"
          onPress={() => {
            updateDisplay("8");
          }}
        />
        <CustomButton
          width={100}
          title="9"
          onPress={() => {
            updateDisplay("9");
          }}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <CustomButton
          width={100}
          title="2"
          onPress={() => {
            updateDisplay("2");
          }}
        />
        <CustomButton
          width={100}
          title="3"
          onPress={() => {
            updateDisplay("3");
          }}
        />
        <CustomButton
          width={100}
          title="4"
          onPress={() => {
            updateDisplay("4");
          }}
        />
        <CustomButton
          width={100}
          title="5"
          onPress={() => {
            updateDisplay("5");
          }}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <CustomButton
          width={100}
          title="0"
          onPress={() => {
            updateDisplay("0");
          }}
        />
        <CustomButton
          width={100}
          title="1"
          onPress={() => {
            updateDisplay("1");
          }}
        />
        <CustomButton
          width={100}
          title="."
          onPress={() => {
            setDisplayText(displayText + ".");
          }}
        />
        <CustomButton
          width={100}
          title="="
          onPress={() => {
            try {
              setDisplayText(eval(displayText));
              setClearPending(true);
            } catch {
              alert("Please enter valid expression");
            }
          }}
        />
      </View>
    </View>
  );
}

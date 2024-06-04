import { TextInput, View } from "react-native";
import { useState } from "react";
import GlobalStyles from "../constants/GlobalStyles";
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
      <TextInput
        style={[GlobalStyles.calculator.display, { marginBottom: 18 }]}
        keyboardType="numeric"
      >
        {displayText}
      </TextInput>

      <View style={{ flexDirection: "row" }}>
        <CustomButton
          style={{ width: 101 }}
          title="C"
          onPress={() => {
            setDisplayText("");
          }}
        />
        <CustomButton
          style={{ width: 101 }}
          title="/"
          onPress={() => {
            setDisplayText(displayText + "/");
            setClearPending(false);
          }}
        />
        <CustomButton
          style={{ width: 101 }}
          title="*"
          onPress={() => {
            setDisplayText(displayText + "*");
            setClearPending(false);
          }}
        />
        <CustomButton
          style={{ width: 101 }}
          title="-"
          onPress={() => {
            setDisplayText(displayText + "-");
            setClearPending(false);
          }}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <CustomButton
              style={{ width: 101 }}
              title="7"
              onPress={() => {
                updateDisplay("7");
              }}
            />
            <CustomButton
              style={{ width: 101 }}
              title="8"
              onPress={() => {
                updateDisplay("8");
              }}
            />
            <CustomButton
              style={{ width: 101 }}
              title="9"
              onPress={() => {
                updateDisplay("9");
              }}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <CustomButton
              style={{ width: 101 }}
              title="4"
              onPress={() => {
                updateDisplay("4");
              }}
            />
            <CustomButton
              style={{ width: 101 }}
              title="5"
              onPress={() => {
                updateDisplay("5");
              }}
            />
            <CustomButton
              style={{ width: 101 }}
              title="6"
              onPress={() => {
                updateDisplay("6");
              }}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <CustomButton
              style={{ width: 101 }}
              title="1"
              onPress={() => {
                updateDisplay("1");
              }}
            />
            <CustomButton
              style={{ width: 101 }}
              title="2"
              onPress={() => {
                updateDisplay("2");
              }}
            />
            <CustomButton
              style={{ width: 101 }}
              title="3"
              onPress={() => {
                updateDisplay("3");
              }}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <CustomButton
              style={{ width: 212 }}
              title="0"
              onPress={() => {
                updateDisplay("0");
              }}
            />
            <CustomButton
              style={{ width: 101 }}
              title="."
              onPress={() => {
                setDisplayText(displayText + ".");
              }}
            />
          </View>
        </View>

        <View>
          <CustomButton
            style={{ width: 101, paddingVertical: 36 }}
            title="+"
            onPress={() => {
              setDisplayText(displayText + "+");
              setClearPending(false);
            }}
          />
          <CustomButton
            style={{ width: 101, paddingVertical: 36 }}
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
    </View>
  );
}

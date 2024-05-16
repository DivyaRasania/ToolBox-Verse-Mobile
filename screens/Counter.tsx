import { useState } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import GlobalStyles from "../constants/GlobalStyles";
import CustomButton from "../components/CustomButton";
import Colors from "../constants/Colors";

export default function Counter() {
  const [count, setcount] = useState(0);

  function add() {
    setcount(count + 1);
  }

  function subtract() {
    setcount(count - 1);
  }

  function reset() {
    setcount(0);
  }

  return (
    <View style={GlobalStyles.commonStyles.container}>
      <Text style={GlobalStyles.commonStyles.heading}>Counter</Text>
      <Text style={GlobalStyles.commonStyles.description}>
        This is a simple counter in which you can count up or down and you can
        reset the counter.
      </Text>

      <View>
        <Text
          style={{
            fontSize: 70,
            textAlign: "center",
            color: Colors.text,
            fontWeight: "bold",
          }}
        >
          {count}
        </Text>
        <View style={GlobalStyles.counter.container}>
          <CustomButton
            icon={<Icon name="north" color="white" />}
            title="+"
            onPress={add}
            style={{ width: 100 }}
          />
          <CustomButton
            icon={<Icon name="refresh" color="white" />}
            title="Reset"
            onPress={reset}
            style={{ width: 100 }}
          />
          <CustomButton
            icon={<Icon name="south" color="white" />}
            title="-"
            onPress={subtract}
            style={{ width: 100 }}
          />
        </View>
      </View>
    </View>
  );
}

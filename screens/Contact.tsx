import { TextInput, Linking, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import GlobalStyles from "../constants/GlobalStyles";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import Colors from "../constants/Colors";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("https://formspree.io/f/xvoeqonr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        message,
      }),
    });

    const data = await response.json();
  };

  return (
    <View style={GlobalStyles.commonStyles.container}>
      <Text style={GlobalStyles.commonStyles.heading}>Contact</Text>

      <View>
        <View style={{ flexDirection: "row" }}>
          <CustomButton
            style={{ marginRight: 10 }}
            icon={
              <Icon
                type="material-community"
                name="github"
                color="#fff"
                size={32}
              />
            }
            title="GitHub"
            onPress={() => {
              Linking.openURL("https://github.com/DivyaRasania");
            }}
          />
          <CustomButton
            style={{ marginRight: 10 }}
            icon={
              <Icon
                type="material-community"
                name="linkedin"
                color="#fff"
                size={32}
              />
            }
            title="LinkedIn"
            onPress={() => {
              Linking.openURL("https://www.linkedin.com/in/divya-rasania/");
            }}
          />
          <CustomButton
            style={{ marginRight: 10 }}
            icon={<Icon name="mail" color="#fff" size={32} />}
            title="Email"
            onPress={() => {
              Linking.openURL("mailto:rasaniadivya1.toolboxverse@gmail.com");
            }}
          />
          <CustomButton
            style={{ marginRight: 10 }}
            icon={<Icon name="phone" color="#fff" size={32} />}
            title="Phone"
            onPress={() => {
              Linking.openURL("tel:+13176430856");
            }}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <TextInput
            style={[GlobalStyles.commonStyles.textField, { marginBottom: 14 }]}
            placeholder="First Name"
            onChangeText={setFirstName}
            cursorColor={Colors.background}
          />
          <TextInput
            style={[GlobalStyles.commonStyles.textField, { marginBottom: 14 }]}
            placeholder="Last Name"
            onChangeText={setLastName}
            cursorColor={Colors.background}
          />
          <TextInput
            style={[GlobalStyles.commonStyles.textField, { marginBottom: 14 }]}
            placeholder="Email address"
            onChangeText={setEmail}
            cursorColor={Colors.background}
          />
          <TextInput
            style={[
              GlobalStyles.commonStyles.textField,
              { marginBottom: 14, height: 100 },
            ]}
            placeholder="Enter your message here..."
            onChangeText={setMessage}
            cursorColor={Colors.background}
          />

          <CustomButton
            title="Submit"
            onPress={() => {
              handleSubmit();
              alert("Message sent successfully!");
              setFirstName("");
              setLastName("");
              setEmail("");
              setMessage("");
            }}
          />
        </View>
      </View>
    </View>
  );
}

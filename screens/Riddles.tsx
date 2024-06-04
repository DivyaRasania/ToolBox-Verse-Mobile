import { ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import GlobalStyles from "../constants/GlobalStyles";
import CustomButton from "../components/CustomButton";

export default function Riddles() {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [riddle, setRiddle] = useState<{
    title: string;
    question: string;
    answer: string;
  } | null>(null);

  const fetchRiddle = async () => {
    const response = await fetch("https://api.api-ninjas.com/v1/riddles", {
      method: "GET",
      headers: { "X-Api-Key": "lGsAyLWYhrP/sOLMrrdxIA==BzCJrJut9g98gwzm" },
    });
    const data = await response.json();
    setRiddle(data[0]);

    setIsAnswerVisible(false);
  };

  useEffect(() => {
    fetchRiddle();
  }, []);

  return (
    <View style={GlobalStyles.commonStyles.container}>
      <Text style={[GlobalStyles.commonStyles.heading, { marginTop: 15 }]}>
        Riddles
      </Text>
      {riddle ? (
        <ScrollView>
          <Text style={GlobalStyles.riddles.content}>
            Title: {riddle.title}
          </Text>
          <Text style={GlobalStyles.riddles.content}>{riddle.question}</Text>

          <Text
            id="riddleAnswer"
            style={[
              GlobalStyles.riddles.content,
              { display: isAnswerVisible ? "flex" : "none" },
            ]}
          >
            Answer: {riddle.answer}
          </Text>
          <CustomButton
            title="Show Answer"
            onPress={() => setIsAnswerVisible(!isAnswerVisible)}
          />
          <CustomButton
            title="New Riddle"
            onPress={() => {
              fetchRiddle();
            }}
          />
        </ScrollView>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

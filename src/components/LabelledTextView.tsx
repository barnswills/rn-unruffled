import React from "react";

import { View, TextInput, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "white",
    flex: 6
  },
  labelledInputView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5
  },
  labelView: {
    flex: 4
  }
});

interface ILabelledTextViewProps {
  label: string;
}

const LabelledTextView: React.FC<ILabelledTextViewProps> = (
  props: ILabelledTextViewProps
) => {
  const [userInput, setUserInput] = React.useState<string>("");

  return (
    <View style={styles.labelledInputView}>
      <View style={styles.labelView}>
        <Text>{props.label}</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setUserInput}
        value={userInput}
      />
    </View>
  );
};

export default LabelledTextView;

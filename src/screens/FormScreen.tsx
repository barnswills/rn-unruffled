import React from "react";
import LabelledTextView from "../components/LabelledTextView";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";

const styles = StyleSheet.create({
  submitButtonContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "center"
  },
  submitButtonView: {
    backgroundColor: "#F44336",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});

const FormScreen: React.FC = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text>Form Screen for {Platform.OS}</Text>
      <LabelledTextView label="First" />
      <LabelledTextView label="Second" />
      <View style={styles.submitButtonContainer}>
        <TouchableOpacity
          style={{
            width: "25%"
          }}
        >
          <View style={styles.submitButtonView}>
            <Text style={{ color: "white" }}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormScreen;

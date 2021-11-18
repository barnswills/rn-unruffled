import React from "react";

import { View, Text, Pressable } from "react-native";
import RoutingButton from "../components/RoutingButton";

import { loadQuote } from "../api/endpoints";
import Quote from "../models/Quote";

const AboutScreen: React.FC = () => {
  const [stoicQuote, setStoicQuote] = React.useState<Quote | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const loadNewQuote = async () => {
    setIsLoading(true);
    const quote = await loadQuote();
    setStoicQuote(quote);
    setIsLoading(false);
  };

  React.useEffect(() => {
    loadNewQuote();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <RoutingButton route="Form" content="Go To Form" />
      <Pressable
        onPress={() => loadNewQuote()}
        style={{
          backgroundColor: "white",
          width: "35%",
          padding: 20,
          margin: 10,
          minHeight: 200,
          borderWidth: 1,
          borderColor: "transparent",
          borderRadius: 10,
          shadowColor: "grey",
          shadowOffset: { width: 1, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2
        }}
      >
        <View style={{ justifyContent: "space-between", height: "100%" }}>
          {!isLoading ? (
            <>
              <Text>{stoicQuote?.body}</Text>
              <Text>- {stoicQuote?.author}</Text>
            </>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default AboutScreen;

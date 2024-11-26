import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Content = ({ children }: any) => {
  return (
    <SafeAreaView className="flex-1 px-5 py-3">
      <Text>Content</Text>
    </SafeAreaView>
  );
};

export default Content;

const styles = StyleSheet.create({});

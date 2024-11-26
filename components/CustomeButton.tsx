import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface CustomeButtonProps {
  onPress: () => void;
}

const CustomeButton = () => {
  return (
    <TouchableOpacity>
      <Text>CustomeButton</Text>
    </TouchableOpacity>
  );
};

export default CustomeButton;

const styles = StyleSheet.create({});

import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import beachImage from "@/assets/meditation-images/beach.webp";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1"
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
        >
          <SafeAreaView className="flex-1 px-1 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl mt-4">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-2xl mt-3">
                Simplifying Meditation for Everyone
              </Text>
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

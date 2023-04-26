import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/Restaurant/colors.js";
import SPACING from "../config/SPACING";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/pexels-william-choquette-2641886.jpeg")}
    >
      <View style={{ flex: 1, backgroundColor: colors.black, opacity: 0.2 }} />
      <View
        style={{
          position: "absolute",
          height: "100%",
          zIndex: 2,
          width: "100%",
          justifyContent: "flex-end",
          paddingHorizontal: SPACING * 2,
          paddingBottom: SPACING * 5,
        }}
      >
        <Text
          style={{
            color: colors.white,
            fontWeight: "800",
            fontSize: SPACING * 4.5,
            textTransform: "capitalize",
          }}
        >
          Let your favorite food find you
        </Text>
        <Text
            style={{
              color: colors.white,
              fontWeight: "600",
              fontSize: SPACING * 1.7,
            }}
          >
            Dolore reprehenderit id ea eu voluptate deserunt occaecat occaecat.
          </Text>
          <TouchableOpacity
          style={{
            padding: SPACING * 2,
            backgroundColor: colors.white,
            borderRadius: SPACING * 2,
            alignItems: "center",
            marginTop: SPACING * 3,
          }}
          >
            <Text
              style={{
                color: colors.black,
                fontSize: SPACING * 2,
                fontWeight: "700",
              }}
            >
              Explorer Now
            </Text>

          </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({});

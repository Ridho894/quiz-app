import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { elevate } from "react-native-elevate";

const styles = StyleSheet.create({
  container: {
    height: 43,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 14,
    paddingHorizontal: 13,
    borderRadius: 2,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    textTransform: "capitalize",
  },
});

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <RectButton
      style={[styles.container, elevate(5), { backgroundColor: "#ccc" }]}
    >
      <Text style={{ ...styles.label, color: "#000" }}>{label}</Text>
    </RectButton>
  );
};

export default Button;

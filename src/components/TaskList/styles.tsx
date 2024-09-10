import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    borderRadius: 8,
    borderColor: "#333333",
    borderWidth: 1,
    backgroundColor: "#262626",
    marginTop: 48,
    flexDirection: "row",
    padding: 12,
    gap: 8,
    justifyContent: "space-around",
    alignItems: "center"
  },
  taskText: {
    color: "#FFF"
  },
  taskTextStrike: {
    color: "#A9A9A9",
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  }

})
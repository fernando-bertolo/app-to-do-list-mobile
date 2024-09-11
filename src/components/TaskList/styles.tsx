import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    borderRadius: 8,
    borderColor: "#333333",
    borderWidth: 1,
    backgroundColor: "#262626",
    flexDirection: "row",
    padding: 16,
    gap: 8,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  },
  taskText: {
    color: "#FFF",
    textAlign: "left"
  },
  taskTextStrike: {
    color: "#A9A9A9",
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textAlign: "left"
  }

})
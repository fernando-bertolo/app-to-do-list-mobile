import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  firstBackground: {
    backgroundColor: "#0D0D0D",
    width: "100%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center"
  },
  secondBackground: {
    backgroundColor: "#1A1A1A",
    width: "100%",
    height: "85%"
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    gap: 4,
    position: "absolute",
    transform: [{translateY: -40}, {translateX: 25}],
  },
  sectionTasks: {
    marginTop: 32
  },
  sectionCreatedAndDone: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionCreated: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  sectionDone: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#4EA8DE",
    fontWeight: "bold",
    fontSize: 14
  },
  textCountTasks: {
    color: "#FFF",
    backgroundColor: "#333333",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    textAlign: "center",
    fontSize: 12
  },
  sectionListTasks: {
    width: "100%",
    backgroundColor: "blue"
  },
})

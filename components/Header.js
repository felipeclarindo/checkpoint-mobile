import { StyleSheet, Text, View } from "react-native";

export default function Header(props) {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    height: 100,
    backgroundColor: "#4CAF50",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

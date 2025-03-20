import { StyleSheet, Text, View } from "react-native";

export default function ItemCard(props) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.content}>{props.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#4CAF50",
    width: "100%",
    alignItems: "center",
    borderRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    fontSize: 14,
    fontWeight: "normal",
  },
});

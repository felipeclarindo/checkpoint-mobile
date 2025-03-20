import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function IncrementCountFunctionality() {
  const [count, setCount] = useState(0);

  function handleDecrementCounter() {
    if (count === 0) return;
    setCount(count - 1);
  }

  return (
    <View style={styles.content}>
      <Text style={styles.count}>Contador: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Incrementar" onPress={() => setCount(count + 1)} />
        <Button title="Decrementar" onPress={handleDecrementCounter} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 500,
  },
  count: {
    marginBottom: 20,
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    gap: 4,
    marginTop: 10,
  },
});

import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";

//COMPONENTE PAI
export default function App() {
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      { id: 1, title: "Título 1", content: "Conteúdo 1" },
      { id: 2, title: "Título 2", content: "Conteúdo 2" },
      { id: 3, title: "Título 3", content: "Conteúdo 3" },
      { id: 4, title: "Título 4", content: "Conteúdo 4" },
      { id: 5, title: "Título 5", content: "Conteúdo 5" },
    ]);
  }, []);


  function handleDecrementCounter() {
    if (count === 0) return; //para por aqui quando Count for igual a 0
    setCount(count - 1); //caso contrario decrementa
  }

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView >
        <Text>Contador: {count}</Text>
        <Button title="Incrementar" onPress={() => setCount(count + 1)} />
        <Button title="Decrementar" onPress={handleDecrementCounter} />

        <FlatList
          data={data}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ItemCard title={item.title} content={item.content} />
          )}
        />

        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>A brir Modal</Text>
        </TouchableOpacity>

        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text>Isso é um modal</Text>
            <Button
              title="Fechar Modal"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </Modal>

      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: { marginTop: 20, padding: 10, backgroundColor: "blue" },
  buttonText: { color: "white", fontSize: 16 },
  modalContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});

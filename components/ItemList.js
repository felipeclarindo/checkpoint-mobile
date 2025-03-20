import { FlatList } from "react-native";
import ItemCard from "./ItemCard";

export default function ItemList() {
  const data = [
    { id: "1", title: "Título 1", content: "Conteúdo do primeiro item" },
    { id: "2", title: "Título 2", content: "Conteúdo do segundo item" },
    { id: "3", title: "Título 3", content: "Conteúdo do terceiro item" },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ItemCard title={item.title} content={item.content} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const searchResults = [
  {
    id: "1",
    name: "Egg Chicken Red",
    price: "$1.99",
    unit: "4pcs, Price",
    img: "https://cdn-icons-png.flaticon.com/512/837/837560.png",
  },
  {
    id: "2",
    name: "Egg Chicken White",
    price: "$1.50",
    unit: "180g, Price",
    img: "https://cdn-icons-png.flaticon.com/512/6121/6121634.png",
  },
  {
    id: "3",
    name: "Egg Pasta",
    price: "$15.99",
    unit: "30gm, Price",
    img: "https://cdn-icons-png.flaticon.com/512/1121/1121087.png",
  },
  {
    id: "4",
    name: "Egg Noodles",
    price: "$15.99",
    unit: "2L, Price",
    img: "https://cdn-icons-png.flaticon.com/512/10701/10701046.png",
  },
];

export default function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#181725" />
          <TextInput
            style={styles.input}
            placeholder="Egg"
            defaultValue="Egg"
          />
          <Ionicons name="close-circle" size={20} color="#7c7c7c" />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Filters")}>
          <Ionicons name="options-outline" size={28} color="#181725" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={searchResults}
        numColumns={2}
        keyExtractor={(i) => i.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("ProductDetail")}
          >
            <Image source={{ uri: item.img }} style={styles.img} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.unit}>{item.unit}</Text>
            <View style={styles.row}>
              <Text style={styles.price}>{item.price}</Text>
              <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.addTxt}>+</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16, paddingTop: 40 },
  headerRow: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f3f2",
    padding: 12,
    borderRadius: 15,
    marginRight: 15,
  },
  input: { marginLeft: 10, flex: 1, fontSize: 16, fontWeight: "bold" },
  card: {
    flex: 1,
    margin: 8,
    borderWidth: 1,
    borderColor: "#e2e2e2",
    padding: 15,
    borderRadius: 20,
  },
  img: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 15,
    resizeMode: "contain",
  },
  name: { fontWeight: "bold", fontSize: 16, color: "#181725" },
  unit: { color: "#7c7c7c", fontSize: 14, marginVertical: 8 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: { fontWeight: "bold", fontSize: 18, color: "#181725" },
  addBtn: {
    backgroundColor: "#53b175",
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  addTxt: { color: "#fff", fontWeight: "bold", fontSize: 24 },
});

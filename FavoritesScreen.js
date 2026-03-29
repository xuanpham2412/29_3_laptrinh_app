import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const favoriteItems = [
  {
    id: "1",
    name: "Sprite Can",
    price: "$1.50",
    unit: "325ml, Price",
    img: "https://cdn-icons-png.flaticon.com/512/2935/2935308.png",
  },
  {
    id: "2",
    name: "Diet Coke",
    price: "$1.99",
    unit: "355ml, Price",
    img: "https://cdn-icons-png.flaticon.com/512/2935/2935313.png",
  },
  {
    id: "3",
    name: "Apple & Grape Juice",
    price: "$15.50",
    unit: "2L, Price",
    img: "https://cdn-icons-png.flaticon.com/512/3183/3183955.png",
  },
  {
    id: "4",
    name: "Coca Cola Can",
    price: "$4.99",
    unit: "325ml, Price",
    img: "https://cdn-icons-png.flaticon.com/512/2935/2935313.png",
  },
  {
    id: "5",
    name: "Pepsi Can",
    price: "$4.99",
    unit: "330ml, Price",
    img: "https://cdn-icons-png.flaticon.com/512/2935/2935310.png",
  },
];

export default function FavoritesScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.img }} style={styles.img} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.unit}>{item.unit}</Text>
      </View>
      <View style={styles.priceBox}>
        <Text style={styles.price}>{item.price}</Text>
        <Ionicons name="chevron-forward" size={24} color="#181725" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorurite</Text>
      <FlatList
        data={favoriteItems}
        renderItem={renderItem}
        keyExtractor={(i) => i.id}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 40 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
  },
  item: {
    flexDirection: "row",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
    alignItems: "center",
  },
  img: { width: 60, height: 60, marginRight: 20, resizeMode: "contain" },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "bold", color: "#181725", marginBottom: 5 },
  unit: { color: "#7c7c7c", fontSize: 14 },
  priceBox: { flexDirection: "row", alignItems: "center" },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#181725",
    marginRight: 10,
  },
  bottomBar: { padding: 20 },
  btn: {
    backgroundColor: "#53b175",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  btnTxt: { color: "#fff", fontWeight: "bold", fontSize: 18 },
});

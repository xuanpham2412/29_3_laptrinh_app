import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const beverages = [
  {
    id: "1",
    name: "Diet Coke",
    price: "$1.99",
    unit: "355ml, Price",
    img: "https://cdn-icons-png.flaticon.com/512/2935/2935313.png",
  },
  {
    id: "2",
    name: "Sprite Can",
    price: "$1.50",
    unit: "325ml, Price",
    img: "https://cdn-icons-png.flaticon.com/512/2935/2935308.png",
  },
  {
    id: "3",
    name: "Apple & Grape Juice",
    price: "$15.99",
    unit: "2L, Price",
    img: "https://cdn-icons-png.flaticon.com/512/3183/3183955.png",
  },
  {
    id: "4",
    name: "Orange Juice",
    price: "$15.99",
    unit: "2L, Price",
    img: "https://cdn-icons-png.flaticon.com/512/3014/3014515.png",
  },
  {
    id: "5",
    name: "Coca Cola Can",
    price: "$4.99",
    unit: "325ml, Price",
    img: "https://cdn-icons-png.flaticon.com/512/2935/2935313.png",
  },
  {
    id: "6",
    name: "Pepsi Can",
    price: "$4.99",
    unit: "330ml, Price",
    img: "https://cdn-icons-png.flaticon.com/512/2935/2935310.png",
  },
];

export default function BeveragesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.title}>Beverages</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Filters")}>
          <Ionicons name="options-outline" size={28} color="#181725" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={beverages}
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: { fontSize: 22, fontWeight: "bold", color: "#181725" },
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

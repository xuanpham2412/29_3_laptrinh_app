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

const cartItems = [
  {
    id: "1",
    name: "Bell Pepper Red",
    price: 4.99,
    qty: 1,
    unit: "1kg, Price",
    img: "https://cdn-icons-png.flaticon.com/512/10830/10830708.png",
  },
  {
    id: "2",
    name: "Egg Chicken Red",
    price: 1.99,
    qty: 1,
    unit: "4pcs, Price",
    img: "https://cdn-icons-png.flaticon.com/512/837/837560.png",
  },
  {
    id: "3",
    name: "Organic Bananas",
    price: 3.0,
    qty: 1,
    unit: "12kg, Price",
    img: "https://cdn-icons-png.flaticon.com/512/2909/2909808.png",
  },
  {
    id: "4",
    name: "Ginger",
    price: 2.99,
    qty: 1,
    unit: "250gm, Price",
    img: "https://cdn-icons-png.flaticon.com/512/8626/8626779.png",
  },
];

export default function CartScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.img }} style={styles.img} />
      <View style={styles.info}>
        <View style={styles.row}>
          <Text style={styles.name}>{item.name}</Text>
          <Ionicons name="close" size={24} color="#b3b3b3" />
        </View>
        <Text style={styles.unit}>{item.unit}</Text>
        <View style={[styles.row, { marginTop: 10 }]}>
          <View style={styles.qtyBox}>
            <Ionicons name="remove" size={24} color="#b3b3b3" />
            <Text style={styles.qtyTxt}>{item.qty}</Text>
            <Ionicons name="add" size={24} color="#53b175" />
          </View>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(i) => i.id}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Go to Checkout</Text>
          <View style={styles.totalBox}>
            <Text style={styles.totalTxt}>$12.96</Text>
          </View>
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
  img: { width: 70, height: 70, marginRight: 20, resizeMode: "contain" },
  info: { flex: 1 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: { fontSize: 16, fontWeight: "bold", color: "#181725" },
  unit: { color: "#7c7c7c", fontSize: 14, marginTop: 5 },
  qtyBox: { flexDirection: "row", alignItems: "center" },
  qtyTxt: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#e2e2e2",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 15,
  },
  price: { fontSize: 18, fontWeight: "bold", color: "#181725" },
  bottomBar: { padding: 20 },
  btn: {
    backgroundColor: "#53b175",
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnTxt: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    flex: 1,
    textAlign: "center",
  },
  totalBox: {
    backgroundColor: "#489e67",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  totalTxt: { color: "#fff", fontWeight: "bold", fontSize: 14 },
});

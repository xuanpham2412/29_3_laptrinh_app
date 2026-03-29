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

const categories = [
  {
    id: "1",
    name: "Fresh Fruits\n& Vegetable",
    bg: "#e5f3ea",
    border: "#53b175",
    img: "https://cdn-icons-png.flaticon.com/512/3194/3194591.png",
  },
  {
    id: "2",
    name: "Cooking Oil\n& Ghee",
    bg: "#fef6ed",
    border: "#f8a44c",
    img: "https://cdn-icons-png.flaticon.com/512/7660/7660502.png",
  },
  {
    id: "3",
    name: "Meat & Fish",
    bg: "#fde8e4",
    border: "#f7a593",
    img: "https://cdn-icons-png.flaticon.com/512/3143/3143645.png",
  },
  {
    id: "4",
    name: "Bakery & Snacks",
    bg: "#f4ebf7",
    border: "#d3b0e0",
    img: "https://cdn-icons-png.flaticon.com/512/3014/3014502.png",
  },
  {
    id: "5",
    name: "Dairy & Eggs",
    bg: "#fffceb",
    border: "#f8e076",
    img: "https://cdn-icons-png.flaticon.com/512/3050/3050114.png",
  },
  {
    id: "6",
    name: "Beverages",
    bg: "#e5f8fe",
    border: "#53b175",
    img: "https://cdn-icons-png.flaticon.com/512/2405/2405448.png",
  },
];

export default function ExploreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Products</Text>
      <View style={styles.search}>
        <Ionicons name="search" size={20} color="#181725" />
        <Text style={styles.searchTxt}>Search Store</Text>
      </View>

      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(i) => i.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              { backgroundColor: item.bg, borderColor: item.border },
            ]}
            onPress={() => navigation.navigate("Beverages")}
          >
            <Image source={{ uri: item.img }} style={styles.img} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16, paddingTop: 40 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#181725",
  },
  search: {
    flexDirection: "row",
    backgroundColor: "#f2f3f2",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: "center",
  },
  searchTxt: { color: "#7c7c7c", marginLeft: 10, fontSize: 16 },
  card: {
    flex: 1,
    margin: 8,
    height: 190,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  img: { width: 80, height: 80, marginBottom: 20, resizeMode: "contain" },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 22,
    color: "#181725",
  },
});

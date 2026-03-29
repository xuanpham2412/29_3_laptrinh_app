import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const exclusiveOffers = [
  {
    id: "1",
    name: "Organic Bananas",
    price: "$4.99",
    unit: "7pcs, Priceg",
    img: "https://cdn-icons-png.flaticon.com/512/2909/2909808.png",
  },
  {
    id: "2",
    name: "Red Apple",
    price: "$4.99",
    unit: "1kg, Priceg",
    img: "https://cdn-icons-png.flaticon.com/512/415/415733.png",
  },
];

const bestSelling = [
  {
    id: "3",
    name: "Bell Pepper Red",
    price: "$4.99",
    unit: "1kg, Priceg",
    img: "https://cdn-icons-png.flaticon.com/512/10830/10830708.png",
  },
  {
    id: "4",
    name: "Ginger",
    price: "$4.99",
    unit: "250gm, Priceg",
    img: "https://cdn-icons-png.flaticon.com/512/8626/8626779.png",
  },
];

const groceries = [
  {
    id: "5",
    name: "Beef Bone",
    price: "$4.99",
    unit: "1kg, Priceg",
    img: "https://cdn-icons-png.flaticon.com/512/3143/3143645.png",
  },
  {
    id: "6",
    name: "Broiler Chicken",
    price: "$4.99",
    unit: "1kg, Priceg",
    img: "https://cdn-icons-png.flaticon.com/512/10435/10435940.png",
  },
];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
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
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Ionicons name="location-sharp" size={24} color="#53b175" />
        <Text style={styles.loc}>Dhaka, Banassre</Text>
      </View>

      <TouchableOpacity
        style={styles.search}
        onPress={() => navigation.navigate("Search")}
      >
        <Ionicons name="search" size={20} color="#181725" />
        <Text style={styles.searchTxt}>Search Store</Text>
      </TouchableOpacity>

      <View style={styles.banner}>
        <Text style={styles.bannerTxt}>Fresh Vegetables</Text>
        <Text style={styles.bannerSub}>Get Up To 40% OFF</Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.title}>Exclusive Offer</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={exclusiveOffers}
        renderItem={renderItem}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.title}>Best Selling</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={bestSelling}
        renderItem={renderItem}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.title}>Groceries</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={groceries}
        renderItem={renderItem}
        style={{ marginBottom: 20 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16, paddingTop: 40 },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  loc: { fontSize: 18, fontWeight: "bold", marginLeft: 5, color: "#4c4f4d" },
  search: {
    flexDirection: "row",
    backgroundColor: "#f2f3f2",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: "center",
  },
  searchTxt: { color: "#7c7c7c", marginLeft: 10, fontSize: 16 },
  banner: {
    backgroundColor: "#e5f3ea",
    padding: 30,
    borderRadius: 15,
    marginBottom: 20,
  },
  bannerTxt: { fontSize: 24, fontWeight: "bold", color: "#181725" },
  bannerSub: { color: "#53b175", marginTop: 5, fontSize: 16 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 10,
  },
  title: { fontSize: 22, fontWeight: "bold", color: "#181725" },
  seeAll: { color: "#53b175", fontSize: 16, fontWeight: "bold" },
  card: {
    borderWidth: 1,
    borderColor: "#e2e2e2",
    padding: 15,
    borderRadius: 15,
    marginRight: 15,
    width: 160,
    backgroundColor: "#fff",
  },
  img: { width: 100, height: 100, alignSelf: "center", marginBottom: 10 },
  name: { fontWeight: "bold", fontSize: 16, color: "#181725" },
  unit: { color: "#7c7c7c", marginBottom: 15, marginTop: 5, fontSize: 14 },
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

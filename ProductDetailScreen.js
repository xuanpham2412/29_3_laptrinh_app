import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProductDetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#181725" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="share-outline" size={26} color="#181725" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imgBg}>
          {/* Đã thay bằng link ảnh quả táo thật */}
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/415/415733.png",
            }}
            style={styles.img}
          />
        </View>

        <View style={styles.info}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>Naturel Red Apple</Text>
            <Ionicons name="heart-outline" size={28} color="#7c7c7c" />
          </View>
          <Text style={styles.unit}>1kg, Price</Text>

          <View style={styles.row}>
            <View style={styles.qtyBox}>
              <Ionicons name="remove" size={24} color="#b3b3b3" />
              <Text style={styles.qtyTxt}>1</Text>
              <Ionicons name="add" size={24} color="#53b175" />
            </View>
            <Text style={styles.price}>$4.99</Text>
          </View>

          <View style={styles.accordion}>
            <Text style={styles.sectionTitle}>Product Detail</Text>
            <Ionicons name="chevron-down" size={24} color="#181725" />
          </View>
          <Text style={styles.desc}>
            Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples
            May Be Good For Your Heart. As Part Of A Healthful And Varied Diet.
          </Text>

          <View style={styles.accordion}>
            <Text style={styles.sectionTitle}>Nutritions</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.badge}>
                <Text style={styles.badgeTxt}>100gr</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#181725" />
            </View>
          </View>

          <View style={styles.accordion}>
            <Text style={styles.sectionTitle}>Review</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "#f3603f", fontSize: 18, marginRight: 10 }}>
                ★★★★★
              </Text>
              <Ionicons name="chevron-forward" size={24} color="#181725" />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 40 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: "#f2f3f2",
  },
  imgBg: {
    backgroundColor: "#f2f3f2",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingBottom: 30,
  },
  img: {
    width: 220,
    height: 220,
    alignSelf: "center",
    marginTop: 20,
    resizeMode: "contain",
  },
  info: { padding: 20 },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 24, fontWeight: "bold", color: "#181725" },
  unit: { color: "#7c7c7c", fontSize: 16, marginTop: 5 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 25,
  },
  qtyBox: { flexDirection: "row", alignItems: "center" },
  qtyTxt: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#e2e2e2",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 15,
  },
  price: { fontSize: 24, fontWeight: "bold", color: "#181725" },
  accordion: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#e2e2e2",
    paddingTop: 15,
    marginTop: 15,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#181725" },
  desc: { color: "#7c7c7c", lineHeight: 22, fontSize: 14, marginTop: 10 },
  badge: {
    backgroundColor: "#ebebeb",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    marginRight: 10,
  },
  badgeTxt: { color: "#7c7c7c", fontSize: 12 },
  bottomBar: { padding: 20 },
  btn: {
    backgroundColor: "#53b175",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  btnTxt: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

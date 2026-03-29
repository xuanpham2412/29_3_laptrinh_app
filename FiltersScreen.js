import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FiltersScreen({ navigation }) {
  const [categories, setCategories] = useState({
    eggs: true,
    noodles: false,
    chips: false,
    fastfood: false,
  });
  const [brands, setBrands] = useState({
    individual: false,
    cocola: true,
    ifad: false,
    kazi: false,
  });

  const CheckboxItem = ({ label, isChecked, onPress }) => (
    <TouchableOpacity style={styles.checkRow} onPress={onPress}>
      <Ionicons
        name={isChecked ? "checkbox" : "square-outline"}
        size={26}
        color={isChecked ? "#53b175" : "#b3b3b3"}
      />
      <Text style={[styles.checkLabel, isChecked && { color: "#53b175" }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={30} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.title}>Filters</Text>
        <View style={{ width: 30 }} />
      </View>

      <ScrollView style={styles.body}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <CheckboxItem
          label="Eggs"
          isChecked={categories.eggs}
          onPress={() =>
            setCategories({ ...categories, eggs: !categories.eggs })
          }
        />
        <CheckboxItem
          label="Noodles & Pasta"
          isChecked={categories.noodles}
          onPress={() =>
            setCategories({ ...categories, noodles: !categories.noodles })
          }
        />
        <CheckboxItem
          label="Chips & Crisps"
          isChecked={categories.chips}
          onPress={() =>
            setCategories({ ...categories, chips: !categories.chips })
          }
        />
        <CheckboxItem
          label="Fast Food"
          isChecked={categories.fastfood}
          onPress={() =>
            setCategories({ ...categories, fastfood: !categories.fastfood })
          }
        />

        <Text style={[styles.sectionTitle, { marginTop: 30 }]}>Brand</Text>
        <CheckboxItem
          label="Individual Collection"
          isChecked={brands.individual}
          onPress={() =>
            setBrands({ ...brands, individual: !brands.individual })
          }
        />
        <CheckboxItem
          label="Cocola"
          isChecked={brands.cocola}
          onPress={() => setBrands({ ...brands, cocola: !brands.cocola })}
        />
        <CheckboxItem
          label="Ifad"
          isChecked={brands.ifad}
          onPress={() => setBrands({ ...brands, ifad: !brands.ifad })}
        />
        <CheckboxItem
          label="Kazi Farmas"
          isChecked={brands.kazi}
          onPress={() => setBrands({ ...brands, kazi: !brands.kazi })}
        />
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.btnTxt}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f3f2" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: { fontSize: 22, fontWeight: "bold", color: "#181725" },
  body: { backgroundColor: "#fff", padding: 20 },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#181725",
    marginBottom: 20,
  },
  checkRow: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  checkLabel: { fontSize: 16, marginLeft: 15, color: "#181725" },
  bottomBar: { padding: 20, backgroundColor: "#fff" },
  btn: {
    backgroundColor: "#53b175",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  btnTxt: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import styles from "./ProductCard.style";
import { Image } from "react-native";

export default function ProductCard({ product }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    flexDirection: "row",
  },
  image: {
    width: 100,
    minHeight:100,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    resizeMode:'contain',
    backgroundColor:'white'
  },
  innerContainer: {
    flex: 1,
    padding: 5,
    justifyContent:'space-between'
  },
  title: {
    fontWeight: "bold",
  },
  price: {
    fontWeight: "bold",
    textAlign:'right'
  },
});

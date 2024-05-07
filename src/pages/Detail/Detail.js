import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import styles from "./Detail.style"

export default function Detail({ route }) {
  const product = route.params.infoProduct;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.infoContainer}>
        <View style={styles.innerInfoContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.ratingCount}>
            <Text style={styles.count}>Reyting : {product.rating.rate}</Text>
            <Text style={styles.rating}>Satış : {product.rating.count}</Text>
          </View>
          <Text style={styles.price}>Fiyat : {product.price} TL</Text>
          <Button title="Sepete Ekle" onPress={null} />
        </View>
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.descContainerTitle}>Ürün Açıklaması:</Text>
        <Text style={styles.describtion}>{product.description}</Text>
      </View>
    </View>
  );
}


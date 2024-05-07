import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./ProductCard.style";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProductCard({ product }) {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Detail", { infoProduct: product });
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: product.image }} />
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
      </View>
    </Pressable>
  );
}

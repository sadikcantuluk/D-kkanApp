import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Product() {
  const [data, setData] = useState([]);

  async function getData() {
    const { data: productData } = await axios.get(process.env.EXPO_PUBLIC_URL);
    setData(productData);
  }

  useEffect(() => {
    getData();
  }, []);

  const renderProductData = ({ item }) => {
    return <ProductCard product={item} />;
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderProductData}
      />
    </View>
  );
}

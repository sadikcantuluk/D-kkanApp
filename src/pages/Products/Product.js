import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";

export default function Product() {

  const { data, loading, error } = useFetch(process.env.EXPO_PUBLIC_URL);

  const renderProductData = ({ item }) => {
    return <ProductCard product={item} />;
  };

  if (loading) {
    return <ActivityIndicator size={"large"} />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

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

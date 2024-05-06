import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

export default function Product() {

  const { data, loading, error } = useFetch(process.env.EXPO_PUBLIC_URL);

  const renderProductData = ({ item }) => {
    return <ProductCard product={item} />;
  };

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <Error/>;
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

import { StyleSheet, Text, View } from "react-native";
import Product from './src/pages/Products/Product'
import Detail from './src/pages/Detail/Detail'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:"#5BBCFF",
        },
        headerTitleStyle:{
          fontSize:20,
          fontWeight:'bold',
          color:'#EEF7FF'
        }
      }}>
        <Stack.Screen name="Product" component={Product} options={{
          title:"Dükkan"
        }}/>
        <Stack.Screen name="Detail" component={Detail} options={{
          title:"Ürün Detayları"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

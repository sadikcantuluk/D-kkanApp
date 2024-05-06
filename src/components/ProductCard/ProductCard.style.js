import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
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
  }
});

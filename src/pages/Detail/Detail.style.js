import { Dimensions, StyleSheet } from "react-native";

const deviceSize = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#EEEEEE",
    margin: 5,
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  image: {
    width: deviceSize.width,
    minHeight:300,
    resizeMode: "contain",
    backgroundColor: "white",
    marginBottom:5
  },
  innerInfoContainer: {
    flex: 1,
    margin: 3,
  },
  ratingCount: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle:'italic'
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 10,
  },
  count: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right",
    fontStyle: "italic",
  },
  rating: {
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  descContainer: {
    padding: 5
  },
  descContainerTitle: {
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  describtion: {},
});

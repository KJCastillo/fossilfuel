import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f1e7",
    padding: 20,
    flex: 1
  },
  titleText: {
    fontFamily: 'YanoneKaffeesatz_500Medium',
    fontSize: 26,
    paddingBottom: 5,
    backgroundColor: "#f7f1e7",
  }, drinkTitle: {
    fontFamily: 'YanoneKaffeesatz_500Medium',
    fontSize: 28,
    margin: 8
  },
  titleDescription: {
    fontFamily: 'YanoneKaffeesatz_500Medium',
    fontSize: 18,
    padding: 5,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
    backgroundColor: "#f7f1e7",
  },
  cartButton: {
    flexDirection: 'row'
  },
  checkout: {
    fontFamily: 'YanoneKaffeesatz_500Medium',
    fontSize: 28,
    textAlign: 'center'
  }
});

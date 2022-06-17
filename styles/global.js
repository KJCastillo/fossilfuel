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
    backgroundColor: "#f7f1e7",
  },
  titleDescription: {
    fontFamily: 'YanoneKaffeesatz_500Medium',
    fontSize: 18,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
    backgroundColor: "#f7f1e7",
  }
});

// export const images = {
//   ratings: {
//     '1': require('../assets/carmella_latte.png'),
//     '2': require('../assets/the_herbivore.png'),
//     '3': require('../assets/bonehead.png'),
//     '4': require('../assets/nitro-cold-brew.png'),
//   }
// };
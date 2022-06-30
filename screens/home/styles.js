import { StyleSheet } from "react-native";

import { COLORS, NFTData } from "../../constants";

export const styles = StyleSheet.create({
  flex: {
    flex: 1
  },

  containerFlatList: {
    zIndex: 0
  },

  headerBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
  },

  darkBackground: {
    height: 300, 
    backgroundColor: COLORS.primary
  },

  lightBackground: {
    flex: 1, 
    backgroundColor: COLORS.white
  },
})

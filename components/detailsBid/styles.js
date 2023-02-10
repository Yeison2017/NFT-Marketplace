import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONTS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.base * 2,
  },

  imageBid: {
    width: 48,
    height: 48,
  },

  name: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small
  },

  date: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small - 2,
    color: COLORS.secondary,
    marginTop: 3
  }
})
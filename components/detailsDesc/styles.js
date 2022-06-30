import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  containerDescription: {
    marginVertical: SIZES.extraLarge * 1.5,
  },

  titleDescription: {
    fontSize: SIZES.font,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },

  containerTextDescription: {
    marginTop: SIZES.base,
  },

  textDescription: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
    lineHeight: SIZES.large,
  },

  readMore: {
    fontSize: SIZES.small,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  }
})
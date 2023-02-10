import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerDetailsHeader: {
    width: "100%",
    height: 373,
  },

  imageDetailsHeader: {
    width: "100%",
    height: "100%",
  },

  containerRectButton: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingVertical: SIZES.font,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    zIndex: 1,
  },

  containerFlatList: {
    paddingBottom: SIZES.extraLarge * 3,
  },

  containerDetailsDesc: {
    paddingHorizontal: SIZES.font,
  },

  textCurrentBid: {
    fontSize: SIZES.font,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  }
})
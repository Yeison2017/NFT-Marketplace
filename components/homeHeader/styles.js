import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES, assets } from "../../constants";


export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.font,
  },

  containerImage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  image: {
    width: 90,
    height: 25
  },

  containerAvatar: {
    width: 45,
    height: 45,
  },

  avatar: {
    width: "100%",
    height: "100%",
  },

  verified: {
    position: "absolute",
    width: 15,
    height: 15,
    bottom: 0,
    right: 0,
  },

  containerWelcome: {
    marginVertical: SIZES.font,
  },

  textHello: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.white,
  },

  textHello: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  
  textFind: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.white,
    marginTop: SIZES.base / 2,
  },

  containerFind: {
    marginTop: SIZES.font,
  },

  imageSearch: {
    width: 20,
    height: 20,
    marginRight: SIZES.base,
  },

  containerInput: {
    width: "100%",
    borderRadius: SIZES.font,
    backgroundColor: COLORS.gray,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
  },

  textInput: {
    flex: 1
  },

})

import { View, Text, Image, TextInput } from 'react-native'

import { COLORS, FONTS, SIZES, assets } from '../../constants';
import { styles } from './styles';

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={styles.container} >
      <View style={styles.containerImage}>
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={styles.image}
        />

        <View style={styles.containerAvatar}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={styles.avatar}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={styles.verified}
          />
        </View>
      </View>

      <View style={styles.containerWelcome}>
        <Text style={styles.textHello}>
          Hello, Victoria 👋
        </Text>
        <Text style={styles.textFind}>
          Let's find a masterpiece
        </Text>
      </View>

      <View style={styles.containerFind}>
        <View style={styles.containerInput}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={styles.imageSearch}
          />

          <TextInput
            placeholder="Search NFTs"
            style={styles.textInput}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader
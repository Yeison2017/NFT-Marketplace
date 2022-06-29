import { View, Text, Image } from 'react-native'

import { EthPrice } from '../SubInfo'
import { styles } from './styles'

const DetailsBid = ({ bid }) => {
  return (
    <View style={styles.container}>
      <Image
        source={bid.image}
        resizeMode="contain"
        style={styles.imageBid}
      />

      <View>
        <Text style={styles.name}>
          Bid placed by {bid.name}
        </Text>
        <Text style={styles.date}>
          {bid.date}
        </Text>
      </View>

      <EthPrice price={bid.price} />
    </View>
  )
}

export default DetailsBid
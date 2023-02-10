import { useState } from 'react';
import { View, Text } from 'react-native'

import { EthPrice, NFTTitle } from '../SubInfo';
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../../constants';
import { styles } from './styles';

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <EthPrice price={data.price} />
      </View>

      <View style={styles.containerDescription}>
        <Text style={styles.titleDescription}>
          Description
        </Text>
        <View style={styles.containerTextDescription}>
          <Text style={styles.textDescription}>
            {text}
            {!readMore && "..."}
            <Text 
              style={styles.readMore}
              onPress={() => {
                if(!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? " Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  )
}

export default DetailsDesc
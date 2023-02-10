import React, {Fragment} from 'react';
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native';

import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../../constants';
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../../components';
import { styles } from './styles';

const DetailsHeader = ({ data, navigation }) => (
  <View style={styles.containerDetailsHeader}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={styles.imageDetailsHeader}
    />

    <CircleButton 
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    <CircleButton 
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
)

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={styles.containerRectButton}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList 
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerFlatList}
        ListHeaderComponent={() => (
          <Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={styles.containerDetailsDesc}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text style={styles.textCurrentBid}>
                  Current Bids
                </Text>
              )}
            </View>
          </Fragment>
        )}
      />
    </SafeAreaView>
  )
}

export default Details
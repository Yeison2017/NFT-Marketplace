import { useState } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';

import { COLORS, NFTData } from '../../constants'
import { NFTCard, HomeHeader, FocusedStatusBar } from '../../components';
import { styles } from './styles';

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = value => {
    if(!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter(item => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });

    if(filteredData.length){
      setNftData(filteredData);
    } else{
      setNftData(NFTData);
    }
  }

  return (
    <SafeAreaView style={styles.flex}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={styles.flex}>
        <View style={styles.containerFlatList}>
            <FlatList 
              data={nftData}
              renderItem={({ item }) => <NFTCard data={item} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
            />
        </View>

        <View style={styles.headerBackground}>
          <View style={styles.darkBackground} />
          <View style={styles.lightBackground} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
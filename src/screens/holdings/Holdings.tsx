import {Alert, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import Header from '@src/components/Header/Header';
import {List} from '@src/components/List/List';
import {Summary} from '@src/components/Summary/Summary';
import {useHoldings} from './useHoldings';
import {Loader} from '@src/components/Loader/Loader';
function Holdings() {
  const {error, stocks, summary, isLoading} = useHoldings();
  useEffect(() => {
    if (error) {
      Alert.alert(error);
    }
  }, [error]);
  return (
    <>
      <View style={styles.container}>
        <Header heading="Upstox Holding" />
        <List data={stocks} />
        <Summary summary={summary} />
      </View>
      {isLoading && <Loader />}
    </>
  );
}

export {Holdings};

import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Stock} from '@src/screens/holdings/useHoldings';

type ListProps = {
  item: Stock;
};
function ListItem({item}: ListProps) {
  return (
    <View style={styles.itemcontainer}>
      <View>
        <Text style={styles.name}>{item.symbol}</Text>
        <Text style={styles.qty}>{item.quantity}</Text>
      </View>
      <View>
        <View style={styles.itemRightItem}>
          <Text style={styles.pricelabel}>LTP: </Text>
          <Text style={styles.price}>₹ {item.ltp.toFixed(2)}</Text>
        </View>
        <View style={styles.itemRightItem}>
          <Text style={styles.pricelabel}>P/L: </Text>
          <Text style={styles.price}>₹ {item.profit_loss.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
}
export {ListItem};

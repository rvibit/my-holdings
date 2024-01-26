import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Row from './Row';
import {type Summary} from '@src/screens/holdings/useHoldings';

function Summary({summary}: {summary: Summary}) {
  return (
    <View style={styles.container}>
      <Row
        label="Current Value: "
        value={`₹ ${summary.current_value.toFixed(2)}`}
      />
      <Row
        label="Total Investment: "
        value={`₹ ${summary.total_investment.toFixed(2)}`}
      />
      <Row
        label="Today's Profit & Loss: "
        value={`₹ ${summary.todays_pl.toFixed(2)}`}
      />
      <View style={styles.separator} />
      <Row
        label="Profit & Loss: "
        value={`₹ ${summary.profit_loss.toFixed(2)}`}
      />
    </View>
  );
}

export {Summary};

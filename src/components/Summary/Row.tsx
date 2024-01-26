import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
type RowProps = {
  label: string;
  value: string;
};
export default function Row({label, value}: RowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

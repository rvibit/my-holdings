import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

type HeaderProps = {
  heading: string;
};

export default function Header({heading}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
}

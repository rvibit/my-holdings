import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '@src/theme/colors';

const Loader = () => {
  return (
    <View style={styles.loaderView}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export {Loader};

const styles = StyleSheet.create({
  loaderView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background,
    opacity: 0.8,
    justifyContent: 'center',
  },
});

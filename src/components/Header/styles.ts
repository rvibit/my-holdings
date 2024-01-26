import {colors} from '@src/theme/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    marginLeft: 20,
  },
});

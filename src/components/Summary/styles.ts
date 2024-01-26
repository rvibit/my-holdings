import {colors} from '@src/theme/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  rowLabel: {
    fontSize: 16,
    color: colors.textDark,
    fontWeight: 'bold',
  },
  rowValue: {
    fontSize: 16,
    color: colors.textLight,
  },
  separator: {
    height: 15,
  },
});

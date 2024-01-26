import {colors} from '@src/theme/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  listStyle: {
    backgroundColor: colors.white,
  },
  itemcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  itemRightItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  name: {
    color: colors.textDark,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  qty: {
    color: colors.textLight,
  },
  pricelabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textLight,
  },
  price: {
    fontSize: 16,
    color: colors.textDark,
    fontWeight: '900',
  },
  separator: {
    borderBottomColor: colors.background,
    opacity: 0.6,
    borderBottomWidth: 1,
    marginHorizontal: 15,
  },
});

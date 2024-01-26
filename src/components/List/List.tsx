import {View, FlatList, ListRenderItem} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './styles';
import {ListItem} from './ListItem';
import {Stock} from '@src/screens/holdings/useHoldings';

function List({data}: {data: Stock[]}) {
  const _renderItem: ListRenderItem<Stock> = ({item}) => {
    return <ListItem item={item} />;
  };

  const _itemSeparator = useCallback(() => {
    return <View style={styles.separator} />;
  }, []);
  return (
    <FlatList
      contentContainerStyle={styles.listStyle}
      keyExtractor={(_, index) => index.toString()}
      data={data}
      renderItem={_renderItem}
      ItemSeparatorComponent={_itemSeparator}
    />
  );
}

export {List};

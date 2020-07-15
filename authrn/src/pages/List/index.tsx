import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import * as St from './styles';

const List: React.FC = () => {
  return (
    <>
      <View style={St.styles.container}>
        <Text style={St.styles.title}>asdfas</Text>
      </View>
      <View style={St.page.container}>
        <Text style={St.flattenStyle}>React Native</Text>
        <Text>Flatten Style</Text>
        <Text style={St.page.code}>
          {JSON.stringify(St.flattenStyle, null, 2)}
        </Text>
      </View>
    </>
  );
};

export default List;

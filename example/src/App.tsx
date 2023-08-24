import * as React from 'react';

import { StyleSheet, View } from 'react-native';

import { Button } from 'waiuru-mobile-ui';

export default function App() {
  return (
    <View style={styles.container}>
      <Button loading label="Teste Button" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#383838',
    padding: 22,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

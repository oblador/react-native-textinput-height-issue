import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const LIPSUM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} defaultValue={LIPSUM} />
      <TextInput style={styles.input} numberOfLines={1} defaultValue={LIPSUM} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    backgroundColor: 'white',
  },
  input: {
    margin: 10,
    borderWidth: 1,
    backgroundColor: '#eee',
  },
});

export default App;

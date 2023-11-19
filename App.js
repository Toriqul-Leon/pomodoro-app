import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import {colors} from "./src/utils/colors"
import {Focus} from "./src/features/Focus"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Focus/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    backgroundColor: colors.darkBlue,
  },

});

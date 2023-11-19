import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
export const Focus = () => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.conatiner}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.textInput}
          label="What would you like to focus on?"
          onChangeText={(val) => {
            setSubject(val);
          }}
        />
        <RoundedButton style={styles.button} title="+" size={50} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },

  inputContainer: {
    padding: 25,
    justifyContent: 'top',
    alignItems:"center",
    flexDirection: 'row',
  },
  textInput:{
    flex:1,
    marginRight:10
  }
});

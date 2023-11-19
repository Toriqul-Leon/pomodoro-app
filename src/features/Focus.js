import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';
export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.conatiner}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          onChangeText={setSubject}
        />
     
          <RoundedButton
            title="+"
            size={50}
            onPress={()=>addSubject(subject)}
          />
   
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },

  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
});

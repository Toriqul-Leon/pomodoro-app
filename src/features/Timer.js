import React from 'react';
import { View, Text } from 'react-native';

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  return (
    <View>
      <Text>Foucs Feature {focusSubject}</Text>
    </View>
  );
};

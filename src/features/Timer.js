import React ,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Countdown } from '../components/CountDown';
import { RoundedButton } from '../components/RoundedButton';

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {

  const [isStarted, setIsStarted]= useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} onProgress={() => {}} onEnd={() => {}} />
      </View>

      <View style={styles.buttonWrapper}>
       {!isStarted? <RoundedButton onPress={()=> setIsStarted(true)} title="Start" />: <RoundedButton onPress={()=> setIsStarted(false)} title="Pause" />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

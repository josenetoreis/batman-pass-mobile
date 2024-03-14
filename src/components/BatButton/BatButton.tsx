import React, {useState} from 'react';
import {Text, Pressable, ToastAndroid } from 'react-native';
import generatePass from '../../services/passwordService';
import { BatTextInput } from '../BatTextInput/BatTextInput';

import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyles';

export function BatButton() {
  const [pass, setPass] = useState('')
  const [mensaje, setmensaje] = useState('')

  function handleGenerateButton() {
    let generateToken  = generatePass()
    setPass(generateToken)
  }

  function handleCopyButton(){
    Clipboard.setStringAsync(pass)
    ToastAndroid.show('Text copied successfully!', ToastAndroid.SHORT);
  }

  return (
    <>
      <BatTextInput pass={pass}/>
      
      <Pressable
        onPress={handleGenerateButton}
        style={styles.button}
      >
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
        onPress={handleCopyButton}
        style={styles.button}
      >
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>

    </>
  );
}
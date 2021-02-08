import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import { styles } from './styles';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [resultText, setResultText] = useState('');

  function ClearLast() {
    const newInput = inputText.substr(0, inputText.length - 1)
    setInputText(newInput);
    if (!checkResult(newInput))
      setResultText('');
  }

  function ClearAll() {
    setInputText('');
    setResultText('');
  }

  function addNumber(num: string) {
    if (inputText.length >= 10) {
      ToastAndroid.show("Max lenght!", ToastAndroid.SHORT);
      return;
    }
    const newInput = inputText.concat(num);
    setInputText(newInput);
    checkResult(newInput);
  }

  function containsSymbol() {
    return inputText.includes('+') || inputText.includes('-') || inputText.includes('*') || inputText.includes('/')
  }

  function addSymbol(symb: '+' | '-' | '*' | '/') {
    if (!containsSymbol())
      setInputText(inputText.concat(symb))
  }

  function equalPress() {
    if (resultText.trim() !== '') {//ver se não tem erro (?)
      setInputText(resultText);
      setResultText('');
    }
  }

  function checkResult(input: string): boolean {
    if (containsSymbol()) {
      const result = calculate(input);
      console.log('result', result?.toFixed(2));
      if (!!result) {
        //toFixed resolve o problema mas ai tem que tratar se é floating ou não
        setResultText(result.toString());
        return true;
      }
    }
    return false;
  }

  function calculate(input: string): number | null {
    const symbArr = input.match('[\+\/\*\-]');
    if (!!symbArr && !input.endsWith(symbArr[0])) {
      const arr = input.split(symbArr[0]);
      console.log(arr, arr.length);
      const num1 = Number(arr[0]), num2 = Number(arr[1]);
      console.log('num1', num1);
      console.log('num2', num2);
      switch (symbArr[0]) {
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        default: return null;
      }
    }
    return null;
  }

  return (
    <View style={styles.Container}>
      <View style={styles.TextContainer}>
        <Text style={styles.MainInput}>{inputText}</Text>
        <Text style={styles.ResultInput}>{resultText}</Text>
      </View>
      <View style={styles.ClearContainer}>
        <TouchableOpacity style={styles.ClearButton} onPress={() => ClearAll()}>
          <Text style={styles.ClearButtonText}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ClearButton} onPress={() => ClearLast()}>
          <Text style={styles.ClearButtonText}>C</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.PadContainer}>
        <View style={styles.RowContainer}>
          <TouchableOpacity style={styles.NumberKey} onPress={() => addNumber('7')}>
            <Text style={styles.NumberText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.NumberKey} onPress={() => addNumber('8')}>
            <Text style={styles.NumberText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.NumberKey} onPress={() => addNumber('9')}>
            <Text style={styles.NumberText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ActionKey} onPress={() => addSymbol('/')}>
            <Text style={styles.ActionText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.RowContainer}>
          <TouchableOpacity style={styles.NumberKey} onPress={() => addNumber('4')}>
            <Text style={styles.NumberText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.NumberKey} onPress={() => addNumber('5')}>
            <Text style={styles.NumberText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.NumberKey} onPress={() => addNumber('6')}>
            <Text style={styles.NumberText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ActionKey} onPress={() => addSymbol('*')}>
            <Text style={styles.ActionText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.RowContainer}>
          <TouchableOpacity style={styles.NumberKey} onPress={() => addNumber('1')}>
            <Text style={styles.NumberText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.NumberKey} onPress={() => addNumber('2')}>
            <Text style={styles.NumberText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.NumberKey} onPress={() => addNumber('3')}>
            <Text style={styles.NumberText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ActionKey} onPress={() => addSymbol('-')}>
            <Text style={styles.ActionText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.RowContainer}>
          <TouchableOpacity style={styles.NumberKey} onPress={() => addNumber('0')}>
            <Text style={styles.NumberText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.NumberKey} onPress={() => addNumber('.')}>
            <Text style={styles.NumberText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.NumberKey} onPress={() => equalPress()}>
            <Text style={styles.NumberText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ActionKey} onPress={() => addSymbol('+')}>
            <Text style={styles.ActionText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;
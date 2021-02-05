import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';


const App = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.TextContainer}>
        <Text>oiaadasdasdasdasdasd</Text>
      </View>
      <View style={styles.ClearContainer}>
        <TouchableOpacity style={styles.ClearButton}>
          <Text style={styles.ClearButtonText}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ClearButton}>
          <Text style={styles.ClearButtonText}>C</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.PadContainer}>
        <View style={styles.RowContainer}>
          <TouchableOpacity style={styles.NumberKey}>
            <Text style={styles.NumberText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.NumberKey}>
            <Text style={styles.NumberText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.NumberKey}>
            <Text style={styles.NumberText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ActionKey}>
            <Text style={styles.ActionText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.RowContainer}>
          <TouchableOpacity style={styles.NumberKey}>
            <Text style={styles.NumberText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.NumberKey}>
            <Text style={styles.NumberText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.NumberKey}>
            <Text style={styles.NumberText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ActionKey}>
            <Text style={styles.ActionText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.RowContainer}>
          <TouchableOpacity style={styles.NumberKey}>
            <Text style={styles.NumberText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.NumberKey}>
            <Text style={styles.NumberText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.NumberKey}>
            <Text style={styles.NumberText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ActionKey}>
            <Text style={styles.ActionText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.RowContainer}>
          <TouchableOpacity style={styles.NumberKey}>
            <Text style={styles.NumberText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.NumberKey}>
            <Text style={styles.NumberText}>,</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.NumberKey}>
            <Text style={styles.NumberText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ActionKey}>
            <Text style={styles.ActionText}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1
  },
  TextContainer: {
    flex: 1,
    backgroundColor: "#26282b",
    width: '100%'
  },
  PadContainer: {
    backgroundColor: "#0e0b0b",
  },
  RowContainer: {
    flexDirection: 'row'
  },
  NumberKey: {
    width: '25%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  NumberText: {
    fontSize: 30,
    color: '#fff'
  },
  ActionKey: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#ff9035',
  },
  ActionText: {
    fontSize: 30,
    color: '#ff9035'
  },
  ClearContainer: {
    flexDirection: 'row',
    backgroundColor: "#26282b",
    justifyContent: 'space-between',
    padding: 16,
  },
  ClearButton: {
    height: 40,
    width: 100,
    borderColor: '#ff9035',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ClearButtonText: {
    fontSize: 20,
    color: '#ff9035'
  }
})


export default App;

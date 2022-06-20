/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, Text, Button} from 'react-native';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator.js';

console.log('TM? ', global.__turboModuleProxy);
console.log(require('rtn-calculator/js/NativeCalculator.js'));

const App: () => Node = () => {
  const [currentResult, setResult] = useState<number | null>(null);
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Text style={{marginLeft: 20, marginTop: 20}}>
        3+7={currentResult ?? '??'}
      </Text>
      <Button
        title="Compute"
        onPress={async () => {
          const result = await RTNCalculator.add(3, 7);
          setResult(result);
        }}
      />
    </SafeAreaView>
  );
};
export default App;

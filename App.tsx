import React from 'react';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';

export const App = () => {
  return (
    <SafeAreaView>
      {/* <HolaMundoScreen/>
      <ContadorScreen/> */}
      <BoxObjectModelScreen/>
    </SafeAreaView>
  );
};

export default App;

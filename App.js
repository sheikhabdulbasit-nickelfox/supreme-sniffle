import React from 'react';
import {StyleSheet} from 'react-native';
import PublicStackNavigator from './Source/Navigators/PublicStackNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <PublicStackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;

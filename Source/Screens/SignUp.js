import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {defaultTheme} from '../Themes/defaultTheme';

const SignUp = () => {
  return (
    <ScrollView>
      <Text style={styles.heading}>Create New Account</Text>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontFamily: 'Ubuntu-Bold',
    color: defaultTheme.colors.primary,
    textAlign: 'center',
  },
});

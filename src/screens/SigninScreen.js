import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const { state, signin, clearErrors } = useContext(AuthContext);
  return (
    <View behavior='padding' enabled style={styles.bg}>
      <AuthForm title={'Sign In'} clearErrors={clearErrors} errors={state.errors} onSubmit={( {email, password} ) => {signin({email, password})}}/>
      <NavLink title={'Sign Up'} routeName={'Signup'} />
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#1E90FF',
    flex: 1
  }
})

export default SigninScreen;
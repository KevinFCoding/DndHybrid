import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../theme'

const Button = ({ children, ...props }) => {
  return (
    <TouchableOpacity {...props} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacings.md,
    borderRadius: theme.spacings.sm
  },
  text: {
    color: 'white',
    textAlign: 'center'
  }
})

export default Button

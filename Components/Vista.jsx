import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Vista = ({ navigation }) => {
  useEffect(() => {
    console.log('Vista cargada');
  }, []);

  const onPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la Vista</Text>
      <Button title="Ir a Home" onPress={onPress} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', 
    paddingHorizontal: 20, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#e7e7e7', 
  },
  
 
});

export default Vista;

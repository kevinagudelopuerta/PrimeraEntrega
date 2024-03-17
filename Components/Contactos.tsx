import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Contactos = ({ navigation }) => {
  useEffect(() => {
    console.log('Vista cargada');
  }, []);

  const onPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contactate con nosotros</Text>
      <Button title="Ir a Home" onPress={onPress} />
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

export default Contactos;
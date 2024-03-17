import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const onPressVista = () => {
    setCount(count + 1);
    navigation.navigate('Vista');
  };

  const onPressCatalogo = () => {
    setCount(count + 1);
    navigation.navigate('Catalogo');
  };

  const onPressBusquedaVehiculo = () => {
    setCount(count + 1);
    navigation.navigate('BusquedaVehiculo');
  };

  const onPressSolicitudPrueba = () => {
    setCount(count + 1);
    navigation.navigate('SolicitudPrueba');
  };

  const onPressCotizacion = () => {
    setCount(count + 1);
    navigation.navigate('Cotizacion');
  };

  const onPressHistorialServicio = () => {
    setCount(count + 1);
    navigation.navigate('HistorialServicio');
  };

  const onPressOfertasPromociones = () => {
    setCount(count + 1);
    navigation.navigate('OfertasPromociones');
  };

  const onPressContacto = () => {
    setCount(count + 1);
    navigation.navigate('Contacto');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Compra tus sueños en TK Autos</Text>
      <Text style={styles.text}>Historial de actividad: {count}</Text>
      <Button title="Ir a Vista" onPress={onPressVista} />
      <Button title="Ir a Catalogo" onPress={onPressCatalogo} />
      <Button title="Ir a Búsqueda de vehiculo" onPress={onPressBusquedaVehiculo} />
      <Button title="Ir a Solicitud prueba de manejo" onPress={onPressSolicitudPrueba} />
      <Button title="Ir a Cotización" onPress={onPressCotizacion} />
      <Button title="Ir a Historial de servicio" onPress={onPressHistorialServicio} />
      <Button title="Ir a Ofertas y promociones" onPress={onPressOfertasPromociones} />
      <Button title="Ir a Contacto" onPress={onPressContacto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#070707', 
    paddingHorizontal: 20,
  },
  
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center', 
    color: '#ffffff',
  },

});

export default Home;



//----------------------------------------------------//
/*import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
    navigation.navigate('Vista');
  };

 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Text style={styles.text}>Contador: {count}</Text>
      <Button title="Ir a Vista" onPress={onPress} />
      <Button title="Ir a Catalogo" onPress={onPress} /> 
      <Button title="Ir a Busqueda de vehiculo" onPress={onPress} /> 
      <Button title="Ir a Solicitud prueba de manejo" onPress={onPress} /> 
      <Button title="Ir a Cotizacion" onPress={onPress} />
      <Button title="Ir a Historial de servicio" onPress={onPress} />
      <Button title="Ir a Ofertas y promociones" onPress={onPress} />
      <Button title="Ir a Contacto" onPress={onPress} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Home;*/
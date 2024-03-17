import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Components/Home';
import Vista from './src/Components/Vista';
import Catalogo from './src/Components/Catalogo';
import BusquedaVehiculo from './src/Components/BusquedaVehiculo';
import SolicitudPruebaManejo from './src/Components/SolicitudPruebaManejo';
import Cotizacion from './src/Components/Cotizacion';
import HistorialServicio from './src/Components/HistorialSevicios';
import Ofertas from './src/Components/Ofertas';
import Contactos from './src/Components/Contactos';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />  
        <Stack.Screen name="Vista" component={Vista} />            
        <Stack.Screen name="Catalogo" component={Catalogo} />
        <Stack.Screen name="BusquedaVehiculo" component={BusquedaVehiculo} />
        <Stack.Screen name="SolicitudPrueba" component={SolicitudPruebaManejo} />
        <Stack.Screen name="Cotizacion" component={Cotizacion} />
        <Stack.Screen name="HistorialServicio" component={HistorialServicio} />
        <Stack.Screen name="OfertasPromociones" component={Ofertas} />
        <Stack.Screen name="Contacto" component={Contactos} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



/*import React from 'react'
import Catalog from './src/Components/Catalog';
import Vehicle from './src/Components/Vehicle';
import VehicleList from './src/Components/VehicleList';


 const App = () => {
  return (
    //<Vehicle/>
    <Catalog/>
    //<VehicleList/>
    
  )
}
export default App;*/

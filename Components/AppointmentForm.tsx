import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput, Provider as PaperProvider } from 'react-native-paper';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  
  return (
    <PaperProvider>
      <View>
        <Text>Name:</Text>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          label="Ingresa nombre"
        />
        <Text>Date:</Text>
        <TextInput
          value={date}
          onChangeText={(text) => setDate(text)}
          label="Ingresa la fecha"
        />
        <Text>Time:</Text>
        <TextInput
          value={time}
          onChangeText={(text) => setTime(text)}
          label="Ingresa la hora"
        />
        <Button onPress={() => console.log(name, date, time)}>Enviar</Button>
      </View>
    </PaperProvider>
  );
};

export default AppointmentForm;
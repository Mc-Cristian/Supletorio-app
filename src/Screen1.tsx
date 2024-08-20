import React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Screen1() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Pantalla de Inicio</Text>
      <Button title="Ver Productos" onPress={() => navigation.navigate('Screen2')} />
      <Button title="Contador" onPress={() => navigation.navigate('Screen3')} />
    </View>
  );
}
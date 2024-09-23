import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Contador from './Componentes/Contador';
import Botones from './Componentes/Botones';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const disminuir = () => setContador(contador - 1);
  const reiniciar = () => setContador(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador de Clics</Text>
      <Contador contador={contador} />
      <Botones incrementar={incrementar} disminuir={disminuir} reiniciar={reiniciar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

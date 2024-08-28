import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import Anime from './Componentes/anime';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloText}>Galería de Animes</Text>
      <ScrollView>
        <Anime nombre="Anime 1" imagen={require('./Imágenes/anime1.jpg')} />
        <Anime nombre="Anime 2" imagen={require('./Imágenes/anime2.jpg')} />
        <Anime nombre="Anime 3" imagen={require('./Imágenes/anime3.jpg')} />
        <Anime nombre="Anime 4" imagen={require('./Imágenes/anime4.jpg')} />
        <Anime nombre="Anime 5" imagen={require('./Imágenes/anime5.jpg')} />
        <Anime nombre="Anime 6" imagen={require('./Imágenes/anime6.jpg')} />
        <Anime nombre="Anime 7" imagen={require('./Imágenes/anime7.jpg')} />
        <Anime nombre="Anime 8" imagen={require('./Imágenes/anime8.jpg')} />
        <Anime nombre="Anime 9" imagen={require('./Imágenes/anime9.jpg')} />
        <Anime nombre="Anime 10" imagen={require('./Imágenes/anime10.jpg')} />


        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

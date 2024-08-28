import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Anime(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.imagen} source={props.imagen} />
      <Text style={styles.titulo}>{props.nombre}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
  },
  imagen: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 5,
  },
});

export default Anime;

import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Testimonio from './componente/Testimonio';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // Prevenir que la pantalla de splash se oculte automáticamente

export default function App() {
  const [fontsLoaded] = useFonts({
    'Arapey-Regular': require('./assets/fonts/Arapey-Regular.ttf'),
    'Arapey-Italic': require('./assets/fonts/Arapey-Italic.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Mostrar nada mientras las fuentes se cargan
  } else {
    SplashScreen.hideAsync(); // Ocultar la pantalla de splash cuando las fuentes estén cargadas
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</Text>
      <ScrollView style={styles.scrollView}>
        <Testimonio
          nombre="Shawn Wang"
          país="Singapur"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          foto={require('./assets/imagen-Shawn.6e3957dee53553d3dfeb.png')}
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza que necesitaba gracias a la experiencia de codificación gratuita que obtuve de freeCodeCamp. Durante un año después de completar el curso, conseguí un trabajo de ingeniero de software en una empresa con un salario respetable."
        />
        <Testimonio
          nombre="Sarah Chima"
          país="Nigeria"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          foto={require('./assets/imagen-Sarah.8cb45da000a892ddedb7.png')}
          testimonio="FreeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado y los proyectos desafiantes me ayudaron a convertirme en una mejor desarrolladora."
        />
        <Testimonio
          nombre="Emma Bostian"
          país="Suecia"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          foto={require('./assets/imagen-Emma.f3d0164a85be9e531258.png')}
          testimonio="Siempre me ha fascinado la música y la tecnología. Gracias a freeCodeCamp, pude combinar mis dos pasiones y ahora trabajo como ingeniera de software en Spotify."
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: '100%',
    backgroundColor: '#0a0a23',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  logo: {
    height: 80,
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'Arapey-Regular',
  },
  scrollView: {
    width: '100%',
  },
});


import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Alert
} from 'react-native';

export default function App() {

  // Funcion para el boton de contacto
  const manejarContacto = () => {
    Alert.alert(
      'Contacto',
      '¡Gracias por tu interés! Aquí puedes agregar tu correo electrónico.'
    );
  };

  // Funcion para el boton de portafolio
  const manejarPortafolio = () => {
    Alert.alert(
      'Mi portafolio',
      'Próximamente podrás conocer mis proyectos.'
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="dark-content" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* FOTO DE PERFIL */}
        <View style={styles.photoContainer}>
          <Image
            source={{
              uri: 'https://expo.dev/cdn-cgi/image/width=256/https://storage.googleapis.com/profile-image-storage-production/6e249b73-f802-4cd4-836f-b5bea0c3b5b3.png'
            }}
            style={styles.photo}
          />
        </View>

        {/* INFORMACION PERSONAL */}
        <View style={styles.infoContainer}>

          <Text style={styles.name}>
            Luis Fernando Ventura Concepción
          </Text>

          <Text style={styles.title}>
            Estudiante de Programación
          </Text>

          <Text style={styles.bio}>
            Aprendiendo aplicaciones móviles con Expo.
            {'\n'}
            Mi meta: crear algo útil.
          </Text>

        </View>

        {/* HABILIDADES */}
        <View style={styles.skillsContainer}>

          <Text style={styles.sectionTitle}>
            Mis habilidades
          </Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              React Native
            </Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Diseño UI
            </Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Docker
            </Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Expo Go
            </Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Lógica de programación
            </Text>
          </View>

        </View>

        {/* BOTONES DE ACCION */}
        <View style={styles.actionsContainer}>

          {/* BOTON CONTACTAME */}
          <Pressable
            style={styles.buttonPrimary}
            onPress={manejarContacto}
          >
            <Text style={styles.buttonPrimaryText}>
              Contactarme
            </Text>
          </Pressable>

          {/* BOTON PORTAFOLIO */}
          <Pressable
            style={styles.buttonSecondary}
            onPress={manejarPortafolio}
          >
            <Text style={styles.buttonSecondaryText}>
              Mi portafolio
            </Text>
          </Pressable>

        </View>

        {/* PIE DE PAGINA */}
        <View style={styles.footer}>

          <Text style={styles.footerText}>
            Creado con ❤️ en Expo Snack
            {'\n'}
            © {new Date().getFullYear()}
          </Text>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

// ESTILOS DE LA APLICACION
const styles = StyleSheet.create({

  // CONTENEDOR PRINCIPAL
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },

  // ESTILOS DEL SCROLLVIEW
  scrollContent: {
    paddingBottom: 30,
  },

  // FOTO DE PERFIL
  photoContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },

  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#2196F3',
  },

  // NOMBRE
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 8,
  },

  // INFORMACION PERSONAL
  infoContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
  },

  title: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: '500',
    marginBottom: 8,
  },

  bio: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 20,
  },

  // HABILIDADES
  skillsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },

  // INSIGNIAS DE HABILIDADES
  badge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },

  badgeText: {
    fontSize: 14,
    color: '#1565C0',
    fontWeight: '500',
  },

  // CONTENEDOR DE BOTONES
  actionsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    gap: 12,
  },

  // BOTON PRINCIPAL
  buttonPrimary: {
    backgroundColor: '#2196F3',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  // BOTON SECUNDARIO
  buttonSecondary: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2196F3',
  },

  buttonSecondaryText: {
    color: '#2196F3',
    fontSize: 16,
    fontWeight: '600',
  },

  // PIE DE PAGINA
  footer: {
    alignItems: 'center',
    paddingTop: 20,
  },

  footerText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
    lineHeight: 20,
  },

});

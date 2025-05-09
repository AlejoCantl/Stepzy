import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        autoCapitalize="none"
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>¿No tienes cuenta? Regístrate</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111827',
      padding: 20,
      justifyContent: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 40,
      textAlign: 'center',
    },
    input: {
      height: 50,
      backgroundColor: '#1f2937',
      borderRadius: 8,
      paddingHorizontal: 15,
      color: '#fff',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#3b82f6',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    registerText: {
      marginTop: 20,
      color: '#9ca3af',
      textAlign: 'center',
    },
  });
  
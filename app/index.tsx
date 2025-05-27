import Logo from "@/components/Logo";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";

export default function LoginScreen() {
  const router = useRouter();
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarFormulario(true);
    }, 8000); // espera 5 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    if (usuario === "" || contrasena === "") {
      alert("Por favor, complete todos los campos");
      setContrasena("");
      setUsuario("");
      return;
    }
    if (usuario === "admin" && contrasena === "admin") {
      setUsuario("");
      setContrasena("");
      router.push("/(tabs)");
      return;
    } else {
      alert("Credenciales inválidas");
      setContrasena("");
      setUsuario("");
      return;
    }
  };

  if (!mostrarFormulario) {
    return (
      <ImageBackground
        source={require("@/assets/images/Sp.png")} // Cambia la ruta si es necesario
        style={styles.imagenFondo}
      />
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Logo />
      </View>
      <Text style={styles.text}>Usuario:</Text>
      <Input
        placeholder="Usuario"
        keyboardType="email-address"
        autoCapitalize="none"
        value={usuario}
        onChangeText={setUsuario}
      />
      <Text style={styles.text}>Contraseña:</Text>
      <Input
        placeholder="Contraseña"
        secureTextEntry
        autoCapitalize="none"
        value={contrasena}
        onChangeText={setContrasena}
      />
      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  imagenFondo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  containerLogo: {
    paddingTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    padding: 20,
    paddingTop: 100,
  },
  text: {
    margin: 10,
    paddingLeft: 5,
    fontSize: 15,
    fontWeight: "bold",
  },
});

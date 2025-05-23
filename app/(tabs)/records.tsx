import Button from "@/components/Button";
import Records from "@/modules/records/records";
import { Image } from "expo-image";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { useEffect, useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function TabTwoScreen() {
  type Columna = {
    dispositivo: string;
    accion: string;
    fecha: string;
  };

  const [columnas, setColumnas] = useState<Columna[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://stepper-software.vercel.app/api/data/getData"
        );
        const json = await response.json();
        setColumnas(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  });

  const generarPDF = async () => {
    try {
      const html = `
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; }
              h1 { text-align: center; }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #000; padding: 8px; text-align: left; }
              th { background-color: #f2f2f2; }
            </style>
          </head>
          <body>
            <h1>Registro de Acciones</h1>
            <table>
              <tr>
                <th>Dispositivo</th>
                <th>Acción</th>
                <th>Fecha</th>
              </tr>
              ${columnas
                .map(
                  (col) => `
                  <tr>
                    <td>${col.dispositivo}</td>
                    <td>${col.accion}</td>
                    <td>${new Date(col.fecha).toLocaleString("es-ES", {
                      timeZone: "America/Santiago",
                    })}</td>
                  </tr>`
                )
                .join("")}
            </table>
          </body>
        </html>`;

      const { uri } = await Print.printToFileAsync({ html });
      await Sharing.shareAsync(uri);
    } catch (error) {
      Alert.alert("Error", "No se pudo generar el PDF");
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image
            style={styles.image}
            source={require("@/assets/images/logo.png")}
          />
        </View>
        <View style={styles.containTitle}>
          <Text style={styles.title}>Motor Paso a Paso</Text>
          <Text style={styles.p}>Registros de accion.</Text>
        </View>
        <Records columnasInfo={columnas} />
        <View style={styles.button}>
          <Button onPress={generarPDF} title="Imprimir" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    display: "flex",
    padding: 5, // Espacio alrededor del logo
  },
  image: {
    width: 150,
    height: 80,
  },
  containTitle: {
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    paddingBottom: 5,
    marginTop: 20,
  },
  p: {
    fontSize: 13,
    color: "grey",
    marginBottom: 30,
  },

  container: {
    display: "flex",
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  filaMotor: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
    paddingBottom: 25,
  },
  filaLed: {
    justifyContent: "space-around",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
    paddingBottom: 25,
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
  },
});

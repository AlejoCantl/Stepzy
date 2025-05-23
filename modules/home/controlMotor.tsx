import Button from "@/components/Button";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function controlMotor() {
  const mover = (direccion: string) => {
    if (direccion === "derecha") {
      fetch("https://stepper-software.vercel.app/api/data/sendData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accion: 4,
          dispositivo: 2,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else if (direccion === "izquierda") {
      fetch("https://stepper-software.vercel.app/api/data/sendData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accion: 3,
          dispositivo: 2,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else if (direccion === "apagar") {
      fetch("https://stepper-software.vercel.app/api/data/sendData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accion: 2,
          dispositivo: 2,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const encender = (led: number) => {
    fetch("https://stepper-software.vercel.app/api/data/sendData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accion: 1,
        dispositivo: led,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerMotor}>
        <Text style={styles.text}>Motor</Text>
        <View style={styles.filaMotor}>
          <Button
            onPress={() => {
              mover("derecha");
            }}
            title="Derecha"
          />
          <Button
            onPress={() => {
              mover("izquierda");
            }}
            title="Izquierda"
          />
          <Button
            onPress={() => {
              mover("apagar");
            }}
            title="Apagar"
          />
        </View>
      </View>
      <View style={styles.containerMotor}>
        <Text style={styles.text}>LED</Text>
        <View style={styles.filaLed}>
          <Button onPress={() => encender(1)} title="LED 1" />
          <Button onPress={() => encender(3)} title="LED 2" />
          <Button onPress={() => encender(4)} title="LED 3" />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  containerMotor: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 30,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#0AC1CB",
  },
  container: {
    display: "flex",
    height: "100%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
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
});

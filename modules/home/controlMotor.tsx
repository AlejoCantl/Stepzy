import Button from "@/components/Button";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type DataSchemaType = number | string | boolean | null | undefined | Date | ArrayBuffer;
type DataSchema = {
    [key: string]: DataSchemaType;
};

// Constantes
const ENCENDIDO = 'Encendido';
const APAGADO = 'Apagado';
const IZQUIERDA = 'Izquierda';
const DERECHA = 'Derecha';

// Mapeos
const Actiondata: DataSchema = {
  [IZQUIERDA]: 3,
  [DERECHA]: 4,
  [ENCENDIDO]: 1,
  [APAGADO]: 2,
};

const DispositivoData: DataSchema = {
  Motor: 2,
  LED: 1,
  LED2: 3,
  LED3: 4,
};

const accionMap: Record<string, string> = {
  'APAGADO': APAGADO,
  'ENCENDIDO': ENCENDIDO,
  'GIRA A LA IZQUIERDA': IZQUIERDA,
  'GIRA A LA DERECHA': DERECHA,
};

const getData = async (url: string, metodo: string, prop: Record<string, any>) => {
    try {
        if (!["GET", "POST", "PUT", "DELETE", "PATCH"].includes(metodo.toUpperCase())) {
            throw new Error(`Método HTTP no válido: ${metodo}`);
        }

        const queryString = metodo.toUpperCase() === "GET" ? `?${new URLSearchParams(prop).toString()}` : "";

        const res = await fetch(`${url}${queryString}`, {
            method: metodo,
            headers: {
                "Content-Type": "application/json",
            },
            body: metodo.toUpperCase() !== "GET" ? JSON.stringify(prop) : undefined,
        });
        return res.json();
    } catch (error) {
        console.error("Error en la solicitud:", error);
        throw error;
    }
};

const insertData = async (url: string, metodo: string, data: DataSchema) => {
    const {accion, dispositivo} = data;
    const body = JSON.stringify({ accion, dispositivo });
    try {
        if (!["GET", "POST", "PUT", "DELETE", "PATCH"].includes(metodo.toUpperCase())) {
            throw new Error(`Método HTTP no válido: ${metodo}`);
        }
    const res = await fetch(url, {
        method: metodo,
        headers: {
            "Content-Type": "application/json",
        },
        body: body,
    });
    if (!res.ok) {
        throw new Error("Error en la solicitud");
    }
    return res.json();
} catch (error) {
        console.error("Error en la solicitud:", error);
        throw error;
    }
}


const sendDataQuery = async (data: DataSchema) => {
    insertData( "https://stepper-software.vercel.app/api/data/sendData", "POST", data);
    console.log("Data sent:", data);
    return data;
}



const getDataByQuery = async (idDispositivo: DataSchema) => {
    const data = await getData( "https://stepper-software.vercel.app/api/data/getDataBy", "GET", idDispositivo);
    console.log("Data received:", data);
    return data;
}



export default function ControlMotor() {
  const [status, setStatus] = useState<string>(APAGADO);
  const [ledStatus, setLedStatus] = useState<string>(APAGADO);
  const [led2Status, setLed2Status] = useState<string>(APAGADO);
  const [led3Status, setLed3Status] = useState<string>(APAGADO);

  // Obtener estado inicial del motor y LEDs
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const responseMotor = await getDataByQuery({ idDispositivo: DispositivoData.Motor });
        const responseLED = await getDataByQuery({ idDispositivo: DispositivoData.LED });
        const responseLED2 = await getDataByQuery({ idDispositivo: DispositivoData.LED2 });
        const responseLED3 = await getDataByQuery({ idDispositivo: DispositivoData.LED3 });
        const motorData = responseMotor?.message ?? [];
        const ledData = responseLED?.message ?? [];
        const ledData2 = responseLED2?.message ?? [];
        const ledData3 = responseLED3?.message ?? [];
        if (motorData.length > 0 && motorData[0]?.accion) {
          const motorMappedStatus = accionMap[motorData[0].accion] ?? APAGADO;
          if (isMounted) setStatus(motorMappedStatus);
        }

        if (ledData.length > 0 && ledData[0]?.accion) {
          const ledMappedStatus = accionMap[ledData[0].accion] ?? APAGADO;
          if (isMounted) setLedStatus(ledMappedStatus);
        }

        if (ledData2.length > 0 && ledData2[0]?.accion) {
          const ledMappedStatus2 = accionMap[ledData2[0].accion] ?? APAGADO;
          if (isMounted) setLed2Status(ledMappedStatus2);
        }

        if (ledData3.length > 0 && ledData3[0]?.accion) {
          const ledMappedStatus3 = accionMap[ledData3[0].accion] ?? APAGADO;
          if (isMounted) setLed3Status(ledMappedStatus3);
        }

      } catch (err) {
        console.error("Error cargando estado inicial:", err);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  const handlePress = async (action: string, dispositivo: string) => {
    let accionFinal = action;
    let VPIN = "";
    switch (dispositivo) {
      case 'Motor':
        if (status === action) {
          accionFinal = APAGADO;
          setStatus(APAGADO);
        } else {
          setStatus(action);
        }
        break;

      case 'LED':
        if (ledStatus === ENCENDIDO) {
          accionFinal = APAGADO;
          setLedStatus(APAGADO);
        } else {
          accionFinal = ENCENDIDO;
          setLedStatus(ENCENDIDO);
        }
        break;

      case 'LED2':
        if (led2Status === ENCENDIDO) {
          accionFinal = APAGADO;
          setLed2Status(APAGADO);
        } else {
          accionFinal = ENCENDIDO;
          setLed2Status(ENCENDIDO);
        }
        break;
      case 'LED3':
        if (led3Status === ENCENDIDO) {
          accionFinal = APAGADO;
          setLed3Status(APAGADO);
        } else {
          accionFinal = ENCENDIDO;
          setLed3Status(ENCENDIDO);
        }
        break;

      default:
        console.error('Dispositivo no reconocido');
        return;
    }

    const result = await sendDataQuery({
      accion: Actiondata[accionFinal],
      dispositivo: DispositivoData[dispositivo],
    });

    console.log(`Resultado de la consulta: ${result}`);
  };


  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerMotor}>
        <Text style={styles.text}>Motor</Text>
        <View style={styles.filaMotor}>
          <Button title={`${status === IZQUIERDA ? 'Apagar' : 'Izquierda'}`} onPress={() => handlePress(IZQUIERDA, 'Motor')} />
          <Button title={`${status === DERECHA ? 'Apagar' : 'Derecha'}`} onPress={() => handlePress(DERECHA, 'Motor')} />
        </View>
      </View>

      <View style={styles.containerMotor}>
        <Text style={styles.text}>LED</Text>
        <View style={styles.filaLed}>
          {[1, 3, 4].map((id) => (
            <Button
              key={id}
              title={`LED ${(id === 1 ? 1 : (id === 3 ? 2 : (id === 4 ? 3: '')))} ${(ledStatus === ENCENDIDO && id === 1) || (led2Status === ENCENDIDO && id === 3) || (led3Status === ENCENDIDO && id === 4) ? 'OFF' : 'ON'}`}
              onPress={() => handlePress(ledStatus === ENCENDIDO ? APAGADO : ENCENDIDO, `LED${(id === 1 ? '' : (id === 3 ? 2 : (id === 4 ? 3: '')))}`)}
            />
          ))}
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
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
    paddingBottom: 25,
  },
});
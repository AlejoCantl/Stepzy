import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { DataTable } from "react-native-paper";

export default function recordsTable({ columnasInfo }: any) {
  const columnas = ["Motor/LED", "Estado", "Fecha"];
  const valores = columnasInfo;
  return (
    <View>
      <DataTable style={styles.tabla}>
        {/* Encabezado */}
        <DataTable.Header style={styles.encabezado}>
          {columnas.map((col, index) => (
            <DataTable.Title
              key={index}
              style={styles.columna}
              textStyle={styles.textoEncabezado}
            >
              {col}
            </DataTable.Title>
          ))}
        </DataTable.Header>
      </DataTable>
      <ScrollView style={{ height: 300 }}>
        <DataTable>
          {valores?.map((col: any, i: number) => (
            <DataTable.Row key={i} style={styles.fila}>
              <Text style={styles.textoCelda}>
                {col.dispositivo === "MOTOR PASO A PASO"
                  ? "MOTOR"
                  : col.dispositivo}
              </Text>
              <Text style={styles.textoCeldaM}>{col.accion}</Text>
              <Text style={styles.textoCeldaF}>
                {new Date(col.fecha).toLocaleString("es-ES", {
                  timeZone: "America/Santiago",
                })}
              </Text>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  tabla: {
    borderRadius: 10,
    overflow: "hidden",
  },
  encabezado: {
    backgroundColor: "#0AC1CB",
  },
  fila: {
    backgroundColor: "#fff",
  },
  columna: {
    justifyContent: "center",
    minWidth: 75,
    paddingHorizontal: 10,
  },
  textoEncabezado: {
    fontWeight: "bold",
    color: "#fff",
  },
  textoCelda: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    width: 90,
  },
  textoCeldaM: {
    color: "#000",
    fontWeight: "bold",
    width: 100,
    textAlign: "right",
  },
  textoCeldaF: {
    color: "#000",
    fontWeight: "bold",
    width: 100,
    textAlign: "right",
  },
});

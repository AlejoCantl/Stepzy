import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

export default function recordsTable(){
    const columnas = ["Motor/LED", "Estado", "Origen", "Fecha"];
  const filas = 30;

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

      {/* Scroll vertical */}
      <ScrollView style={{ height: 300 }}>
        <DataTable>
          {Array.from({ length: filas }).map((_, rowIndex) => (
            <DataTable.Row key={rowIndex} style={styles.fila}>
              {columnas.map((_, colIndex) => (
                <DataTable.Cell
                  key={colIndex}
                  style={styles.columna}
                  textStyle={styles.textoCelda}
                >
                  <Text style={styles.textoCelda}> </Text>
                </DataTable.Cell>
              ))}
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
    },
  });

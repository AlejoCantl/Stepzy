  import { Text, ScrollView, View, StyleSheet } from "react-native";
  import { Image } from "expo-image";

  export default function information(){
    return(<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        <Text style={styles.information}>Este proyecto consiste en el control de un motor paso a paso utilizando pulsadores físicos, y su respectiva representación virtual mediante una API.</Text>
        
        <Text style={styles.informations}>¿Qué es un motor paso a paso?</Text> 
    
        <Text style={styles.information}>Es un motor eléctrico que se mueve en pasos discretos. A diferencia de los motores comunes, este permite
        tener un control preciso del ángulo de rotación, velocidad y posición. Son ampliamente usados en impresoras 3D,
        CNC, robots y más.</Text>
    
        <Text style={styles.informations}>🎯 Objetivo del Proyecto</Text>
        <Text style={styles.information}>Integrar conocimientos de electrónica, desarrollo web y bases de datos
        para simular y controlar el comportamiento de un motor paso a paso, estableciendo
        comunicación entre el hardware (Arduino) y una aplicación web moderna.</Text>

        
        <View>
        <Text style={styles.informations}>Autores:</Text>
        <View style={styles.information}>
          <Text>@Junior_gutierrezm</Text>
          <Text>@Emmanuel_fajardoc</Text>
          <Text>@Matthews_gomezm</Text>
          <Text>@Alejandro_cantillop</Text>
        </View>
        </View>
        </ScrollView>
        )                                  
  }
     
  
  const styles = StyleSheet.create({
    information:{ 
        marginTop:20,
        padding:25,
        fontSize:20,
        textAlign:'justify',
        marginBottom: 20,
        backgroundColor:'#fff',
        borderRadius:30,
        borderWidth:1,
        borderColor:'#0AC1CB'
      },
    
      informations:{
        fontSize:20,
        fontWeight:'bold', 
        textAlign: 'center'
      },
      container:{
        display:'flex',
        height:'70%',
        marginBottom:'100%',  
      },

      
  })
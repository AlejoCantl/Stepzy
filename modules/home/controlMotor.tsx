import Button from "@/components/Button";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function controlMotor(){
    return(
        <ScrollView style={styles.container}>
            <View style={styles.containerMotor}>
            <Text style={styles.text}>Motor</Text>
                  <View style={styles.filaMotor}>
                   <Button title='Derecha' />
                   <Button title='Izquierda' />
                   <Button title='Apagar' />
                  </View>
            </View>
            
                  <View style={styles.containerMotor}>
                          <Text style={styles.text}>LED</Text>
                          <View style={styles.filaLed}>
                          <Button title='LED 1'/>
                          <Button title='LED 2'/>
                          <Button title='LED 3'/>
                          </View>
                        
                        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    containerMotor:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:30,
        marginBottom:20

        

    },
    container:{
      display:'flex',
      height:'100%'
     
    },
    text:{
      fontSize:20,
      fontWeight:'bold',
      marginLeft:10,
    },
    filaMotor: {
      flexDirection: 'row',
      justifyContent: 'space-around', 
      alignItems: 'center',
      gap: 10, 
      marginVertical: 10,
      paddingBottom:25,
      
    },
    filaLed: {
      justifyContent: 'space-around', 
      alignItems: 'center',
      gap: 10, 
      marginVertical: 10,
      paddingBottom:25,
      
    },
    
  });
  
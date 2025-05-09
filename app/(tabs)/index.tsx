
import Button from '@/components/Button';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import Label from "@/components/Label";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image

          source={require('@/assets/images/home.jpg')}
          style={styles.reactLogo}
        />
      }>
      <View >
        <Text style={styles.title}>Motor Paso a Paso</Text>
      </View>
      <View style={styles.container}>

      <Text style={styles.text}>Motor</Text>
      <View style={styles.filaMotor}>
       <Button title='Derecha' />
       <Button title='Izquierda' />
       <Button title='Apagar' />

      </View>

      <View>
        <Text style={styles.text}>LED</Text>
        <View style={styles.filaLed}>
        <Button title='LED 1'/>
        <Button title='LED 2'/>
        <Button title='LED 3'/>
        </View>
      
      </View>
      </View>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({

  title:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    paddingBottom: 20,
  },

  reactLogo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  container:{
    display:'flex'
  },
  text:{
    fontSize:20,
    fontWeight:'bold'
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

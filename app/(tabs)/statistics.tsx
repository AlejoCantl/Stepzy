import { Image } from "expo-image";
import { StyleSheet, Text, View, SafeAreaView,ScrollView } from "react-native";
import Information from "@/components/Infornation";
export default function Statistics() {
  return (
    <SafeAreaView style={styles.containerS}>
          
          <View style={styles.container}>
          <View style={styles.containerImage} >
                    <Image
                    
                    style={styles.image}
                    source={require("@/assets/images/logo.png")}
                    />
                </View>
          <View style={styles.containTitle}>
            <Text style={styles.title}>Motor Paso a Paso</Text>
            <Text style={styles.p}>Informacion sobre el proyecto</Text>
          </View>
    
        <Information/>

          </View>
          
        </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  containerS:{
    display:'flex',
    height:'100%'
  },

  containerImage:{
    alignItems:'flex-end',
    justifyContent:'flex-start',
    display:'flex',
    padding: 5, // Espacio alrededor del logo

  },
  image:{
    width:150,
    height:80
  },
  containTitle:{
    marginBottom:20
  },

  title:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'left',
    paddingBottom: 5,
    marginTop:20
    
  },
  p:{
    fontSize:13,
    color:'grey',
    marginBottom:30
  },

  container:{
    display:'flex',
    margin:10
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
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
  information:{ 
    padding:10,
    fontSize:20,
  },

  informations:{
    fontSize:20,
    fontWeight:'bold', 
  },
  
});



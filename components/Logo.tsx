import { Image, StyleSheet, View } from 'react-native';
export default function logo(){
    return(
        <View>
            <Image
            source={require('@/assets/images/logo.png')}
            style={styles.image}
            resizeMode="contain"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      
    },
    image: {
      width: 250,
      height: 150,
      alignSelf: 'center',
      marginBottom: 5,
    },
  });
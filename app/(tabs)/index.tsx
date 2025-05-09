
import Label from '@/components/Label';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.reactLogo}
        />
      }>
      <View >
        <Label>Motor Paso a Paso</Label>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  
  reactLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

});

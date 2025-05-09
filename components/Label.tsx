import { StyleSheet, Text, TextProps } from 'react-native';

export default function Label(props: TextProps) {
  return <Text style={styles.label} {...props} />;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    
    textAlign: 'center',
    paddingBottom:80,
  },
});

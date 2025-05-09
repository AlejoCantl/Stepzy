import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
};

export default function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0AC1CB',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

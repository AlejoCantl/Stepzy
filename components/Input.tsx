import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export default function Input(props: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#aaa"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#0AC1CB',
    paddingHorizontal: 15,
    color: '#000',
    marginBottom: 20,
    
  },
});

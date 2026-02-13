import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.icon}>
        <Ionicons name="school" size={60} color="#7B2CBF"></Ionicons>
      </View>
      
      <Text style={styles.title}>Bem-vindo de volta</Text>
          <Text style={styles.subtitle}>Acesse sua conta do SENAI</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>ENTRAR →</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.forgotPass}>
          <Text style={styles.forgotPassText}>Esqueci minha senha</Text>
        </TouchableOpacity>

      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: '#000000',      
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 40
    
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,  
  },    
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginRight: 150,
    marginBottom: 10
  },
  subtitle: {
    color: '#666',
    marginBottom: 20,
    marginRight: 250
  },
  card: {
    backgroundColor: '#FFF',  
    width: '100%',
    padding: 25,           
    borderRadius: 15,        
    elevation: 5,             
    shadowColor: '#000',      
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  input: {
    backgroundColor: '#F9F9F9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  button: {
    backgroundColor: '#7B2CBF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPass: {
    marginTop: 20,
  },
  forgotPassText: {
    color: '#7B2CBF',
    fontWeight: '500',
    marginLeft: 200
  },
});

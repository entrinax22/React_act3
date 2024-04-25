import { StyleSheet, View,} from 'react-native';
import LoginForm from './Components/loginForm';
export default function App() {
  return (
    
      <View style={styles.container}>
        <LoginForm></LoginForm>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

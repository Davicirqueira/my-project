import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
//import Title from './src/components/Title';
//import Main from './src/components/Main';

export default function App() {
  return (
    <View>

      <Text style={styles.container}>Davi Cirqueira Nascimento</Text>
      
      <Text>444</Text>

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

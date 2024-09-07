import * as React from 'react';
import { NavigationContainer } from "react-native/navigation";
import { createNativeStackNavigator } from 'react-navigation/native-stack';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

function StudentFormScreen({ navigation }) {
  const [studentNumber, setStudentNumber] = React.useState('');
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Student Number"
        value={studentNumber}
        onChangeText={setStudentNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Surname"
        value={surname}
        onChangeText={setSurname}
      />
      <Button
        title="Submit"
        onPress={() =>
          navigation.navigate('Welcome', {
            studentNumber: studentNumber,
            name: name,
            surname: surname,
          })
        }
      />
    </View>
  );
}

function WelcomeScreen({ route }) {
  const { studentNumber, name, surname } = route.params;

  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeText}>Welcome, {name} {surname}!</Text>
      <Text style={styles.studentNumberText}>Student Number: {studentNumber}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StudentForm">
        <Stack.Screen name="StudentForm" component={StudentFormScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: '#add8e6', // Light blue background
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#98fb98', // Pale green background
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  studentNumberText: {
    fontSize: 18,
  },
});


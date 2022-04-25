import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState, useCallback } from 'react';

function Trivia() {
    return(
        <View>
            <Text>Here is your trivia question for the day:</Text>
        </View>
    )
}

function LoginApp() {
    //Sets login state.
  let [loggedIn, setLoggedIn] = useState(false)
  //Sets password state.
  let [textValue, setTextValue] = useState("")
  //Sets state of password error text.
  let [error, setError] = useState("")
  //Sets username text.
  let [text, setText] = useState("");

    let doLogin = useCallback(() => {
        if(textValue === "Ch@rge!"){
        setLoggedIn(true)
        text(setText)
        }
        else{
          setError("Wrong password, try again!");
        }
    }, [textValue])

        return (
      loggedIn ?
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Welcome, {text}!</Text>
        <Trivia></Trivia>
      </View>
      :
      <View style={styles.container}>
        <Text>Hello, please login below!</Text>
        <TextInput style={styles.input} placeholder="Username" onChangeText={setText}></TextInput>
        <TextInput onChangeText={setTextValue} style={styles.input} value={textValue} placeholder="Password"></TextInput>
        <Button title="Login" onPress={doLogin}></Button>
        <Text style={styles.errorText}>{error}</Text>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: "red",
  },
  welcomeMessage: {
    padding: 20,
    fontSize: 20,
  }
});

export default LoginApp
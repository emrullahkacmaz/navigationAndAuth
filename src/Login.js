import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { auth } from "../firebase";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  registerHandler = () => {
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((uc) => {
        if (uc.user) {
          this.props.navigation.navigate("Home", {
            user: uc.user,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  loginHandler = () => {
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((uc) => {
        if (uc.user) {
          this.props.navigation.navigate("Home", {
            user: uc.user,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  componentDidMount() {
    auth.onAuthStateChanged((uc) => {
      if (uc) {
        this.props.navigation.navigate("Home", {
          user: uc.user,
        });
      }
    });
  }

  render() {
    return (
      <View style={{ paddingTop: 150 }}>
        <TextInput
          value={this.state.email}
          onChangeText={(text) => {
            this.setState({
              email: text,
            });
          }}
          style={this.styles.txtInput}
        ></TextInput>
        <TextInput
          value={this.state.password}
          onChangeText={(text) => {
            this.setState({
              password: text,
            });
          }}
          style={this.styles.txtInput}
        />
        <View style={this.styles.buttonGroup}>
          <TouchableOpacity
            style={this.styles.buttonContainer}
            onPress={this.registerHandler}
          >
            <Text style={this.styles.buttonText}>Kayıt</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={this.styles.buttonContainer}
            onPress={this.loginHandler}
          >
            <Text style={this.styles.buttonText}>Giriş</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    txtInput: {
      borderWidth: 2,
      borderColor: "black",
      backgroundColor: "white",
      borderRadius: 5,
      height: 35,
      paddingLeft: 5,
      margin: 10,
    },
    buttonContainer: {
      borderColor: "black",
      borderWidth: 2,
      backgroundColor: "white",
      borderRadius: 5,
      height: 35,
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
    },
    buttonGroup: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
  });
}

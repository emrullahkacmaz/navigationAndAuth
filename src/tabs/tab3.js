import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { auth } from "../../firebase";
export default class Tab3 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <TouchableOpacity
        style={
          {
            backgroundColor:"white",
            borderColor:"black",
            borderWidth:2,
            height:35,
            justifyContent:"center",
            alignItems:"center"
          }
        }
          onPress={() => {
            auth
              .signOut()
              .then((response) => {
                this.props.navigation.navigate("Login");
              })
              .catch((error) => error.message);
          }}
        >
          <Text>Çıkış</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

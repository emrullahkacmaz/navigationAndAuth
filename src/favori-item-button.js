import React, { Component } from "react";
import { View, Text, Button } from "react-native";
export default class FavoriItemButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
       <Button title="Favori Ekle" onPress={()=>{
           console.log(this.props.urunId);
           console.log("Favorilere eklendi");
           this.props.navigation.navigate("Home",{screen:"Tab2"})
       }}></Button>
      </View>
    );
  }
}

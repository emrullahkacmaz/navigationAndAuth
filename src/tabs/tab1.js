import React, { Component } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { auth, fireStore } from "../../firebase";
import FavoriItemButton from "../favori-item-button";


export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urunler: [],
    };
  }


  componentDidMount() {
    fireStore
      .collection("urunler")
      .get()
      .then((response) => {
        var data = [];
        response.forEach((x) => {
          data.push(x.data());
        });
        this.setState({
          urunler: data,
        });

        console.log(this.state.urunler);
      })
      .catch((error) => console.log(error));
  }

  renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          borderWidth: 2,
          borderColor: "black",
          backgroundColor: "white",
          margin: 10,
        }}
      >
        <View style={{flex:1}}>
          <Image
            source={{ uri: item.resim }}
            style={{
              width: 100,
              height: 100,
              borderWidth: 2,
              borderColor: "#838383",
              margin: 5,
              marginRight: 15,
              borderRadius: 5,
            }}
          ></Image>
        </View>
        <View style={{flex:2}}>
          <Text style={{ fontWeight: "bold", color: "#424349" }}>
            {item.urunAdi}
          </Text>
          <Text>{item.urunAciklama}</Text>
          <View style={{alignItems:"flex-end", justifyContent:"flex-end"}}>
            <Text>{item.fiyat}</Text>
          </View>
          <View style={{}}>
            <FavoriItemButton urunId={item.urunId} />
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        renderItem={this.renderItem}
        data={this.state.urunler}
      ></FlatList>
    );
  }
}

import React, { Component } from "react";
import { View, Text } from "react-native";
import FavoriItemButton from "../favori-item-button";
export default class Tab2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
            <FavoriItemButton urunId={this.props.route.urunId} />
      </View>
    );
  }
}

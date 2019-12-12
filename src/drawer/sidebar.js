import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {Actions } from 'react-native-router-flux';
export default class SideBar extends Component {
    render() {
        const { onClose } = this.props;
        return (
            <View style={{ 
                flex: 1, 
                backgroundColor: 'blue', 
                justifyContent: 'center' 
            }}>
                <TouchableOpacity onPress={() => Actions.SceneOne()}>
                    <Text>Scene 1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.SceneTwo()}>
                    <Text>Scene 2</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
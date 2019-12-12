import React, { Component } from 'react';
import { Text, StatusBar, TouchableOpacity } from 'react-native';
import { Header } from 'native-base';
export default class HeaderComponent extends Component {
    render() {
        const { onOpen } = this.props;
        return (
            <Header style={{ marginTop: StatusBar.currentHeight }}>
                <TouchableOpacity onPress={onOpen}>
                    <Text>Open drawer</Text>
                </TouchableOpacity>
                <Text>{this.props.title}</Text>
            </Header>
        );
    }
}
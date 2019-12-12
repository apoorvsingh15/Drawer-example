import React, { Component, Fragment } from 'react';
import { Text, View } from 'react-native';
import {Drawer} from 'native-base';
import HeaderComponent from '../header';
import SideBar from '../drawer/sidebar';
export default class SceneOne extends Component {

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => { this.drawer._root.open() };

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar onClose={this.closeDrawer} />}
        onClose={() => this.closeDrawer()}
      >
        <View>
          <HeaderComponent title={'Scene1'} onOpen={this.openDrawer} />
          <Text>Scene One</Text>
        </View>
      </Drawer>

    )
  }
}

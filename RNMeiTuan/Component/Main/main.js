/**
 * Created by caiiiac on 2017/9/23.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Home from '../Home/home';
import Mine from '../Mine/mine';
import Merchant from '../Merchant/merchant';


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    title="团购"
                    renderIcon={() => <Image source={{uri: 'tabbar_homepage'}} style={styles.iconStyle} />}
                    renderSelectedIcon = { () => <Image source={{ uri: 'tabbar_homepage_selected'}} style={styles.iconStyle} />}
                    selected={ this.state.selectedTab === 'home'}
                    selectedTitleStyle={ styles.selectedTitleStyle }
                    onPress={() => this.setState({ selectedTab: 'home'})}


                >
                    <Home/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="附近"
                    renderIcon={() => <Image source={{uri: 'tabbar_merchant'}} style={styles.iconStyle} />}
                    renderSelectedIcon = { () => <Image source={{ uri: 'tabbar_merchant_selected'}} style={styles.iconStyle} />}
                    selected={ this.state.selectedTab === 'merchant'}
                    selectedTitleStyle={ styles.selectedTitleStyle }
                    onPress={() => this.setState({ selectedTab: 'merchant'})}
                >
                    <Merchant/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="我的"
                    renderIcon={() => <Image source={{uri: 'tabbar_mine'}} style={styles.iconStyle} />}
                    renderSelectedIcon = { () => <Image source={{ uri: 'tabbar_mine_selected'}} style={styles.iconStyle} />}
                    selected={ this.state.selectedTab === 'mine'}
                    selectedTitleStyle={ styles.selectedTitleStyle }
                    onPress={() => this.setState({ selectedTab: 'mine'})}
                >
                    <Mine/>
                </TabNavigator.Item>

            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    iconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25,
    },
    selectedTitleStyle: {
        color: '#52BEAE'
    },

});
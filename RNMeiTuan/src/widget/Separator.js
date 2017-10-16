/**
 * Created by caiiiac on 2017/10/16.
 */


import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import color from './color'
import { screen, system, tool } from '../common'

class Separator extends PureComponent {
    render() {
        return (
            <View style={[ styles.line, this.props.style ]} />
        );
    }
}

const styles = StyleSheet.create({
    line: {
        width: screen.width,
        height: screen.onePixe,
        backgroundColor: color.border,
    },
});

export default Separator;
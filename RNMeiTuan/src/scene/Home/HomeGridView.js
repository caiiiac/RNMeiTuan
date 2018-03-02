/**
 * Created by caiiiac on 2018/3/2.
 */

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { color } from '../../widget'
import { screen, system, tool } from '../../common'
import HomeGridItem from './HomeGridItem'

class HomeGridView extends PureComponent {
    static defaultProps = {
        infos: []
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.info.map((info, index) => (
                    <HomeGridItem
                        info={info}
                        key={index}
                        onPress={() => this.props.onGridSelected(index)} />
                ))}
            </View>
        );
    }
}

const styles = SytleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderTopWidth: screen.onePixe,
        borderLeftWidth: screen.onePixe,
        borderColor: color.border
    },
});

export default HomeGridView;
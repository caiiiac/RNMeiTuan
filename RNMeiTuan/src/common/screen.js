/**
 * Created by caiiiac on 2017/10/11.
 */

import { Dimensions, Platform, PixelRatio} from 'react-native'

export default {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    onePixe: 1 / PixelRatio.get(),
    statusBarHeight: (Platform.OS === 'ios' ? 20 : 0)
}
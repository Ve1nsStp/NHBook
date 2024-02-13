/**
 * @description: 项目入口文件
 */

import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import AppRoot from './src/AppRoot'

AppRegistry.registerComponent(appName, () => AppRoot)

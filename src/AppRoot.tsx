/**
 * @author Sora
 * @filename AppRoot.tsx
 * @date 2024-02-13 Tuesday
 * @description 全局顶层组件
 */
import {PaperProvider} from 'react-native-paper'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import AppNavigator from './navigator/AppNavigator.tsx'
import {Button} from 'react-native'

const AppRoot = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PaperProvider>
        <AppNavigator></AppNavigator>
        <Button title={'按钮'}></Button>
      </PaperProvider>
    </GestureHandlerRootView>
  )
}

export default AppRoot

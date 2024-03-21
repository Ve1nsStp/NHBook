/**
 * @author Sora
 * @filename AppRoot.tsx
 * @date 2024-02-13 Tuesday
 * @description 全局顶层组件
 */
import {View} from 'react-native'
import {PaperProvider} from 'react-native-paper'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

const AppRoot = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PaperProvider>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'pink',
          }}></View>
      </PaperProvider>
    </GestureHandlerRootView>
  )
}

export default AppRoot

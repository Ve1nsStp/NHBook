/**
 * @author Sora
 * @filename AppNavigator.tsx
 * @date 2024-02-13 Tuesday
 * @description 全局路由配置
 */
import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
    </NavigationContainer>
  )
}

export default AppNavigator

/**
 * @author Sora
 * @filename AppNavigator.tsx
 * @date 2024-02-13 Tuesday
 * @description 全局路由配置
 */
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from 'react-native-screens/native-stack'
import Home from '../home/Home.tsx'
import News from '../news/News.tsx'
import {Button, Text, View} from 'react-native'

const Stack = createNativeStackNavigator()
const AppNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='News' component={News} />
        </Stack.Navigator>
      </NavigationContainer>
      <View>
        <Text>2121</Text>
      </View>
    </>
  )
}

export default AppNavigator

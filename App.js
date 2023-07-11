import { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DangKy from './compement/DangKy';
import DangNhap from './compement/DangNhap';
import HomeScreen from './compement/HomeScreen';
import TinTuc from './compement/TinTuc';
import CaNhan from './compement/CaNhan';
import HeaderBack from './compement/HeaderBack';
const StackMain = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;


        if (route.name === 'HomeScreen') {
          iconName = focused
            ? 'planet'
            : 'planet-outline';
        } else if (route.name === 'Tintuc') {
          iconName = focused
            ? 'newspaper'
            : 'newspaper-outline';
        } else if (route.name === 'CaNhan') {
          iconName = focused ? 'person' : 'person-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />
          ;
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'black',
      tabBarIconStyle: { width: 150, height: 150 }
    })}

    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, tabBarShowLabel: false }} />
      <Tab.Screen name="Tintuc" component={TinTuc} options={{ headerShown: false, tabBarShowLabel: false }} />
      <Tab.Screen name="CaNhan" component={CaNhan} options={{ headerShown: false, tabBarShowLabel: false }} />
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <StackMain.Navigator initialRouteName='DangNhap'>
        <StackMain.Screen name='DangNhap' component={DangNhap} options={{ headerShown: false }} />
        <StackMain.Screen name='ManHinhChinh' component={MyTabs} options={{ headerShown: false }} />
        <StackMain.Screen name='ManhinhDangKy' component={DangKy} options={{
          title: "DangNhap",
          header: (props) => <HeaderBack title="DangNhap" navigation={props.navigation} />
        }} />
        {/* viết tiếp các màn hình khác vào đây */}
      </StackMain.Navigator>
    </NavigationContainer>

  )
}
export default App;


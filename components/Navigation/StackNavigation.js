import {createNativeStackNavigator} from '@react-navigation/native-stack'
import{NavigationContainer} from '@react-navigation/native'
import SearchBAr from '../Screens/SearchBar';
import MyMain from '../Screens/MyMain';
const StackNav = () => {
    const Stack=createNativeStackNavigator();
    return ( 
        <NavigationContainer>
        <Stack.Navigator  screenOptions={{
            headerStyle: {
            backgroundColor: 'grey',
            },
            headerTintColor: '#fff',
            headerTitleAlign:'center',
            headerShown:false,
            
            headerTitleStyle: {
            fontWeight: 'bold',
            },
            
            }}>
            <Stack.Screen  name='Search' component={SearchBAr}/>
            <Stack.Screen name='MyMain' component={MyMain}/>
            
        </Stack.Navigator>
    </NavigationContainer>
     );
}
 
export default StackNav;
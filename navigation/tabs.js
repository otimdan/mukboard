import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import EntScreen from '../screens/EntScreen';
import PrayerScreen from '../screens/PrayerScreen';
import HallScreen from '../screens/HallScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const homeName = 'Home'
const entName = 'ent'
const prayerName = 'prayer'
const hallName = 'hall'
const iconColor = 'green'

const Tab = createBottomTabNavigator();

const Tabs =() => {
  return (
    <Tab.Navigator
        screenOptions={({route}) => ({
            headerShown:false,
              tabBarStyle: {
                        position: 'absolute',
                        bottom: 25,
                        left: 20,
                        right: 20,
                        elevation: 0,
                        backgroundColor: '#ffffff',
                        borderRadius: 40,
                        height: 50,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        shadowColor: '#000',
                        shadowOffset: { 
                            width: 0 , 
                            height: 2 
                        } ,
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84, 
                        elevation: 5
             }
        })}
        initialRouteName={homeName}
    >
        <Tab.Screen 
            name={homeName} 
            component={HomeScreen} 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({color, size, focused}) => (
                    <Ionicons name={focused ? 'home' : 'home-outline'} color={iconColor} size={size} />
                )
            }}
        />
        <Tab.Screen 
            name={entName} 
            component={EntScreen} 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({color, size, focused}) => (
                    <Ionicons name={ focused ? 'game-controller' : 'game-controller-outline'} color={iconColor} size={size} />
                )
            }}
        />
        <Tab.Screen 
            name={prayerName} 
            component={PrayerScreen} 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({color, size, focused}) => (
                    <Ionicons name={focused ? 'book' : 'book-outline'} color={iconColor} size={size} />
                )
            }}
        />
        <Tab.Screen 
            name={hallName}
            component={HallScreen} 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({color, size, focused}) => (
                    <Ionicons name={focused ? 'bed' : 'bed-outline'} color={iconColor} size={size} />
                )
            }}
        />
    </Tab.Navigator>
  );
}

export default Tabs;
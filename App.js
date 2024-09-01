import React ,{useEffect}from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons'
import ChatList from "./screens/ChatList";
import Settings from "./screens/Settings";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Chat from "./screens/Chat";
import { Provider } from "react-native-paper";
import firebase from "firebase/compat/app";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCHyAO8ijlChlGNGLqZ7feVeDzykat7MgU",
  authDomain: "chatapp-6ad88.firebaseapp.com",
  projectId: "chatapp-6ad88",
  storageBucket: "chatapp-6ad88.appspot.com",
  messagingSenderId: "275985212083",
  appId: "1:275985212083:web:e66a03bb63fd1c809dc6c6"
};
firebase.initializeApp(firebaseConfig)


//stack navigator oluşturuluyor
const Stack= createNativeStackNavigator();
//Tab navigator oluşturuluoy
const Tabs=createBottomTabNavigator()

//tabs navigator fonksiyorunu sekmeli gezintiyi tanımlar
const TabsNavigator =()=>{
   const navigation=useNavigation()
  useEffect(()=>{

    firebase.auth().onAuthStateChanged((user)=>{
      if(!user){
        navigation.navigate("SignUp")
      }
    },[])
    const isLoggedIn=false
    if(!isLoggedIn){
      navigation.navigate("SignUp")


    }
  },[])
  
  return(
    <Tabs.Navigator
    screenOptions={({route})=>({
      //her sekme için ikon ayarı
      tabBarIcon:({focused,color,size})=>{
        let iconName;
        //aktif sekmeye göre ikon adı belirlenir.
        if(route.name==='ChatList'){
          iconName=focused ? 'chatbubbles' : 'chatbubbles-outline';

        }else if(route.name==='Settings'){
          iconName=focused ? 'settings': 'settings-outline'
        }
        //ikonu döndür
        return <Ionicons name={iconName} size={size} color={color}/>
      },
      //aktif ve inaktif sekme renkelri
      tabBarActiveTintColor:'tomato',
      tabBarInactiveTintColor:'gray',
    })}
    >
      {/*Tab ekranlarını tanımlayın */}
      <Tabs.Screen name="ChatList" component={ChatList}/>
      <Tabs.Screen name="Settings" component={Settings}/>
    </Tabs.Navigator>
  )
}
//uygulamanın ana bileşeni

const App =()=>{
  return(
    <NavigationContainer>
      <Provider>
            {/* Stack Navigator oluşturuluyor ve TabsNavigator ana ekran olarak tanımlanıyor */}
<Stack.Navigator>
  <Stack.Screen name="Main" component={TabsNavigator} options={{headerShown:false}}/>
  <Stack.Screen name="Chat" component={Chat}/>
  <Stack.Screen name="SignUp" component={SignUp} options={{presentation:"fullScreenModal"}}/>

  <Stack.Screen name="SignIn" component={SignIn} options={{presentation:"fullScreenModal"}}/>

</Stack.Navigator>
</Provider>
    </NavigationContainer>
  )
}
export default App;
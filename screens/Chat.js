import { useRoute } from "@react-navigation/native";
import React ,{useEffect}from "react";
import { Text } from "react-native";
import firebase from "firebase/compat/app";

const Chat =()=>{
    const route=useRoute()
    useEffect(()=>{
        firebase.firestore().doc('chats/'+route.params.chatId)
    })


    return(
        <Text>hi,Chat</Text>
    )
}
export default Chat; 
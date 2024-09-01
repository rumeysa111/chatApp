import { useNavigation } from "@react-navigation/native";
import React ,{useState}from "react";
import { Text, View } from "react-native";
import { Button, Subheading, TextInput } from "react-native-paper";
import firebase from "firebase/compat/app";

import 'firebase/compat/auth'

const SignIn =()=>{
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState('')
    const navigation=useNavigation()
    const signInFunc=async()=>{
        setIsLoading(true)
        try {
          await   firebase.auth().signInWithEmailAndPassword(email,password)
            navigation.popToTop()
        } catch (error) {
            setIsLoading(false)
            setError(error.message)

        }
    }

    return(
        <View style={{marginTop:16}}>
            {!!error &&
        <Subheading style={{color:'red',textAlign:"center",marginBottom:16}}>{error}</Subheading>}
        <TextInput style= {{marginTop:16}} label="Email" value={email} onChangeText={(text)=>setEmail(text)} keyboardType="email-address"/>
        <TextInput  style= {{marginTop:16}} label="Şifre" value={password} onChangeText={(text)=>setPassword(text)}/>
        <Button  style= {{marginTop:16}} mode="contained" onPress={()=>signInFunc()} loading={isLoading}>Sign In</Button>
        </View>
       

    )
}
export default SignIn; 
import React,{useState} from "react";
import { Text,View } from "react-native";
import { Button, TextInput ,Subheading} from "react-native-paper";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import { useNavigation } from "@react-navigation/native";
import SignIn from "./SignIn";
const SignUp =()=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')

    const [password,setPassword]=useState('')

    const [passwprdAgain,setPasswordAgain]=useState('')

    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState('')
    const navigation=useNavigation()
    const createAccount=async ()=>{
        setIsLoading(true)
       try {
        const response=await firebase.auth().createUserWithEmailAndPassword(email,password);

        await response.user.updateProfile({displayName:name})
        navigation.popToTop();//açık olan ekranı kapatıyor

        
       } catch (error) {
        setIsLoading(false)
        setError(error.message)
        alert(error.message)
       }


    }

    return(
       <View style={{margin:16}}>
        {!!error &&
        <Subheading style={{color:'red',textAlign:"center",marginBottom:16}}>{error}</Subheading>}
          <TextInput
          label="Name"
          value={name}
          onChangeText={(text)=>setName(text)}
            style={{marginTop:12}}/>
      <TextInput     label="Email"
          value={email}
          onChangeText={(text)=>setEmail(text)} style={{marginTop:12}}/>
      <TextInput     label="Password"
          value={password}
          onChangeText={(text)=>setPassword(text)} style={{marginTop:12}} secureTextEntry />
      <TextInput     label="Password Again"
          value={passwprdAgain}
          onChangeText={(text)=>setPasswordAgain(text)}  style={{marginTop:12}} secureTextEntry />
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:16}}>
        <Button compact onPress={()=>navigation.navigate("SignIn")} >Sign in</Button>
        <Button mode="contained" onPress={()=>createAccount()}
            loading={isLoading}>Sign Up</Button>{/*arka plan rengini mor yapıyot */}
    </View>  





       </View>
    )
}
export default SignUp; 
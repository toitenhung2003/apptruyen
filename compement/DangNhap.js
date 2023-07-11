
import React from 'react'
import styles from './Style'
import {Text, TextInput, TouchableOpacity, View,Image } from 'react-native';
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
const DangNhap = (props) => {
  const [username, setusername] = useState("");
  const [passwords, setpasswords] = useState("");
  const dologin = () => {
    // kiểm tra hợp lệ dữ liệu
    if (username.length == 0) {
      alert("Chưa nhập username");
      return;
    }
    if (passwords.length == 0) {
      alert("Chưa nhập pass");
      return;
    }
    // thực hiện fetch để lấy dữ liệu về
    let url_check = "http://63e3a2de619fce55d41d9dab.mockapi.io/user/userr?username=" + username;
    fetch(url_check)
      .then((res) => { return res.json(); })
      .then(async (res_login) => {
        if (res_login.length != 1) {
          alert("Sai user hoặc lỗi trùng lặp dữ liệu");
          return;
        }
        // số lượng lấy đc 1 bản ghi ==> kiểm tra pass
        let objU = res_login[0];
        if (objU.password!=passwords) {
           alert("Sai mật khẩu");
          return;
        }
        // đúng pass lưu thông tin
        try {
          await AsyncStorage.setItem('loginInfor', JSON.stringify(objU));
          props.navigation.navigate('ManHinhChinh');
        } catch (e) {
          // saving error
          console.log(e);
        }

      }).catch((err) => {
        alert(err);
      })
  }

  return (
    <View style={styles.container}>
      <View>
        
        <TextInput style ={styles.textinput} placeholder='Email' placeholderTextColor={'#636e72'} onChangeText={(txt)=>setusername(txt)}></TextInput>
        <TextInput style ={styles.textinput} placeholder='Password' placeholderTextColor={'#636e72'} onChangeText={(txt)=>setpasswords(txt)} textContentType='password' secureTextEntry={true}></TextInput>
        <TouchableOpacity style={styles.ButtonDN} onPress={dologin} >
          <Text style={{color:'white',fontSize:17,fontWeight:'bold'}}  >Login</Text>
        </TouchableOpacity>
        <View style={{alignItems:'center'}}>
        <Text style={{color:'#636e72',fontWeight:'bold'}}>or</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize:15,color:'#636e72',fontWeight:'bold'}} onPress={()=>{props.navigation.navigate('ManhinhDangKy')}}>Create Account</Text>
        </View>
      </View>
    </View>
  )
}

export default DangNhap;
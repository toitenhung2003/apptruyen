import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import styles from './Style'
import { useState } from 'react'
const DangKy = (props) => {
  const [tentg, settentg] = useState("");
  const [email, setemail] = useState("");
  const [passwords, setpasswords] = useState("");
  const [repass, setrepass] = useState("");
  const themTK = () => {

    if (email.length == 0) {
      alert("Bạn chưa điền email");
      return;
    }
    if (passwords.length == 0) {
      alert("Bạn chưa nhập mật khẩu");
      return;
    }
    if (repass.length == 0) {
      alert("Bạn chưa nhập lại mật khẩu");
      return;
    }
    if (tentg.length == 0) {
      alert("Bạn chưa điền tên tài khoản");
      return;
    }
    if (repass != passwords) {
      alert("password nhập lại không đúng");
      return;
    }
    let url_check = "http://63e3a2de619fce55d41d9dab.mockapi.io/user/userr?username=" + email;
    fetch(url_check)
      .then((res) => { return res.json(); })
      .then((res_login) => {
        if (res_login.length == 1) {
          alert("Tài khoản đã tồn tại");
          return;
        }
        // số lượng lấy đc 1 bản ghi ==> kiểm tra pass
        let objBV = {username:email,password:passwords,nametg:tentg};
        let url_api = 'http://63e3a2de619fce55d41d9dab.mockapi.io/user/userr';
        fetch(url_api, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(objBV)
        })
          .then((res) => {
            if (res.status == 201)
              alert("Thêm thành công")
          })
          .catch((ex) => {
            console.log(ex);
          });
          setTimeout(() => {
            props.navigation.navigate('DangNhap');
        }, 3000);

      }).catch((err) => {
        alert(err);
      })

  }
  return (
    <View style={styles.container}>
      <View>
        
        <TextInput style={styles.textinput} placeholder='Email' placeholderTextColor={'#636e72'} onChangeText={(txt) => setemail(txt)}></TextInput>
        <TextInput style={styles.textinput} placeholder='Password' placeholderTextColor={'#636e72'} onChangeText={(txt) => setpasswords(txt)} textContentType='password' secureTextEntry={true}></TextInput>
        <TextInput style={styles.textinput} placeholder='Repassword' placeholderTextColor={'#636e72'} onChangeText={(txt) => setrepass(txt)} textContentType='password' secureTextEntry={true}></TextInput>
        <TextInput style={styles.textinput} placeholder='Tên tài khoản' placeholderTextColor={'#636e72'} onChangeText={(txt) => settentg(txt)}></TextInput>
        <TouchableOpacity style={styles.ButtonDN} onPress={themTK} >
          <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }} >Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DangKy
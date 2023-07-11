import { View, Text, SafeAreaView,StyleSheet,Image,FlatList } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const CaNhan = () => {
  const [loginInfo, setloginInfo] = useState('');
  const [ten, setten] = useState('');
  const [email, setemail] = useState('');
  const [baiviet, setbaiviet] = useState([]);
  var idLoginInfor ="";
  const getLoginInfo = async () => {
    try {
      const value = await AsyncStorage.getItem('loginInfor')
      if (value !== null) {
        // lấy được dữ liệu
        setloginInfo(JSON.parse(value));
        idLoginInfor += JSON.parse(value).id;
        console.log(idLoginInfor);
        getBaiViet();
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  }
  
  React.useEffect(() => {
    getLoginInfo();
  },[])


  const getBaiViet = async () => {
    
    let url_api = 'http://63e3a2de619fce55d41d9dab.mockapi.io/user/userr?id=' + idLoginInfor;
    try {
      const response = await fetch(
        url_api
      );// loading dữ liệu
      const json = await response.json();// chuyển dữ liệu thành json
      // console.log(loginInfo.id);
      setbaiviet(json); // đổ dữ liệu vào state
      // console.log(baiviet);
    } catch (error) {
      setbaiviet(null)
    } finally {

      // kết thúc quá chình load dữ liệu, kể cả lỗi cũng gọi vào lệnh trong này
      // setisLoading(false);
    }
  };

  const renderProduct = ({ item }) => {
    return (
      <View style={{marginTop: 30}}>
         <View style={{flexDirection:'row'}}>
          <Text style={{color:'#ecf0f1', fontWeight:'bold',fontSize:17}}>Email: </Text>
          <Text style={{color:'#ecf0f1', fontWeight:'bold',fontSize:17}}>{item.username}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{color:'#ecf0f1', fontWeight:'bold',fontSize:17}}>Tên: </Text>
          <Text style={{color:'#ecf0f1', fontWeight:'bold',fontSize:17}}>@{item.nametg}</Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor:'#34495e',flex:1,alignItems:'center'}}>
      <Image style={{ width: 170, height: 170, resizeMode: 'contain',borderRadius:150, marginTop:100}} source={require('./zennit.jpg')} />
      <FlatList  data={baiviet} keyExtractor={(item_sp) => {
          return item_sp.id
        }} renderItem={renderProduct} />
      </View>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF',
  },
});

export default CaNhan
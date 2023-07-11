import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput:{
        borderWidth:0.3,
        padding:13,
        height:50,
        width:350,
        borderRadius:5,
        margin:5,
        backgroundColor:'rgba(52, 52, 52, 0.1)',
        borderColor:'#7f8c8d',
        borderTopWidth:0.3
    },
    ButtonDN:{
        alignItems: 'center',
        padding:13,
        height:50,
        width:350,
        borderRadius:20,
        marginTop:25,
        margin:5,
        backgroundColor:'#3498db',
    },
    img:{
      width:190,
      height:40,
      marginBottom:30,
      marginLeft:80
    },
    headrs:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:40
    },
    itemnav:{
      flexDirection:'row',
      justifyContent:'space-between',
    }
  });
export default styles; 
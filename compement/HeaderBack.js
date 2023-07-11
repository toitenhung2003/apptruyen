import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderBack = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons style={{ marginTop: 40, marginLeft: 8 }} name="arrow-back-outline" size={30} color="#000" />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderBack
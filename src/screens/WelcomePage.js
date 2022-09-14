import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity,SafeAreaView } from 'react-native'

const img1 = require('../../assets/breakfast.jpg')
const img2 = require('../../assets/fried icecream.jpg')
const img3 = require('../../assets/dinner.jpg')
const img4 = require('../../assets/juice.jpg')
const img5 = require('../../assets/lunch.jpeg')

const WelcomePage = () => {

const navigate =useNavigation();
    const navigateToRegister=()=>{
        navigate.replace("HomeB");
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F5E0E0", width: "100%" ,height:'100%'}}>
            <View>
                <Text style={{ color: "black", padding: 5, fontSize: 20, fontWeight: "800", }}>Welcome To Foddies</Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 10, }}>
                <Image source={img1} style={{ height: 200, width: '90%' }}></Image>
                <TouchableOpacity  >
                    <Text style={{ fontWeight: 800, fontSize: 20 }}>BreakFast</Text>
                </TouchableOpacity>

            </View>
            <View style={{ alignItems: 'center', marginTop: 10, }}>
                <Image source={img5} style={{ height: 200, width: '90%' }}></Image>
                <TouchableOpacity>
                    <Text style={{ fontWeight: 800, fontSize: 20 }}>Lunch</Text>
                </TouchableOpacity>

            </View>
            <View style={{ alignItems: 'center',  }}>
                <Image source={img3} style={{ height: 200, width: '90%' }}></Image>
                <TouchableOpacity>
                    <Text style={{ fontWeight: 800, fontSize: 20 }}>Dinner</Text>
                </TouchableOpacity>

            </View>
            <View style={{ alignItems: 'center',  }}>
                <Image source={img2} style={{ height: 200, width: '90%' }}></Image>
                <TouchableOpacity>
                    <Text style={{ fontWeight: 800, fontSize: 20 }}>Dessert</Text>
                </TouchableOpacity>

            </View>
            <View style={{ alignItems: 'center', }}>
                <Image source={img4} style={{ height: 200, width: '90%' }}></Image>
                <TouchableOpacity onPress={navigateToRegister}>
                    <Text style={{ fontWeight: 800, fontSize: 20 }}>juice</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>

    )
}

export default WelcomePage

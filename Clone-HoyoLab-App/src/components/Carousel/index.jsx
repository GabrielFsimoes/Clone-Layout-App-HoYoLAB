import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
    {
        key: '1',
        text:'descrição mega incrivel sobre o evento',
        image: require('../../assets/scaramouche.webp')
    },
    {
        key: '2',
        text:'descrição mega incrivel sobre o evento',
        image: require('../../assets/yaeMiko.webp')
    },
    {
        key: '3',
        text:'descrição mega incrivel sobre o evento',
        image: require('../../assets/Layla.webp')
    },
];

export const Carrousel = () =>{
    function renderSlides({ item }){
        return(
            <View  style={{
                flex:1
              }}>
                <Image source= {item.image}
                style={{
                    resizeMode: 'cover',
                    height: 150,
                    width: 418,
                }}
                />
                <Text  style={{
                  fontSize: 18
                }}>
                    {item.text}
                </Text>
            </View>
        )
    }

    return (
        <>
        <AppIntroSlider
        renderItem={ renderSlides}
        data={slides}
        activeDotStyle={{
            backgroundColor: '#009Cff',
            width: 30,
        }}
        />
        </>
    )
}
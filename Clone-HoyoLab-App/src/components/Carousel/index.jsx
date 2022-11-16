import React from 'react';
import { Text, View, Image } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
    {
        key: '1',
        text:'',
        image: require('../../assets/scaramouche.webp')
    },
    {
        key: '2',
        text:'',
        image: require('../../assets/yaeMiko.webp')
    },
    {
        key: '3',
        text:'Lançamento nova Personagem Layla',
        image: require('../../assets/Layla.webp')
    },
];

export const Carrousel = () =>{
    function renderSlides({ item }){
        return(
            <View  style={{
                flex:1,
                backgroundColor:'#0c0f1d',
                height:170,
                marginTop:5,
                alignItems:'center',
                justifyContent:'center'
              }}>
                <Image source= {item.image}
                style={{
                    resizeMode: 'cover',
                    height: 100,
                    width: "95%",
                    borderRadius:10
                }}
                />
                <Text  style={{
                  fontSize: 18,
                  color: "#fff",
                  position: 'absolute',
                  bottom:30,
                  left:25,
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
        dotStyle={{
            backgroundColor: '#82838a',
            marginTop:50,
            height:5,
            width: 5,
        }}
        activeDotStyle={{
            backgroundColor: '#657ef8',
            height:5,
            width: 25,
            marginTop:50,
        }}
        showNextButton={false}
        showDoneButton={false}
        />
        </>
    )
}
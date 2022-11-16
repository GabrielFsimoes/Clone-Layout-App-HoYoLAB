import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

export function CardPost({item}){
    const [isTrue, setIsTrue] = useState(true)
    const [like, setLike] = useState(true)

    const handlePress = () => {
          setIsTrue(!isTrue)
        }
    const handleLike = () => {
        setLike(!like)
        }

    return(
        <View style={styles.container}>
            <View style={styles.userInfoContainer}>
                <View style={styles.userInfoContainer}>
                <Image source={{uri: item.avatar }}
                style={{height: 50,width: 50,
                    borderRadius:100, marginRight:10
                }}/>
                <View>
                <Text style={styles.name}>
                    {item.nome}
                </Text>
                <Text style={styles.descricao}>2h atrás Genshin impact</Text>
                </View>
                </View>
                <TouchableOpacity  onPress={() => handlePress()}>
                {isTrue ?
                <Text style={styles.fontBtn}>Seguir</Text> : <Text style={styles.fontBtnS}>Seguindo</Text>}
                </TouchableOpacity>
            </View>
            <View >
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
            </View>
            <View style={styles.conteudo}>
            <Image source={{uri: item.imagens }}
            style={{resizeMode: 'contain', height: 170,width: "50%",
                borderRadius: 5
            }}/>
            <Image source={{uri: item.imagem2 }}
            style={{resizeMode: 'contain', height: 170,width: "50%",
                borderRadius: 5
            }}/>
            </View>
            <View style={styles.tags}>
                <Text style={styles.tag}>
                {item.tag}
                </Text>
            </View>
                <View style={styles.postInfo}>
                <View style={styles.postInfo}>
                <Image style={styles.postIcons} source={ require('../../assets/eye.png')} />
                <Text style={styles.descricao}>42 mil</Text>
                </View>
                <View style={styles.postInfo}>
                <Image style={styles.postIcons} source={ require('../../assets/coments.png')} />
                <Text style={styles.descricao}>15 mil</Text>
                </View>
                <TouchableOpacity onPress={() => handleLike()} style={styles.postInfo}>
                {like ? 
                <View style={{flexDirection:'row', alignItems:"center"}}>
                    <Image style={styles.postIcons} source={ require('../../assets/Like.png')}/> 
                    <Text style={styles.descricao}>22 mil</Text>
                </View> :
                <View style={{flexDirection:'row', alignItems:"center"}}>
                    <Image style={styles.postIcons} source={ require('../../assets/liked.png')}/> 
                    <Text style={{color:"#657ef8", fontSize: 12}}>22 mil</Text>
                </View>
                }
                </TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1b1d2a',
        height:"100%",
        width:"97%",
        margin:8,
        borderRadius:18
    },
    userInfoContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:5
    },
    name:{
        color: '#fff',
        fontSize: 17,
        fontWeight: '500',
    },
    titulo:{
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
        marginBottom:5
    },
    descricao:{
        color: '#afb0b5',
        fontSize: 12,
        
    },
    fontBtn:{
        color:"#657ef8",
        fontSize: 12,
        fontWeight: 'bold',
        backgroundColor:"#363f7e",
        borderRadius: 50,
        width:110,
        padding:5,
        textAlign:'center',
        margin:2
    },
    fontBtnS:{
        color:"#afb0b5",
        fontSize: 12,
        fontWeight: 'bold',
        backgroundColor:"#3134418E",
        borderRadius: 50,
        width:110,
        padding:5,
        textAlign:'center',
        margin:2
    },
    conteudo:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        margin:4
    },
    tags:{
        flex:1,
        flexDirection:'column',
    },
    tag:{
        color:"#657ef8",
        fontSize:12,
        marginLeft:5
    },
    postInfo:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
        padding: 7
    },
    postIcons:{
        width:25,
        height:25,
        marginRight:5,
        alignItems:"center"
    }

});
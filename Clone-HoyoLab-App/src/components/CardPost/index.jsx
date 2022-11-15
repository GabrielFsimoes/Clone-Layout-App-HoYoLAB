import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

export function CardPost({item}){
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
        <TouchableOpacity onPress={() => handlePress()} >
            <Text style={styles.fontBtn}>
                Seguir
            </Text>
        </TouchableOpacity>
        </View>
        <View >
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
        </View>
        <View style={styles.conteudo}>
         <Image source={{uri: item.imagens }}
         style={{height: 150,width: 150,
            borderRadius: 5
        }}/>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1b1d2a',
        height:"100%",
        width:"98%",
        margin:5
    },
    userInfoContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:5
    },
    name:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    titulo:{
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    descricao:{
        color: '#afb0b5',
        fontSize: 12,
        
    },
    fontBtn:{
        color:"#657ef8",
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor:"#363f7e",
        borderRadius: 50,
        width:110,
        padding:1,
        textAlign:'center',
    },
    conteudo:{
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10
    }

});
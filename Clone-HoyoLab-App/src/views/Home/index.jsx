import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { CardPost } from '../../components/CardPost';
import { Carrousel } from '../../components/Carousel';

export const Home = () => {
    return(
        <View style={styles.container}>
            <View style={styles.viewBar}>
                <Text style={styles.viewBarFont}>Seguindo</Text>
                <Text style={styles.viewBarFont}>Início</Text>
                <Text style={styles.viewBarFont}>Eventos</Text>
                <Image source={ require('../../assets/pesquisa.png')} 
                 style={{ width: 30, height: 30}}/>
            </View>
            <ScrollView style={styles.scrollView}>
                {/* <Carrousel/> */}
            <View style={styles.containerCaroussel}>
                <Carrousel/>
            </View>
            <CardPost titulo="Apenas" nome="Hu Tao"/>
            <CardPost  titulo="suibaka"  />
            <CardPost/>
            <CardPost/>
            </ScrollView>
            <View style={styles.barraNavegacao}>
                <Text style={styles.viewBarFont}>Seguind</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    viewBar: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: "9%",
        width: "100%",
        backgroundColor: "#1b1d2a",   
    },
    viewBarFont: {
        fontSize: 18,
        color: "#fff",
    },
    scrollView:{
        flex: 1,
        backgroundColor: "#0c0f1d",
    },
    containerCaroussel:{
        flex:1,
        backgroundColor: "#fff",
        justifyContent:'center',
        alignContent: 'center',
        height: "100%",
        width:"100%"

    },
    barraNavegacao:{
        width: "100%",
        backgroundColor: "#1b1d2a",
    }
        
});
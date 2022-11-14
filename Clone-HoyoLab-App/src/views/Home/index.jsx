import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'

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
            <View style={styles.containerCaroussel}>
            <Text style={styles.viewBarFont}>Eventos</Text>
            </View>
            </ScrollView>
            <View style={styles.barraNavegacao}>
                <Text style={styles.viewBarFont}>Seguindo</Text>
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
        backgroundColor: "steelblue"
    },
    containerCaroussel:{
        backgroundColor: "#1fff"
    },
    barraNavegacao:{
        width: "100%",
        backgroundColor: "#1b1d2a",
    }
        
});
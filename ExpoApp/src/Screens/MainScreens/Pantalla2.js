import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import data1 from '../../Data/Comidas_Favoritas_Adri';
import data2 from '../../Data/Comidas_Favoritas_Mel';
import TitleDivisor from '../../Components/TitleDivisor';
import Title from '../../Components/Title';

const Pantalla2 = () => {
    const informacion = data1;
    const informacion2 = data2;
    return (
        <View>
            <View style={styles.TitleContainer}>
                <Title texto='Comidas Preferidas' />
                <Image source={require('../../Imagenes/food_restaurant.png')} style={styles.icon}/>
            </View>
            <ScrollView contentContainerStyle={styles.Container}>
                <View style={styles.Row}>
                    <TitleDivisor texto='Adriana Paola Mejia' />
                    <View style={styles.CardContainer}>
                        <FlatList
                            data={informacion}
                            horizontal={false}
                            renderItem={({ item }) => (
                                <View style={styles.CardWrap}>
                                    <Text style={styles.CardTitle}>{item.nom}</Text>
                                    <View style={styles.Card}>
                                        <View style={styles.CardBody}>
                                            <Image source={item.src} style={styles.image}/>
                                            <Text style={styles.CardDesc}>{item.desc}</Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </View>
                <View style={styles.Row}>
                    <TitleDivisor texto='Melanie Jackeline Martinez' />
                    <View style={styles.CardContainer}>
                        <FlatList
                            data={informacion2}
                            horizontal={false}
                            renderItem={({ item }) => (
                                <View style={styles.CardWrap}>
                                    <Text style={styles.CardTitle}>{item.nom}</Text>
                                    <View style={styles.Card}>
                                        <View style={styles.CardBody}>
                                            <Image source={item.src} style={styles.image}/>
                                            <Text style={styles.CardDesc}>{item.desc}</Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default Pantalla2;

const styles = StyleSheet.create({
    CardWrap: {
        marginVertical: 20,
    },
    CardDesc: {
        fontSize: 15,
        color: 'black',
        paddingLeft: 15,
        flex: 1,
    },
    CardTitle: {
        fontSize: 16,
        backgroundColor: '#ECECEC',
        color: 'black',
        paddingVertical: 6,
        paddingHorizontal: 15,
        alignSelf: 'flex-start',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    CardBody: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    Card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 0,
        borderColor: '#ccc',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'start'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    Row: {
        marginBottom: 50,
        flexGrow: 1,
    },
    CardContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    Container: {
        backgroundColor: 'white',
        paddingBottom: 50,
        flexGrow: 1,
    },
    TitleContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    icon: {
        width: 50,
        height: 50,
        marginLeft: 15,
    },
});

import { View, Text, StyleSheet} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

/*Dejar el text de la linea 11 el "Ir a detalles" NOQUITAR solo ponelo hasta debajo */ 
const Pantalla1 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}> 
            <Text>Pantalla 1</Text>
            <Text onPress={() => navigation.navigate('Detalles')} > Ir a detalles </Text>  
        </View>
    )
}

export default Pantalla1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

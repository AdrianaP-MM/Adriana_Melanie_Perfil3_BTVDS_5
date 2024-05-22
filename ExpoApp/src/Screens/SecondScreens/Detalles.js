import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Detalles = () => {
    return (
        <View style={styles.container}>
            <Text>
                ## Dependencias utilizadas para el bottom navigation:{'\n'}
            </Text>
            <Text>
                * 1: npm install @react-navigation/native{'\n'}
                * 2: npx expo install react-native-screens react-native-safe-area-context{'\n'}
                * 3: npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons{'\n'}
                * 4: npm install @react-navigation/stack{'\n'}
                * 5: npm install react-native-gesture-handler{'\n'}
            </Text>
        </View>
    )
}

export default Detalles;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'start',
        paddingTop: 40,
    },
});

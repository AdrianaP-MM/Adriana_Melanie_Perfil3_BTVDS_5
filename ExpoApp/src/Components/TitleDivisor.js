import React from 'react';
import {StyleSheet, Text } from 'react-native';

const TitleDivisor = ({ texto }) => {
    return (
        <Text style={styles.TitleDivisor}>{texto}</Text>
    );
}

export default TitleDivisor;

const styles = StyleSheet.create({
    TitleDivisor: {
        textAlign: 'start',
        fontSize: 20,
        fontWeight: 'light',
        color: 'white',
        backgroundColor: '#4D5FFF',
        borderRadius: 5,
        padding: 15,
    },
});

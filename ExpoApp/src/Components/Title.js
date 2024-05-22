import React from 'react';
import {StyleSheet, Text } from 'react-native';

const Title = ({ texto }) => {
    return (
        <Text style={styles.Title}>{texto}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    Title: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'white',
        paddingVertical: 25,
    },
});

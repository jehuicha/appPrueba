import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IProps {
    onPress: () => void;
    title: string;
    position: 'br' | 'bl';
}

export const Fab = ({ onPress, title, position }: IProps) => {
  return (
    <TouchableOpacity
            onPress={ onPress }
            style= { position === 'br' ? styles.fabLocationBR : styles.fabLocationBL }
        >
            <View style={ styles.fab }>
                <Text style={ styles.fabText }>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    fabLocationBR: {
        position: 'absolute',
        bottom: 25,
        right: 25,
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 25,
        left: 25,
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})
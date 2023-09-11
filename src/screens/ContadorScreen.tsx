import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>
            Contador: { contador }
        </Text>

        <Fab
            onPress={() => setContador(contador + 1)}
            title='+1'
            position='br'
        />
        <Fab
            onPress={() => setContador(contador - 1)}
            title={'-1'}
            position={'bl'}
        />

        {/* <TouchableOpacity
            onPress={ () => setContador(contador + 1) }
            style= { styles.fabLocationBR }
        >
            <View style={ styles.fab }>
                <Text style={ styles.fabText }>
                    +1
                </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={ () => setContador(contador - 1) }
            style= { styles.fabLocationBL }
        >
            <View style={ styles.fab }>
                <Text style={ styles.fabText }>
                    -1
                </Text>
            </View>
        </TouchableOpacity> */}

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        top: -15,
    },

})
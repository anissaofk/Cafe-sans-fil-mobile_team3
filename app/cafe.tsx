/* cette page contiendra tt les infos des cafés, mais pas encore le menu...*/

import React, {useState,useEffect} from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

export default function Cafe(){
    return(
        <View>
            <Text>Category 1</Text>
            <ScrollView horizontal style={styles.container}>
                <Text style={[styles.box,styles.itemBox]}>item 1</Text>
                <Text style={[styles.box,styles.itemBox]}>item 2</Text>
                <Text style={[styles.box,styles.itemBox]}>item 3</Text>
                <Text style={[styles.box,styles.itemBox]}>item 4</Text>
                <Text style={[styles.box,styles.itemBox]}>item 5</Text>
                <Text style={[styles.box,styles.itemBox]}>item 6</Text>
                <Text style={[styles.box,styles.itemBox]}>item 7</Text>
                <Text style={[styles.box,styles.itemBox]}>item 8</Text>
                <Text style={[styles.box,styles.itemBox]}>item 9</Text>
                <Text style={[styles.box,styles.itemBox]}>item 10</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    box : {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height:1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2
    },
    itemBox:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height:100,
        borderRadius: 4,
        margin: 8,
    },
    container:{

    }
})
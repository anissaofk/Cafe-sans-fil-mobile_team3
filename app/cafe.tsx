/* cette page contiendra tt les infos des cafés, mais pas encore le menu...*/

import React, {useState,useEffect} from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Restaurent, MenuItems } from "../assets/resto_obj";

export default function Cafe(){
    const [resto, setResto] = useState(new Restaurent('', '', '', '', '', []));
    
    const getTestResto = async () => {
        try {
          const response = await fetch('https://cafesansfil-api-r0kj.onrender.com/api/cafes/acquis-de-droit');
          const data = await response.json(); // On convertit la réponse en JSON
          setResto(Restaurent.jsonToResto(data));
          console.log(resto);
        } catch (error) {
          console.log('Erreur lors de la récupération de la blague :', error);
        }
      };
    useEffect(() => {
        getTestResto();
    }, []);
    return(
    <SafeAreaView> 
        <View>
            <Text>Category 2</Text>
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
        <Text>{resto.image}</Text>
    </SafeAreaView>
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
    boxShadow:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height:100,
        borderRadius: 4,
        margin: 8,
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

    },
    restoImage:{
        //width:'100%',
        height: 500,
        resizeMode: 'contain',
    },
    itemImage:{
        height:300
    }
})
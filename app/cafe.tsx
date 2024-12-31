/* cette page contiendra tt les infos des cafés, mais pas encore le menu...*/

import React, {useState,useEffect} from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Restaurent, MenuItems } from "../assets/resto_obj";
import { itemObj } from '@/assets/exemple_data/item_exemple';

export default function Cafe(){
    function showItemBox(item){
        return(
            <View style={[styles.box,styles.boxShadow]}>
                <Image style={styles.itemImage} source={{uri:item.image}}/>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDesc}>{item.description}</Text>
                <Text style={styles.itemPrice}>{item.price}$</Text>
            </View>
        )
    }
    const [resto, setResto] = useState(new Restaurent('', '', '', '', '', []));
    
    const getTestResto = async () => {
        try {
          const response = await fetch('https://cafesansfil-api-r0kj.onrender.com/api/cafes/acquis-de-droit');
          const data = await response.json(); // On convertit la réponse en JSON
          setResto(Restaurent.jsonToResto(data));
          //console.log(resto);
        } catch (error) {
          console.log('Erreur lors de la récupération de la blague :', error);
        }
      };
    useEffect(() => {
        getTestResto();
    }, []);
    return(
    <SafeAreaView> 
        <ScrollView>
            <View>
                <Text>Category 2</Text>
                <ScrollView horizontal style={styles.container}>
                    {resto.menu.map(showItemBox)}
                </ScrollView>
            </View>
            <Image style={styles.restoImage} source={{uri:resto.image}}/>
        </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    boxShadow : {
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
    box:{
        flex: 1,
        justifyContent: 'center',
        width: 300,
        height:200,
        borderRadius: 4,
        margin: 8,
    },
    container:{

    },
    restoImage:{
        //width:'100%',
        height: 1000,
        //resizeMode: 'contain',
    },
    itemImage:{
        width:300,
        height:130,
        resizeMode:'contain'
    },
    itemName:{

    },
    itemDesc:{

    },
    itemPrice:{}
})
import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, View,DevSettings,Image, ListViewBase} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';

const Rain = () => {
    const [isLoading, setLoading] = useState(true);
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=13.7527296&lon=100.5682688&appid=7029932189870dc55f82f2589f285b4d')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [])
    if (data === null){
        setData(json)
    }
    return(
        <View style={styles.wrap} >
        {isLoading ? <Text style={{ alignItems: 'center', justifyContent: 'center' }}>Loading...</Text> : (
           <View style={styles.rain}>
                <View style={styles.rainy}>
                    <Image
                            source={require('../image/weather/Rainper.png')}
                            style={{ width: 60, height: 60 }}
                            
                    />
                    <Text style={styles.raindetails}> เปอร์เซ็นต์ฝนตก : {data.list[0].pop * 100} %</Text>  
                </View>
                <View style={styles.rainvalu}>
                    <Image
                            source={require('../image/weather/Nice_today.png')}
                            style={{ width: 60, height: 60 }}
                            
                    />
                    <Text style={styles.rainvaludetails}> ปริมาณน้ำฝนในช่วง 3 ชั่วโมงที่ผ่านมา  </Text> 
                    <Text style={styles.rainvaludetails1}> 4 มม. </Text> 
                </View>
           </View> 
        )}
      </View>
    )
    
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        alignSelf: 'stretch',
        marginTop: 5,
        padding: 5,
        

    },
    rain: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 30,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 3,

        
    },
    rainy: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15

    },
    rainvalu: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: '#D3D3D3',
        borderTopWidth: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    },
    rainvaludetails1: {
        fontSize: 15,
        fontWeight: '10',
        marginTop: 5,
    },
    raindetails: {
        fontSize: 15,
        fontWeight: '10',

    },
    rainvaludetails: {
        fontSize: 15,
        fontWeight: '10',

    }

});


export default Rain;
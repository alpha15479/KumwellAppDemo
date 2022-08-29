import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, View,DevSettings,Image, ListViewBase} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';

const PM25 = () => {
    const [isLoading, setLoading] = useState(true);
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/air_pollution?lat=13.7527296&lon=100.5682688&appid=9811bbec32fc5d94d09f486c06d15a35')
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
            <View style={styles.PM25}>
                <View style={styles.PM25details}>
                <Image
                            source={require('../image/weather/PM2_5.png')}
                            style={{ width: 80, height: 80 }}
                            
                    />
                <Text style={styles.pm25text}> {data.list[0].components.pm2_5}</Text>
                <Text style={styles.pm25text2}>   ไมครอน</Text>
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
    PM25: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 30,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 3,
    },
    PM25details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    pm25text: {
        fontSize: 20,
        fontWeight: '10',
    },
    pm25text2: {
        fontSize: 15,
        fontWeight: '10',
    }
});
export default PM25;
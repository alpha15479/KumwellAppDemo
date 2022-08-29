import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, View,SafeAreaView,Image} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';


const WeatherShow = () => {

    const [location, setLocation] = useState(null);

    const [isLoading, setLoading] = useState(true);
    const [data,setData] = useState([]);
    const [dt,setDt] = useState(new Date().toLocaleString());

    let date = String(new window.Date());
    date = date.slice(3, 21);

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
          setLoading(false);
    
    
        })();
      }, [])

  
    useEffect(() => {
        fetch('http://api.weatherapi.com/v1/current.json?key=963ce7739c164d51abe144003222308&q=13.746176,100.5420544')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

    }, [])
    if (data === null){
        setData(json)
    }
    
    useEffect(() => {
        let secTimer = setInterval(() => {
        setDt(new Date().toLocaleString())
        }, 1000)

        return () => clearInterval(secTimer);
    }, []);

    return(
        <View style={styles.wrap}>
        {isLoading ? <Text style={{ alignItems: 'center', justifyContent: 'center' }}>Loading...</Text> : (
            <View style={styles.weathershow}>
                <View style={styles.uv}>
                    <Image
                            source={require('../image/weather/UV.png')}
                            style={{ width: 60, height: 60 }}
                            
                        /> 
                    <Text style={styles.title} > ดัชนี UV </Text>
                    <Text style={styles.title} > {data.current.uv} </Text>
                </View>
                <View style={styles.wind}>
                    <Image
                            source={require('../image/weather/Wind.png')}
                            style={{ width: 60, height: 60 }}
                            
                        />
                    <Text style={styles.title} > ลม </Text>
                    <Text style={styles.title}> {Math.round(data.current.wind_kph)} กม./ชม. </Text> 
                </View>
                <View style={styles.humidity}>
                        <Image
                            source={require('../image/weather/Humidity.png')}
                            style={{ width: 50, height: 50 }}
                            
                        />
                    <Text style={styles.title} > ความชื้น </Text>
                    <Text style={styles.title}> {data.current.humidity} % </Text>
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
    weathershow: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 30,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 3, 

    },
    uv: {
        flexGrow: 1,
        borderRightColor: '#D3D3D3',
        borderRightWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wind: {
        flexGrow: 1,
        borderRightColor: '#D3D3D3',
        borderRightWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    humidity: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 15,
        fontWeight: '10',
    }

})

export default WeatherShow;
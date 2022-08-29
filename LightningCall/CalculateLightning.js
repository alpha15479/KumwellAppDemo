import React, { useState, useEffect, useContext } from 'react';
import { getDistance } from 'geolib';
import { LocationsContext } from '../contexts/LocationsContext';
import { Text, StyleSheet, View } from 'react-native';
import Noti from '../notifications/localNotifications';

const LightningCalculate = (props) => {
  const { location, loading } = useContext(LocationsContext);
  const { dataLightnings } = props;
  //const [disCal , setDiscal] = useState([])
  const [dist, setDist] = useState(0);

  useEffect(() => {
    var test = [];
    var item = [];
    
    for (let i = 0; i < dataLightnings.length; i++){
      let lat = parseFloat(dataLightnings[i].LAT)
      let lon = parseFloat(dataLightnings[i].LON)
      test.push({
        latitude: lat,
        longitude: lon
      });
      let dis = getDistance(
        { latitude: lat, longitude: lon },
        { latitude: location.coords.latitude, longitude: location.coords.longitude }
      );
      item.push(dis/1000)
    }
    setDist(parseInt(Math.min.apply(Math, item)))

    //console.log(parseInt(Math.min.apply(Math, item)))
    console.log(parseInt(Math.min(...item)))
    console.log(item)
    console.log("distance", item.length)
  },[])
  return (
    <View style={styles.legendTop}>
    {dist < 700 ? 
      <View><Noti/><Text style={styles.legendTopSubText}>ฟ้าผ่าในระยะ {dist} กม.</Text>
      </View> :
      (<Text style={styles.legendTopSubText}>ฟ้าผ่าในระยะ {dist} กม.</Text>)}
    </View>
   
  )
}

export default LightningCalculate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  legendTop: {
    position: 'absolute',
    flexDirection: 'row',
    resizeMode: 'cover',
    left: 10,
    height: 70,
    opacity: 0.85,
    top: 10,
    width: 180,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  legendTopSubText: {
    top: 25,
    height: 50,
    width: 150,
    left: 20,
    right: 0,
    fontWeight: "900",
  },
});
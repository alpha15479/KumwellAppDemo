import React, { useState, useEffect, useContext } from 'react';
import { getDistance } from 'geolib';
import { LocationsContext } from '../contexts/LocationsContext';
import { Text, StyleSheet } from 'react-native';

const LightningCalculate = (props) => {
  const { location, loading } = useContext(LocationsContext);
  const { dataLightnings } = props;
  //const [disCal , setDiscal] = useState([]);
  var arrDistance = [];
  var test = [];
  //const min = Math.min(arrDistance)
  let dis = getDistance(
    { latitude: parseFloat(dataLightnings.dataLightnings.LAT), longitude: parseFloat(dataLightnings.dataLightnings.LON) },
    { latitude: location.coords.latitude, longitude: location.coords.longitude }
  );
  //for (i in dataLightnings.index)
  //setDiscal(dis);
  //console.log(disCal);
  //arrDistance.push(dis/1000)
  arrDistance.push(parseInt(dis/1000))
  for (let x in arrDistance){
    test.push(arrDistance[x]);
  }

  //console.log(test)
  console.log(Math.min(...test))
  //arrDistance[dataLightnings.index] = dis/1000 ;
  //console.log(arrDistance[dataLightnings.index])
  //console.log(typeof(dataLightnings.index));
  //console.log(dataLightnings.index)
  //console.log(`Distance ${dis / 1000} KM`)
}

export default LightningCalculate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// const loca = (location) => {

// }

/*
function LightningCal(props) {
  const { dataLightnings } = props;
  const calDis = () => {
        let dis = getDistance(
          { latitude: parseFloat(dataLightnings.LAT), longitude: parseFloat(dataLightnings.LON) },
          { latitude: 51.528308, longitude: -0.3817765 }
        );
        console.log(`Distance ${dis / 1000} KM`)
        return
      }}

export default LightningCal;
*/

// const calculateDistance = (props) => {
//   const { dataLightnings } = props;
//   const calDis = () => {
//     let dis = getDistance(
//       { latitude: parseFloat(dataLightnings.LAT), longitude: parseFloat(dataLightnings.LON) },
//       { latitude: 51.528308, longitude: -0.3817765 }
//     );
//     alert(`Distance\n\n${dis} Meter\nOR\n${dis / 1000} KM`);
//   };

// }

// export default calculateDistance;

/*
const App = () => {
    const calculateDistance = () => {
      var dis = getDistance(
        { latitude: 20.0504188, longitude: 64.4139099 },
        { latitude: 51.528308, longitude: -0.3817765 }
      );
      alert(`Distance\n\n${dis} Meter\nOR\n${dis / 1000} KM`);
    };
  
    const calculatePreciseDistance = () => {
      var pdis = getPreciseDistance(
        { latitude: 20.0504188, longitude: 64.4139099 },
        { latitude: 51.528308, longitude: -0.3817765 }
      );
      alert(`Precise Distance\n\n${pdis} Meter\nOR\n${pdis / 1000} KM`);
    };
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.header}>
              Example to Calculate Distance Between Two Locations
            </Text>
            <Text style={styles.textStyle}>
              Distance between
              {'\n'}
              India(20.0504188, 64.4139099) and UK (51.528308, -0.3817765)
            </Text>
            <TouchableHighlight
              style={styles.buttonStyle}
              onPress={calculateDistance}>
              <Text>Get Distance</Text>
            </TouchableHighlight>
            <Text style={styles.textStyle}>
              Precise Distance between
              {'\n'}
              India(20.0504188, 64.4139099) and UK (51.528308, -0.3817765)
            </Text>
            <TouchableHighlight
              style={styles.buttonStyle}
              onPress={calculatePreciseDistance}>
              <Text>Get Precise Distance</Text>
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
      justifyContent: 'center',
    },
    header: {
      fontSize: 22,
      fontWeight: '600',
      color: 'black',
      textAlign: 'center',
      paddingVertical: 20,
    },
    textStyle: {
      marginTop: 30,
      fontSize: 16,
      textAlign: 'center',
      color: 'black',
      paddingVertical: 20,
    },
    buttonStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      backgroundColor: '#dddddd',
      margin: 10,
    },
  });
  
  //export default App;*/
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import MapView from 'react-native-maps';

export default class MapsScreen extends React.Component {
  static navigationOptions = {
    title: 'Maps',
  };
  constructor(props)
  {
    super(props); 

    this.state=
    {
      jsonapi: "",
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    }
    this.GetWeather();
  }
  GetWeather = async() => {
    let uri = "https://services1.arcgis.com/3YlK2vfHGZtonb1r/arcgis/rest/services/KNMI_Sensors_Zwolle_(actuele_gegevens)/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";
    let res = await fetch (uri); 
    let json = await res.json (); 
    this.setState({
      jsonapi : json.objectIdFieldName
    });
    console.log('dikke ballen ' + this.state.jsonapi); 
  }
  render() {
    return (
        <MapView style={styles.container}
      region={this.state.region}
      onRegionChange={this.onRegionChange}
    />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

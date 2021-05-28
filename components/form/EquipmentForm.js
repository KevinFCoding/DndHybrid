import React, {PureComponent} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.getDataFromApi()
  }

  getDataFromApi = async () => {
    const endpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=20'
    const res = await fetch(endpoint)
    const data = await res.json()
    this.setState({items: data})
  } 

  _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.card}>
      <Text style={styles.cardTitle}>La Hache ! </Text>
      <Text style={styles.cardDesc}> Range : mele</Text>
      <Text style={styles.cardDesc}> Cost : 70</Text>
      <Text style={styles.cardDesc}> Damage : 50</Text>
      </TouchableOpacity>      
    )
  }
  render() {
    let {items} = this.state
    return (
        <FlatList style={styles.container}
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this._renderItem}
        />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40
  },
  cardTitle: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#eee9e8',
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }
  },
  cardDesc: {
    width: '50%',
    height: 50
  }
});

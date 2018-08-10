import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={{ fontSize: 25 }}>Coffe</Text>
          <Text style={{ fontSize: 25, marginTop: 50 }}>The Science of D</Text>
          <Text>Amazing coffe</Text>
        </View>

        <View style={styles.containerBody}>
          <View style={{ flex: 2, flexDirection: 'row' }}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Espresoo</Text>
              <Text style={styles.cardSubtitle}>Blue Ridge Blend</Text>
              <Image
                style={{ flex: 4, resizeMode: 'contain' }}
                source={{ uri: 'https://media.istockphoto.com/photos/vanilla-chocolate-milkshake-in-a-glass-with-whipped-cream-isolated-picture-id542816318?k=6&m=542816318&s=612x612&w=0&h=sd8gN-BQqvDbacEgw5jXDsj3zejwKamWaIMfx1ugELo=' }} />
              <View style={styles.cardFooter}>
                <Text>$200.00</Text>
                <Image />
              </View>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Espresoo</Text>
              <Text style={styles.cardSubtitle}>Espresoo</Text>
              <Image
                style={{ flex: 4, resizeMode: 'contain' }}
                source={{ uri: 'https://media.istockphoto.com/photos/vanilla-chocolate-milkshake-in-a-glass-with-whipped-cream-isolated-picture-id542816318?k=6&m=542816318&s=612x612&w=0&h=sd8gN-BQqvDbacEgw5jXDsj3zejwKamWaIMfx1ugELo=' }} />
              <View style={styles.cardFooter}>
                <Text>$200.00</Text>
                <Image />
              </View>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: 'row' }}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Espresoo</Text>
              <Text style={styles.cardSubtitle}>Espresoo</Text>
              <Image
                style={{ flex: 4, resizeMode: 'contain' }}
                source={{ uri: 'https://media.istockphoto.com/photos/vanilla-chocolate-milkshake-in-a-glass-with-whipped-cream-isolated-picture-id542816318?k=6&m=542816318&s=612x612&w=0&h=sd8gN-BQqvDbacEgw5jXDsj3zejwKamWaIMfx1ugELo=' }} />
              <View style={styles.cardFooter}>
                <Text>$200.00</Text>
                <Image />
              </View>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Espresoo</Text>
              <Text style={styles.cardSubtitle}>Espresoo</Text>
              <Image
                style={{ flex: 4, resizeMode: 'contain' }}
                source={{ uri: 'https://media.istockphoto.com/photos/vanilla-chocolate-milkshake-in-a-glass-with-whipped-cream-isolated-picture-id542816318?k=6&m=542816318&s=612x612&w=0&h=sd8gN-BQqvDbacEgw5jXDsj3zejwKamWaIMfx1ugELo=' }} />
              <View style={styles.cardFooter}>
                <Text>$200.00</Text>
                <Image />
              </View>
            </View>
          </View>
        </View>
      </View >

    );
  }
}

const styles = StyleSheet.create({
  containerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    backgroundColor: '#C9B69A',
    fontWeight: 'bold'
  },
  containerBody: {
    flex: 4,
    backgroundColor: '#f3f3f3'
  },
  container: {
    flex: 6
  },
  card: {
    width: '45%',
    margin: 10,
    backgroundColor: '#fff',
    padding: 10,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    elevation: 2
  },
  cardTitle: {
    flex: 1,
    fontWeight: 'bold'
  },
  cardSubtitle: {
    flex: 1,
    fontSize: 12
  },
  cardFooter: {
    flexDirection: 'row',
    flex: 1
  }
});

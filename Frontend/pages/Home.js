import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const Homepage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            This is the Home Page of the app
          </Text>
          <Button
            onPress={() => navigation.navigate('Profil')}
            title="Profile"
          />
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          Welcome to the Home page
        </Text>
        <Text
          style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
         Work on going
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default Homepage;
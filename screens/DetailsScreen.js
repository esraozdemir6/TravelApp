import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { place, rating } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to {place}</Text>
      {/* Eğer rating 5 ise özel mesaj göster */}
      {rating === 5 ? (
        <Text>It's a 5-star destination!</Text>
      ) : (
        <Text>It's a nice place, but not 5-star.</Text>
      )}

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

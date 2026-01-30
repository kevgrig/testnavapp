import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ padding: 20, gap: 20 }}>
      <Text>Logged out starting homepage</Text>
      <Button title="Next" onPress={() => router.navigate('/join')} />
    </View>
  );
}

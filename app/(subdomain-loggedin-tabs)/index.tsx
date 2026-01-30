import { setLoggedIn } from '@/state/user';
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

export default function Index() {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <View style={{ padding: 20, gap: 20 }}>
      <Text>Logged in homepage tab (success!)</Text>
      <Button
        title="Log out to reset"
        onPress={() => {
          dispatch(setLoggedIn(false));
          router.navigate("/");
        }}
      />
    </View>
  );
}

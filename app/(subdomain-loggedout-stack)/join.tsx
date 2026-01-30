import { setLoggedIn } from '@/state/user';
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

export default function Join() {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <View style={{ padding: 20, gap: 20 }}>
      <Text>Sub domain logged out join</Text>
      <Button
        title="Log in and go down failing path"
        onPress={() => {
          dispatch(setLoggedIn(true));
          router.navigate("/accept_terms");
        }}
      />
      <Button
        title="Log in and go down succeeding path"
        onPress={() => {
          dispatch(setLoggedIn(true));
          router.navigate("/");
        }}
      />
    </View>
  );
}

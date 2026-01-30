import { Stack } from 'expo-router';

export default function StackedLoggedIn() {
  return (
    <Stack>
      <Stack.Screen name="accept_terms" />
    </Stack>
  );
}

import type { RootState } from '@/state/store';
import { store } from '@/state/store';
import { Stack } from 'expo-router';
import { Provider, useSelector } from 'react-redux';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <RootLayoutNav />
    </Provider>
  );
}

function RootLayoutNav() {
  const loggedIn = useSelector((state: RootState) => state.user.loggedIn);

  // isMainDomain is not changed anywhere in this issue reproduction app and is always false
  const isMainDomain = useSelector((state: RootState) => state.user.isMainDomain);

  return (
    <Stack>

      <Stack.Protected guard={isMainDomain}>
        <Stack.Screen name="(maindomain-loggedinorout-tabs)" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={!isMainDomain}>
        <Stack.Protected guard={!loggedIn}>
          <Stack.Screen name="(subdomain-loggedout-stack)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={loggedIn}>
          <Stack.Screen name="(subdomain-loggedin-tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(subdomain-loggedin-stack)" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack.Protected>

    </Stack>
  );
}

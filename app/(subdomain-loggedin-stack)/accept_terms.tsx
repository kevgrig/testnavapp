import { RelativePathString, useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function AcceptTerms() {
  const router = useRouter();

  return (
    <View style={{ padding: 20, gap: 20 }}>
            
      <Text>Sub domain logged in AcceptTerms</Text>
      <Text>The failing button would be desired to go to /; however, going back on the stack works</Text>
      <Button title="Failing Button" onPress={() => {
        router.navigate("/");
      }} />
      <Button title="Succeeding explicit button" onPress={() => {
        router.navigate("/(subdomain-loggedin-tabs)/" as RelativePathString);
      }} />

    </View>
  );
}

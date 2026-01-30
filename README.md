# Demonstrate Expo Router unexpected routing issue

1. `npm run start --web`
2. <http://localhost:8081/>
3. Click `Next`
4. Click `Log in and go down failing path`
5. Click `Failing button`
6. Expect that it should navigate to `/(subdomain-loggedin-tabs)/index` but instead nothing happens

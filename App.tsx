import { View, StatusBar } from 'react-native';
import { Home } from './src/screens/home';

export default function App() {
  return (
    <View>
      <StatusBar
        barStyle="light-content"
      />
      <Home />
    </View>
  );
}


import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { RouteNames } from '@navigation/routes';
import SplashScreen from '@screens/SplashScreen';
import HomeScreen from '@screens/HomeScreen';
import DetailScreen from '@screens/DetailScreen';

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    [RouteNames.splash]: SplashScreen,
    [RouteNames.home]: HomeScreen,
    [RouteNames.detail]: DetailScreen,
  },
  {
    initialRouteName: RouteNames.splash,
  },
));

export default AppContainer;
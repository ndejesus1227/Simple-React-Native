import './ReactotronConfig';
import Reactotron from 'reactotron-react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './src/redux/actions/actionCreators';
import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry, Text } from 'react-native';

 import {
   NavigationContext,
   NavigationProvider,
   StackNavigation
 } from '@exponent/ex-navigation';

 import store from './src/redux/store';

 import { Router } from './src/containers/Router';


const navigationContext = new NavigationContext({
  router: Router,
  store
});

const App = () => (
  <Provider store={store}>
    <NavigationProvider context={navigationContext}>
      <StackNavigation style={Styles.container} id="home" initialRoute={Router.getRoute('home')} />
    </NavigationProvider>
  </Provider>
);

const Styles = StyleSheet.create({
  container: {
		paddingTop: 30,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});


AppRegistry.registerComponent('t7ChickenNative', () => (App));

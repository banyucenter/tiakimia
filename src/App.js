import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import {navigationRef} from './routes/RootNavigation'

import RootNavigator from './routes/rootStack'

const App = () => {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>

    )
}


export default App;

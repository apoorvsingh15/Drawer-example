import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import SceneOne from '../screens/SceneOne';
import SceneTwo from '../screens/SceneTwo';
export default function Routes() {
    return (
        <Router>
            <Stack key="root">
                <Scene hideNavBar key="SceneOne" component={SceneOne} title="Scene1" initial={true} />
                <Scene hideNavBar key="SceneTwo" component={SceneTwo} title="Scene2" />
            </Stack>
        </Router>
    );
}




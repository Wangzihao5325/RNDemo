import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PageName from '../../Config/PageName';

import NormalStack from '../NormalStack';
import ModalWrapper from '../../Pages/ModalPage/ModalWraper';

const Stack = createStackNavigator();

/** modalStack 配置块 */
const optionArray = [
    {
        key: PageName.NORMAL_STACK,
        name: PageName.NORMAL_STACK,
        component: NormalStack,
    },
    {
        key: PageName.MODAL_WRAPPER,
        name: PageName.MODAL_WRAPPER,
        component: ModalWrapper,
    }
];


export default class ModalStack extends Component {

    render() {
        return (
            <Stack.Navigator
                mode='modal'
                headerMode='none'
                screenOptions={{
                    gestureEnabled: true,
                    cardStyle: { backgroundColor: 'transparent' },
                    cardOverlayEnabled: true,
                }}
            >
                {
                    optionArray.map((item) => {
                        return <Stack.Screen {...item} />
                    })
                }
            </Stack.Navigator>
        );
    }
}
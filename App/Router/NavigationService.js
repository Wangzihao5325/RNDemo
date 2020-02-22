import * as React from 'react';
//import { StackActions, NavigationContext } from '@react-navigation/native';

/** 为无法访问到navigation的地方提供路由能力 */
export const navigationRef = React.createRef();

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}

/** 集中处理路由跳转 */
export function jump(component, routeName, params) {
    if (!params) {
        params = {};
    }

    let router;
    if (component && component.props.navigation) {
        router = component.props.navigation;
    }

    if (router && routeName) {
        //let data = router.dangerouslyGetState();
        router.navigate(routeName, params);
        RecordPagePathData('-to-do-', routeName);
    }
}

export function back(component) {
    let router;
    if (component && component.props.navigation) {
        router = component.props.navigation;
    }

    if (router) {
        router.goBack();
    }
};

RecordPagePathData = (rootPageName = '', targetPageName = '', type = 'jump') => {
    console.log('页面路径日志：从页面：', rootPageName, '跳转到页面：', targetPageName);
}
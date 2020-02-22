import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default class ModalWraper extends Component {
    render() {
        return (
            <SafeAreaView
                style={styles.safe}
            >
                <Text>top</Text>
                <Text>modal wrapper-下拉关闭!</Text>
                <Text>bottom</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});
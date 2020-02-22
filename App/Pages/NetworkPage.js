/**
 * BridgePage
 * Info:click and test the communication between local and react-native
 * Crate by Charlie on 2019-08-19
 * */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

//import * as demoApi from '../Functions/Network/API/DemoApi';
import * as UIConfig from '../Config/UIConfig';

export default class NetworkPage extends Component {
    static navigationOptions = {
        title: 'NetworkPage',
        headerStyle: {
            backgroundColor: '#F34966',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props);

        this.state = {
            networkData: '',
            requestType: '',
        }
    }

    componentDidMount() {
        //  const { params } = this.props.navigation.state;

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {'该部分是网络请求的演示demo。'}
                </Text>
                <View style={{ marginTop: 50, marginLeft: 50, marginRight: 50, height: 60, backgroundColor: 'green', width: UIConfig.SCREEN_WIDTH - 100, alignItems: 'center', justifyContent: 'center' }}>
                    {/* <Button
                        title='netDemo' 
                        color='white'
                        onPress={()=>{
                            this.getTestFunction();
                        }}
                    /> */}
                </View>
                {/* <View style={{marginTop:20,marginLeft:50,marginRight:50,height:60}}>
                    <Button
                        title='postDemo' 
                        color='blue'
                        onPress={()=>{
                            this.getThePostTypeDemoFunction();
                        }}
                        />
                </View> */}
                {/* {
                    this.state.networkData === ''
                    ?
                    null
                    :
                    <Text style={{textAlign:'center'}}>{'网络请求获取的数据reject\n网络请求类型\n'+this.state.requestType+'\n获得的数据：\n'+this.state.networkData}</Text>
                } */}
            </View>
        );
    }

    // getTestFunction = () =>{
    //     demoApi.getTheDemoData().then(response=>{
    //         console.log('net request --->response',JSON.stringify(response));
    //         this.setState({
    //             requestType:'GET',
    //             networkData:JSON.stringify(response)
    //         });
    //     }, (error)=>{
    //         console.log('net request --->error:',JSON.stringify(error));
    //     }).catch(e=>{
    //         console.log('net request --->e',JSON.stringify(e));
    //     });
    // }

    // getThePostTypeDemoFunction = () =>{
    //     demoApi.postTheDemoData().then(response=>{
    //         console.log('net request --->response',JSON.stringify(response));
    //         this.setState({
    //             requestType:'POST',
    //             networkData:JSON.stringify(response)
    //         });
    //     }, (error)=>{
    //         console.log('net request --->error:',JSON.stringify(error));
    //     }).catch(e=>{
    //         console.log('net request --->e',JSON.stringify(e));
    //     });
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
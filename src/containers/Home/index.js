import React, {PureComponent} from "react";
import {Header} from 'react-navigation';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Home extends PureComponent {

    constructor(props) {
        super(props);
        this.data = [
            {
                title: '现场领取',
                icon: 'payment'
            },
            {
                title: '公告确认',
                icon: 'room'
            },
            {
                title: '送达求助',
                icon: 'pets'
            },
            {
                title: '邮寄核实',
                icon: 'toc'
            },
            {
                title: '邮寄回执单',
                icon: 'tab'
            },
            {
                title: '直接送达',
                icon: 'stars'
            },
            {
                title: '补充材料',
                icon: 'shop'
            },
            {
                title: '卷宗交接',
                icon: 'restore'
            },
        ]
    }

    componentDidMount() {

    }

    navigate(i) {
        if (i.icon === 'payment') {
            const { navigate } = this.props.navigation;
            navigate('TodoList')
        } else {
            Alert.alert('Warning','暂未开通',[
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ])
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Title}>
                    <Text style={styles.Text}>易证软件</Text>
                </View>
                <View style={styles.menus}>
                    <FlatList
                        data={this.data}
                        numColumns={3}
                        keyExtractor={(item, index) => index}
                        renderItem={({item, separators}) => (
                            <TouchableOpacity style={styles.items}
                                              onPress={() => this.navigate(item)}>
                                <View style={{justifyContent: 'center'}}>
                                    <Icon name={item.icon} style={{textAlign: 'center', marginBottom: 8}}
                                          color="#4177F6" size={34}/>
                                    <Text>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff'
        },
        Title: {
            flex: 1,
            backgroundColor: '#4177F6',
            alignItems: 'center',
            justifyContent: 'center',
        },
        Text: {
            fontSize: 28,
            color: '#fff',
        },
        menus: {
            flex: 4
        },
        items: {
            width: Dimensions.get('window').width / 3,
            height: Dimensions.get('window').width / 3,
            borderRightWidth: 0.5,
            borderBottomWidth: 0.5,
            borderColor: '#eeeeee',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
);


export default Home;
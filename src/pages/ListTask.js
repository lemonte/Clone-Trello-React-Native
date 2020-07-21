import React, { Component, useState } from 'react';
import { Image, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { StatusBar } from "react-native"
import { SimpleLineIcons } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
import { Dimensions } from 'react-native';
const List = ['1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4']
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createAppContainer, SafeAreaView } from "react-navigation";
import { Foundation } from '@expo/vector-icons';

console.disableYellowBox = true;

function Task({ navigation }) {
    const [press, setPress] = useState(true)
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="green" />
            <View style={{ backgroundColor: 'green', flexDirection: "row", height: 50, elevation: 10 }}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Ionicons style={{ margin: 15 }} name="md-arrow-back" size={25} color="white" />
                </TouchableOpacity>
                {press ?
                    <>
                        <Text style={{ fontSize: 22, color: "white", marginTop: 12, marginLeft: 12 }} > Tarefas</Text>

                        <TouchableOpacity onPress={() => setPress(false)} style={{ position: 'absolute', right: "27%", top: 13 }} >
                            <MaterialIcons name="search" size={28} color="white" />
                        </TouchableOpacity>
                    </>
                    :
                    <>
                        <Text style={{ fontSize: 22, color: "white", marginTop: 12, marginLeft: 12 }} > Digite ... </Text>

                        <TouchableOpacity onPress={() => setPress(true)} style={{ position: 'absolute', right: "27%", top: 13 }} >
                            <AntDesign name="close" size={24} color="white" />
                        </TouchableOpacity>
                    </>
                }

                <TouchableOpacity style={{ position: 'absolute', right: "15%", top: 15 }} >
                    <Feather name="bell" size={23} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ position: 'absolute', right: "3%", top: 13 }} >
                    <SimpleLineIcons name="options" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "green", flex: 1 }}>

                <FlatList
                    horizontal={true}
                    data={List}
                    renderItem={({ item }) => CardTask(item)
                    }
                    ItemSeparatorComponent={() => {
                        return (
                            <View
                                style={{
                                    width: 30,
                                    backgroundColor: "green",

                                }}
                            />
                        );
                    }}

                    keyExtractor={(item, index) => index.toString()}
                />
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                        transform: [{ rotateY: "180deg", }],
                        position: 'absolute',
                        width: 60,
                        height: 60,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: "#2ac90e",
                        borderRadius: 30,
                        right: 15,
                        bottom: 30,
                        elevation: 10
                    }
                    }>
                    <FontAwesome name="search-plus" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </>
    )


}

function CustomDrawerContentComponent(props) {
    const [press, setPress] = useState(true)
    return (
        <DrawerItems {...props} />
    )
}


const Routes = createAppContainer(
    createDrawerNavigator({
        Home: {
            screen: Task,
            navigationOptions: {
                title: "Sobre este quadro",
                drawerIcon: () => <MaterialIcons name={"info-outline"} size={24} color="011c47#" />
            },
        },
        Membros: {
            screen: Task,
            navigationOptions: {
                title: "Membros",
                drawerIcon: () => <Ionicons name="md-person" size={24} color="black" />
            },
        },
        Atividade: {
            screen: Task,
            navigationOptions: {
                title: "Atividade",
                drawerIcon: () => <Feather name="align-left" size={24} color="black" />
            },
        },
        Power: {
            screen: Task,
            navigationOptions: {
                title: "Power-Ups",
                drawerIcon: () => <AntDesign name="rocket1" size={24} color="black" />
            },
        },
        Cartoes: {
            screen: Task,
            navigationOptions: {
                title: "Cartões arquivados",
                drawerIcon: () => <MaterialIcons name="credit-card" size={24} color="black" />
            },
        },
        Arquivadas: {
            screen: Task,
            navigationOptions: {
                title: "Listas arquivadas",
                drawerIcon: () => <Foundation name="list" size={24} style={{ transform: [{ rotateX: "180deg", }], }} color="black" />
            },
        },
        Configuracao: {
            screen: Task,
            navigationOptions: {
                title: "Configurações do quadro",
                drawerIcon: () => <Ionicons name="ios-settings" size={24} color="black" />
            },
        },
        Estrelas: {
            screen: Task,
            navigationOptions: {
                title: "Quadro com estrelas",
                drawerIcon: () => <Feather name="star" size={24} color="black" />
            },
        },

        Assistir: {
            screen: Task,
            navigationOptions: {
                title: "Assistir",
                drawerIcon: () => <Feather name="eye" size={24} color="black" />
            },
        },

        Copiar: {
            screen: Task,
            navigationOptions: {
                title: "Copiar",
                drawerIcon: () => <MaterialIcons name="content-copy" size={24} color="black" />
            },
        },

        Compartilhar: {
            screen: Task,
            navigationOptions: {
                title: "Compartilhar link do quadro",
                drawerIcon: () => <Ionicons name="md-share" size={24} color="black" />
            },
        },

        Sair: {
            screen: Task,
            navigationOptions: {
                title: "Sair do quadro",
                drawerIcon: () => <MaterialIcons name="exit-to-app" size={24} color="black" />
            },
        },
        Sincronizado: {
            screen: Task,
            navigationOptions: {
                title: "Sincronizado",
                drawerIcon: () => <AntDesign name="sync" size={24} color="black" />
            },
        },
    }, {
        drawerPosition: 'right',
        initialRouteName: null,
        contentComponent: CustomDrawerContentComponent,
        drawerType: 'front',
        drawerWidth: '85%',
        contentOptions: {
            activeTintColor: 'blue',
            activeBackgroundColor: '#e6e6e6',


        }
    })
);
export default Routes;

const CardTask = (item) => {
    return (
        <View style={{ width: 300, marginTop: 10 }}>
            <View style={{ backgroundColor: 'white', elevation: 10 }}>
                <Text style={{ height: 30, fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}> a fazer</Text>
            </View>
            <View style={{ backgroundColor: 'white', height: 100 }}>
                <View style={{
                    margin: 10, backgroundColor: 'white', borderWidth: 0.5,
                    borderColor: "grey",
                    elevation: 5
                }}>

                    <View style={{ height: 20, width: 40, backgroundColor: "orange" }} />
                    <Text style={{ fontSize: 16, marginTop: 10 }}>Aba Itens/ Lista de Produtos completa</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Feather style={{ marginLeft: 10, marginRight: 10, marginTop: 13 }} name={'check-square'} size={15} color="black" />
                        <Text style={{ fontSize: 16, marginTop: 10 }}>28/32</Text>
                    </View>

                </View>
            </View>
            <View style={{ backgroundColor: 'white', height: 100 }}>
                <View style={{
                    marginTop: 10, marginLeft: 10, marginRight: 10, backgroundColor: 'white', borderWidth: 0.5,
                    borderColor: "grey",
                    elevation: 5
                }}>

                    <View style={{ height: 20, width: 40, backgroundColor: "orange" }} />
                    <Text style={{ fontSize: 16, marginTop: 10 }}>Aba Itens/ Lista de Produtos completa</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Feather style={{ marginLeft: 10, marginRight: 10, marginTop: 13 }} name={'check-square'} size={15} color="black" />
                        <Text style={{ fontSize: 16, marginTop: 10 }}>28/32</Text>
                    </View>

                </View>
                <View style={{ backgroundColor: 'white', }}>
                    <Text style={{ fontSize: 20, color: 'green', textAlign: "center", padding: 20 }}> Adicionar Cartão</Text>
                </View>
            </View>
            <View style={{ height: 30 }}>
                <Text></Text>
            </View>
        </View>
    )
}


/*
import React, { Component, useState } from 'react';
import { Image, TouchableOpacity, Text, View, FlatList, Button } from 'react-native';
import { StatusBar } from "react-native"
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const List = ['1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4']
const windowWidth = Dimensions.get('window').width;

var search = false;



export default class ClassScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: false,
            text: ""
        };
    }


    CardTask(item) {
        return (
            <View style={{ width: 300, marginTop: 10 }}>
                <View style={{ backgroundColor: 'white', elevation: 10 }}>
                    <Text style={{ height: 30, fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}> a fazer</Text>
                </View>
                <View style={{ backgroundColor: 'white', height: 100 }}>
                    <View style={{
                        margin: 10, backgroundColor: 'white', borderWidth: 0.5,
                        borderColor: "grey",
                        elevation: 5
                    }}>

                        <View style={{ height: 20, width: 40, backgroundColor: "orange" }} />
                        <Text style={{ fontSize: 16, marginTop: 10 }}>Aba Itens/ Lista de Produtos completa</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Feather style={{ marginLeft: 10, marginRight: 10, marginTop: 13 }} name={'check-square'} size={15} color="black" />
                            <Text style={{ fontSize: 16, marginTop: 10 }}>28/32</Text>
                        </View>

                    </View>
                </View>
                <View style={{ backgroundColor: 'white', height: 100 }}>
                    <View style={{
                        margin: 10, backgroundColor: 'white', borderWidth: 0.5,
                        borderColor: "grey",
                        elevation: 5
                    }}>

                        <View style={{ height: 20, width: 40, backgroundColor: "orange" }} />
                        <Text style={{ fontSize: 16, marginTop: 10 }}>Aba Itens/ Lista de Produtos completa</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Feather style={{ marginLeft: 10, marginRight: 10, marginTop: 13 }} name={'check-square'} size={15} color="black" />
                            <Text style={{ fontSize: 16, marginTop: 10 }}>28/32</Text>
                        </View>

                    </View>
                </View>
                <View style={{ backgroundColor: 'white', }}>
                    <Text style={{ fontSize: 20, color: 'green', textAlign: "center", padding: 20 }}> Adicionar Cartão</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor="green" />
                <View style={{ backgroundColor: 'green', flexDirection: "row", height: 50, elevation: 10 }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                        <Ionicons style={{ margin: 15 }} name="md-arrow-back" size={25} color="white" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 22, color: "white", marginTop: 12, marginLeft: 12 }} > Tarefas</Text>
                    {
                        this.state.search ?
                            (
                                <TouchableOpacity onPress={() => { this.setState({ search: false }) }} style={{ position: 'absolute', right: "27%", top: 13 }} onPress={() => { }} >
                                    <MaterialIcons name="search" size={28} color="white" />
                                </TouchableOpacity>
                            )
                            : (
                                <TouchableOpacity onPress={() => { this.setState({ search: true }) }} style={{ position: 'absolute', right: "27%", top: 13 }} onPress={() => { }} >
                                    <Feather name="bell" size={23} color="white" />
                                </TouchableOpacity>
                            )

                    }
                    <TouchableOpacity style={{ position: 'absolute', right: "15%", top: 15 }} >
                        <Feather name="bell" size={23} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', right: "3%", top: 13 }} >
                        <SimpleLineIcons name="options" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: "green", flex: 1 }}>

                    <FlatList
                        horizontal={true}
                        data={List}
                        renderItem={({ item }) => this.CardTask(item)
                        }
                        ItemSeparatorComponent={() => {
                            return (
                                <View
                                    style={{
                                        width: 30,
                                        backgroundColor: "green",

                                    }}
                                />
                            );
                        }}

                        keyExtractor={(item, index) => index.toString()}
                    />
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={{
                            transform: [{ rotateY: "180deg", }],
                            position: 'absolute',
                            width: 60,
                            height: 60,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: "#2ac90e",
                            borderRadius: 30,
                            right: 15,
                            bottom: 30,
                            elevation: 10
                        }
                        }>
                        <FontAwesome name="search-plus" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </>
        )

    }
}
*/


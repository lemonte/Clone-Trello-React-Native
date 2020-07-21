import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import React, { useState } from "react";
import { Entypo } from '@expo/vector-icons';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Main from "./pages/Main";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Inicio from "./pages/Inicio";
import Task from "./pages/ListTask";

function HeaderLeft(navigation) {
    return (
        <TouchableOpacity style={{ paddingTop: 5, paddingLeft: 10 }} onPress={() => navigation.toggleDrawer()}>
            <Feather name="align-justify" size={26} color="white" />
        </TouchableOpacity>
    );
}





function HeaderRight(navigation) {
    return (
        <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Tarefas")} style={{ transform: [{ rotateY: "180deg" }], marginRight: 30 }}>
                <MaterialIcons name="search" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingRight: 15, marginTop: 3 }} >
                <Feather name="bell" size={23} color="white" />
            </TouchableOpacity>
        </View>


    );
}

const Quadros_Navigation = createStackNavigator({
    Quadros: {
        screen: Main,
        navigationOptions: ({ navigation }) => ({
            title: 'Quadros',
            headerLeft: HeaderLeft(navigation),
            headerRight: HeaderRight(navigation),
            headerTintColor: "#FFF",
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: "#3a66e8",
            },

            headerTitleStyle: {
                fontSize: 22
            },

        }),
    },
    Tarefas: {
        screen: Task,
        navigationOptions: {
            header: null,
        },
    },
});
const Inicio_Navigation = createStackNavigator({
    Inicio: {
        screen: Inicio,
        navigationOptions: ({ navigation }) => ({
            title: 'Início',
            headerLeft: HeaderLeft(navigation),
            headerRight: HeaderRight(navigation),
            headerTintColor: "#FFF",
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: "#3a66e8",
            },
            headerTitleStyle: {
                fontSize: 22
            },

        }),
    },
    Tarefas: {
        screen: Task,
        navigationOptions: {
            header: null,
        },
    },

});
const Cartoes_Navigation = createStackNavigator({
    Cartoes: {
        screen: Inicio,
        navigationOptions: ({ navigation }) => ({
            title: 'Cartões',
            headerLeft: HeaderLeft(navigation),
            headerRight: HeaderRight(navigation),
            headerTintColor: "#FFF",
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: "#3a66e8",
            },
            headerTitleStyle: {
                fontSize: 22
            },

        }),
    },

});
const Configuracoes_Navigation = createStackNavigator({
    Configuracoes: {
        screen: Inicio,
        navigationOptions: ({ navigation }) => ({
            title: 'Configurações',
            headerLeft: HeaderLeft(navigation),
            headerRight: HeaderRight(navigation),
            headerTintColor: "#FFF",
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: "#3a66e8",
            },
            headerTitleStyle: {
                fontSize: 22
            },

        }),
    },

});
const Ajuda_Navigation = createStackNavigator({
    Ajuda: {
        screen: Inicio,
        navigationOptions: ({ navigation }) => ({
            title: 'Ajuda!',
            headerLeft: HeaderLeft(navigation),
            headerRight: HeaderRight(navigation),
            headerTintColor: "#FFF",
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: "#3a66e8",
            },
            headerTitleStyle: {
                fontSize: 22
            },

        }),
    },

});

function CustomDrawerContentComponent(props) {
    const [press, setPress] = useState(false)
    return (
        <View >
            <View>
                <View style={{ height: 180, backgroundColor: '#3a66e8', padding: 20 }}>
                    <Image
                        style={{ height: 70, width: 70, borderRadius: 50 }}
                        source={require("../assets/avatar.png")}
                    />
                    <Text style={{ color: 'white', fontSize: 15, marginTop: 20, fontWeight: "bold" }}>
                        Geanderson Lemonte
                </Text>
                    <Text style={{ color: 'white', fontSize: 15, marginTop: 5 }}>
                        @geandersonlemonte
                </Text>
                    {press ?
                        <TouchableOpacity onPress={() => setPress(false)} style={styles.TouchableOpacityStyle}>
                            <Entypo name="chevron-thin-up" size={24} color="white" />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => setPress(true)} style={styles.TouchableOpacityStyle}>
                            <Entypo name="chevron-thin-down" size={24} color="white" />
                        </TouchableOpacity>
                    }




                </View>
                {
                    press ? <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Ionicons name="ios-add" size={40} color="black" />
                        <Text style={{ margin: 10, marginLeft: 30 }}>Adicionar Conta </Text>
                    </View> : <DrawerItems {...props} />
                }

            </View>
        </View>
    )
}

const DrawerNavigatorExample = createDrawerNavigator({
    Quadros: {
        screen: Quadros_Navigation,
        navigationOptions: {
            title: "Quadros",
            drawerIcon: () => <MaterialIcons name="dashboard" size={24} color="#011c47" />
        },
    },
    Inicio: {
        screen: Inicio_Navigation,
        navigationOptions: {
            title: "Início",
            drawerIcon: () => <MaterialIcons name={"home"} size={24} color="#011c47" />
        },
    },
    Cartao: {
        screen: Cartoes_Navigation,
        navigationOptions: {
            title: "Meus Cartões",
            drawerIcon: () => <MaterialIcons name={"credit-card"} size={24} color="#011c47" />
        },
    },
    Configuracoes: {
        screen: Configuracoes_Navigation,
        navigationOptions: {
            title: "Configurações",
            drawerIcon: () => <MaterialIcons name={"settings"} size={24} color="#011c47" />
        },
    },
    Ajuda: {
        screen: Ajuda_Navigation,
        navigationOptions: {
            title: "Ajuda!",
            drawerIcon: () => <MaterialIcons name={"info-outline"} size={24} color="011c47#" />
        },
    },
}, {
    drawerWidth: '85%',
    initialRouteName: 'Quadros',
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
        activeTintColor: 'blue',
        activeBackgroundColor: '#e6e6e6',


    }
});


export default createAppContainer(DrawerNavigatorExample);



const styles = StyleSheet.create({
    TouchableOpacityStyle: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
        top: 130,
    },
    CardList: {
        marginTop: 15,
        flexDirection: 'row',
        height: 30
    },
    textCard: {
        paddingLeft: 30,
        fontSize: 16,
        paddingTop: 3
    },
    imageCard: {
        marginLeft: 10,
        height: 30,
        width: 30
    },
});


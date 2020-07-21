import React from 'react';
import { Image, TouchableOpacity, SectionList, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from "react-native"

const Compromissos = [
    {
        "icon": "check-square", 'title': "PRÓXIMO", "data": [

            { "corprimaria": "black", "corsecundaria": "grey", 'descricao': 'Ambiente de teste', "comentario": "A entrega era para terca 8 de julho", "hr": "8 de Jul", "bloco": "dev-raiz: ", "status": "A fazer", 'id': "kjsdasjhsjsad" }]
    },
    { "icon": "heart", 'title': "DESTAQUES", "data": [{ "corprimaria": "#ed0e16", "corsecundaria": "#ffa1a4", 'descricao': 'Adicionar campos no cadastro da empresa', "comentario": "A entrega era para terca 8 de julho de 2020 as 13:30", "hr": "8 de Jul", "bloco": "Desenvolvimento: ", "status": "A fazer", 'id': "kjsdasjhsjsad" }, { "corprimaria": "#ed0e16", "cor-secundaria": "#ffa1a4", 'descricao': 'Adicionar campos no cadastro da empresa', "comentario": "A entrega era para terca 8 de julho", "hr": "8 de Jul", "bloco": "Desenvolvimento: ", "status": "A fazer", 'id': "kjsdasjhsjsad" }] },
]


export default function Inicio({ navigation }) {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="blue" />
            <View style={{ backgroundColor: "white" }}>
                <SectionList
                    sections={Compromissos}
                    renderItem={({ item }) => Card(item, navigation)
                    }
                    renderSectionHeader={({ section }) => CardHeader(section)
                    }
                    keyExtractor={(item, index) => index}
                />
            </View>
        </>
    );
}

const CardHeader = (section) => {
    return (
        <View style={styles.Header}>
            <Feather style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 3 }} name={section.icon} size={15} color="black" />
            <Text style={styles.sectionHeader}>{section.title}</Text>
        </View>
    )
}

const Card = (item, navigation) => {
    return (
        <>
            <TouchableOpacity style={{ margin: 10, backgroundColor: 'white', elevation: 10 }} onPress={() => navigation.navigate("Tarefas")}>
                <View style={{ backgroundColor: item.corprimaria, height: 100 }}>
                    <View style={{ height: 60, margin: 10, backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 15, margin: 5 }}>{item.descricao}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginLeft: 10, backgroundColor: item.corsecundaria, flex: .2, borderRadius: 5 }} >
                                <Text style={{ color: 'white' }} >{item.hr}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: 'white', paddingTop: 15 }}>
                                {item.bloco}
                            </Text>
                            <Text style={{ fontSize: 15, color: 'white', paddingTop: 15 }}>
                                {item.status}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    height: 100, borderWidth: 0.5,
                    borderColor: "grey",
                    height: 120,

                }}>
                    <View style={{
                        flexDirection: 'row',

                    }}>
                        <Image
                            style={{ height: 50, width: 50, borderRadius: 30, margin: 10, }}
                            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                        />
                        <Text style={{ fontSize: 15, margin: 20, flex: .8 }}>{item.comentario}</Text>

                    </View>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <TouchableOpacity style={{ paddingLeft: 10 }} >
                            <Text style={{ fontSize: 16, color: 'green', fontWeight: "bold" }}>Concluido</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingLeft: 20 }}>
                            <Text style={{ fontSize: 16, color: 'green', fontWeight: "bold" }}>Descartar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </TouchableOpacity>
        </>
    )
}



const styles = StyleSheet.create({
    Card: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: "grey",
        elevation: 3
    },
    Header: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row',
        flex: 1,
    },
    imageCard: {
        height: 100,
        width: 80
    },
    textCard: {
        padding: 14,
        fontSize: 16,
        height: 46,
    },
})
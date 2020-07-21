
import React from 'react';
import { Image, TouchableOpacity, SectionList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const List = [
    { 'title': "Quadro Pessoal", "data": [{ 'name': 'dev-raiz', 'id': "kjsdasjhsjsad" }] },
    { 'title': "Raiz Capixaba", "data": [{ 'name': 'Desenvovimento', 'id': "jhdahjkakj" }] },

]

console.disableYellowBox = true;


export default function App({ navigation }) {

    return (
        <View style={styles.container}>
            <SectionList
                sections={List}
                renderItem={({ item }) => <TouchableOpacity onPress={() => { navigation.navigate('Tarefas') }}>
                    <View style={styles.CardList}>
                        <Image
                            style={styles.imageCard}
                            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                        />
                        <Text style={styles.textCard}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
                }
                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.TouchableOpacityStyle}>
                <Ionicons name="ios-add" size={27} color="white" />
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    CardList: {
        marginBottom: 10,
        flexDirection: 'row',
        flex: 1
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },

    TouchableOpacityStyle: {
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
    },

    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    container: {
        flex: 1,
    },
    sectionHeader: {
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        fontSize: 15,
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    imageCard: {
        marginLeft: 10,
        height: 50,
        width: 50
    },
    textCard: {
        padding: 14,
        fontSize: 16,
        height: 46,
    },

});
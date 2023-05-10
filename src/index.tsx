import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native';
import React, { useState } from 'react';


export default function Home() {
    const [textoInput, setTextoInput] = useState('');
    const [lista, setLista] = useState([]);

    const adicionarItem = () => {
        const valorInput = textoInput;
        const novoItem = { id: Date.now(), texto: valorInput};
        setLista([...lista, novoItem]);
        setTextoInput('');
    }

    const removerItem = (id) => {
        const novaLista = lista.filter(item => item.id !== id);
        setLista(novaLista);
    }

    return (
    <View style={styles.container}>
        <Text>Nathan Maciel Vieira da Rocha</Text>
        <Text>React Native</Text>

        <View style = {{width: 400, height: 500, borderWidth:1, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
            <TextInput value = {textoInput} onChangeText={(texto) => setTextoInput(texto)} style = {{width: 200, height: 40, borderWidth:1}}/>
            <Button title="+" onPress={adicionarItem}/>
        </View>
        <ScrollView>
            <Text>Lista:</Text>
            {lista.map((item) => (
                <View style = {{flexDirection: 'row'}}>
                    <Text style = {{marginRight: 10}}>{item.texto}</Text>
                    <Button title = "-" onPress = {() => removerItem(item.id)} />
                </View>
            ))}
        </ScrollView>
        </View>
        <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
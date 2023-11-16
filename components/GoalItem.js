import {Alert, Button, Modal, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

export const GoalItem = ({id, content, delFuc}) => {
    const del = (ind) => {delFuc(ind)};

    return (
        <Pressable style={styles.item} onPress={() => del(id)}>
            <Text style={styles.title}>
                {id}
                .
                {content}
            </Text>
        </Pressable>

    )
}


const styles = StyleSheet.create({
    item: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#F194FF',
        marginBottom:3,
    },
    title: {
        fontSize: 20,
        color: '#FFFFFF'
    },
});

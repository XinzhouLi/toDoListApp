import {Alert, Button, Modal, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

export const GoalItem = ({id, content, delFuc}) => {
    const del = (ind) => {delFuc(ind)};

    return (
        <Pressable style={styles.item} onPress={() => del(id)}>
            <Text style={styles.title}>
                {id}
                {content}
            </Text>
        </Pressable>

    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

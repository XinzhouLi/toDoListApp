import {Alert, Button, Modal, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useEffect, useState} from "react";

export default function App() {
	const [goalList, setGoalList] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);
	const [goalInput, setGoalInput] = useState('')
	function showAddGoal() {
		console.log("active")
	}

	useEffect(() => {
		console.log(goalInput)
	}, [goalInput]);



	return (
			<View style={styles.centeredView}>

				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						Alert.alert('Modal has been closed.');
						setModalVisible(!modalVisible);
					}}>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>

							<Text style={styles.modalText}>Goal name:</Text>
							<TextInput
								style={styles.input}
								onChangeText={setGoalInput}
								value={goalInput}
								placeholder="Goal description"
								keyboardType="text"
							/>

							<Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={() => {setModalVisible(!modalVisible)
									setGoalList(goalList => [...goalList,goalInput])
									setGoalInput('')
									console.log("close")
								}}>
								<Text style={styles.textStyle}>Done</Text>
							</Pressable>

						</View>
					</View>
				</Modal>
				<Pressable
					style={[styles.button, styles.buttonOpen]}
					onPress={() => setModalVisible(true)}>
					<Text style={styles.textStyle}>Add Goals</Text>
				</Pressable>
			</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',

	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#F194FF',
	},
	buttonClose: {
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
});

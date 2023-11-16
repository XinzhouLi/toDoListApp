import {Alert, FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {GoalItem} from "./components/GoalItem";

export default function App() {
	const [goalList, setGoalList] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);
	const [goalInput, setGoalInput] = useState('')
	const [id, setId] = useState(0)

	function showAddGoalItem() {
		setModalVisible(true)
		console.log('open')
	}

	function closeAddGoalItem() {
		setModalVisible(!modalVisible)
		if (goalInput !== '') {
			setGoalList(goalList => [...goalList, {id: id, content: goalInput}])
			setId(id + 1)
		} else {
			console.log('empty input')
		}
		setGoalInput('')
		console.log("close")
	}


	// how does it going to trigger the change and rendering
	function deleteGoal(id) {
		let temp = [...goalList]
		temp.splice(temp.findIndex(value => value.id === id), 1)

		// let temp = goalList.splice(goalList.findIndex(value => value.id === id),1)
		setGoalList(temp)
		console.log('del func trigger' + id + JSON.stringify(goalList))
	}

	// useEffect(() => {
	// 	console.log("input hook trigger " + goalInput)
	// }, [goalInput]);
	//
	// useEffect(() => {
	// 	console.log("list hook trigger " + JSON.stringify(goalList))
	// }, [goalList]);

	const renderGoalItem = ({item}) => (
		<GoalItem id={item.id} content={item.content} delFuc={deleteGoal}/>
	);


	return (
		<View style={styles.centeredView}>
			<StatusBar style="dark-content"/>
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
							style={[styles.input, styles.botMargin]}
							onChangeText={setGoalInput}
							value={goalInput}
							placeholder="Goal description"
						/>

						<Pressable
							style={[styles.button, styles.buttonClose]}
							onPress={closeAddGoalItem}>
							<Text style={styles.textStyle}>Done</Text>
						</Pressable>

					</View>
				</View>
			</Modal>
			<Pressable
				style={[styles.button, styles.buttonOpen]}
				onPress={showAddGoalItem}>
				<Text style={styles.textStyle}>Add Goals</Text>
			</Pressable>
			<FlatList data={goalList} renderItem={renderGoalItem} keyExtractor={item => item.id}/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: '40px'
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 80,


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
		marginBottom: 5,
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
	botMargin: {
		marginBottom: 15
	}
});

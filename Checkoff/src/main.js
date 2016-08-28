// Main Component
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

module.exports = React.createClass({

  getInitialState() {
    return({
      tasks: ['Go shopping', 'Make dentist appointment', 'Get Car Inspection'],
      task: ''
    })
  },


  renderList(tasks) {
    // return JSX of individual Views or rows based on the task argument
    return(
      tasks.map((task) => {
        return(
          <View key={task} style={styles.task}>
            <Text>
              {task}
            </Text>
          </View>
        )
      })
    )
  },


  addTask() {
    let tasks = this.state.tasks.concat([this.state.task]);
    this.setState({tasks});
  },


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Checkoff
        </Text>

        <TextInput style={styles.input}
        placeholder='Add your goal'

        onChangeText={(text) => {
          this.setState({task: text})
        }}

        onEndEditing={() => this.addTask()}

        />

        {this.renderList(this.state.tasks)}

      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    margin: 30,
    marginTop: 40,
    textAlign: 'center',
    fontSize: 18
  },
  input: {
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    textAlign: 'center',
    margin: 10
  },
  task: {
    height: 60,
    borderBottomWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput} from 'react-native';
import {Header} from 'react-native-elements';


export default class WriteStoryScreen extends React.Component {
   
 

    render(){
        return(
            <View>
                <Header 
                    backgroundColor = {'blue'}
                    centerComponent = {{
                        text : 'Story Hub',
                        style : { color: 'white', fontSize: 20}
                    }}
                />
                <TextInput 
                    placeholder="Story Title"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                 
                    style={styles.title}/>
                <TextInput
                    placeholder="Author"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                   
                    style={styles.author} />
                <TextInput 
                    placeholder="Write your story"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                  
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    style={styles.submitButton}>
                   
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      padding: 10,
      margin:10
  },
  author: {
      height: 40,
      borderWidth: 2,
      padding: 10,
      margin:10
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10,
      padding:10
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'blue',
      width: 80,
      height: 40
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold'
  }
});

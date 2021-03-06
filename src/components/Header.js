// Import libraries for making a component
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Make a component
const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>  
    );   
};
// Make the component available to other parts of the app
export default Header;

//styling
const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#DDDDDD',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
});

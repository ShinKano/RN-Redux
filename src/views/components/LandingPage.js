import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const LandingPage = () => (

    <View style={styles.View}>
        <Text>はじめての React Native</Text>
    </View>
)

export default LandingPage;


const styles = StyleSheet.create({
    View: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
    
})
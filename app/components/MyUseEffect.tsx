import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const MyUseEffect = () => {

    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(" useEffect Execute.");
        // So the this code will not execute again and again beacuse []


    }, [count])
    
    return (
        <View>
            <Text>My Use Effect {count}</Text>






            <Button title='Increament' onPress={() => setCount(count + 1)} />




        </View>
    )
}

export default MyUseEffect

const styles = StyleSheet.create({})
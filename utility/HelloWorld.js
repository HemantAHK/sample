import React from 'react'
import { View, Text } from 'react-native'

const HelloWorld = (props) => {
    return (
        <View>
            <Text>{props.test}</Text>
        </View>
    )
}

export default HelloWorld

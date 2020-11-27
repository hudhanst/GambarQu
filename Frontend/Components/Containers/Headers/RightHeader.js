import React, { Fragment } from 'react'

import { View } from 'react-native'

import { Icon } from 'react-native-elements'

const RightHeader = (props) => {
    return (
        <View
            style={{ flexDirection: 'row', alignItems: 'center' }}
        >
            <Icon
                type='feather'
                name='heart'
                color='white'
                style={{ marginRight: 15 }}
            />
            <Icon
                type='feather'
                name='send'
                color='white'
                style={{ marginRight: 5, marginLeft: 15 }}
            />
        </View>
    )
}

export default RightHeader
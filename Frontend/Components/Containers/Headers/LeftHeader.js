import React, { Fragment } from 'react'

import { Text } from 'react-native-elements'

const LeftHeader = (props) => {
    return (
        <Fragment>
            <Text
                style={{ marginLeft: '3%', color: 'white', fontWeight: 'bold' }}
            >
                GambarQu
            </Text>
        </Fragment>
    )
}

export default LeftHeader
import axios from 'axios'

import {
    TEST,
} from './Type.Actions'

export const Default_Header = () => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return config
}
import {
    TEST
} from '../Actions/Type.Actions'

const InitialState = {
    test: localStorage.getItem('GQ_Auth_Test'),
    test1: null,
}

export default function (state = InitialState, action) {
    switch (action.type) {
        case TEST:
            return {

            }
        default:
            return state
    }
}
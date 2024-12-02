import {UserType} from '../HW8'

type Sort = 'up' | 'down'
type ActionType =
    | { type: 'sort'; payload: Sort }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const copy = [...state]
            if (action.payload === 'up') {
                return copy.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                })
            }
            if (action.payload === 'down') {
                const copy = [...state]
                return copy.sort(function (a, b) {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                })
            }
            return copy;
        }
        case 'check': {

            return state.filter(el => el.age >= 18)
        }
        default:
            return state
    }
}

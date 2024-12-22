import {combineReducers, legacy_createStore} from 'redux';

export type InitStateType = typeof initState;

const initState = {
    themeId: 1,
}

export const themeReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return { ...state, themeId: action.id }
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any

export type ActionsType = ReturnType<typeof changeThemeId>

const rootReducer = combineReducers({
    theme: themeReducer,
})

export const store = legacy_createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
const initState = {
    isLoading: false,
}

type InitialState = typeof initState

export const loadingReducer = (state: InitialState = initState, action: LoadingActionType): any => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {...state, isLoading: action.isLoading}
        }

        default:
            return state
    }
}

type LoadingActionType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => ({
    type: 'CHANGE_LOADING',
    isLoading,
} as const)

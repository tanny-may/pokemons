export function caughtPokemonsReducer(state = [], action) {
    if (action.type === 'CATCH_OR_RELEASE_POKEMON') {
        if (state.includes(action.id)) {
            return state.filter(p => p !== action.id)
        }
        return [...state, action.id]
    }
    return state;
}

export function catchOrReleasePokemon(id) {
    return { type: 'CATCH_OR_RELEASE_POKEMON', id }
};
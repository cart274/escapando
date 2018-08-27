export default (store={selectedPart:[]},action) => {
    switch (action.type) {
        case "UPDATE_SELECTED":
            return {selectedPart:action.data.splice(0)}
        break;
        default:
            return store
        break;
    }
}

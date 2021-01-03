export const reducer = (state, action) => {
    if (action.type === 'add-item') {
        const newPeople = [...state.people, action.payload];
        return ({
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'item added'
        });

    }
    if (action.type === 'no-value') {
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'please enter value'
        };  //return {}-without circular braket means here we returning object{}
        //{...objext,a:x,b:y} means we copying objext as it is with making change sin and b
    }
    if (action.type === 'close-modal') {
        return {
            ...state,
            isModalOpen: false
        };
    }
    if (action.type === 'remove-item') {
        const newpeople = state.people.filter((person) => person.id != action.payload);
        return { ...state, people: newpeople };
    }
 

    throw new Error ('no matching action type')

}
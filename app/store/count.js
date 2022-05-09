// Lets update the todo from an api call using the below API
// let api_call = 'https://www.boredapi.com/api/activity'

// ACTION TYPES
const INCREMENT_COUNT = 'INCREMENT_COUNT'

// ACTION CREATORS
export const increment = () => {
    return {
        type: INCREMENT_COUNT
    }
}

// THUNK CREATORS......?


const initState = {
    "count": 0,
    "todo": {
        "activity": "Learn how to use Redux to make an api/async call OR click the counter to 5+",
        "type": "education",
        "participants": "Cohort Size",
        "key": "9924423"
    }
}

  const reducer = (state = initState, action) => {
    switch (action.type) {
    case INCREMENT_COUNT:
        return {...state, count: state.count += 1}
      default:
        return state;
    }
  };

  export default reducer
import axios from "axios";
let api_call = 'https://www.boredapi.com/api/activity'

const GOT_TO_DO = 'GOT_TO_DO'

const gotToDo = (toDoObj) => {
    return {
      type: GOT_TO_DO, 
      payload: toDoObj
    };
  };

export let goGetApiInfoThunk = () => {
    return async (dispatch) => {
      // we need use axios to get an activity
      let {data} = await axios.get(api_call)
  
      console.log(" GetState ", axios)
      dispatch(gotToDo(data));
    }
  }
  

  const reducer = (state = {}, action) => {
    switch (action.type) {
        case GOT_TO_DO:
        return  action.payload
      default:
        return state;
    }
  };

  export default reducer

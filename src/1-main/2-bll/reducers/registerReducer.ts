const initState = {

};



export const registerReducer = (state = initState, action: any): typeof initState => {
  switch (action.type) {
    case '' : {
      return {

      }
    }


    default: return state;
  }
};
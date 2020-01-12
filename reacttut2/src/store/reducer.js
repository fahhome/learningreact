const initialState={
  keynotrandom : 0,  
  age:21,
  history : []  
};

const reducer = (state = initialState , action) =>{
    const newState  = {...state};
    if(action.type === 'AGE_UP'){
        newState.keynotrandom++;
        newState.age++ ;
        newState.history = newState.history.concat({id:newState.keynotrandom,age:newState.age})     
    }
    if(action.type === 'AGE_DOWN'){
        newState.keynotrandom++;
        newState.age-- ;
        newState.history = newState.history.concat({id:newState.keynotrandom,age:newState.age})
    }
    if(action.type === 'DELETE'){
       newState.history = newState.history.filter((el)=> el.id !== action.val )
    }
    return newState ;
};

export default reducer ;
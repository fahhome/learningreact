import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './maincontainer.js'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducer';



class MyApp extends React.Component{

render(){

return(
   <div>
     <MainContainer/>
   </div>

)

}

}

const store = createStore(reducer);

ReactDOM.render(<Provider store = {store}>
  <MyApp/> </Provider>,
  document.querySelector(".container")
);

import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'

class MainContainer extends React.Component{


render(){
  return(
   <div className = "App">
     <div className = "age">Age: <span>{this.props.age}</span></div>
     <button className="ageUp" onClick = {this.props.onAgeUp}>Age UP</button>
     <button  className="ageDown" onClick = {this.props.onAgeDown}>Age Down</button>
     <div className ="history">
         <label id="l1">History</label>
         <ul>
         {this.props.history.map(el => (
              <li 
                key={el.id}
                onClick={() => this.props.onDelete(el.id)}>
                {el.age}
              </li>
            ))}
         </ul>
     </div>
   </div>
  )
}

}

const mapStateToProps = (state) => {
    return{
        age:state.age,
        history:state.history
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp : () => dispatch({type : 'AGE_UP'}),
        onAgeDown : () => dispatch({type:'AGE_DOWN'}),
        onDelete : (keyid) => dispatch({type:'DELETE',val:keyid})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainContainer) ;

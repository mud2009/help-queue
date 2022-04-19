import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Debug from './Debug';
import Pair from './Pair';
import Fifteen from './Fifteen';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleOnPage: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      visibleOnPage: prevState.visibleOnPage + 1
    }));
    if (this.state.visibleOnPage > 3){
      this.setState(() => ({
        visibleOnPage: 0
      }))
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.visibleOnPage === 0) {
      currentlyVisibleState = <TicketList />
      buttonText = "Add Ticket";
    } else if(this.state.visibleOnPage === 1){
      currentlyVisibleState = <Debug />
      buttonText = "Yes";
    } else if (this.state.visibleOnPage === 2){
      currentlyVisibleState = <Pair />
      buttonText = "Yes";
    } else if (this.state.visibleOnPage === 3){
      currentlyVisibleState = <Fifteen />
      buttonText = "Yes";
    } else {
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return to Ticket List";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;
import React from 'react';

class Message extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        activeCheck: false,
        activeStar: false,
        activeRead: false,
      }
  }

  toggleCheck = (event) => {
    const currentState = this.state.activeCheck;
    this.setState({ activeCheck: !currentState });
  }

  toggleStar = (event) => {
    const currentState = this.state.activeStar;
    this.setState({ activeStar: !currentState });
  }

  toggleRead = (event) => {
    const currentState = this.state.activeRead;
    this.setState({ activeRead: !currentState});
  }

render () {
  return (
    <div className={`row message ${this.state.activeRead ? 'read': 'unread'} ${this.state.activeCheck ? 'selected': null}`} >
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" onClick = { this.toggleCheck }/>
          </div>
          <div className="col-xs-2">
            <i className={`fa fa-star-o ${this.state.activeStar ? 'star': null}`} onClick = { this.toggleStar }></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        <a href="#">
        </a>
        <div onClick = { this.toggleRead }>
        {this.props.message.subject}
        </div>
      </div>
    </div>
    )
  }
}

export default Message

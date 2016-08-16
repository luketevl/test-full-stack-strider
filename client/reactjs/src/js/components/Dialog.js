import React from 'react';

export default class Dialog extends React.Component {
  constructor(){
    super();
    this.closeDialog  = this.closeDialog.bind(this);
    this.openDialog   = this.openDialog.bind(this);
  }

  closeDialog(){
    this.close();
  }
  openDialog(){
    this.showModal();
  }

  render(){
    return {
      <dialog id="dialog" className="mdl-dialog">
        <h3 className="mdl-dialog__title">{this.props.name}</h3>
        <div className="mdl-dialog__content">
          <img src={this.props.img} alt={this.props.name} />
        </div>
        <div className="mdl-dialog__actions">
          <button type="button" className="mdl-button" onClick={this.closeDialog}>Close</button>
        </div>
      </dialog>
    }
  }
}

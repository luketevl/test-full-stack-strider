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
      <dialog id="dialog" class="mdl-dialog">
        <h3 class="mdl-dialog__title">{this.props.name}</h3>
        <div class="mdl-dialog__content">
          <img src={this.props.img} alt={this.props.name} />
        </div>
        <div class="mdl-dialog__actions">
          <button type="button" class="mdl-button" onClick={this.closeDialog}>Close</button>
        </div>
      </dialog>
    }
  }
}

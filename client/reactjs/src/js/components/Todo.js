import React from 'react';

export default class Todo extends React.Component{
  constructor(props){
    super();
  }

  render(){
    const { checked, name, img, _id} = this.props;
    let checkedText = '';
    let readonly = '';
    if(checked){
      checkedText = 'checked';
      readonly = 'readonly';
    }
    return (
      <li class="mdl-list__item">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons  mdl-list__item-avatar">person</i>
          <div class="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet">
            <input class="mdl-textfield__input" type="text" value={name} focus="focused" readonly={readonly} />
            <label class="mdl-textfield__label" for="name">Todo name...</label>
          </div>
        </span>
        <span class="mdl-list__item-secondary-action">
          <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
            <input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input" checked={checkedText} />
            <button class="mdl-button mdl-js-button mdl-button--icon">
              <i class="material-icons">photo</i>
            </button>
            <button class="mdl-button mdl-js-button mdl-button--icon">
              <i class="material-icons">delete</i>
            </button>
          </label>
        </span>
      </li>
    );
  }
}

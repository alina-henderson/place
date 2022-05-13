import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submit = submitForm;
    this._form = this._popup.querySelector('.form');
    this._formInputs = this._form.querySelectorAll('.form__input');
  }


  _getInputValues() {
    return this._formInputs.forEach((input) => {
      input.name = input.value;
    });
  }

_handleSubmit = (evt) => {
  evt.preventDefault();
  this._submit(this._getInputValues());
  this.close();
}

setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener('submit', _handleSubmit.bind(this._getInputValues));
}


close() {
  super.close();
  this._form.reset();
}
}
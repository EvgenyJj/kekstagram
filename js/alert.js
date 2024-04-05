import { isEscapeKey } from './util.js';

const ALERT_SHOW_TIME = 5000;

let templateMessage;

const renderMessage = (element, value) => {
  templateMessage = element.cloneNode(true);
  document.body.append(templateMessage);

  const messageButton = templateMessage.querySelector(`.${value}__button`);
  messageButton.addEventListener('click', onMessageButtonClick);
  document.addEventListener('keydown', onModalEscKeydown);
  document.body.addEventListener('click', onBodyClick);
};

const closeMessage = () => {
  templateMessage.remove();
  document.removeEventListener('keydown', onModalEscKeydown);
  document.body.removeEventListener('click', onBodyClick);
};

function onMessageButtonClick() {
  closeMessage();
};

function onModalEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

function onBodyClick(evt) {
  const success = evt.target.closest('.success__inner');
  const error = evt.target.closest('.error__inner');

  if (success || error) {
    return;
  }
  closeMessage();
}

const renderError = (element) => {
  templateMessage = element.cloneNode(true);
  document.body.append(templateMessage);

  setTimeout(() => {
    templateMessage.remove();
  }, ALERT_SHOW_TIME);
};

export {renderMessage, renderError};



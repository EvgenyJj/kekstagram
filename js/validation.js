const RE = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const MAX_NUMBER_HASHTAGS = 5;
const MAX_LENGTH_COMMENT = 140;
const HASHTAG_SYMBOLS_INVALID = 'Хештег начинается с символа #(решётка) и может состоять только из букв и цифр длиной не больше 20 символов (включая решётку).';
const INVALID_NUMBER_OF_HASHTAGS = 'Нельзя указать больше пяти хэштегов.';
const WARNING_HASHTAG_UNIQUE = 'Один и тот же хэш-тег не может быть использован дважды.';
const INVALID_DESCRIPTION_LENGTH  = 'Длина комментария не может составлять больше 140 символов.';

const form = document.querySelector('.img-upload__form');
const hashtagsInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');

const pristine = new Pristine (form, {

  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const createHashtag = (value) => value.trim().toLowerCase().split(' ').filter((hashtag) => hashtag);

const isUniqueHashtags = (value) => {

  const hashtags = createHashtag(value);
  return hashtags.length === new Set(hashtags).size;
};

const isCorrectHashtag = (value) => createHashtag(value).every((hashtag) => RE.test(hashtag));

const isCorrectNumberHashtags = (value) => createHashtag(value).length <= MAX_NUMBER_HASHTAGS;

const isCorrectDescription = (value) => value.length <= MAX_LENGTH_COMMENT;

const setValidator = () => {
  pristine.addValidator(
    hashtagsInput,
    isCorrectHashtag,
    HASHTAG_SYMBOLS_INVALID,
    1,
    true
  );
  pristine.addValidator(
    hashtagsInput,
    isCorrectNumberHashtags,
    INVALID_NUMBER_OF_HASHTAGS,
    1,
    true
  );
  pristine.addValidator(
    hashtagsInput,
    isUniqueHashtags,
    WARNING_HASHTAG_UNIQUE,
    1,
    true
  );
  pristine.addValidator(
    descriptionInput,
    isCorrectDescription,
    INVALID_DESCRIPTION_LENGTH,
    1,
    true
  );
};

const validPristine = () => pristine.validate();
const resetPristine = () => pristine.reset();

export {validPristine, setValidator, resetPristine};

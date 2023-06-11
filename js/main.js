import {createDescriptionPhoto, MAX_VALUE} from'./mock-data.js';

const generateUserPostedPhoto = Array.from({length: MAX_VALUE}, createDescriptionPhoto);
console.log(generateUserPostedPhoto);

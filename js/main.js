import {createDescriptionPhoto, MAX_NUMBER} from'./mock-data.js';

const generateUserPostedPhoto = Array.from({length: MAX_NUMBER}, createDescriptionPhoto);
console.log(generateUserPostedPhoto);

import './style.css';
import postScore from './modules/postData.js';
import getScore from './modules/result.js';
import reloadData from './modules/fetch.js';
// elements from html
const refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', reloadData);
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', postScore);
window.addEventListener('load', getScore);

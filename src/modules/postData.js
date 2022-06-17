const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('scores');
const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/newgame/scores';
const postScore = async () => {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({ user: nameInput.value, score: scoreInput.value }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  const dataSent = await response.json();
  return dataSent;
};
export default postScore;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '😂', name: 'Laughing' },
    { emoji: '😍', name: 'Heart Eyes' },
    { emoji: '😎', name: 'Cool' },
    { emoji: '😢', name: 'Crying' },
    { emoji: '😡', name: 'Angry' },
    { emoji: '🎉', name: 'Party' },
    { emoji: '🔥', name: 'Fire' },
    { emoji: '🌈', name: 'Rainbow' },
    { emoji: '⚽', name: 'Soccer Ball' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🚗', name: 'Car' },
    { emoji: '✈️', name: 'Airplane' }
  ];
let currentScore = 0;
let leaderboard = [];

function getRandomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
}

function getOptions(correctEmoji) {
  const options = [correctEmoji.name];
  while (options.length < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!options.includes(random)) options.push(random);
  }
  return options.sort(() => Math.random() - 0.5);
}

app.get('/emoji', (req, res) => {
  const emojiObj = getRandomEmoji();
  const options = getOptions(emojiObj);
  res.json({ emoji: emojiObj.emoji, correct: emojiObj.name, options });
});


app.post('/guess', (req, res) => {
  const { guess, correct } = req.body;
  let result;
  if (guess === correct) {
    currentScore++;
    result = 'Correct!';
  } else {
    result = 'Wrong!';
  }
  res.json({ result, score: currentScore });
});


app.get('/leaderboard', (req, res) => res.json(leaderboard));

app.post('/leaderboard', (req, res) => {
  const { player } = req.body;
  leaderboard.push({ player, score: currentScore });
  leaderboard.sort((a, b) => b.score - a.score);
  res.json(leaderboard);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

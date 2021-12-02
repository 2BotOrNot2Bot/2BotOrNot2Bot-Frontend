const randomMessage = [
  "Hey there!",
  "Hello",
  "Hi!",
  "How are you?",
  "HEY How you doin'?",
  "Hi nice to meet you!"
];

export default function getRandomMessage () {
  return randomMessage[(Math.floor(Math.random() * randomMessage.length))];
}

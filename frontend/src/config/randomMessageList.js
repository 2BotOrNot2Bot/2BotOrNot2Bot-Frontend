const randomMessage = [
  "Hey there!",
  "Hello",
  "Hi!",
  "HEY",
  "Hi nice to meet you!",
  "Hello there!"
];

export default function getRandomMessage () {
  return randomMessage[(Math.floor(Math.random() * randomMessage.length))];
}

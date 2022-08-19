export const generateRandomLetters = (numberOfCharacters: number) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  const random = []
  for (let i = 0; i < numberOfCharacters; i++) {
    random.push(letters[Math.floor(Math.random() * letters.length)])
  }
  return random
}

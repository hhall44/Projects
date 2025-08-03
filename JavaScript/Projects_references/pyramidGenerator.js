function pyramid(char, int, bool) {
  let result = '\n';
  const maxWidth = 1 + 2 * (int - 1);

  if (bool) {
    for (let i = int - 1; i >= 0; i--) {
      const numChars = 1 + 2 * i;
      const numSpaces = (maxWidth - numChars) / 2;
      result += ' '.repeat(numSpaces) + char.repeat(numChars) + '\n';
    }
  } else {
    for (let i = 0; i < int; i++) {
      const numChars = 1 + 2 * i;
      const numSpaces = (maxWidth - numChars) / 2;
      result += ' '.repeat(numSpaces) + char.repeat(numChars) + '\n';
    }
  }
  return result;
}
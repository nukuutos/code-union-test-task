const MAX_SYMBOLS = 30;

const cutText = (text) => {
  if (text.length <= MAX_SYMBOLS) return text;

  const words = text.split(' ');

  let newText = text;

  while (newText.length > MAX_SYMBOLS) {
    words.pop();
    newText = words.join(' ');
  }

  return `${newText}..`;
};

export default cutText;

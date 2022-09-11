import parse from 'html-react-parser';

const ColorizeText = (text: string) => {
  const allWords = /(\w+)/g;
  const colors = ['red', 'blue', 'green', 'pink', 'yellow'];

  const getRandomColor = (): string => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return parse(
    text.replace(
      allWords,
      (s) => `<span className="${getRandomColor()}">${s}</span>`
    )
  );
};

export default ColorizeText;

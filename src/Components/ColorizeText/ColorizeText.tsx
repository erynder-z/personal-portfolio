import parse from 'html-react-parser';

const ColorizeText = (text: string, identifier: string, isFinal: boolean) => {
  const allWords = /(\w+)/g;
  const colors = ['red', 'blue', 'green', 'pink', 'yellow'];

  const myName = /\b(Stefan)\b/;
  const title1 = /\b(frontend)\b/;
  const title2 = /\b(web)\b/;
  const title3 = /\b(developer)\b/;

  const getRandomColor = (): string => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  if (identifier !== 'paragraph2' && isFinal) {
    return parse(
      text
        .replace(
          allWords,
          (s) => `<span className="${getRandomColor()}">${s}</span>`
        )
        .replace(
          myName,
          (s) => `<span className="myName ${getRandomColor()} ">${s}</span>`
        )
        .replace(
          title1,
          (s) => `<span className="myTitle ${getRandomColor()}">${s}</span>`
        )
        .replace(
          title2,
          (s) => `<span className="myTitle ${getRandomColor()}">${s}</span>`
        )
        .replace(
          title3,
          (s) => `<span className="myTitle ${getRandomColor()}">${s}</span>`
        )
    );
  } else {
    return parse(
      text.replace(
        allWords,
        (s) => `<span className="${getRandomColor()}">${s}</span>`
      )
    );
  }
};

export default ColorizeText;

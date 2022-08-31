import parse from 'html-react-parser';

const parseString = (text: string) => {
  const myName = /\b(Stefan)\b/g;
  const myTitle = /\b(frontend web developer)\b/g;

  return parse(
    text
      .replace(myName, (s) => `<span className="myName">${s}</span>`)
      .replace(myTitle, (s) => `<span className="myTitle">${s}</span>`)
  );
};

export default parseString;

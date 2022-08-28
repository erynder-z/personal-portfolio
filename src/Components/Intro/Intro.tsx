import React, { FC, useEffect, useState } from 'react';

interface Props {
  active: boolean;
}

const Intro: FC<Props> = ({ active }) => {
  const [text, setText] = useState<string>(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsa sunt porro maxime magnam esse, magni harum velit numquam corporis molestias tempore quod, illo aliquid labore excepturi aperiam quidem ad ab nam culpa. Dignissimos deleniti quis et explicabo sequi voluptatum nesciunt reprehenderit nihil similique facilis molestias repellat ea ullam ducimus a iste, doloribus nam placeat? Necessitatibus expedita nobis quia consequatur fugiat animi veritatis in voluptatibus eveniet libero labore accusantium molestias hic voluptatem nesciunt praesentium neque doloribus, itaque, natus et veniam eligendi consectetur pariatur. Natus maxime sint, et quis id vero vitae deserunt qui assumenda consectetur est dicta eveniet fugit commodi corporis voluptas, dolores ratione fugiat laborum dolore officia quaerat provident nostrum. Doloremque voluptatum iusto vitae officia minus in doloribus corporis, quidem deleniti porro numquam accusantium fuga blanditiis at consectetur quisquam cupiditate minima rem non eum ducimus veritatis aspernatur explicabo eveniet! Provident laboriosam cum accusamus commodi eaque nobis fuga ut quis?'
  );

  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const shuffleText = (): void => {
    const wordsArray: string[] = text.split(' ');
    const shuffledArray: string[] = wordsArray.map((word) => {
      return shuffleWord(word);
    });

    setTimeout(() => {
      setText(shuffledArray.join(' '));
    }, randomIntFromInterval(500, 1500));
  };

  const shuffleWord = (s: string): string => {
    const getRandomInt = (n: number): number => {
      return Math.floor(Math.random() * n);
    };

    const arr: string[] = s.split('');
    const n: number = arr.length;

    for (let i = 0; i < n - 1; ++i) {
      const j: number = getRandomInt(n);

      let temp: string = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    s = arr.join('');
    return s;
  };

  const fadeOutText = (): void => {
    setText(' ');
  };

  useEffect(() => {
    if (active) {
      let count: number = 0;

      while (count <= 999) {
        shuffleText();
        count++;
      }

      setTimeout(() => {
        setText(
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsa sunt porro maxime magnam esse, magni harum velit numquam corporis molestias tempore quod, illo aliquid labore excepturi aperiam quidem ad ab nam culpa. Dignissimos deleniti quis et explicabo sequi voluptatum nesciunt reprehenderit nihil similique facilis molestias repellat ea ullam ducimus a iste, doloribus nam placeat? Necessitatibus expedita nobis quia consequatur fugiat animi veritatis in voluptatibus eveniet libero labore accusantium molestias hic voluptatem nesciunt praesentium neque doloribus, itaque, natus et veniam eligendi consectetur pariatur. Natus maxime sint, et quis id vero vitae deserunt qui assumenda consectetur est dicta eveniet fugit commodi corporis voluptas, dolores ratione fugiat laborum dolore officia quaerat provident nostrum. Doloremque voluptatum iusto vitae officia minus in doloribus corporis, quidem deleniti porro numquam accusantium fuga blanditiis at consectetur quisquam cupiditate minima rem non eum ducimus veritatis aspernatur explicabo eveniet! Provident laboriosam cum accusamus commodi eaque nobis fuga ut quis?'
        );
      }, 1501);
    }

    if (!active) {
      fadeOutText();
      setTimeout(() => {
        setText(
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsa sunt porro maxime magnam esse, magni harum velit numquam corporis molestias tempore quod, illo aliquid labore excepturi aperiam quidem ad ab nam culpa. Dignissimos deleniti quis et explicabo sequi voluptatum nesciunt reprehenderit nihil similique facilis molestias repellat ea ullam ducimus a iste, doloribus nam placeat? Necessitatibus expedita nobis quia consequatur fugiat animi veritatis in voluptatibus eveniet libero labore accusantium molestias hic voluptatem nesciunt praesentium neque doloribus, itaque, natus et veniam eligendi consectetur pariatur. Natus maxime sint, et quis id vero vitae deserunt qui assumenda consectetur est dicta eveniet fugit commodi corporis voluptas, dolores ratione fugiat laborum dolore officia quaerat provident nostrum. Doloremque voluptatum iusto vitae officia minus in doloribus corporis, quidem deleniti porro numquam accusantium fuga blanditiis at consectetur quisquam cupiditate minima rem non eum ducimus veritatis aspernatur explicabo eveniet! Provident laboriosam cum accusamus commodi eaque nobis fuga ut quis?'
        );
      }, 500);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div className="intro-wrapper">
      <h2>hello</h2>
      <p>{text}</p>
    </div>
  );
};

export default Intro;

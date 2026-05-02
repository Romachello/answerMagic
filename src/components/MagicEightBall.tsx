import { useState } from 'react';
import { answersList, type IAnswer } from '../data/answers';
import './MagicEightBall.css';

const MagicEightBall = () => {
  const [currentAnswer, setCurrentAnswer] = useState<IAnswer | null>(null);
  const [isShaking, setIsShaking] = useState(false);

  const getRandomAnswer = () => {
    if (isShaking) return;
    setIsShaking(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * answersList.length);
      setCurrentAnswer(answersList[randomIndex]);
      setIsShaking(false);
    }, 600);
  };

  return (
    <div className="magic-ball-container">
      <div
        className={`magic-ball ${isShaking ? 'shake' : ''}`}
        onClick={getRandomAnswer}
      >
        <div className="inner-screen">
          <div className="triangle">
            <div className="answer-text">
              {currentAnswer?.text || '🤔'}
            </div>
          </div>
        </div>
      </div>
      <button className="shake-button" onClick={getRandomAnswer}>
        Трясти Шар
      </button>
    </div>
  );
};

export default MagicEightBall;
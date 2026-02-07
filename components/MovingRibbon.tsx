import React from 'react';
import './MovingRibbon.css';

const RIBBON_TEXT = 'XenoraLearning • AI education for every generation';
const ITEMS_PER_GROUP = 4;

const MovingRibbon: React.FC = () => {
  const renderGroup = (groupIndex: number) => (
    <div className="moving-ribbon__group" aria-hidden="true">
      {Array.from({ length: ITEMS_PER_GROUP }, (_, itemIndex) => (
        <span key={`${groupIndex}-${itemIndex}`} className="moving-ribbon__item">
          {RIBBON_TEXT}
        </span>
      ))}
    </div>
  );

  return (
    <div className="moving-ribbon" role="region" aria-label="XenoraLearning brand ribbon">
      {/* Duplicate groups enable a seamless infinite loop without visible jumps. */}
      <div className="moving-ribbon__track">
        {renderGroup(1)}
        {renderGroup(2)}
      </div>
    </div>
  );
};

export default MovingRibbon;

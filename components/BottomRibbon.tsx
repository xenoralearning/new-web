import React from 'react';
import './BottomRibbon.css';

const RIBBON_TEXT = 'XenoraLearning • AI education for every generation • 500+ students trained • 100+ AI tools introduced';
const ITEMS_PER_GROUP = 3;

/**
 * BottomRibbon: Fixed ribbon at the bottom of viewport
 * Scrolls right → left (opposite direction from top)
 * Creates visual balance and continuous brand presence
 */
const BottomRibbon: React.FC = () => {
  const renderGroup = (groupIndex: number) => (
    <div className="bottom-ribbon__group" aria-hidden="true">
      {Array.from({ length: ITEMS_PER_GROUP }, (_, itemIndex) => (
        <span key={`bottom-${groupIndex}-${itemIndex}`} className="bottom-ribbon__item">
          {RIBBON_TEXT}
        </span>
      ))}
    </div>
  );

  return (
    <div className="bottom-ribbon" role="region" aria-label="XenoraLearning premium bottom ribbon">
      <div className="bottom-ribbon__track">
        {renderGroup(1)}
        {renderGroup(2)}
      </div>
    </div>
  );
};

export default BottomRibbon;

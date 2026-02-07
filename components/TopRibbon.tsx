import React from 'react';
import './TopRibbon.css';

const RIBBON_TEXT = 'XenoraLearning • AI education for every generation • 500+ students trained • 100+ AI tools introduced';
const ITEMS_PER_GROUP = 3;

/**
 * TopRibbon: Fixed ribbon at the top of viewport
 * Scrolls left → right (opposite direction from bottom)
 * Creates a premium, tech-forward visual anchor
 */
const TopRibbon: React.FC = () => {
  const renderGroup = (groupIndex: number) => (
    <div className="top-ribbon__group" aria-hidden="true">
      {Array.from({ length: ITEMS_PER_GROUP }, (_, itemIndex) => (
        <span key={`top-${groupIndex}-${itemIndex}`} className="top-ribbon__item">
          {RIBBON_TEXT}
        </span>
      ))}
    </div>
  );

  return (
    <div className="top-ribbon" role="region" aria-label="XenoraLearning premium top ribbon">
      <div className="top-ribbon__track">
        {renderGroup(1)}
        {renderGroup(2)}
        {renderGroup(3)}
      </div>
    </div>
  );
};

export default TopRibbon;

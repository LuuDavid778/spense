import React, { useState } from 'react';
import {
  SwipeableList,
  SwipeableListItem
} from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

import TransactionListItem from '../list-items/TransactionListItem';
import TransactionSwipeContent from '../list-items/TransactionSwipeContent';
import { MailIcon, EditIcon, DeleteIcon } from '../list-items/icons';

import './Transaction.css';

const Transaction = () => {
  const [triggeredItemAction, triggerItemAction] = useState('None');
  const [swipeProgress, handleSwipeProgress] = useState();
  const [swipeAction, handleSwipeAction] = useState('None');
  const [items] = useState([
    { id: 1, text: 'First', description: 'first description' },
  ]);

  const swipeRightOptions = name => ({
    content: (
      <TransactionSwipeContent
        icon={<DeleteIcon />}
        label="Delete"
        position="left"
      />
    ),
    action: () => triggerItemAction(`Delete action triggered on "${name}" item`)
  });

  const swipeLeftOptions = name => ({
    content: (
      <TransactionSwipeContent
        icon={<EditIcon />}
        label="Edit"
        position="right"
      />
    ),
    action: () => triggerItemAction(`Edit action triggered on "${name}" item `)
  });

  const handleSwipeStart = () => {
    triggerItemAction('None');
    handleSwipeAction('Swipe started');
  };

  const handleSwipeEnd = () => {
    handleSwipeAction('Swipe ended');
    handleSwipeProgress();
  };

  const threshold = 0.25;

  return (
    <>

      <div className="complex-swipeable-list__container">
        <SwipeableList threshold={threshold}>
          {items.map(({ id, text, description }) => (
            <SwipeableListItem
              key={id}
              swipeLeft={swipeLeftOptions(text)}
              swipeRight={swipeRightOptions(text)}
              onSwipeEnd={handleSwipeEnd}
              onSwipeProgress={handleSwipeProgress}
              onSwipeStart={handleSwipeStart}
            >
              <TransactionListItem
                description={description}
                name={text}
              />
            </SwipeableListItem>
          ))}
        </SwipeableList>
      </div>
      
      {/* Check actions triggered and details */}
      {/* <div className="page__summary">
        <span className="page__action--title">Triggered action:</span>
        <span className="page__action--value">{triggeredItemAction}</span>
        <span className="page__action--title">Callback swipe action:</span>
        <span className="page__action--value">{swipeAction}</span>
        <span className="page__action--title">Callback swipe progress:</span>
        <span className="page__action--value">{swipeProgress ?? '-'}%</span>
      </div> */}
    </>
  );
};

export default Transaction;

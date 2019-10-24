import React from 'react';
import { connect } from 'react-redux';

import Counter from '../../components/Counter';

const Home = ({ counter, dispatch }) => {
  const action = type => dispatch({ type });
  return (
    <div>
      <h2>Home</h2>
      <Counter
        value={counter}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')}
        onIncrementIfOdd={() => action('INCREMENT_IF_ODD')}
        onIncrementAsync={() => action('INCREMENT_ASYNC')}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  counter: state,
});

export default connect(mapStateToProps)(Home);

import React from 'react';
import { connect } from 'react-redux';

import Counter from '../../components/Counter';

const Home = props => {
  const action = type => store.dispatch({ type });
  console.log('props : ', props);
  return (
    <div>
      <h2>Home</h2>
      <Counter
        value={'store.getState()'}
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

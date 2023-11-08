import React from 'react';
import { connect } from 'react-redux';

function ContadorGlobal(props) {
  return (
    <div>
      <p>Contador Global: {props.count}</p>
      <button onClick={props.incrementar}>Incrementar Global</button>
      <button onClick={props.decrementar}>Decrementar Global</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch) => ({
  incrementar: () => dispatch({ type: 'INCREMENT' }),
  decrementar: () => dispatch({ type: 'DECREMENT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContadorGlobal);
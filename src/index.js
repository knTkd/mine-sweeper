import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Game extends React.Component {
  render() {
    const status = 'Hello!';
    return (
	<div className="game">
	</dive>

	<div className="game-info">
	<div>{status}</div>
	</div>
    );
  }
}


ReactDOM.render(
    <Game />,
    document.getElementByInd('root')
);

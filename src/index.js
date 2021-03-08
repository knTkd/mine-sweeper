import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props) {
  return (
      <button className="square" onClick={props.onClick}>
      {props.value}
      </button>
  );
}


class Board extends React.Component {

  renderSquare(i) {
    return (
	<Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
	/>
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        {this.renderSquare(6)}
        </div>
        <div className="board-row">
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        {this.renderSquare(9)}
        {this.renderSquare(10)}
        {this.renderSquare(11)}
        {this.renderSquare(12)}
        {this.renderSquare(13)}
        </div>
        <div className="board-row">
        {this.renderSquare(14)}
        {this.renderSquare(15)}
        {this.renderSquare(16)}
        {this.renderSquare(17)}
        {this.renderSquare(18)}
        {this.renderSquare(19)}
        {this.renderSquare(20)}
        </div>
        <div className="board-row">
        {this.renderSquare(21)}
        {this.renderSquare(22)}
        {this.renderSquare(23)}
        {this.renderSquare(24)}
        {this.renderSquare(25)}
        {this.renderSquare(26)}
        {this.renderSquare(27)}
        </div>
        <div className="board-row">
        {this.renderSquare(28)}
        {this.renderSquare(29)}
        {this.renderSquare(30)}
        {this.renderSquare(31)}
        {this.renderSquare(32)}
        {this.renderSquare(33)}
        {this.renderSquare(34)}
        </div>
        <div className="board-row">
        {this.renderSquare(35)}
        {this.renderSquare(36)}
        {this.renderSquare(37)}
        {this.renderSquare(38)}
        {this.renderSquare(39)}
        {this.renderSquare(40)}
        {this.renderSquare(41)}
        </div>
        <div className="board-row">
        {this.renderSquare(42)}
        {this.renderSquare(43)}
        {this.renderSquare(44)}
        {this.renderSquare(45)}
        {this.renderSquare(46)}
        {this.renderSquare(47)}
        {this.renderSquare(48)}
        </div>
      </div>
    );
  }
}


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(49).fill('X'),
      turnCount: 0,
      status: 'Hello, world!',
    };
  }

  handleSquare(i) {
    // alert(String(i));
    if (i < 0)  return;
    let status = this.state.status + '!';
    let squares = this.state.squares.slice();
    squares[i] = 'O';
    this.setState({
      squares: squares,
      status: status,
    });
  }

  render() {
    const status = this.state.status;
    const squares = this.state.squares;
    return (
	<div className="game">

	<div className="game-board">
	<Board
      squares={squares}
      onClick={(i) => this.handleSquare(i)}
	/>
	</div>

	<div className="game-info">
	<div>{status}</div>
	</div>
	
	</div>
    );
  }
}


ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

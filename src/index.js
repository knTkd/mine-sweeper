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

function encode(i) {
  return [Math.floor(i / 7) + 1, i % 7 + 1];
}

function decode(h, w) {
  return (h - 1) * 7 + w - 1;
}
  

class Game extends React.Component {
  constructor(props) {
    super(props);

    let bombs = Array(49).fill(0);  // 爆弾なら1, 違うなら周りの爆弾の数*(-1)
    for (let i = 0; i < Math.floor(49 * 1 / 3); i++)
      bombs[Math.floor(Math.random() * 49)] = 1;

    let noBombCount = 0;

    for (let i = 0; i < 49; i++) {
      if (bombs[i] == 1)  continue;
      noBombCount += 1;
      let en = encode(i);
      let r = en[0], c = en[1];
      let cnt = 0;
      for (let ri = -1; ri <= 1; ri++)
	for (let ci = -1; ci <= 1; ci++) {
	  if (ri == 0 && ci == 0)  continue;
	  if (1 > r + ri || r + ri > 7)  continue;
	  if (1 > c + ci || c + ci > 7)  continue;
	  if (bombs[decode(r + ri, c + ci)] == 1)
	    cnt++;
	}
      bombs[i] = -cnt;
    }

    this.state = {
      squares: Array(49).fill(null),
      berried: Array(49).fill(false),
      bombs: bombs,
      turnCount: 0,
      noBombCount: noBombCount,
      status: 'Hello, world!',
    };
  }

  handleSquare(i) {
    let en = encode(i);

    let al = 'row = ' + en[0] + '  col = ' + en[1];
    //alert(al);  // 何列・何行をクリックしたかを表示 デバッグ用

    if (this.state.berried[i])  return;  // もうそこを掘ってたら帰る
    if (i < 0 || 49 <= i)  return;  // マス外が来たら まず無いけど一応
    if (this.state.bombs[i] == 1) {
      // Game Over
      alert('Game Over!');
      return;
    }
    
    let squares = this.state.squares.slice();
    let berried = this.state.berried.slice();
    let noBombCount = this.state.noBombCount;

    berried[i] = true;
    squares[i] = String(this.state.bombs[i] * -1);  // 表示用 周りの爆弾の数

    if (--noBombCount <= 0) {
      // Game Clear
      alert('Game Clear!  Conguraturation!!');
    }

    this.setState({
      squares: squares,
      berried: berried,
      noBombCount: noBombCount,
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

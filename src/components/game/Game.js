import React, { Component } from "react";
import "./game.css";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      winner: undefined,
      winnerLine: ""
    };

    this.gameState = {
      turn: "X",
      gameLocked: false,
      gameEnded: false,
      board: Array(9).fill(""),
      totalMoves: 0,
      arrX: [],
      arrO: []
    };
  }

  clicked = box => {
    if (this.gameState.gameEnded || this.gameState.gameLocked) return;

    if (this.gameState.board[box.dataset.square] === "") {
      this.gameState.board[box.dataset.square] = this.gameState.turn;
      box.innerText = this.gameState.turn;
      if(this.gameState.turn === "X"){
        this.gameState.arrX.push(parseInt(box.dataset.square))
      };
      if(this.gameState.turn === "O"){
        this.gameState.arrO.push(parseInt(box.dataset.square))
      };
      
      this.gameState.turn = this.gameState.turn === "X" ? "O" : "X";
    
      this.gameState.totalMoves++;
    }

    let result = this.checkWinner();

    if (result === "X") {
      this.gameState.gameEnded = true;
      this.setState({
        winner: "X",
        winnerLine: "User wins!"
      });
    } else if (result === "O") {
      this.gameState.gameEnded = true;
      this.setState({
        winner: "O",
        winnerLine: "Computer wins"
      });
    } else if (result === "draw") {
      this.gameState.gameEnded = true;
      this.setState({
        winner: "draw",
        winnerLine: "Drawn"
      });
    }

    if (this.gameState.turn === "O" && !this.gameState.gameEnded) {
      this.gameState.gameLocked = true;
      setTimeout(() => {
        let move;
        const moves = [
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8]
        ];
        
        let arrX = this.gameState.arrX;
        for(let i=0; i<moves.length; i++){
          if(
            arrX.includes(moves[i][0]) && arrX.includes(moves[i][1]) && this.gameState.board[moves[i][2]] === ""
          )
          move = moves[i][2];
          else if(
            arrX.includes(moves[i][0]) && arrX.includes(moves[i][2]) && this.gameState.board[moves[i][1]] === ""
          )
          move = moves[i][1];
        
          else if(
            arrX.includes(moves[i][1]) && arrX.includes(moves[i][2]) && this.gameState.board[moves[i][0]] === ""
          )
          move = moves[i][0];
        };
               
        let arrO = this.gameState.arrO;
        
        for(let i=0; i<moves.length; i++){
          if(
            arrO.includes(moves[i][0]) && arrO.includes(moves[i][1]) && this.gameState.board[moves[i][2]] === ""
          )
          move = moves[i][2];
          else if(
            arrO.includes(moves[i][0]) && arrO.includes(moves[i][2]) && this.gameState.board[moves[i][1]] === ""
          )
          move = moves[i][1];
        
          else if(
            arrO.includes(moves[i][1]) && arrO.includes(moves[i][2]) && this.gameState.board[moves[i][0]] === ""
          )
          move = moves[i][0];
        };
        
        if(move === undefined){

          do {
            move = Math.floor(Math.random() * 9);
            
          } while (this.gameState.board[move] !== "");
        };
        this.gameState.gameLocked = false;
        
        this.clicked(document.querySelectorAll(".cell")[move]);
      }, 500);
    }
    
  };

  checkWinner = () => {
    const moves = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];
    let board = this.gameState.board;
    for (let i = 0; i < moves.length; i++) {
      if (
        board[moves[i][0]] === board[moves[i][1]] &&
        board[moves[i][1]] === board[moves[i][2]]
      )
        return board[moves[i][0]];
        
    }

    if (this.gameState.totalMoves === 9) {
      return "draw";
    }
  };

  handleReset = () => {
    let squares = document.querySelectorAll(".cell");
    let i;
    for (i = 0; i < squares.length; i++) {
      squares[i].innerText = "";
    }
    this.setState({
      winner: undefined,
      winnerLine: ""
    });

    this.gameState = {
      turn: "X",
      gameLocked: false,
      gameEnded: false,
      board: Array(9).fill(""),
      totalMoves: 0,
      arrX: [],
      arrO: []
    };
  };

  render() {
    return (
      <div className="game-wrapper">
        <div className="game" id="board" onClick={e => this.clicked(e.target)}>
          <div className="cell grey-text text-darken-3 center" data-square="0" />
          <div className="cell grey-text text-darken-3 center" data-square="1" />
          <div className="cell grey-text text-darken-3 center" data-square="2" />
          <div className="cell grey-text text-darken-3 center" data-square="3" />
          <div className="cell grey-text text-darken-3 center" data-square="4" />
          <div className="cell grey-text text-darken-3 center" data-square="5" />
          <div className="cell grey-text text-darken-3 center" data-square="6" />
          <div className="cell grey-text text-darken-3 center" data-square="7" />
          <div className="cell grey-text text-darken-3 center" data-square="8" />
        </div>
        <span id="status"><h5 className="grey-text text-darken-3">{this.state.winnerLine}</h5></span>
        <button className="btn orange lighten-1 waves-effect waves-light reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Game;

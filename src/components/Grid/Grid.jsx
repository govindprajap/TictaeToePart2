import { useState } from "react";
import Card from "../Card/Card";
import Chechwin from "../../healper/Chechwin";
import './Grid.css';

function Grid({numberOfCards}){
    const [board, setBoard] = useState(Array(numberOfCards).fill(""))
    const [turn, setturn] = useState(true);
    const [winner, setWinner] = useState(null)
    function play(index){
        if(turn == true){
            board[index] = "o"
        }else{
            board[index] = "x"
        }
        const win = Chechwin(board, turn ? "0": "x")
        if(win){
            setWinner(win)
        }
        setBoard([...board]);
        setturn(!turn);
    }
    function reset(){
        setturn(true)
        setWinner(null)
        setBoard(Array(numberOfCards).fill(""))

    }
    return(
        <div className="wrapper">
           
            winner && (
                <>
                <h1 className="h">Winner is {winner}</h1>
                <button className="reset" onClick={reset}>Reset Game</button>
                </>
             )
             
             
           <h1 className="h">current turn: {(turn)? 'o': 'x'}</h1>
            <div className="grid">
            {board.map((el, idx)=><Card gameEnd={winner ? true: false} key = {idx} onPlay={play} player={el} index = {idx}/>)}
            </div>
        </div>
        
    );


}
export default Grid;
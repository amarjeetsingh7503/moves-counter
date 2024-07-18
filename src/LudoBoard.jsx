import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0,});
    function blueMoves(){
        setMoves({...moves, blue: moves.blue+1})
    }

    function redMoves(){
        setMoves({...moves, red: moves.red+1})
    }

    function yellowMoves(){
        setMoves({...moves, yellow: moves.yellow+1})
    }

    function greenMoves(){
        setMoves({...moves, green: moves.green+1})
    }
    return (
        <>
            <h3>Game Begins</h3>
            <p>Blue Moves= {moves.blue}</p>
            <button onClick={blueMoves} style={{backgroundColor: "blue"}}>+1</button>
            <p>Red Moves= {moves.red} </p>
            <button onClick={redMoves} style={{backgroundColor: "red"}}>+1</button>
            <p>Yellow Moves= {moves.yellow} </p>
            <button onClick={yellowMoves} style={{backgroundColor: "yellow", color: "black"}}>+1</button>
            <p>Green Moves= {moves.green} </p>
            <button onClick={greenMoves} style={{backgroundColor: "green"}}>+1</button>
        </>
    )
}
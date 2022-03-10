import React from "react";
import Die from "./die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti"



export default function App(){
        const [dice, setDice] = React.useState(allNewDice())
        const [tenzies, setTenzies] = React.useState(false)
        React.useEffect(()=> {
        const allheld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if(allheld && allSameValue){
         setTenzies(true)
        }
        },[dice])

       function generateNewDie(){
        return (
         {
              value: Math.ceil(Math.random()*6),
              isHeld: false,
              id: nanoid()
              }
        )
       }

        function allNewDice(){
         const newDice=[]
         for( let i = 0; i < 10 ; i++ )
         {
              newDice.push(generateNewDie())
         }
         return newDice
        }

        // this function for changing the dice value
        function rollDice(){
         if(!tenzies){
              setDice(oldDice => oldDice.map(die =>{
              return die.isHeld ?
              die : 
              generateNewDie()
             }))
          }else {
           setTenzies(false)
           setDice(allNewDice)

        }
         
        }


        // this function is for holding the value of dice
        function holdDice(id){
         setDice(oldDice=>oldDice.map(die => {
          return die.id=== id ?
               {...die, isHeld: !die.isHeld} :
               die
         }))
        }

        const diceElements = dice.map(die => (
        <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=> holdDice(die.id)} 
        />
        
        ))

        // rendering dice Number


          return (
               <main>
                 
                 {tenzies && <Confetti/>}
                   <h1 className="title">Tenzies</h1>
                   <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                   <div className="dice-container">
                       {diceElements}
                   </div>
                   <button 
                   onClick={rollDice} 
                   className="roll-dice"
                   >
                   {tenzies ? "New Game" : "Roll"}
                   </button>
               </main>
           )
       }
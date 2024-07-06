import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player inititalName="Player 1" sympol="X" />
          <Player inititalName="Player 2" sympol="O" />
        </ol>
        <GameBoard></GameBoard>
      </div>
    </main>
  );
}

export default App;

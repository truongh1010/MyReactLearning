import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player inititalName="Player 1" sympol="X" />
          <Player inititalName="Player 2" sympol="O" />
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;

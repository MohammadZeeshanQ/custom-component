import './App.css';
import styled from 'styled-components';


const DivColor = styled.div`
  background: palevioletred;
  height: 100px;
  width: 100px;
  margin: 0 auto;
`

function App() {
  return (
    <div className="App">
      <DivColor>
        Hello
      </DivColor>
    </div>
  );
}

export default App;

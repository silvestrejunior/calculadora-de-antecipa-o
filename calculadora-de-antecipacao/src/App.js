import { useState } from 'react';
import './App.css';
import Formin from './components/Form-in';
import FormOut from './components/Form-out';


function App() {
  const [data, setData] = useState({})

  return (
    <div className="App">
      <Formin setData={setData} ></Formin>
      <FormOut data={data}></FormOut>
    </div>
  );
}

export default App;

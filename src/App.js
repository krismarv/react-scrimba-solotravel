import './App.css';

import Card from './components/Card';
import Header from './components/Header'

import Data from './Data'

function App() {
  const card = Data.map (item => {
    return <Card {...item}/>
  })

  return (
    <>
      <Header fontawesome='fas fa-campground' title='Travel Journal'/>
      <div className='page'>
      {card}
      </div>
    </>
    
  );
}

export default App;

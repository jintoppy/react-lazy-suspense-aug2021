import './App.css';
import { lazy, Suspense, useState } from 'react';

const Loader = () => {
  return (<h2>Loading...</h2>)
}

function App() {
  const [dynamicComponent, setDynamicCOmponent] = useState(null);
  const loadChild = () => {
    const Child = lazy(() => import('./Child'));
    const comp = (
      <Suspense fallback={<Loader />}>        
        <Child />
      </Suspense>
    )
    setDynamicCOmponent(comp);
  }

  return (
    <div className="App">
      <button onClick={loadChild}>Load Child</button>
      {dynamicComponent}
    </div>
  );
}

export default App;

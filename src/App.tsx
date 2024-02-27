import { useState, useEffect } from 'react';
import './App.css';
import img1 from './assets/icon-dice.svg'
import img2 from './assets/pattern-divider-mobile.svg'

export interface Root {
  slip: {
    id: number;
    advice: string;
  };
}

function App() {
  const [data, setData] = useState<Root | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //fetch Advice
  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.adviceslip.com/advice',{
        cache: 'no-store'
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {data && !loading && (
        <div className="container">
          <div className="text1">ADVICE #{data.slip?.id}</div>
          <div className="text2">"{data.slip?.advice}"</div>
          <div className='parentLine'>
            <img className='line' src={img2} />
          </div>
          <div className='parentImage' onClick={fetchAdvice}>
            <div className="image">
              <img  src={img1} />
            </div>
          </div>
        </div>
      )}
      {loading && <>Loading....</>}
      {error && <>Error...</>}
    </>
  );
}

export default App;

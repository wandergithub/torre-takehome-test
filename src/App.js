import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';

function App() {
  const [userName, setUserName] = useState('');
  const [data, setData] = useState(null);

  const fetchUserData = async () => {
    const response = await axios.get(`https://torre.bio/api/bios/${userName}`);
    setData(response.data);
  };

  const proficiencies = [
    'master',
    'expert',
    'proficient',
    'beginner',
    'no-experience-interested',
  ];

  return (
    <div className="App">
      <Header setUserName={setUserName} fetchUserData={fetchUserData} />
      {data && (
        <div>
          <img src={data.person.picture} alt="Profile" />
          <h3>{data.person.name}</h3>
          <div>
            <h4>skills and interests:</h4>
            {proficiencies.map((categorie) => (
              <div key={Math.random()}>
                <h5>{categorie}</h5>
                <ul>
                  {data.strengths.map((element) => {
                    if (element.proficiency === categorie) {
                      return <li key={Math.random()}>{element.name}</li>;
                    }
                    return null;
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

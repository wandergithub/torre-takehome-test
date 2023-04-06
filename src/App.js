import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import { proficiencies, svgs } from './data';
import SkillDetails from './components/SkillDetails';

function App() {
  // Current username serch
  const [userName, setUserName] = useState('Jhon Doe');
  // Data fetched of the username
  const [data, setData] = useState();
  // Current Skill object for Details pop-up window
  const [skill, setSkill] = useState(null);

  const fetchUserData = async () => {
    const response = await axios.get(`http://127.0.0.1:3000/users/${userName}`);
    setData(response.data);
  };

  return (
    <div className="App">
      <Header userName={userName} setUserName={setUserName} fetchUserData={fetchUserData} />
      {data && (
        <div className="px-3">
          <img src={data.picture} alt="Profile" />
          <h3 className="text-center mt-5 heading-1">{data.name}</h3>
          <div className="my-5">
            <h4 className="heading-2 my-4">Skills and interests:</h4>
            {proficiencies.map((categorie, index) => (
              <div key={Math.random()}>
                <div className="d-flex gap-2 icon">
                  {svgs[index]}
                  <h5 className="heading-3 my-3 text-capitalize">
                    {categorie !== 'no-experience-interested'
                      ? categorie
                      : 'No experience but interested'}
                  </h5>
                </div>
                <div className="ul">
                  {data.strengths.map((element) => {
                    if (element.proficiency === categorie) {
                      return (
                        <button
                          type="button"
                          key={Math.random()}
                          className="skill"
                          onClick={() => setSkill(element)}
                        >
                          {element.name}
                        </button>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {skill && <SkillDetails setSkill={setSkill} skill={skill} user={data} />}
    </div>
  );
}

export default App;

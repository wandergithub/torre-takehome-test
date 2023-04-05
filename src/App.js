import "./App.css";
import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import { proficiencies, svgs, exampleState } from "./data";

function App() {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState(exampleState);

  const fetchUserData = async () => {
    // const response = await axios.get(`https://torre.bio/api/bios/${userName}`);
    // setData(response.data);
  };

  return (
    <div className="App">
      <Header setUserName={setUserName} fetchUserData={fetchUserData} />
      {data && (
        <div className="px-3">
          <img src={data.person.picture} alt="Profile" />
          <h3 className="text-center mt-5 heading-1">{data.person.name}</h3>
          <div className="my-5">
            <h4 className="heading-2 my-4">Skills and interests:</h4>
            {proficiencies.map((categorie, index) => (
              <div key={Math.random()}>
                <div className="d-flex gap-2 icon">
                  {svgs[index]}
                  <h5 className="heading-3 my-3">
                    {categorie !== "no-experience-interested"
                      ? categorie.charAt(0).toUpperCase() + categorie.slice(1)
                      : "No experience but interested"}
                  </h5>
                </div>
                <ul>
                  {data.strengths.map((element) => {
                    if (element.proficiency === categorie) {
                      return <li key={Math.random()} className="skill">{element.name}</li>;
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

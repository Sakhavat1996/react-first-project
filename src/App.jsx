import "./css/App.css";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ListRow } from "./components/Cards/ListRow";
import reactIcon from "./assets/react.svg";
import viteIcon from "./assets/vite.svg";
import { DATA_LIST } from "./components/data/data";
import { DATA_REVIEWS } from "./components/data/dataReview";
import Card from "./components/Cards/Card";
import TabButton from "./components/Button/TabButton";
import { useState } from "react";
import { DATA_TAB } from "./components/data/dataTab";

const cities = ["Baku", "Sumgait", "Ganja" , 'Mingaceur' , 'Khankendi'];
function getIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}
// const {title , brand , year} = {title:"Phone",brand:"IPhone",year:"2011" }


function App() {
  const [state , setState] = useState(null);

  function handleClick(selectedValue){
    setState(selectedValue)
  }
  const selectedCity = cities[getIndex(3)];
  // 2.ci yol
  /*
    let tabContent = <p>Birini secin</p>;
    if(state) {
      tabContent = <div>
        <h1 className="title">{DATA_TAB[state].title}</h1>
        <p className="desc">{DATA_TAB[state].desc}</p>
        <pre className="concept">
          <code>{DATA_TAB[state].concept}</code>
        </pre>
      </div>
    }
  */
  return (
    <div>
      <Header title={5}/>
      <h1>Vite + React</h1>
      <img src={reactIcon} alt={reactIcon} />
      <img src={viteIcon} alt={viteIcon} />
      <ul className="tab">
        <TabButton 
          isSelected = {state === 'react'}
          onMyClick={()=>handleClick('react')}
          >
          React Js
        </TabButton>
        <TabButton 
          isSelected = {state === 'redux'}
          onMyClick={()=>handleClick('redux')}
          >
          Redux
        </TabButton>
        <TabButton 
          isSelected = {state === 'next'}
          onMyClick={()=>handleClick('next')}
          >
          Next Js
        </TabButton>
        <TabButton 
          isSelected = {state === 'typescript'}
          onMyClick={()=>handleClick('typescript')}
          >
          TypeScript
        </TabButton>
      </ul>
      <div>
        {
          // 1ci yol
          state ? 
          <div>
            <h1 className="title">{DATA_TAB[state].title}</h1>
            <h2 className="desc">{DATA_TAB[state].desc}</h2>
            <pre className="concept">
              <code>{DATA_TAB[state].concept}</code>
            </pre>
          </div>
          : <p>Birini secin</p>
        }
      </div>
      
      <p className="read-the-docs">
        {selectedCity} is the one the biggest cities of Azerbaijan
      </p>
      <div className="review-list">
        {
          DATA_REVIEWS.map((item, index)=>(
            <Card {...item} key={item.id} id={item.id}/>
          ))
        }
      </div>
      <ul>
        {
          DATA_LIST.map((item , index)=>{
              return <ListRow {...item} key={index}/>
          })
        }
      </ul>
      

      <Footer logo='Logo' name="Antec"/>
    </div>
  );
}

export default App;

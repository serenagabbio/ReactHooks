import React, {useEffect, useState, useReducer, useRef, createContext, useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { FaStar } from "react-icons/fa";
// import { useInput } from "./useInput";
import { useFetch } from "./useFetch";

const root = ReactDOM.createRoot(document.getElementById('root'));


function App({login}) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );

  if (loading) return <h1>loading...</h1>;

  if(error) 
    return (
      <pre>{JSON.stringify(error, null, 2)}</pre>
    );

  return (
    <div>       
      <pre>{JSON.stringify(data, null, 2)}</pre>    
    </div>
  );
}


root.render(
    <App login="serenagabbio"/>
); 



/******** useContext ******/

/*export const useTrees = () => useContext(TreesContext);

const TreesContext = createContext();

const trees = [
  {id: "1", type: "Maple"},
  {id: "2", type: "Oak"},
  {id: "3", type: "Family"},
  {id: "4", type: "Component"}
];


root.render(
  <TreesContext.Provider value={{ trees }}>
    <App/>
  </TreesContext.Provider>
); */




/******** Custom Hooks look also useInput.js */

/*function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");


  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} suonds like ${colorProps.value}`);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input 
        {...titleProps} 
        type="text" 
        placeholder="Sound...">
      </input>

      <input 
        {...colorProps}
        type="color">
      </input>

      <button>ADD</button>
    </form>
  );
}*/





/***** Controlled component with useState */

/*function App() {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");


  const submit = (e) => {
    e.preventDefault();
    alert(`${sound} suonds like ${color}`);
    setSound("");
    setColor("#0000000");
  };

  return (
    <form onSubmit={submit}>
      <input 
        value={sound} 
        type="text" 
        placeholder="Sound..."
        onChange={(e) => setSound(e.target.value)}>
      </input>

      <input 
        value={color} 
        type="color"
        onChange={(e) => setColor(e.target.value)}>
      </input>

      <button>ADD</button>
    </form>
  );
}*/


/****** Managing form inputs with useRef **********/

/*function App() {
  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    const soundValue = sound.current.value;
    const colorValue = color.current.value;
    alert(`${soundValue} suonds like ${colorValue}`);
    sound.current.value = "";
    color.current.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input 
        ref={sound} 
        type="text" 
        placeholder="Sound...">
      </input>

      <input 
        ref={color} 
        type="color">
      </input>
      <button>ADD</button>
    </form>
  );
} */


/****** Dispatching actions with UseReducer **********/

/*const initialState = {
  message: "hi"
};

function reducer(state, action) {
  switch(action.type) {
    case "yell": 
      return {
        message: `HEY! I just said ${state.message}`
      };
    case "whisper":
      return {
        message: `excuse me, I just said ${state.message}`
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
    <p>Message: {state.message}</p>
    <button 
      onClick={() => dispatch({type: "yell"})}>YELL
    </button>

    <button 
      onClick={() => dispatch({type: "whisper"})}>wisper
    </button>

    </>
  ); 
}*/
/****** End of Dispatching actions with UseReducer **********/



/****** Refactoring UseState with UseReducer **********/
/*function App() {
  const [checked, toggle] = useReducer(
    (checked) => !checked, 
    false
    );

  return (
    <div>
      <input 
        type="checkbox"   
        value={checked}
        onChange={toggle}/>
        <p>{checked ? "checked" : "not checked"}</p>
    </div>
  ); 
}*/


/****** Use Reducer **********/
/*function App() {
  const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0);
  return <h1 onClick={() => {setNumber(1)}}>{number}</h1>
}*/

/****** Fetch Data with Use Effect **********/

/*function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
    .then(response => response.json())
    .then(setData);
  }, []); // [] means only 1 time at loading pageF
  if(data) {
    return (
      <div>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
      <button onClick={() => setData([])}>Remove Data</button>
      </div>
    )
  }

  return <p>No Users</p>;
}*/
/****** End of Fetch Data with Use Effect **********/



/****** Use Effect **********/
/*
function App() {
  const [name, setName] = useState("Jan");
  const [admin, setAdmin] = useState(false);

  // every render
  /*useEffect(() => {
    document.title = `Celebrate ${name}`;
  });*/

  // run only when the var in dependency array (es. name) changes
  /*useEffect(() => {
    console.log(`Celebrate ${name}`)
  }, [name]);

  useEffect(() => {
    console.log(
      `The user is: ${
        admin ? "admin" : "not admin"
      }.`
      );
  }, [admin]);

  return (
    <section>
      <p>Congratulations {name}!</p>
      <button onClick={() => setName("Will")}>
        Change winner
        </button>
        <p>{admin ? "logged in" : "not logged in"}</p>
        <button onClick={() => setAdmin(true)}>Log in</button>
    </section>
  );
} */

/****** End of Use Effect **********/


/****** Destructuring **********/

//const [, ,third] = ["Alex", "Sere", "Ele"];
//console.log(third);



/****** Start of StarRating **********/

/*  
const createArray = (length) => [
  ...Array(length)
];

function Star({ selected = false, onSelect }) {
    return (
      <FaStar 
      color={selected ? "red" : "grey"}
      onClick={onSelect}/>
    );
}

function StarRating({ totalStars = 5 }) {
  const [
    selectedStars, 
    setSelectedStars
  ] = useState(0);

  return <>
    {createArray(totalStars).map((n, i) => (
      <Star 
      key={i} 
      selected={selectedStars > i} 
      onSelect={()=> setSelectedStars(i+1)} 
      />
    ))}
    <p>{selectedStars} of {totalStars}</p>
  </>
}

function App() {
  return <StarRating totalStars={4}/>
}
*/  
/****** End of StarRating **********/



/*
function App() {
  /*
  const [status, setStatus]  = useState("Not Delivered");

  return (
    <div className="App">
      <h1>The package is: {status}.</h1>
      <button onClick={() => setStatus("Delivered")}>Delivered</button>
    </div>
  );*/

  // [stateName, setMethod] = useState(initState);
  /*const [checked, setChecked] = useState(false);

  return (
    <div>
      <input 
        type="checkbox"   
        value={checked}
        onChange={() => setChecked((checked) => !checked)}/>
        <p>{checked ? "checked" : "not checked"}</p>
    </div>
  ); 
} */



/* REMOVED FOR CUSTOM HOOKS
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

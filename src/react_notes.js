// 2013 syntax
var historicalComponent = React.createClass({
  render: function () {
    return (
      <div>
        <h1>What a Jorney</h1>
      </div>
    );
  }
})

// 2017 syntax
class historicalComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>What a Jorney</h1>
      </div>
    );
  }
}

// every add a state variable you had to refactor it into a component
function NewerComponent() {
  return (
    <div>
      <h1>What a Jorney</h1>
    </div>
  );
}


// React Hooks --> 
// you can add state to Function Components
//  you can Abstract logic into separate Functions
// use ..
// example
function ComponentOfToday() {
  const [name, setNAme] = useState("Jason");

  return (
    <div>
      <h1>What a Jorney, ${name}.</h1>
    </div>
  );
}

// Create React App
// npx create-react-app react-hooks
// on browser the sandbox typing react


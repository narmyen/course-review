import React from 'react';


type AppState = {
  message: string;
}

class App extends React.Component<{},AppState>{
  state: AppState = {
    message : "oioi",
  };

  async componentDidMount() {
      await fetch('http://localhost:3000/courses/')
        .then(res => res.json())
        .then(obj => {
          this.setState({message: obj.message})
        })
  }

  render() {
    return (
      <div>
        {this.state.message}
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       hello world
//     </div>
//   );
// }

export default App;
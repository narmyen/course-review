import React, { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('my message')

  useEffect(()=>{
    fetch('http://localhost:3000/courses/')
      .then(res => res.json())
      .then(obj => {
        setMessage(obj.message)
      })
  }, [])

  return (
    <div>
      {message}
    </div>
  )
}

// type AppState = {
//   message: string;
// }

// class App extends React.Component<{},AppState>{
//   state: AppState = {
//     message : "oioi",
//   };

//   async componentDidMount() {
//       await fetch('http://localhost:3000/courses/')
//         .then(res => res.json())
//         .then(obj => {
//           this.setState({message: obj.message})
//         })
//   }

//   render() {
//     return (
//       <div>
//         {this.state.message}
//       </div>
//     )
//   }
// }


// function App() {
//   return (
//     <div className="App">
//       hello world
//     </div>
//   );
// }

export default App;
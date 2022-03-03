import axios from 'axios'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      pi: "",
    })
  }
 
  componentDidMount = () => {
    axios("https://api.pi.delivery/v1/pi?start=0&numberOfDigits=30").then((resultat) => {
       if(resultat.data.content[0] == 3) {
         let array = resultat.data.content.split("")
         array.splice(1, 0, ",")
         let join = array.join("")
         this.setState({
           pi : join,
         })
         console.log(join)
       } else {
        this.setState({
          pi : resultat.data.content,
        })
       }
     
      // console.log(resultat)
      // console.log('resultat : ', resultat);
      // console.log('data :', resultat.data.content)
    })

  }
  render() {
    
    return (
      <>
    {this.state.pi ? <p>{this.state.pi}</p> : <h1>null</h1>}
      </>
    ) 
  
  }
}
export default App
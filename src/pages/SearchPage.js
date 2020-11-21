import React from "react";
import Search from "../components/Search";
import Results from "../components/Results";
import { UseState } from 'react';

function SearchPage () {
    return (
        <>
            <Search/>
            <Results/>
        </>    
    )
}

// export default SearchPage;


// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }
//   export default NameForm; 




function Signup() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
  
  
    const handleSubmit = e => {
      e.preventDefault();
      console.log("username is " + username);
      console.log("password is " + password);
    };
  
    const orThisWay = e => setUsername(e.target.value)
  
    return (
      <div>
        <div className="mt-4">
          <h2>Sign Up</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <Container className="mt-3 px-5">
            <Row className="form-group">
              <Col size="12">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  name="username"
                  // value={username}
                  onChange={orThisWay}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col size="12">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  // value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Col>
            </Row>
            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </Container>
          <Container className="mt-4">
            <h3>Hello {username}!</h3>
            <p>I probably shouldn't tell you this, but your password is {password}!</p>
          </Container>
        </form>
      </div>
    );
  }
  
  export default Signup;
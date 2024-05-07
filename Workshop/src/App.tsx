import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { User, fetchUsers, deleteUsers } from "./redux/actions";
import { StoreState } from "./redux/reducers";
import "./App.css";

// interface AppProps {
//   title: string;
// }
interface AppProps {
  users: User[];
  fetchUsers(): any;
  deleteUsers(id: number): any;
}

function App(props: AppProps) {
  const [loading, setLoading] = useState(false);

  const handleFetchClick = () => {
    setLoading(true);
    props.fetchUsers();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const id: number = parseInt(e.currentTarget.name);

    props.deleteUsers(id);
  };

  return (
    <div>
      <button onClick={handleFetchClick}>
        {loading ? "LOADING..." : "FETCH USERS!"}
      </button>
      {props.users.map((user: User) => {
        return (
          <div key={user.id}>
            {user.id} - {user.name}
            <button name={user.id.toString()} onClick={handleClick}>
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state: StoreState): { users: User[] } => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUsers, deleteUsers })(App);

//*Funcion
// function App({ title }: AppProps): JSX.Element {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div>
//       <h3>Henry Workshop - {title}</h3>
//       <hr></hr>
//       <button onClick={() => setCounter(counter + 1)}>Increment</button>
//       <button onClick={() => setCounter(counter - 1)}>Decrement</button>
//       <br></br>
//       <span>{counter}</span>
//     </div>
//   );
// }

//* Clase

// interface AppState {
//   counter: number;
// }

// class App extends React.Component<AppProps> {
//   state = { counter: 0 };
//   constructor(props: AppProps) {
//     super(props);
//     this.state = { counter: 0 };
//   }

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h3>Henry Workshop - {this.props.title}</h3>
//         <hr></hr>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//         <br></br>
//         <span>{this.state.counter}</span>
//       </div>
//     );
//   }
// }

import { Component } from "react";
import PhonebookForm from "./components/phonebook/PhonebookForm";
import PhonebookList from "./components/phonebook/PhonebookList";
import Filter from "./components/phonebook/Filter";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";

class App extends Component {

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };


  render() {
    return (
      <Provider store={store}>
        <div className={"app"}>
          <h1>Phonebook</h1>
          <PhonebookForm />
          <h2>Contacts</h2>
          <Filter />
          <PhonebookList />
        </div>
      </Provider>
    );
  }
}

export default App;

import React from "react";
import { questionBank, datastoreBank } from './Data.js'
import './App.css';

function ShowDbList(props) {
  const dbs = props.dbList;
  const listDbs = dbs.map((db) =>
    <li id={db.id} key={db.id}>
      <a href={db.url}>{db.title}</a>
    </li>
  );
  return (
    <div className="DbList">
      <p>Compatible solutions:</p>
      <ul>
        {listDbs}
      </ul>
    </div>
  );
}

function Question(props) {
  const title = props.title;
  const choices = props.choices;
  const handleClick = props.handleClick;
  const listChoices = choices.map((choice) =>
    <li id={choice.id} key={choice.id} onClick={handleClick.bind(this, choice.id)}>
      {choice.title}
    </li>
  );

  return (
      <div className="Question">
      <p>{title}</p>
      <ul className="Choices">
        {listChoices}
      </ul>
      </div>

  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answers: [], questions:  questionBank };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState((state) => {
      return {
        answers: state.answers.concat([id]),
        questions: state.questions.slice(1).filter(q => !q.hasOwnProperty("conflicts") || q.conflicts.indexOf(id) === -1)
      };
    })
  }

  render() {
    if (this.state.questions.length > 0) {
      const question = this.state.questions[0];
      return (
        <div className="App">
          <Question
            id={question.id}
            title={question.title}
            choices={question.choices}
            handleClick={this.handleClick}
          />
        </div>
      );
    } else {
      const datastores = datastoreBank.filter(db => !this.state.answers.some(a => db.tags.indexOf(a) === -1));
      return (
        <div className="App">
          <ShowDbList dbList={datastores} />
        </div>
      );
    }
  }
}

export default App;

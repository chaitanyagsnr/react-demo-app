import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Book } from './book';

class App extends React.Component {
  state = {
    books: [{
      id: '123',
      name: 'Let us C',
      author: 'Yashavanth Kanetkar'
    }, {
      id: '456',
      name: 'The Monk who sold his Ferrari',
      author: 'Robin Sharma'
    }, {
      id: '789',
      name: 'The Infinite Game',
      author: 'Simon Sinek'
    }]
  };
  render() {
    return <>
      {
        this.state.books.map(book => {
          return <Book key={book.id} name={book.name} author={book.author} />
        })
      }
    </>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

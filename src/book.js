import React from 'react';
import Author from './author';
import './book.css';

export class Book extends React.Component {
    render() {
        return (
            <div className="book">
                <h2>{this.props.name}</h2>
                <p>Author: <Author name={this.props.author} /></p>
            </div>
        );
    }
}
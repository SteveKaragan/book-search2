import React, { Component } from 'react';
import Item from './item'



export default class List extends Component {

    render() {
        return (
            <div className="">
                {this.props.books.map( (book) =>
                    <Item
                    key={book.id}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    description={book.volumeInfo.description}
                    amount={book.saleInfo.retailPrice.amount}
                ></Item>
                )}
            </div>
        );
    }
}

//price={book.saleInfo.listPrice.amount}


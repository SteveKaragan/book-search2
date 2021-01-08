import React, { Component } from 'react';
import List from './list'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          books: [],
          search: '',
          filter: '',
          type: ''
        };
      }

    searchChanged(search) {
      this.setState({
        search
      });
    }

    filterChanged(filter) {
      this.setState({
        filter: '&filter='+filter
      });
    }

    typeChanged(type) {
      this.setState({
        type: '&printType='+type
      });
    }

    handleSubmit(e) {
        e.preventDefault();
        const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}${this.state.filter}${this.state.type}&key=`
        fetch(url)
        .then(response => response.json())
        .then(data => {
          const books = data.items
          this.setState({
              books
          });
      });

    }

    render() {
        return (
            <div className="">
              <form onSubmit={ e => this.handleSubmit(e)}>
                <label htmlFor="search">Search:</label>
                <input 
                  type="text" 
                  name="Search" 
                  id="search" 
                  placeholder="search words"
                  value={this.state.search}
                  onChange={e => this.searchChanged(e.target.value)}
                  />
                <button type="submit" >Search</button>
                <br/>
                <label htmlFor="print-type">Print type:</label>
                <select name="print-type" id="print-type"
                  //value={this.state.filter}
                  onChange={e => this.typeChanged(e.target.value)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>

                <label htmlFor="filter">Book type:</label>
                <select name="filter" id="filter"
                  //value={this.state.type}
                  onChange={e => this.filterChanged(e.target.value)}>
                    <option value="">none</option>
                    <option value="partial">Partial</option>
                    <option value="full">Full</option>
                    <option value="free-ebooks">free-ebooks</option>
                    <option value="paid-ebooks">paid-ebooks</option>
                    <option value="ebooks">ebooks</option>
                </select>
              </form>
              <List books={this.state.books}></List>
            </div>
        )
    }
}


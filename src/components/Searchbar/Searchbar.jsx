import css from './Searchbar.module.css'
import { Component } from "react";

 import{ReactComponent as IconSearch} from 'icon.svg'
export class Searchbar extends Component{
  state = {
     query:'',
  }
  handleChange = (e) => {
    console.log(this.state.query);
    return this.setState({ query: e.target.value.toLowerCase() });
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.query)
      this.setState({query:''})
  }
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
           {/*  <span className="button-label"></span> */}
            <IconSearch/>
          </button>
          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    )
  }
}
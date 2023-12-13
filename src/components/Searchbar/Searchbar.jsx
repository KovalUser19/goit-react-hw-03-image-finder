import css from './Searchbar.module.css'
import { Component } from "react";

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
            <svg className="svg-icon search-icon" aria-labelledby="title desc" role="img"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
    <title id="title">Search Icon</title>
    <desc id="desc">A magnifying glass icon.</desc>
    <g className="search-path" fill="none" stroke="#848F91">
        <path stroke_linecap="square" d="M18.5 18.3l-5.4-5.4"/>
        <circle cx="8" cy="8" r="7"/>
    </g>
</svg>


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
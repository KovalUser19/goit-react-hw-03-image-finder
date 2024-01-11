import { Component } from "react"
import { getAllPhotos } from "api/gallery";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
import css from './App.module.css'
import cSs from './Button/ButtonWrapper.module.css'

export class App extends Component{
  state={
    page: 1,
    hits: [],
    loading: false,
    error: null,
    query: '',
    loadMore: false,
    totalHits:0,
  }
  handleFormSubmit = query => {
    if (this.state.query !== query) {
    this.setState({  hits: [], loadMore:false, page:1, query:query })
  }
  }

  handleLoadMore = () => {
  this.setState((prev)=>({page: prev.page +1}))
  }

   async componentDidUpdate(_, prevState) {
   if (this.state.page !== prevState.page  || this.state.query !== prevState.query) {
    await this.getPhotos()
 }
  }

  getPhotos = async () => {

    try {
      this.setState({ loading: true })
      const response = await getAllPhotos(this.state.query, this.state.page)
      console.log(response);

      this.setState((prev => ({
        hits: [...prev.hits,...response.hits],
        totalHits: response.totalHits,
        loadMore: this.state.page < Math.ceil(response.totalHits / 12 )
      })))
    }

    catch (error) {
      console.log(error);
    }

    finally {
      this.setState({ loading: false })
     }
  }

  render() {
    const {loadMore, loading, hits}=this.state
    return (
      <div className={css.App} >
         <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
         {loading && <Loader></Loader>}
         <ImageGallery hits={hits}>
         </ImageGallery>
          <div className={cSs.buttonWrraper}>
             {loadMore && <Button click={this.handleLoadMore}></Button>}
          </div>
    </div>
  );
  }
};

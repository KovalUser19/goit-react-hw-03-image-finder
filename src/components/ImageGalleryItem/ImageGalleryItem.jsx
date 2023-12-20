
import { nanoid } from 'nanoid'
import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem=(props)=>{
    return (
      props.options.map(el => <li onClick={()=>props.onClickModal(el)} key={nanoid()} className={css.ImageGalleryItem}>
        <img className={css.ImageGalleryItem_image} src={el.webformatURL} alt={el.tags} />
      </li>)
    )

  }

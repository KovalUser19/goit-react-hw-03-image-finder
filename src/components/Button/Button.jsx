import css from './Button.module.css'

export const Button = (props) => {
  return (
     <div>
    <button className={css.Button} onClick={props.click}>Load more</button>
  </div>
  )

}
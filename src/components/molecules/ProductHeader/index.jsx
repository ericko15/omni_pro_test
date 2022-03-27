import classes from './styles.module.css'

const ProductHeader = () => (
  <div className={classes.container}>
    <h1 className={classes.title}>
      Pantalones para Dama “The Sideswept Dhoti”
    </h1>
    <div className={classes.stars}>
      <i className="fa-solid fa-star"/>
      <i className="fa-solid fa-star"/>
      <i className="fa-solid fa-star"/>
      <i className="fa-solid fa-star"/>
      <i className="fa-solid fa-star"/>
      <span>4 de 5 </span>
    </div>
    <div className={classes.price}>$139.99</div>
  </div>
)

export default ProductHeader

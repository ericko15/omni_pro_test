import classes from './styles.module.css'

const ProductCard = () => (
  <div className={classes.container}>
    <div className={classes.media}/>
    <div className={classes.name}>Producto 1</div>
    <div className={classes.price}>$130</div>
  </div>
)

export default ProductCard

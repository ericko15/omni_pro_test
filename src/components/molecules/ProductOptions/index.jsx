import classNames from 'classnames'
import classes from './styles.module.css'

const ProductOptions = () => (
  <div className={classes.container}>
    <div className={classes.sizeSection}>
      <span>Tamaño</span>
      <div className={classes.sizes}>
        <div className={classNames(classes.size,classes.disable)}>S</div>
        <div className={classes.size}>M</div>
        <div className={classNames(classes.size, classes.selected)}>L</div>
        <div className={classNames(classes.size,classes.disable)}>XL</div>
        <div className={classNames(classes.size,classes.disable)}>XXL</div>
      </div>
    </div>
    <div className={classes.kitSection}>
      <span>Kit</span>
      <div className={classes.sizes}>
        <div className={classNames(classes.size, classes.selected)}>
          Home
        </div>
        <div className={classes.size}>
          AWAY
        </div>
        <div className={classes.size}>
          THIRD
        </div>
      </div>
    </div>
    <div className={classes.quantitySection}>
      <span>Cantidad</span>
      <div className={classes.quantity}>
        <div className={classes.less}>-</div>
        <span>1</span>
        <div className={classes.plus}>+</div>
      </div>
    </div>
    <button className={classes.addToCard}>Añadir al carrito</button>
  </div>
)

export default ProductOptions

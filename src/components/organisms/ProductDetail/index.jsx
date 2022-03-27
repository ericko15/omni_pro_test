import classes from './styles.module.css'
import classNames from 'classnames'
import ProductCard from '../../molecules/ProductCard'

const ProductDetail = () => (
  <>
    <div className={classes.photo}>
      Photo
    </div>
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
      <div className={classes.options}>
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
      <div className={classes.description}>
        <h2>Descripción</h2>
        <span>
          In eu blandit metus. Phasellus vitae consequat augue. Cras auctor lacus a purus convallis...
        </span>
        <div className={classes.readMore}>Leer más</div>
      </div>
      <div className={classes.suggestions}>
        <h3>También te podría gustar</h3>
        <div className={classes.products}>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
      <footer>
        © Copyright
      </footer>
    </div>
  </>
)

export default ProductDetail

import ProductCard from '../ProductCard'

import classes from './styles.module.css'

const ProductDescription = () => (
  <div className={classes.container}>
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
  </div>
)

export default ProductDescription

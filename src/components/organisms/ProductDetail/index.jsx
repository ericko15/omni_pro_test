import ProductOptions from '../../molecules/ProductOptions'
import ProductDescription from '../../molecules/ProductDescription'
import ProductHeader from '../../molecules/ProductHeader'

import classes from './styles.module.css'

const ProductDetail = () => (
  <>
    <div className={classes.photo}>
      Photo
    </div>
    <div className={classes.container}>
      <ProductHeader/>
      <ProductOptions/>
      <ProductDescription/>
    </div>
    <footer>
      © Copyright
    </footer>
  </>
)

export default ProductDetail

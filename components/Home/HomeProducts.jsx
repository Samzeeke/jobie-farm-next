import Products from '../Products/Products'
import Button from '../Button'

export default function HomeProducts() {
    return   <section className="product-section relative padding-tb bg-ash">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="section-header">
            <h3>Products</h3>
            <p>
              Numerous farm products are offered.{' '}
            </p>
          </div>
        </div>
        <Products start={0} end={8} />
        {/* <Button
          link={false}
          to="#"
          className="text-center mt-3 mb-2 lab-btn"
          onClick={() => router.push('/shop')}
          disabled={false}
        >
          Shop now
        </Button> */}
      </div>
    </div>
  </section>
}
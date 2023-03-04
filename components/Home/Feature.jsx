import Image from 'next/image'
export default function Feature() {
    return <section className="feature-section padding-tb">
    <div className="container">
      <div className="row text-center justify-content-center">
        <div className="col-lg-3 col-sm-6 col-12">
          <div className="lab-item">
            <div className="lab-inner">
              <div className="lab-thumb">
                <Image
                  width={100}
                  height={100} 
                  className="ml-auto mr-auto"
                  src="/assets/images/feature/05.png"
                  alt="Feature Image"
                />
              </div>
              <div className="lab-content">
                <h6>Affordable Shipping</h6>
                <p>
                On all Orders {' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-12">
          <div className="lab-item">
            <div className="lab-inner">
              <div className="lab-thumb">
                <Image
                  width={100}
                  height={100}
                  src="/assets/images/feature/06.png"
                  alt="Feature image" 
                  className='ml-auto mr-auto'
                />
              </div>
              <div className="lab-content">
                <h6>24/7 Support.</h6>
                <p>
                We are Available 24/7{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-12">
          <div className="lab-item">
            <div className="lab-inner">
              <div className="lab-thumb">
                <Image
                  width={100}
                  height={100}
                  src="/assets/images/feature/07.png"
                  alt="Feature image" 
                  className='ml-auto mr-auto'
                />
              </div>
              <div className="lab-content">
                <h6>Online Payment.</h6>
                <p>
                Many Payment Methods{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-12">
          <div className="lab-item">
            <div className="lab-inner">
              <div className="lab-thumb">
                <Image
                  width={100}
                  height={100}
                  src="/assets/fast-delivery.png"
                  alt="Feature image" 

                  className='ml-auto mr-auto'
                />
              </div>
              <div className="lab-content">
                <h6>Fast Delivery</h6>
                <p>
                Always on time{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
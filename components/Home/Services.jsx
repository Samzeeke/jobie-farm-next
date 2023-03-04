import Image from 'next/image'
export default function Services() {
    return         <section className="service-section padding-tb">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-header">
            <h3>Services</h3>
            <p>
            What we offer{' '}
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className="service-content">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="lab-item service-item">
                  <div className="lab-inner p-4 mb-4 text-left">
                    <div className="service-top d-flex align-items-center mb-4">
                      <div className="st-thumb mr-3">
                        <Image
                          width={70}
                          height={70}
                          src="/assets/images/service/01.png"
                          alt="service image"
                        />
                      </div>
                      <div className="st-content mt-2">
                        <a href="#">
                          <h6>Chicken Incubator & Hatching</h6>
                        </a>
                      </div>
                    </div>
                    <div className="service-bottom">
                      <p>
                     
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="lab-item service-item">
                  <div className="lab-inner p-4 mb-4 text-left">
                    <div className="service-top d-flex align-items-center mb-4">
                      <div className="st-thumb mr-3">
                        <Image
                          width={70}
                          height={70}
                          src="/assets/images/service/02.png"
                          alt="service image"
                        />
                      </div>
                      <div className="st-content mt-2">
                        <a href="#">
                          <h6>Poultry Cages</h6>
                        </a>
                      </div>
                    </div>
                    <div className="service-bottom">
                      <p> </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="lab-item service-item">
                  <div className="lab-inner p-4 mb-4 text-left">
                    <div className="service-top d-flex align-items-center mb-4">
                      <div className="st-thumb mr-3">
                        <Image
                          width={70}
                          height={70}
                          src="/assets/images/service/03.png"
                          alt="service image"
                        />
                      </div>
                      <div className="st-content mt-2">
                        <a href="#">
                          <h6>Breeder Management</h6>
                        </a>
                      </div>
                    </div>
                    <div className="service-bottom">
                      <p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="lab-item service-item">
                  <div className="lab-inner p-4 mb-4 text-left">
                    <div className="service-top d-flex align-items-center mb-4">
                      <div className="st-thumb mr-3">
                        <Image
                          width={70}
                          height={70}
                          src="/assets/images/service/04.png"
                          alt="service image"
                        />
                      </div>
                      <div className="st-content mt-2">
                        <a href="#">
                          <h6>Poultry Climate</h6>
                        </a>
                      </div>
                    </div>
                    <div className="service-bottom">
                      <p> </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="lab-item service-item">
                  <div className="lab-inner p-4 mb-4 text-left">
                    <div className="service-top d-flex align-items-center mb-4">
                      <div className="st-thumb mr-3">
                        <Image
                          width={70}
                          height={70}
                          src="/assets/images/service/05.png"
                          alt="service image"
                        />
                      </div>
                      <div className="st-content mt-2">
                        <a href="#">
                          <h6>Residue Teatment</h6>
                        </a>
                      </div>
                    </div>
                    <div className="service-bottom">
                      <p> </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="lab-item service-item">
                  <div className="lab-inner p-4 mb-4 text-left">
                    <div className="service-top d-flex align-items-center mb-4">
                      <div className="st-thumb mr-3">
                        <Image
                          width={70}
                          height={70}
                          src="/assets/images/service/06.png"
                          alt="service image"
                        />
                      </div>
                      <div className="st-content mt-2">
                        <a href="#">
                          <h6>Exhaust air Treatment</h6>
                        </a>
                      </div>
                    </div>
                    <div className="service-bottom">
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
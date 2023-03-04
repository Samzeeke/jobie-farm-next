/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Footer: React.FC<any> = () => {
  return (
    <>
      <footer>
        <div className="footer-top relative padding-tb bg-ash relative">
          <div className="shape-images">
            <img src="/assets/images/shape-img/01.png" alt="shape-images" />
          </div>
          <div className="container">
            <div className="section-wrapper row">
              <div className="col-xl-3 col-md-6">
                <div className="post-item">
                  <div className="footer-logo">
                    <img src="/assets/jobie-agro-logo.png" alt="footer-logo" />
                  </div>
                  <p>
                    Our vision and experience is designing and building
                    residential gated communities and investment opportunities.
                    We exhibits the most superior standards in terms of quality
                    and yet remains affordable to the masses. We supply day old
                    chicks of different breeds and commercial eggs within Abia
                    state and outside the state.
                  </p>
                  <br />
                </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="post-item">
                    <div className="post-title">
                      <h5>Keep In Touch</h5>
                    </div>
                    <ul className="lab-ul footer-location">
                      <li>
                        <div className="icon-part">
                          <i className="icofont-phone"></i>
                        </div>
                        <div className="content-part">
                          <p>+234(0)7088479448</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon-part">
                          <i className="icofont-wall-clock"></i>
                        </div>
                        <div className="content-part">
                          <p>Mon - Fri 09:00 - 18:00</p>
                          <p>(except public holidays)</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon-part">
                          <i className="icofont-location-pin"></i>
                        </div>
                        <div className="content-part">
                          <p>
                            4 Oriokuku Street,
                            <br />
                            Glass industry road Aba Abia state.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  {/* something here */}
                  <div>
                    <p>
                      <span className="d-block text-bold">
                        FOR BANK TRANSFERS
                      </span>
                      <span className="d-block text-md">Access Bank</span>
                      <span className="d-block text-md">
                        Jobie Agro Farm limited{' '}
                      </span>
                      <span className="d-block text-md">
                        Account: 0088833445
                      </span>
                    </p>
                    <br />
                    <div className="d-flex">
                      <Image
                        src={'/paystack.png'}
                        alt="paystack"
                        width={100}
                        height={80}
                      />
                      <Image
                        src={'/flutterwave.png'}
                        alt="flutterwave"
                        width={100}
                        height={80}
                      />
                    </div>
                  </div>
            
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="post-item">
                  <div className="post-title">
                    <h5>Instagram Feed</h5>
                  </div>
                  <div className="lab-ul footer-gellary">
                    <figure className="figure">
                      <a
                        href="assets/images/gallery/01.jpg"
                        data-rel="lightcase:myCollection:slideshow"
                      >
                        <img
                          src="/assets/images/gallery/01.jpg"
                          className="img-fluid rounded"
                          alt="footer-gellary"
                        />
                      </a>
                    </figure>
                    <figure className="figure">
                      <a
                        href="assets/images/gallery/02.jpg"
                        data-rel="lightcase:myCollection:slideshow"
                      >
                        <img
                          src="/assets/images/gallery/02.jpg"
                          className="img-fluid rounded"
                          alt="footer-gellary"
                        />
                      </a>
                    </figure>
                    <figure className="figure">
                      <a
                        href="assets/images/gallery/03.jpg"
                        data-rel="lightcase:myCollection:slideshow"
                      >
                        <img
                          src="/assets/images/gallery/03.jpg"
                          className="img-fluid rounded"
                          alt="footer-gellary"
                        />
                      </a>
                    </figure>
                    <figure className="figure">
                      <a
                        href="assets/images/gallery/04.jpg"
                        data-rel="lightcase:myCollection:slideshow"
                      >
                        <img
                          src="/assets/images/gallery/04.jpg"
                          className="img-fluid rounded"
                          alt="footer-gellary"
                        />
                      </a>
                    </figure>
                    <figure className="figure">
                      <a
                        href="assets/images/gallery/05.jpg"
                        data-rel="lightcase:myCollection:slideshow"
                      >
                        <img
                          src="/assets/images/gallery/05.jpg"
                          className="img-fluid rounded"
                          alt="footer-gellary"
                        />
                      </a>
                    </figure>
                    <figure className="figure">
                      <a
                        href="assets/images/gallery/06.jpg"
                        data-rel="lightcase:myCollection:slideshow"
                      >
                        <img
                          src="/assets/images/gallery/06.jpg"
                          className="img-fluid rounded"
                          alt="footer-gellary"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="section-wrapper">
              <p className="text-center">
                &copy; 2022 <a href="index.html">JobieAgro Farm</a>.All Rights
                Reserved By{' '}
                <Link
                  href="https://edsolution.co.uk"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ed Solution
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/*  */}
      <a href="#" className="scrollToTop">
        <i className="icofont-swoosh-up"></i>
        <span className="pluse_1"></span>
        <span className="pluse_2"></span>
      </a>
      {/*  */}
    </>
  )
}

export default Footer

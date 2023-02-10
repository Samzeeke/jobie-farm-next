/* eslint-disable @next/next/no-img-element */
import React from "react";
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
                    Conveniently customizec web services aggregate frictionle
                    internet withouevs Conveniently customizec.
                  </p>
                  <p>
                    Enthusiastically scale synergistic technologies for
                    leveraged with technology quickly.
                  </p>
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
                        <p>+88130-589-745-6987</p>
                        <p>+1655-456-523</p>
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
                          25/2 Lane2 Vokte Street Building <br />
                          Melborn City
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="post-item">
                  <div className="post-title">
                    <h5>Poultry Farm Product</h5>
                  </div>
                  <div className="lab-ul footer-post">
                    <div className="media mb-3">
                      <div className="fp-thumb mr-3">
                        <img
                          src="/assets/images/products/product/01.png"
                          alt="recent-post"
                        />
                      </div>
                      <div className="media-body">
                        <a href="#">
                          <h6 className="mt-0">Light Brown Eggs</h6>
                        </a>
                        <span className="price">$25.99</span>
                      </div>
                    </div>
                    <div className="media mb-3">
                      <div className="fp-thumb mr-3">
                        <img
                          src="/assets/images/products/product/02.png"
                          alt="recent-post"
                        />
                      </div>
                      <div className="media-body">
                        <a href="#">
                          <h6 className="mt-0">Little Chicken Broiler</h6>
                        </a>
                        <span className="price">$25.99</span>
                      </div>
                    </div>
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
                Reserved By{" "}
                <a href="https://edsolution.co.uk" target="_blank">
                  Ed Solution
                </a>
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
  );
};

export default Footer;

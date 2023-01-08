import Image from "next/image";
import React from "react";
const Header: React.FC<any> = () => {
  return (
    <>
      <div className="search-input">
        <div className="search-close">
          <i className="icofont-close-circled"></i>
        </div>
        <form>
          <input type="text" name="text" placeholder="Search Heare" />
          <button className="search-btn" type="submit">
            <i className="icofont-search-2"></i>
          </button>
        </form>
      </div>
      {/*  */}

      {/*  */}
      <div className="mobile-menu transparent-header">
        <nav className="mobile-header">
          <div className="header-logo">
            <a href="index.html">
              <Image
                src="/assets/jobie-agro-logo.png"
                alt="logo"
                width={250}
                height={100}
              />
            </a>
          </div>
          <div className="header-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <nav className="mobile-menu">
          <div className="mobile-menu-area">
            <div className="mobile-menu-area-inner">
              <ul className="lab-ul">
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="#0">Pages</a>
                  <ul className="lab-ul">
                    <li>
                      <a href="team.html">Team Membar</a>
                    </li>
                    <li>
                      <a href="faq-page.html">Faq Page</a>
                    </li>
                    <li>
                      <a href="404.html">404 Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#0">Blog</a>
                  <ul className="lab-ul">
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-single.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#0">Shop</a>
                  <ul className="lab-ul">
                    <li>
                      <a href="product-page.html">Products Page</a>
                    </li>
                    <li>
                      <a href="product-single.html">Products Details</a>
                    </li>
                    <li>
                      <a href="cart-page.html">Cart Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/*  */}
      {/*  */}
      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-3 col-12">
                <div className="logo py-2">
                  <a href="/">
                    <img
                      src="/assets/jobie-agro-logo.png"
                      alt="logo"
                      style={{ width: "250px" }}
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-9 col-12">
                <div className="ht-left">
                  <ul className="lab-ul d-flex flex-wrap justify-content-end">
                    <li className="d-flex flex-wrap align-items-center">
                      <div className="ht-add-thumb mr-2">
                        <img src="/assets/images/header/01.png" alt="address" />
                      </div>
                      <div className="ht-add-content">
                        <span>72AH, Victoria,</span>
                        <span className="d-block text-bold">
                          Collins Street West USA
                        </span>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap align-items-center">
                      <div className="ht-add-thumb mr-2">
                        <img src="/assets/images/header/02.png" alt="email" />
                      </div>
                      <div className="ht-add-content">
                        <span>Send Mail </span>
                        <span className="d-block text-bold">
                          hello@jobieagrofarm.com
                        </span>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap align-items-center">
                      <div className="ht-add-thumb mr-2">
                        <img src="/assets/images/header/03.png" alt="call" />
                      </div>
                      <div className="ht-add-content">
                        <span>Make Call </span>
                        <span className="d-block text-bold">
                          +88-6487-5962-563
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom bg-theme">
          <div className="header-area">
            <div className="container">
              <div className="primary-menu">
                <div className="main-area w-100">
                  <div className="main-menu d-flex flex-wrap align-items-center justify-content-between w-100">
                    <div className="logo">
                      <a href="index.html">
                        <img
                          src="/assets/jobie-agro-logo.png"
                          alt="logo"
                          style={{ width: "250px" }}
                        />
                      </a>
                    </div>
                    <ul className="lab-ul">
                      <li className="active">
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>

                      <li>
                        <a href="#0">Shop</a>
                      </li>

                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                    <ul className="lab-ul search-cart">
                      <li>
                        <a>Sign Up</a>
                      </li>
                      <li>
                        <a>Login</a>
                      </li>
                      <li>
                        <div className="cart-option">
                          <i className="icofont-cart-alt"></i>
                          <div className="cart-content">
                            <div className="cart-item">
                              <div className="cart-img">
                                <a href="#">
                                  <img
                                    src="/assets/images/products/product/01.png"
                                    alt="cart"
                                  />
                                </a>
                              </div>
                              <div className="cart-des">
                                <a href="#">Product Title Here</a>
                                <p>$20.00</p>
                              </div>
                              <div className="cart-btn">
                                <a href="#">
                                  <i className="icofont-close-circled"></i>
                                </a>
                              </div>
                            </div>
                            <div className="cart-item">
                              <div className="cart-img">
                                <a href="#">
                                  <img
                                    src="/assets/images/products/product/02.png"
                                    alt="cart"
                                  />
                                </a>
                              </div>
                              <div className="cart-des">
                                <a href="#">Product Title Here</a>
                                <p>$20.00</p>
                              </div>
                              <div className="cart-btn">
                                <a href="#">
                                  <i className="icofont-close-circled"></i>
                                </a>
                              </div>
                            </div>
                            <div className="cart-bottom">
                              <div className="cart-subtotal">
                                <p>
                                  Total: <b className="float-right">$40.00</b>
                                </p>
                              </div>
                              <div className="cart-action">
                                <a href="#" className="lab-btn">
                                  <span>View Cart</span>
                                </a>
                                <a href="#" className="lab-btn">
                                  <span>Check Out</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

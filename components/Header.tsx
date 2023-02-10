import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../contexts/auth.context";
import LoginDialog from "./dialogs/LoginDialog";
import SignupDialog from "./dialogs/SignupDialog";
import Carts from "./Carts/Carts";
const Header: React.FC<any> = () => {
  const { signOut, loading, authUser } = useAuth();
  const router = useRouter();

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const showLoginDialog = () => setShowLogin(true);
  const showSignUpDialog = () => setShowSignUp(true);

  const handleCloseLoginDialog = () => setShowLogin(false);
  const handleCloseSignupDialog = () => setShowSignUp(false);

  const logout = async () => {
    await signOut();
    router.push("/");
  };

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
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
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
                  <Link href="/contact">Contact</Link>
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
                  <Link href="/">
                    <Image
                      width={250}
                      height={100}
                      src="/assets/jobie-agro-logo.png"
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-12">
                <div className="ht-left">
                  <ul className="lab-ul d-flex flex-wrap justify-content-end">
                    <li className="d-flex flex-wrap align-items-center">
                      <div className="ht-add-thumb mr-2">
                        <Image
                          width={30}
                          height={30}
                          src="/assets/images/header/01.png"
                          alt="address"
                        />
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
                        <Image
                          width={30}
                          height={30}
                          src="/assets/images/header/02.png"
                          alt="email"
                        />
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
                        <Image
                          width={30}
                          height={30}
                          src="/assets/images/header/03.png"
                          alt="call"
                        />
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
                      <Link href="/">
                        <Image
                          width={250}
                          height={250}
                          src="/assets/jobie-agro-logo.png"
                          alt="logo"
                        />
                      </Link>
                    </div>
                    <ul className="lab-ul">
                      <li className="active">
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>

                      <li>
                        <Link href="/shop">Shop</Link>
                      </li>

                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                    {!authUser && (
                      <ul className="lab-ul ml-auto">
                        <li>
                          <a onClick={showSignUpDialog}>Sign Up</a>
                        </li>
                        <li>
                          <a onClick={showLoginDialog}>Login</a>
                        </li>
                      </ul>
                    )}
                    {authUser && (
                      <ul className="lab-ul ml-auto">
                        <li>
                          <Link legacyBehavior href="/profile">
                            <a>My profile</a>
                          </Link>
                        </li>
                        <li>
                          <a onClick={logout}>Logout</a>
                        </li>
                      </ul>
                    )}
                    <Carts />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Dialogs */}
      <LoginDialog show={showLogin} handleClose={handleCloseLoginDialog} />
      <SignupDialog show={showSignUp} handleClose={handleCloseSignupDialog} />
    </>
  );
};

export default Header;

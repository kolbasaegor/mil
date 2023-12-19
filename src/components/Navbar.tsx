import React from 'react';
import { useSelector } from 'react-redux';
import CartTooltip from './popper/CartTooltip';
import { useState } from 'react';
import { usePopper } from 'react-popper';

const Navbar = () => {
  const amountOfProductsInCart = useSelector(state => state.amount);
  const totalCostOfProductsInCart = useSelector(state => state.totalCost);
  
  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ]
  });

  const showTooltip = () => {
    popperElement.setAttribute('data-show', true);
  }
 
  const hideTooltip = () => {
    popperElement.removeAttribute('data-show');
  }

  return (
    <div className='container' style={{maxWidth: 70 + 'rem'}}>
    <div
      className='popper-element'
      ref={setPopperElement}
      style={styles.popper}
      {...attributes.popper}
    >
      <CartTooltip amount={amountOfProductsInCart} totalCost={totalCostOfProductsInCart}/>
    </div>
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/stickmouse">
            <img src="https://img.freepik.com/premium-vector/wild-boar-pig-drawing_186119-86.jpg?w=2000" width={50} alt="" />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="/stickmouse">Main</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/stickmouse/all">All Products</a>
                </li>
            </ul>
            <div className="d-flex">
                <div className="align-self-center">
                    <a href='/stickmouse/cart' style={{color: '#000'}}>
                        <div
                          className='position-relative'
                          onMouseEnter={showTooltip}
                          onMouseLeave={hideTooltip}
                          ref={setReferenceElement}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                          </svg>
                          {amountOfProductsInCart > 0 ?
                            <span
                              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                              style={{fontSize: 10 + 'px'}}
                            >
                              {amountOfProductsInCart}
                            </span>
                            :
                            <div></div>
                          }
                        </div>
                    </a>
                </div>
            </div>
          </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar;

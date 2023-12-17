import React from 'react';
import Navbar from '../components/Navbar';
import TopProducts from '../components/product/TopProducts';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Main = () => {
  useDocumentTitle('Market');

  return (
    <div className='container' style={{maxWidth: 70 + 'rem'}}>
      <Navbar />
      <div className='main-content'>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src="https://www.huntworld.ru/upload/iblock/45a/obzor_toz_ko_7_62kh39_i_9kh39.jpg" className="d-block w-100" alt=""/>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="https://cdn.kanobu.ru/r/8bfd7bba93ecaea946e0280f3137581c/1040x-/u.kanobu.ru/editor/images/76/10470143-c9d5-4312-be89-29f65ca353d9.jpg" className="d-block w-100" alt=""/>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="https://image.fhserv.ru/hunting/2018-05-e0563124da848ff821273ff7fd91ce27__rsu-1000-800.jpg?hash=394fc1d1" className="d-block w-100" alt=""/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className='m-4 text-center'>
        <h2>MOST VIEWED PRODUCTS ON OUR SITE</h2>
      </div>
      <TopProducts limit={10}/>
      </div>
    </div>
  )
}

export default Main;

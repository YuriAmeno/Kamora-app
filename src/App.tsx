import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductComponent from './Products/components/index';

function App() {
  return (
    <>
     
     <div>
      {/* Cabeçalho */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          <div className="container" style={{backgroundColor: 'black', borderRadius: '15px'}}>
            <a className="navbar-brand" href="#" style={{color: 'white'}}>Kamora</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" >
              <ul className='navbar-nav'>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{color: 'white'}}>Contato</a>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{color: 'white', alignItems: 'end'}}>Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Seção Principal */}
      <main role="main">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <h2>Seção Principal</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lectus felis. Nullam euismod dapibus neque, sed ullamcorper eros hendrerit non. Sed tristique, justo eu congue elementum, lectus sapien consequat est, id laoreet libero lorem sit amet mauris. Vivamus in tellus non mauris cursus rhoncus. Vestibulum aliquam tellus nisi, in vehicula est feugiat id. Fusce condimentum est et nulla lobortis, id condimentum velit placerat. Praesent id efficitur sapien. Fusce sit amet nunc vel ante vestibulum feugiat. Nullam sit amet nisi eget odio pharetra interdum a ac leo. Nullam dictum elit id ligula posuere, vitae dignissim dui volutpat.</p>
            </div>
            <div className="col-md-4">
              <h2>Sidebar</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lectus felis. Nullam euismod dapibus neque, sed ullamcorper eros hendrerit non.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="mt-4">
        <div className="container">
          <p>&copy; 2024 Meu Site</p>
        </div>
      </footer>
    </div>
      
      
    </>

  )
}

export default App;

import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faPhone, faHamburger, faCocktail, faUtensils , faIceCream,faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './App.css'

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [cont, setCont] = useState(0);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <section className='head'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg pl-0 pr-0'>
            <a className='navbar-brand' href='#'>
              <img src='src\assets\logo.png' width={160} alt='Logo'/>
            </a>
            <button className='navbar-toggler' type='button' onClick={toggleNavbar}>
              <span className='navbar-toggler-icon'>
                <i className='fas fa-bars'></i>

              </span>
              </button>
              <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id='navbarNavDropdown'>
                <ul className='navbar-nav ml-auto mr-auto'>
                  <li className='nav-item'>
                    <a href='#reservas' className='nav-link'><b>Reservas</b></a>
                    </li>
                  <li className='nav-item'>
                    <a href='#servicos' className='nav-link'><b>Serviços</b></a>
                    </li>
                  <li className='nav-item'>
                    <a href='#cardapio' className='nav-link'><b>Cardapio</b></a>
                  </li>
                </ul>
                <a className='btn btn-white btn-icon'>
                  Meu Carrinho <span className='icon'>
                  <FontAwesomeIcon icon={faShoppingBag} />
                  </span>
                </a>
              </div>
          </nav>
        </div>
      </section>
      <section className='banner'>
       <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='d-flex text-banner'>
              <h1><b>Escolha seu lanche <b className='color-primary'>favorito.</b></b></h1>
              <p>Aproveite nosso cardápio! Escolha o que desejar e receba em sua casa de forma rápida e segura</p>
              <div className='d-flex'>
                <a className='btn btn-yellow mt-4 mr-3'>Ver Cardápio</a>
                <a href='#' className='btn btn-white btn-icon-left mt-4'>
                <span className='icon-left'>
                  <FontAwesomeIcon icon={faPhone} />
                  </span>
                  (15) 981515548
                </a>
              </div>
            </div>
            <a href="" className='btn btn-sm btn-white btn-social mt-4 mr-3'>
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="" className='btn btn-sm btn-white btn-social mt-4'>
            <FontAwesomeIcon icon={faWhatsapp} /> 
            </a>
          </div>
          <div className='col-6'>
            <div className='card-banner'></div>
            <div className='d-flex img-banner'>
              <img src="src\assets\burguer.png" alt="" />
            </div>
            <div className='card card-case'>{`"Entrega rápida e funcionários simpáticos.
  A comida chegou quente e muito saborosa!"`}
            <span className='card-case-name'><b>Louseane de Paula</b></span>
            </div>
          </div>
        </div>
        </div> 
      </section>
      <section className='servicos' id="servicos">
        <div className='background-servicos'></div>
       <div className='container'>
        <div className='row'>
          <div className='col-12 text-center mb-5'>
            <span className='hint-title'><b>Serviços</b></span>
            <h1 className='title'><b>Como são nossos serviços?</b></h1>
          </div>
          <div className='col-4 mb-5'>
          <div className='card-icon text-center'>
            <img src="src\assets\icone-pedido.svg" alt="" width={150} />
          </div>
          <div className='card-text text-center mt-3'>
            <p><b>Fácil de pedir</b></p>
            <span>Voce só precisa de alguns passos para pedir sua comida.</span>
          </div>
          </div>
          <div className='col-4 mb-5'>
          <div className='card-icon text-center'>
            <img src="src\assets\icone-delivery.svg" alt="" width={250} />
          </div>
          <div className='card-text text-center mt-3'>
            <p><b>Entrega Rápida</b></p>
            <span>Nossa entrega é sempre pontual, rápida e segura.</span>
          </div>
          </div>
          <div className='col-4 mb-5'>
          <div className='card-icon text-center'>
            <img src="src\assets\icone-qualidade.svg" alt="" width={250} />
          </div>
          <div className='card-text text-center mt-3'>
            <p><b>Melhor qualidade</b></p>
            <span>Não só a rapidez na entrega, a qualidade também é o nosso forte.</span>
          </div>
          </div>
        </div>
        </div> 
      </section>
      <section className='cardapio' id="cardapio">
        <div className='background-cardapio'></div>
       <div className='container'>
        <div className='row'>
        <div className='col-12 text-center mb-5'>
            <span className='hint-title'><b>Cardápio</b></span>
            <h1 className='title'><b>Conheça o nosso cardápio</b></h1>
          </div> 
          <div className='col-12 container-menu'>
            <a className='btn btn-white btn-sm mr-3 active'>
            <FontAwesomeIcon icon={faHamburger} />&nbsp;
            Hamburgues</a>
            <a className='btn btn-white btn-sm mr-3'>
            <FontAwesomeIcon icon={faCocktail} />&nbsp;
            Bebidas</a>
            <a className='btn btn-white btn-sm mr-3'>
            <FontAwesomeIcon icon={faUtensils } />&nbsp;
            Porções</a>
            <a className='btn btn-white btn-sm mr-3'>
            <FontAwesomeIcon icon={faIceCream} />&nbsp;
            Sobremesas</a>
            </div> 
        </div>
        <div className='col-12'>
         <div className='row' id='itensCardapio'>
          <div className='col-3 mb-5'>
            <div className='card card-item'>
              <div className='img-produto'>
                <img src="src\assets\burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg" alt="" />
              </div>
              <p className='title-produto text-center mt-4'><b>Nome do produto grande demais</b></p>
              <p className='price-produto  text-center'><b>R$ 40,70</b></p>
              <div className='add-carrinho'>
                <span className='btn-menos'><FontAwesomeIcon icon={faMinus} /></span>
                <span className='add-numero-itens'>{cont}</span>
                <span className='btn-mais'><FontAwesomeIcon icon={faPlus} /></span>
                <span className='btn btn-add'><FontAwesomeIcon icon={faShoppingBag} /></span>
              </div>
            </div>
          </div>
          </div> 
        </div>
        <div className='col-12 text-center'>
          <a className='btn btn-white btn-sm'>Ver mais</a>
        </div>
        </div> 
      </section>
      <section className='reserva' id="reservas">
      <div className='container'>
        <div className='row'>aaa</div>
        </div>  
      </section>
      <footer></footer>
    </>
  )
}

export default App

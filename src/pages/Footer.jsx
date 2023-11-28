import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter bgColor='black' className='text-center text-lg-start text-white'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Siga-nos em nossas redes sociais</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Pizza's Ruth
              </h6>
              <p>
                Desde 2009 a Pizza's Ruth vem atendendo com qualidade e comprometimento. Com as melhores pizzas da baixada, tirando a Pizza PAM II, essa é RUIM mesmo.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Cardápio</h6>
              <p>
                <a href='#!' className='text-color'>
                  Pizzas
                </a>
              </p>
              <p>
                <a href='#!' className='text-color'>
                  Esfihas
                </a>
              </p>
              <p>
                <a href='#!' className='text-color'>
                  Beirutes
                </a>
              </p>
              <p>
                <a href='#!' className='text-color'>
                  Bebidas
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Informações</h6>
              <p>
                <a href='#!' className='text-color'>
                  Sobre Nós
                </a>
              </p>
              <p>
                <a href='#!' className='text-color'>
                  Trabalhe Conosco
                </a>
              </p>
              <p>
                <a href='#!' className='text-color'>
                  Ouvidoria
                </a>
              </p>
              <p>
                <a href='#!' className='text-color'>
                  Termos e Condições
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contato</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Praça Coronel José Lopes, 387 – Centro – São Vicente / SP
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                e194.site@etec.sp.gov.br
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> (13) 3467-7153 
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> (13) 99194-6237
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright - Pizza's Ruth - Todos os direitos reservados
      </div>
    </MDBFooter>
  );
}
export default Footer
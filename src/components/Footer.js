import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-dark"
      style={{ marginTop: "20%" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/"
            className="mx-4 text-reset"
          >
            <MDBIcon fab icon="facebook" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.twitter.com/"
            className="mx-4 text-reset"
          >
            <MDBIcon fab icon="twitter" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/"
            className="mx-4 text-reset"
          >
            <MDBIcon fab icon="google" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/"
            className="mx-4 text-reset"
          >
            <MDBIcon fab icon="instagram" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/"
            className="mx-4 text-reset"
          >
            <MDBIcon fab icon="linkedin" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/"
            className="mx-4 text-reset"
          >
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="sticky-note" className="mx-3" />
                iNotebook.com
              </h6>
              <p>
                A cloud platform for users to store there important notes and
                they can use whenever they require.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Learnings</h6>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://nodejs.org/"
                  className="text-reset"
                >
                  Nodejs
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://reactjs.org/"
                  className="text-reset"
                >
                  React
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://mongodb.org/"
                  className="text-reset"
                >
                  Mongodb
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://expressjs.org/"
                  className="text-reset"
                >
                  Express
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://getbootstrap.com/"
                  className="text-reset"
                >
                  Bootstrap
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://reactrouter.com/"
                  className="text-reset"
                >
                  React-router-dom
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://redux.com"
                  className="text-reset"
                >
                  Redux
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://mongodb.com"
                  className="text-reset"
                >
                  Mongo Atlas
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="mx-2" />
                Bengaluru 560092 India
              </p>
              <p>
                <MDBIcon icon="envelope" className="mx-3" />
                iNotebook@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="mx-3" /> + 91 6754321876
              </p>
              <p>
                <MDBIcon icon="print" className="mx-3" /> + 91 8765438923
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 1,)" }}
      >
        © 2023 Copyright: iNotebook.com
      </div>
    </MDBFooter>
  );
}

import React from 'react'
import { Link } from 'react-router-dom';

/* imagens */
import img_logo_h_dark from './../assets/img/logo_h_dark.svg'

export class Footer extends React.Component {
  render () {
    return (
      <footer id="footer" className="section-bg">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="footer-logo col-xs-12 col-sm-6">
                  <Link to="/"><img src={ img_logo_h_dark } alt="" className="img-fluid logo"/></Link>
              </div>

              <div className="social-links col-xs-12 col-sm-6">
                {this.props.twitter &&
                  <a href={this.props.twitter} className="twitter"><i className="fa fa-twitter"></i></a>
                }

                {this.props.facebook &&
                  <a href={this.props.facebook} className="facebook"><i className="fa fa-facebook"></i></a>
                }

                {this.props.linkedin &&
                  <a href={this.props.instagram} className="instagram"><i className="fa fa-instagram"></i></a>
                }

                {this.props.instagram &&
                  <a href={this.props.linkedin} className="linkedin"><i className="fa fa-linkedin"></i></a>
                }

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong>Nove Folhas</strong>. All Rights Reserved
          </div>
          <div className="credits">
            {/*
            All the links in the footer should remain intact.
            You can delete the links only if you purchased the pro version.
            Licensing information: https://bootstrapmade.com/license/
            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Rapid
          */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>      
    )
  }
}

export default Footer
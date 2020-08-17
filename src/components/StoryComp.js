import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'reactstrap'


function Story(props) {
  return (
    <Card>
      <div className="container">
        <div className="col col-sm-6">
          <div className="card">
              <h3 className="card-header">Our Story! <a><img src="/assets/images/catcafe1.jpg" width="69%" alt="Cat" /></a></h3>
              <div className="card-body">
                  <a className="btn" role="button">
                      <div className="col">
                          <button type="submit" className="btn btn-sm" data-toggle="modal" data-target=".bd-cats-modal-lg"
                          id="#catsModal">Meet Us!</button>
                      </div>
                  </a>
                  <h3>Some text about how cats and coffee are two of the best things in life lol.</h3>
              </div>
          </div>
        </div>
      
        <div className="modal fade bd-cats-modal-lg" id="catsModal" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="text-white">Our Story!</h3>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="row row-content">
                            <div className="col">
                                <img src="/assets/images/catcafe1.jpg" width="75%" />
                            </div>
                        </div>
                            <p className="align-text-bottom">Tomcat bengal. Panther mouser. Puma panther. Cougar lion for munchkin. Havana brown russian blue so jaguar.
                            Russian blue british shorthair tom yet devonshire rex american shorthair. Lion mouser but egyptian mau. American shorthair ocicat grimalkin.
                            Tiger munchkin, for cougar or cougar. Abyssinian kitten lion scottish fold, for siamese.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Card>

  );
}

export default Story;
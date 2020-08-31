import React from 'react';
import { CardText } from 'reactstrap'


function Story(props) {
  return (
    <div className="col center-block">
        <div className="card">
            <div class="card-body">
            <div className="card-header">
              <h1>Our Story!</h1>
            </div>
                <img className="mt-5" src="/assets/images/catcafe1.jpg" width="70%" alt="story cat" />
                <CardText>Some text about how cats and coffee are two of the best things in life lol.</CardText>
                <p class="align-text-bottom">Tomcat bengal. Panther mouser. Puma panther. Cougar lion for munchkin. Havana brown russian blue so jaguar.
                Russian blue british shorthair tom yet devonshire rex american shorthair. Limouser but egyptian mau. American shorthair ocicat grimalkin.
                Tiger munchkin, for cougar or cougar. Abyssinian kitten lion scottish fold, fsiamese.</p>
                <p class="align-text-bottom">Tomcat bengal. Panther mouser. Puma panther. Cougar lion for munchkin. Havana brown russian blue so jaguar.
                Russian blue british shorthair tom yet devonshire rex american shorthair. Limouser but egyptian mau. American shorthair ocicat grimalkin.
                Tiger munchkin, for cougar or cougar. Abyssinian kitten lion scottish fold, fsiamese.</p>
            </div>
        </div>
    </div>

  );
}

export default Story;
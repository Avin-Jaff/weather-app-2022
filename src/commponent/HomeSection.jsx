import React from "react";
import { Container, Image } from "react-bootstrap";

export default function HomeSection() {
  return (
    <div>
      <div className="homesection">
        <Container className="homecontinor">

          <div className="gifImage">
            <Image
              src="https://64.media.tumblr.com/73cda485c15ebbc8947e1240317c82be/c15b3bc1b8be9533-17/s500x750/1d4c65f9c05833a227a85b20d00818da14652a2c.gifv"
              alt="animathion"
              width={850}
            />
          </div>

        </Container>
      </div>
    </div>
  );
}

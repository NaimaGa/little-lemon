import React from 'react';
import CallToAction from '../Components/CallToAction';
import Specials from '../Components/Specials';
import CustomersSay from '../Components/CustomersSay';
import Chicago from '../Components/Chicago';

function Homepage() {
  return (
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
}

export default Homepage;

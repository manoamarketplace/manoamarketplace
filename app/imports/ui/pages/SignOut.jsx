import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { Col } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

/* After the user clicks the "SignOut" link in the NavBar, log them out and display this page. */
const SignOut = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    Meteor.logout();
    setTimeout(() => {
      setRedirect(true);
    }, 2000); // 5 second delay before redirecting
  }, []);

  return (
    <Col id="signout-page" className="text-center py-3">
      <h2 className="title">You are signed out.</h2>
      {redirect && <Navigate to="/" />}
    </Col>
  );
};

export default SignOut;

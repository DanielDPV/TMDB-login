import React, { useEffect } from 'react';
import './App.css';
import { getSession } from './helpers/fetchService';
import { getQueryVariable } from './utils/utils';

const Approved = () => {
  useEffect(() => {
    const getSessionId = async () => {
      const requestToken = getQueryVariable('request_token') || '';
      const approved = getQueryVariable('approved')
        ? Boolean(getQueryVariable('approved'))
        : false;
      const { session_id: sessionId } = await getSession(requestToken);
      console.log(sessionId);
      console.log(approved);
    };

    try {
      getSessionId();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="App">
      <h1>Approved</h1>
    </div>
  );
};

export default Approved;

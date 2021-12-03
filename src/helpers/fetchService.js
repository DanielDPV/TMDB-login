const API_KEY = 'you api key here';
const BASE_URL = 'https://api.themoviedb.org/3';

const headers = {
  headers: {
    Authorization:
      `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
};

const getRequestToken = async () => {
  try {
    const response = await fetch(`${BASE_URL}/authentication/token/new`, {
      ...headers,
    });
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getSession = async (requestToken) => {
  try {
    const response = await fetch(`${BASE_URL}/authentication/session/new`, {
      ...headers,
      method: 'POST',
      body: JSON.stringify({
        request_token: requestToken
      })
    });
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getRequestToken, getSession };

export const request = async (method, url, headers = {}, body) => {
  let response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  });

  if (response.ok) {
  } else {
  }
};

export const allPost = () => {
  return fetch('/api/post/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  
};


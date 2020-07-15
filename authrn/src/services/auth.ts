interface Response {
  token: string;
  user: {
    name: string;
    age: string;
  };
}
export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'saldkfjaçsldfjasdf',
        user: {
          name: 'gledson',
          age: '20',
        },
      });
    }, 2000);
  });
}

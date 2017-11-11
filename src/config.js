export const serverBaseUrl =
  process.env.NODE_ENV === 'production'
    ? 'http://http://163.172.132.165/api'
    : 'http://localhost:8000/api';

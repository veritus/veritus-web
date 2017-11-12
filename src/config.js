export const serverBaseUrl = process.env.NODE_ENV === 'production'
  ? 'https://codebee.me/api'
  : 'http://localhost:8000/api';

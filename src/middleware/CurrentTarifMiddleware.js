// src/middleware/log.js
export default function currentTarif({next, to}) {
    console.log('middleware');
  
    return next();
  }
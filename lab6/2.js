'use strict';

const compose = (...fns) => {
  const errorHandlers = [];
  

  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('All arguments must be functions');
    }
  }
  
  const composed = (x) => {
    if (fns.length === 0) return x;
    
    let result = x;
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }
      return result;
    } catch (error) {

      errorHandlers.forEach(handler => {
        try {
          handler(error);
        } catch (e) {}
      });
      return undefined;
    }
  };
  

  composed.on = (event, handler) => {
    if (event === 'error' && typeof handler === 'function') {
      errorHandlers.push(handler);
    }
    return composed;
  };
  
  return composed;
};
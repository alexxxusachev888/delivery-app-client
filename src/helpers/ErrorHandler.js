export const errorHandler = (apiFunc) => {
    return async (...args) => {
      try {
        const response = await apiFunc(...args);
        console.log(response.data)
        return response.data
      } catch (error) {
        console.error("API request failed", error);
        return error
      }
    };
  };
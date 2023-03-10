# Axios wrapper for api calls

## Features
* `sendApiReq.js` is used to send api calls through axios. 
This file exports a single function `sendApiReq` as default. 
* It utilizes the axios instance and interceptors as wrapper, we can use every properties of axios directly as passing those in params. This function return the instance which is promise. Following are the default parameters, other properties can be passed directly. Use it within try-catch block. After successful api contract, we will directly get the data from this function (so you dont need to get data from response).

```js
isAuthendicated = true, // token will be passed default
headers = {} // additional headers
```

Example:
```js
  try {
    const resData = await	sendApiReq({
      method: '', // get | post | put | patch | delete (...other methods of axios),
      url: '', // endpoint
      data: {}, // if needed
      baseUrl: '', // no-need to add, configured by default, but can be add to override the default
    })
    // you can destructure the resData

  } catch (error) {
    console.log(error)
  }
```

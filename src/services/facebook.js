require('./server')
require =('dotenv/config')

FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      var accessToken = response.authResponse.accessToken;
    } 
    console.log(getLoginStatus)
  } );
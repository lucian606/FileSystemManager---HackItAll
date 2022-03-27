const axios = require('axios');

export const domain = 'http://192.168.238.118:5001/';
export const getDefaultRoute = '/';
export const getLsRoute = '/ls';
export const postMkdirRoute = '/mkdir';
export const getPwdRoute = '/pwd';
export const postCatRoute = '/cat';
export const postTouchRoute = '/touch';
export const getFindRoute = '/find';
export const postCdRoute = '/cd';
export const getPsRoute = '/ps';

export const blockchainCreateWallet = '/createWallet';
export const blockchainMine = '/mine';
export const blockchainGet = '/get';
export const blockchainGetDeviceName = '/get/device/name';
export const blockchainPutDeviceData = '/put/device/data';

export function postBlockchainCreateWallet(params, success, failure) {
    axios({
        method: 'post',
        url: `${domain}${blockchainCreateWallet}`,
        data: JSON.stringify(params),
        headers: {
          'content-type': 'application/json; charset=utf-8'
        }
  })
  .then((response) => {
      success(response);
  }, (error) => {
      failure(error);
  });
}    
export function postBlockchainMine(params, success, failure) {
    axios({
        method: 'post',
        url: `${domain}${blockchainMine}`,
        data: JSON.stringify(params),
        headers: {
          'content-type': 'application/json; charset=utf-8'
        }
  })
  .then((response) => {
      success(response);
  }, (error) => {
      failure(error);
  });
}
export function postBlockchainGet(params, success, failure) {
    axios({
        method: 'post',
        url: `${domain}${blockchainGet}`,
        data: JSON.stringify(params),
        headers: {
          'content-type': 'application/json; charset=utf-8'
        }
  })
  .then((response) => {
      success(response);
  }, (error) => {
      failure(error);
  });
}
export function postBlockchainGetDeviceName(params, success, failure) {
    axios({
        method: 'post',
        url: `${domain}${blockchainGetDeviceName}`,
        data: JSON.stringify(params),
        headers: {
            'content-type': 'application/json; charset=utf-8'
        }
    })
    .then((response) => {
        success(response);
    }, (error) => {
        failure(error);
    });
}
export function postBlockchainPutDeviceData(params, success, failure) {
    axios({
        method: 'post',
        url: `${domain}${blockchainPutDeviceData}`,
        data: JSON.stringify(params),
        headers: {
            'content-type': 'application/json; charset=utf-8'
        }
    })
    .then((response) => {
        success(response);
    }, (error) => {
        failure(error);
    });
}


export function getDefault(success, failure) {
    axios({
        method: 'get',
        url: `${domain}${getDefaultRoute}`,
    })
    .then((response) => {
        success(response);
    },(error) => {
        failure(error);
    });
}
export function getLs(success, failure) {
    console.log('Performing getLs');
    axios({
        method: 'get',
        url: `${domain}${getLsRoute}`,
    })
    .then((response) => {
        success(response);
    },(error) => {
        failure(error);
    });
}
export function postMkdir(mkdirParams, success, failure) {
    axios({
          method: 'post',
          url: `${domain}${postMkdirRoute}`,
          data: JSON.stringify(mkdirParams),
          headers: {
            'content-type': 'application/json; charset=utf-8'
          }
    })
    .then((response) => {
        success(response);
    }, (error) => {
        failure(error);
    });
}
export function getPwd(success, failure) {
    axios({
        method: 'get',
        url: `${domain}${getPwdRoute}`,
    })
    .then((response) => {
        success(response);
    },(error) => {
        failure(error);
    });
}
export function postCd(cdParams, success, failure) {
    axios({
          method: 'post',
          url: `${domain}${postCdRoute}`,
          data: JSON.stringify(cdParams),
          headers: {
            'content-type': 'application/json; charset=utf-8'
          }
    })
    .then((response) => {
        success(response);
    }, (error) => {
        failure(error);
    });
}
export function getCat(catParams, success, failure) {
    axios({
        method: 'post',
        url: `${domain}${postCatRoute}`,
        data: JSON.stringify(catParams),
        headers: {
            'content-type': 'application/json; charset=utf-8'
        }
    })
    .then((response) => {
        success(response);
    },(error) => {
        failure(error);
    });
}
export function postTouch(touchParams, success, failure) {
    axios({
        method: 'post',
        url: `${domain}${postTouchRoute}`,
        data: JSON.stringify(touchParams),
          headers: {
            'content-type': 'application/json; charset=utf-8'
          }
    })
    .then((response) => {
        success(response);
    },(error) => {
        failure(error);
    });
}
export function getFind(findParams, success, failure) {
    axios({
        method: 'post',
        url: `${domain}${getFindRoute}`,
        data: JSON.stringify(findParams),
        headers: {
            'content-type': 'application/json; charset=utf-8'
        }
    })
    .then((response) => {
        success(response);
    },(error) => {
        failure(error);
    });
}
export function getPs(success, failure) {
    axios({
        method: 'get',
        url: `${domain}${getPsRoute}`,
    })
    .then((response) => {
        success(response);
    },(error) => {
        failure(error);
    });
}

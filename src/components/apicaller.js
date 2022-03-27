const axios = require('axios');

// export const domain = 'http://192.168.238.110:5001';
export const domain = getUrl();
export const goDomain = getGoDomain();
export const getDefaultRoute = '/';
export const getLsRoute = '/ls';
export const postMkdirRoute = '/mkdir';
export const getPwdRoute = '/pwd';  
export const postCatRoute = '/cat';
export const postTouchRoute = '/touch';
export const getFindRoute = '/find';
export const postCdRoute = '/cd';
export const getPsRoute = '/ps';

export const walletKey = {
    WalPubKey: 'a50bd797efb8ba2ace74ba2b64f0c5b71a50efc9e7b4d2228d…b13e89dd9508561c3167a7a718d1f7c26c431bd8239473e55', 
    WalPrivateKey: '7d266f81676ad953697a67b4c5cd7d1a0f3db5208b683445e0…a993ecee06aed8a727a4d872f32331b427ce52fdf554de764', 
    Money: 0
}

export const blockchainCreateWallet = '/createWallet';
export const blockchainMine = '/mine';
export const blockchainGet = '/get';
export const blockchainGetDeviceName = '/get/device/name';
export const blockchainPutDeviceData = '/put/device/data';
export const postBlockchain = '/blockchain';
export const postMonkey = '/monkey';

export function getUrl() {
    const data = JSON.parse(localStorage.getItem('device'));
    if (!data) return 'http://127.0.0.1';
    return `http://${data.ip}:${data.port}`;
}

export function getGoDomain() {
    const data = JSON.parse(localStorage.getItem('device'));
    if (!data) return 'http://127.0.0.1';
    return `http://${data.ip}:8080`;
}

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
        method: 'get',
        url: `${(getUrl())}/blocks`,
        // data: JSON.stringify(params),
        // headers: {
        //   'content-type': 'application/json; charset=utf-8'
        // }
  })
  .then((response) => {
      success(response);
  }, (error) => {
      failure(error);
  });
}
export function postBlockchainGetDeviceName(success, failure) {
    axios({
        method: 'post',
        // url: `${goDomain}${blockchainGetDeviceName}`,
        url: `${getGoDomain}/get`,
        // data: JSON.stringify({ PrivateKey: walletKey.WalPrivateKey, DeviceToAccess: "f4:d4:88:7c:2f:73" }),
        // headers: {
        //     'content-type': 'application/json; charset=utf-8'
        // }
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
export function postBlockchainApi(params, success, failure) {
    axios({
        method: 'post',
        url: `${domain}/blockchain`,
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
export function postMonkeyApi(params, success, failure) {
    axios({
        method: 'post',
        url: `${domain}${postMonkey}`,
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
export function getLs(lsParams, success, failure) {
    console.log('Performing getLs');
    axios({
        method: 'post',
        url: `${getUrl()}${getLsRoute}`,
        data: JSON.stringify(lsParams),
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
export function postMkdir(mkdirParams, success, failure) {
    axios({
          method: 'post',
          url: `${getUrl()}${postMkdirRoute}`,
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
export function getPs(psParams, success, failure) {
    axios({
        method: 'post',
        url: `${domain}${getPsRoute}`,
        data: JSON.stringify(psParams),
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

export function postUpload(uploadParams, success, failure) {
    axios({
        method: 'post',
        url: `${domain}/upload`,
        data: JSON.stringify(uploadParams),
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

export function postDownload(downloadParams, success, failure) {
    axios({
        method: 'post',
        url: `${domain}/download`,
        data: JSON.stringify(downloadParams),
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

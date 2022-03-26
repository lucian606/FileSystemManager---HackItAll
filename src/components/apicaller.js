const axios = require('axios');

export const domain = 'http://127.0.0.1:5001';
export const getDefaultRoute = '/';
export const getLsRoute = '/ls';
export const postMkdirRoute = '/mkdir';
export const getPwdRoute = '/pwd';
export const postCatRoute = '/cat';
export const postTouchRoute = '/touch';
export const getFindRoute = '/find';
export const postCdRoute = '/cd';
export const getPsRoute = '/ps';

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

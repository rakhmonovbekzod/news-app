import axios from 'axios'
import { store } from "../../redux/index.js";


const instance = axios.create({
    baseURL: 'http://localhost:4001'
})

instance.defaults.headers.common['Accept'] = 'application/json';
instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'



const get = makeActionDecorator(function (url) {
    return instance({
        method: 'GET',
        url
    })
});


const post = makeActionDecorator(function (url, payload) {
    const token = store.getState().auth.token
    return instance({
        method: 'POST',
        url,
        headers: {
            'bearer': `${token}`,
      },
        data: payload
    })
});

const put = makeActionDecorator(function (url, payload) {
  const token = store.getState().auth.token
  return instance({
      method: 'PUT',
      url,
      headers: {
        Authorization: `Bearer ${token}`,
    },
      data: payload
  })
});

const del = makeActionDecorator(function (url, payload) {
  const token = store.getState().auth.token
  return instance({
      method: 'DELETE',
      url,
      headers: {
        Authorization: `Bearer ${token}`,
    },
      data: payload
  })
});


function makeActionDecorator(fTargetFunction) {
    return function () {
        return fTargetFunction.apply(this, arguments);
    }
}

export {
    get,
    post,
    put,
    del
}
import { call } from 'redux-saga/effects';
import { BACKEND_URL, TOKEN } from '../config';
import { stringify } from 'query-string'

/**
 * Wrapper for debugging API requests
 * @param {*} apiFunctionName string - name of API function
 * @param {*} apiFunction function to call
 * @param  {...any} params params for API request function
 */
export function* requestApiSaga(apiFunctionName, apiFunction, ...params) {
  let DEV_deltaTime = 0;
  DEV_deltaTime = new Date().getTime();
  console.log(apiFunctionName, 'START');

  let response = yield call(apiFunction, ...params);
  const status = response.status;

  console.log(
    apiFunctionName,
    `${(new Date().getTime() - DEV_deltaTime) / 1000}sec`,
    status,
    response,
    new Date(),
  );

  try {
    let resultJson = yield call([response, 'json']);
    console.log(status, apiFunctionName, resultJson);

    return resultJson;
  } catch (error) {
    if (response.result === undefined && status === 200) {
      return [];
    } else {
      console.log(error);

      throw error;
    }
  }
}

function loadFilms() {
  const params = {
    token: TOKEN,
    end: 20,
    format: 'json',
    data: '0',
  };
  return fetch(`${BACKEND_URL}/imdb/top?${stringify(params)}`, {
    method: 'GET',
  });
}

export default {
  loadFilms,
};

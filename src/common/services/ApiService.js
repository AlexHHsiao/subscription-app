import {ENDPOINT, HTTP_METHODS} from "../util/constants";
import AppConfig from './../util/config';

const createHeader = () => (
    {
        currency: AppConfig.currency,
        'Content-Type': 'application/json'
    }
);

const checkStatus = response => {
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(response);
    }
};

export const getCurrent = () => {
    const url = `${ENDPOINT}/current`;
    return fetch(url, {
        method: HTTP_METHODS.GET,
        headers: createHeader()
    }).then(checkStatus);
};

export const updateCurrent = (body) => {
    const url = `${ENDPOINT}/current`;
    return fetch(url, {
        method: HTTP_METHODS.PUT,
        body: JSON.stringify(body),
        headers: createHeader()
    }).then(checkStatus);
};

export const getPreview = (body) => {
    const url = `${ENDPOINT}/preview`;
    return fetch(url, {
        method: HTTP_METHODS.POST,
        body: JSON.stringify(body),
        headers: createHeader()
    }).then(checkStatus);
};

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

const getCurrent = () => {
    const url = `${ENDPOINT}/current`;
    return fetch(url, {
        method: HTTP_METHODS.GET
    }).then(checkStatus);
};

const updateCurrent = (body) => {
    const url = `${ENDPOINT}/current`;
    return fetch(url, {
        method: HTTP_METHODS.PUT,
        body: JSON.stringify(body),
        headers: createHeader()
    }).then(checkStatus);
};

const getPreview = (body) => {
    const url = `${ENDPOINT}/preview`;
    return fetch(url, {
        method: HTTP_METHODS.POST,
        body: JSON.stringify(body),
        headers: createHeader()
    }).then(checkStatus);
};

export default {getCurrent, updateCurrent, getPreview};

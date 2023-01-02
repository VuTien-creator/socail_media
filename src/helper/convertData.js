import * as constants from '../config/app/constants'
import getDivision from './getDivision';

/**
 * Return the object with format you want
 * @param {Object} object 
 * @returns {Object} return data has been formatted
 */
const convertData = (object) => {
    const data = {};
    let status = 200;
    let message = getDivision('message.success');
    if (!object.length) {
        status = 404;
        message = getDivision('message.not_found');
    }
    return {
        status,
        message,
        data: object,
    }
}

export default convertData;
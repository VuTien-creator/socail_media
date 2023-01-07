import * as constants from '../config/app/constants'
import getDivision from './getDivision';

/**
 * Return the object with format you want
 * @param {Object} object 
 * @returns {Object} return data has been formatted
 */
const convertData = (object) => {
    const data = [];
    return {
        status: object.status,
        message: object.message,
        data: object.data,
    }
}

export default convertData;
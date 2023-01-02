import fs from 'fs';
import yaml from 'js-yaml';
import { SYMBOL } from '../config/app/constants';

/**
 * Return value of division in file app/division.yml
 * @param {String} divisionName division you want like prefix.api
 * @returns {void} value of divsion
 */
const getDivision = (divisionName) => {
    const divisions = divisionName.split(SYMBOL.DOT);
    try {
        // read file division
        const fileContents = fs.readFileSync(`src/config/app/division.yml`, 'utf8');
        // load file
        const data = yaml.load(fileContents);
        // get all divisions
        let result = data.all;
        for (const division of divisions) {
            // get division value you want
            result = result[division];
        }
        return result;
    } catch (e) {
        console.log(e);
    }
}

export default getDivision;
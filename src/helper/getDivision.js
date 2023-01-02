import fs from 'fs';
import yaml from 'js-yaml';

const getDivision = (divisionName) => {
    try {
        // read file division
        const fileContents = fs.readFileSync(`src/config/app/division.yml`, 'utf8');
        // load file
        const data = yaml.load(fileContents);
        return data.all.prefix[divisionName];
    } catch (e) {
        console.log(e);
    }
}

export default getDivision;
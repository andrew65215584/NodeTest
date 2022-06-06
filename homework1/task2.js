import fs from 'fs';
import csv from 'csvtojson';
import { pipeline } from 'stream';

const file = './csv/data.csv';
const resFile = './csv/text.txt';

pipeline(
    csv().fromFile(file),
    fs.createWriteStream(resFile),
    (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
);
import fs from 'fs';
import csv from 'csvtojson';

const file = './csv/data.csv';
const resFile = './csv/text.txt';

const readStream = fs.createReadStream(file);
const writeStream = fs.createWriteStream(resFile);

readStream.pipe(csv()).pipe(writeStream);
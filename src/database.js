import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'hapi-server',
//     password: 'abc123',
//     database: 'buy-and-sell',
// });

// const connection = mysql.createConnection({
//     host: '34.136.196.46',
//     user: 'hapi-server',
//     password: 'abc123',
//     database: 'buy-and-sell',
// });

let connection;

export const db = {
    connect: () => {
        connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        });
    },
    query: (queryString, escapedValues) => {
        return new Promise((res, rej) => {
            connection.query(queryString, escapedValues, (error, results, fields) => {
                if(error) {
                    rej(error);
                }
                res({results, fields});
            })
        });
    },
    end: () => connection.end(),
}
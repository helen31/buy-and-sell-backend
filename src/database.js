import mysql from 'mysql';

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'hapi-server',
//     password: 'abc123',
//     database: 'buy-and-sell',
// });

const connection = mysql.createConnection({
    host: '34.136.196.46',
    user: 'hapi-server',
    password: 'abc123',
    database: 'buy-and-sell',
});

export const db = {
    connect: () => connection.connect(),
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
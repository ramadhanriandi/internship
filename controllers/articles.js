var pg = require('pg');
var pool = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'news',
    password: '',
    port: 5432,
});
pool.connect();

const getNews = (q, sorting, response) => {
    if (q === "") {
        pool.query("SELECT * FROM articles ORDER BY $1;", [sorting], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows);
        })
    }
    else {
        pool.query("SELECT * FROM articles WHERE source_name LIKE $1 ORDER BY $2;", [q, sorting], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows);
        })
    }
}

const getAPI = (request, response) => {
    const myPromise = new Promise(() => {
        pool.query('SELECT * FROM apiKey WHERE key = $1', [request.query.key], (error) => {
            if (error) {
                throw error
            }
            getNews(request.query.q, request.query.sortBy, response);
        })
    })
    myPromise;
}

module.exports = {
    getAPI
}

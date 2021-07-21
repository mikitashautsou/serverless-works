const { Pool } = require('pg')

const pool = new Pool({
    user: 'guthook_web_app',// TODO: MOVE TO ENV VARIABLES
    host: 'atlasguides-db.cfcpyrz50snq.us-east-1.rds.amazonaws.com',// TODO: MOVE TO ENV VARIABLES
    database: 'atlasguides_db',// TODO: MOVE TO ENV VARIABLES
    password: 'lse%lasu23!',// TODO: MOVE TO ENV VARIABLES
    port: 5432,
})


export async function queryDatabase(query, params) {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

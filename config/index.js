require('dotenv').config();

const config = {
    dev :process.env.NODE_ENV !== 'production',
    port:process.env.PORT || 3000,
    cors: process.env.CORS,
    dbUser : process.env.DB_USER,
    dbPassword : process.env.DB_PASSWORD,
    publicRoute : process.env.PUBLIC_ROUTE || '/app',
    publicFiles:process.env.PUBLIC_FILES || '/files',
    dbHost : process.env.DB_HOST,
    dbName : process.env.DB_NAME,
    hostName: process.env.HOST_NAME,
    devUrl: process.env.DB_DEV_URI,
    secret: process.env.SECRET
}



module.exports = { config } 
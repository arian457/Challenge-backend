const db = require('mongoose');

//logs database
db.set('debug', true);
db.Promise = global.Promise;
async function connect(dbDevUrl ) {
    
    const DB_URL = dbDevUrl

    try {
      await db.connect(`${DB_URL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('[db] Conectada con éxito');  
    } catch (error) {
        console.log(error)
        return false;
    }  
};


module.exports = connect ;

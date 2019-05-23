const MySQLi = require('./components/mysqli');
const mysqli = new MySQLi();

async function tst(){
  const result = await mysqli.query('SELECT 1+1 AS number');

  console.log(result[0].number);
}

/**********************************************************************************************/

const config = require('../config');
const mysql = require('mysql');

module.exports = class{

  constructor(){
    const mysqli = mysql.createConnection(config.mysqli);
    mysqli.connect();

    this.connected = mysqli;
  }

  query(sql, params){
    return new Promise((resolve, reject) => {
      this.connected.query(sql, params, (err, result) => err ? reject(err) : resolve(result))
    });
  }

}

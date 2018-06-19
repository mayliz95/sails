/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */
const request = require('request');

module.exports.bootstrap = async function(done) {

  setInterval(
    () => {
      console.log('Enviar Datos');
      const objetoRequest = {
        url: 'http://localhost:1337/Pulsacion',
        form: {
          nombreRaspberry: 'Lolita',
          usuarioIdFK: 1
        }
      };
      request
        .post(objetoRequest,
          (err, respuesta, body) => {
          console.log('err', err);
          console.log('respuesta', respuesta);
          console.log('body', body);
        })
    }
    , 10000);
  return done();
};

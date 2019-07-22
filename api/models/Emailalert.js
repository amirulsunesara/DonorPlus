/**
 * Alert.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  
		emailAddress: {type: 'string', required: true},
		name: {type: 'string', required: true}
  },

};


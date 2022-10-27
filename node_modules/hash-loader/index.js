var path = require('path')
var stringHash = require('string-hash')

module.exports = function() {}

module.exports.pitch = function(remainingRequest) {
	var hash = module.exports.getHash(remainingRequest, this.query)
	
	this.cacheable && this.cacheable()

	return [
		"if(!global._modules) global._modules = {};",
		"global._modules['"+hash+"'] = ",
		"module.exports = ",
		"require(" + JSON.stringify("-!" + remainingRequest) + ");"
	].join('')
}

module.exports.getHash = function(location, root) {
	location = location.replace(/^.*\!/, '')

	if(root) {
		location = path.relative(root, location)
	}

	return stringHash(location.replace(/\\/g, '/'))
}
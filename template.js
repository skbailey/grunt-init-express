'use strict';

exports.description = "Create a basic ExpressJS template on Node";

exports.warnOn = "*";

exports.template = function(grunt, init, done) {
	init.process({}, [
		init.prompt('name'),
		init.prompt('title'),
		init.prompt('description')
	], function(err, props){
		props.keywords = [];

		var files = init.filesToCopy(props);    
		init.copyAndProcess(files, props);

		init.writePackageJSON('package.json', {
	      name: props.name,
	      description: props.description,
	      scripts: {
	      	start: "node app"
	      },
	      dependencies: {
		    "express": "~3.4.8",
		    "static-favicon": "~1.0.0",
		    "morgan": "~1.0.0",
		    "cookie-parser": "~1.0.1",
		    "body-parser": "~1.0.0",
		    "debug": "~0.7.4",
		    "jade": "~1.3.0"
		  }
	    });

	    done();
	});
};
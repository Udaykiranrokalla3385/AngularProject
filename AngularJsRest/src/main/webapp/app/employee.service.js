angular.module('crud app').factory('Employee',Employee);

Employee.$inject=[$resource];

function Employee($resource) {
	var.resourceUrl='api/Employee/:id';
	return $resource(resourceUrl,{},{'update':{
		
		method:'PUT'
		
	} 
	})
}
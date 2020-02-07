angular.module("crudApp").controller("GeneralContoller",GeneralController);
GeneralController.inject=['$scope' , 'Employee'];
function GeneralController($scope,Employee) {
	$scope.employees= Employee.query();
	
	$scope.employee={};
	$scope.buttonText="submit";
	
	$scope.saveEmployee=function(){
		if($scope.employee.id!==undefined){
			Employee.update($scope,employee,function(){
             $scope.employees=Employee.query(); 
             $scope.employee={};
             $scope.buttonText="submit";
			});
		}else
			{
			Employee.save($scope,employee,function(){
	             $scope.employees=Employee.query(); 
	             $scope.employee={};
	             
			}
		}
	}
	
	$scope.updateEmployeeInit=function(employee){
		$scope.buttonText="update";
		 $scope.employee=employee;
		
	}
	$scope.deleteEmployee=function(employee){
		employee.$delete({id:employee.id},function()
				{
			$scope.employee=Employee.query();
				});
	}
	
}
function search(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}



	var phoneApp = new Vue({
		el: '#phoneApp',
		data: {
			employees: [
					{empId: "1", firstName: "John", lastName: "Doe", department: "Technology Services", location: "Arlington, VA", floor: "4th", roomNumber: "4033E", phoneNumber: "123-123-1234", email: "johndoe@test.com", teleworking: ["Tues", "Fri"], teleworkingPhone: "123-123-1234" },

					{empId: "46", firstName: "Jane", lastName: "Doe", department: "BizOps", location: "Tampa, FL", floor: "1st", roomNumber: "1023A", phoneNumber: "987-654-3210", email: "janedoe@test.com", teleworking: "", teleworkingPhone: "N/A" },

					{empId: "8", firstName: "Test", lastName: "Tester", department: "test", location: "test city", floor: "3rd", roomNumber: "4388B", phoneNumber: "634-452-2345", email: "test@test.com", teleworking: ["Mon", "Wed", "Fri"], teleworkingPhone: "945-283-4848" }
			],
			employeeDetails: false,
			employeeDetailsArray: [""]
		},
		methods: {
			showEmployee: function (id) {
				this.employeeDetailsArray = search(this.employees, "empId", id );
				this.employeeDetails = true;
			}
		}
	});
// Employee data
var employees = [
        {
            "employee_id": 1,
            "name": "Sathvik Putta",
            "manager_name": "John Doe",
            "last_project_name": "Project A",
            "present_project_name": "Project B",
            "leaves_taken": 5,
            "salary": 75000,
            "bank_account": {
                "account_holder": "Sathvik Putta",
                "account_type": "savings",
                "balance": 5000
            }
        },
        {
            "employee_id": 2,
            "name": "Tejagni Chichili",
            "manager_name": "Jane Doe",
            "last_project_name": "Project X",
            "present_project_name": "Project Y",
            "leaves_taken": 3,
            "salary": 80000,
            "bank_account": {
                "account_holder": "Tejagni Chichili",
                "account_type": "checking",
                "balance": 7000
            }
        },
        {
            "employee_id": 3,
            "name": "Srija",
            "manager_name": "John Doe",
            "last_project_name": "Project C",
            "present_project_name": "Project D",
            "leaves_taken": 2,
            "salary": 70000,
            "bank_account": {
                "account_holder": "Srija",
                "account_type": "savings",
                "balance": 3000
            }
        },
        {
            "employee_id": 4,
            "name": "Vidya",
            "manager_name": "Jane Doe",
            "last_project_name": "Project M",
            "present_project_name": "Project N",
            "leaves_taken": 4,
            "salary": 85000,
            "bank_account": {
                "account_holder": "Vidya",
                "account_type": "checking",
                "balance": 6000
            }
        },
        {
            "employee_id": 5,
            "name": "Kaushik",
            "manager_name": "John Doe",
            "last_project_name": "Project P",
            "present_project_name": "Project Q",
            "leaves_taken": 1,
            "salary": 72000,
            "bank_account": {
                "account_holder": "Kaushik",
                "account_type": "savings",
                "balance": 4000
            }
        },
        {
            "employee_id": 6,
            "name": "Yathisha",
            "manager_name": "Jane Doe",
            "last_project_name": "Project R",
            "present_project_name": "Project S",
            "leaves_taken": 3,
            "salary": 78000,
            "bank_account": {
                "account_holder": "Yathisha",
                "account_type": "checking",
                "balance": 8000
            }
        },
        {
            "employee_id": 7,
            "name": "Ravi Shankar",
            "manager_name": "John Doe",
            "last_project_name": "Project T",
            "present_project_name": "Project U",
            "leaves_taken": 2,
            "salary": 76000,
            "bank_account": {
                "account_holder": "Ravi Shankar",
                "account_type": "savings",
                "balance": 5500
            }
        },
        {
            "employee_id": 8,
            "name": "Nandini",
            "manager_name": "Jane Doe",
            "last_project_name": "Project V",
            "present_project_name": "Project W",
            "leaves_taken": 4,
            "salary": 82000,
            "bank_account": {
                "account_holder": "Nandini",
                "account_type": "checking",
                "balance": 7500
            }
        },
        {
            "employee_id": 9,
            "name": "Tejasri",
            "manager_name": "John Doe",
            "last_project_name": "Project X",
            "present_project_name": "Project Y",
            "leaves_taken": 1,
            "salary": 74000,
            "bank_account": {
                "account_holder": "Tejasri",
                "account_type": "savings",
                "balance": 4800
            }
        },
        {
            "employee_id": 10,
            "name": "Pooja",
            "manager_name": "Jane Doe",
            "last_project_name": "Project Z",
            "present_project_name": "Project AA",
            "leaves_taken": 2,
            "salary": 79000,
            "bank_account": {
                "account_holder": "Pooja",
                "account_type": "checking",
                "balance": 8200
            }
        },
        {
            "employee_id": 11,
            "name": "Arunitha",
            "manager_name": "John Doe",
            "last_project_name": "Project BB",
            "present_project_name": "Project CC",
            "leaves_taken": 3,
            "salary": 81000,
            "bank_account": {
                "account_holder": "Arunitha",
                "account_type": "savings",
                "balance": 6200
            }
        },
        {
            "employee_id": 12,
            "name": "Vikky",
            "manager_name": "Jane Doe",
            "last_project_name": "Project DD",
            "present_project_name": "Project EE",
            "leaves_taken": 2,
            "salary": 77000,
            "bank_account": {
                "account_holder": "Vikky",
                "account_type": "checking",
                "balance": 5400
            }
        },
        {
            "employee_id": 13,
            "name": "Mukesh",
            "manager_name": "John Doe",
            "last_project_name": "Project FF",
            "present_project_name": "Project GG",
            "leaves_taken": 1,
            "salary": 75000,
            "bank_account": {
                "account_holder": "Mukesh",
                "account_type": "savings",
                "balance": 7300
            }
        },
        {
            "employee_id": 14,
            "name": "Chandra",
            "manager_name": "Jane Doe",
            "last_project_name": "Project HH",
            "present_project_name": "Project II",
            "leaves_taken": 3,
            "salary": 78000,
            "bank_account": {
                "account_holder": "Chandra",
                "account_type": "checking",
                "balance": 6800
            }
        },
        {
            "employee_id": 15,
            "name": "Lochan",
            "manager_name": "John Doe",
            "last_project_name": "Project JJ",
            "present_project_name": "Project KK",
            "leaves_taken": 2,
            "salary": 73000,
            "bank_account": {
                "account_holder": "Lochan",
                "account_type": "checking",
                "balance": 6800
            }
        },
        {   
            "employee_id": 14,
            "name": "Dinesh",
            "manager_name": "Jane Doe",
            "last_project_name": "Project HH",
            "present_project_name": "Project II",
            "leaves_taken": 3,
            "salary": 78000,
            "bank_account": {
                "account_holder": "Chandra",
                "account_type": "checking",
                "balance": 6800
            }
        },
        {   
            "employee_id": 14,
            "name": "Kartick",
            "manager_name": "Jane Doe",
            "last_project_name": "Project HH",
            "present_project_name": "Project II",
            "leaves_taken": 3,
            "salary": 78000,
            "bank_account": {
                "account_holder": "Chandra",
                "account_type": "checking",
                "balance": 6800
            }
        },
        {   
            "employee_id": 14,
            "name": "Geetha",
            "manager_name": "Jane Doe",
            "last_project_name": "Project HH",
            "present_project_name": "Project II",
            "leaves_taken": 3,
            "salary": 78000,
            "bank_account": {
                "account_holder": "Chandra",
                "account_type": "checking",
                "balance": 6800
            }
        },
        {   
            "employee_id": 14,
            "name": "Ramya",
            "manager_name": "Jane Doe",
            "last_project_name": "Project HH",
            "present_project_name": "Project II",
            "leaves_taken": 3,
            "salary": 78000,
            "bank_account": {
                "account_holder": "Chandra",
                "account_type": "checking",
                "balance": 6800
            }
        },
        {   
            "employee_id": 14,
            "name": "Abhi",
            "manager_name": "Jane Doe",
            "last_project_name": "Project HH",
            "present_project_name": "Project II",
            "leaves_taken": 3,
            "salary": 78000,
            "bank_account": {
                "account_holder": "Chandra",
                "account_type": "checking",
                "balance": 6800
            }
        },
        {   
            "employee_id": 14,
            "name": "Sraven",
            "manager_name": "Jane Doe",
            "last_project_name": "Project HH",
            "present_project_name": "Project II",
            "leaves_taken": 3,
            "salary": 78000,
            "bank_account": {
                "account_holder": "Chandra",
                "account_type": "checking",
                "balance": 6800
            }
        },

    
    // Add more employee data here
];

// Function to search for employee details
function searchEmployee(query) {
    var results = [];
    query = query.toLowerCase(); // Convert query to lowercase for case-insensitive search

    // Search through employee data
    employees.forEach(function(employee) {
        if (employee.name.toLowerCase().includes(query)) {
            results.push(employee);
        }
    });

    return results;
}

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get employee search query
    var searchQuery = document.getElementById('employee-search').value;

    // Search for employee details
    var searchResults = searchEmployee(searchQuery);

    // Display search results
    var employeeDetails = document.getElementById('employee-details');
    employeeDetails.innerHTML = '';

    if (searchResults.length === 0) {
        employeeDetails.innerHTML = "<p>No employee found</p>";
    } else {
        searchResults.forEach(function(employee) {
            var employeeInfo = document.createElement('div');
            employeeInfo.innerHTML = "<p>Name: " + employee.name + "</p>" +
                                      "<p>Manager: " + employee.manager_name + "</p>" +
                                      "<p>Last Project: " + employee.last_project_name + "</p>" +
                                      "<p>Present Project: " + employee.present_project_name + "</p>" +
                                      "<p>Leaves Taken: " + employee.leaves_taken + "</p>" +
                                      "<p>Salary: $" + employee.salary + "</p>" +
                                      "<p>Account Holder: " + employee.bank_account.account_holder + "</p>" +
                                      "<p>Account Type: " + employee.bank_account.account_type + "</p>" +
                                      "<p>Balance: $" + employee.bank_account.balance + "</p>";
            employeeDetails.appendChild(employeeInfo);
        });
    }
});
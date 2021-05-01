const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const getTemplate = require("./lib/htmlGenerator.js");
const inquirer = require("inquirer");
const fs = require('fs');

 
       //Manager prompted questions
        const employees = [];

         const managerPrompt =
     [
            { 
                type: "input",
                message: ` What is the Manager's name?`,
                name: "name",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log('Please enter a name.');
                        return false;
                    }
                 }
            },

           {
                    type: "input",
                    message:  `What is the Manager's employee ID?`,
                    name: "id",
                    when: ({role}) => role != "Exit",
                    validate: id => {
                        if (id) {
                            return true;
                        } else {
                            console.log('Please enter an employee ID.');
                            return false;
                        }
                    }
            },

          {
                    type: "input",
                    message: `What is the Manager's email?`,
                    name: "email",
                    validate: email => {
                        if (email) {
                            return true;
                        } else {
                            console.log('Please enter an email.');
                            return false;
                        }
                    }
           },

           {
                    type: "input",
                    message: `What is the Manager's office number?`,
                    name: "officeN",
                    validate: officeN => {
                        if (officeN) {
                            return true;
                        } else {
                            console.log('Please enter an Office Number.');
                            return false;
                        }
                    }
           },

    ]

    //Prompted questions to get Engineer and Intern informations
        const employeePrompt = [
            {
                type: "list",
                message: "Enter your role",
                name: "role",
                choices: ["Engineer", "Intern", "Exit"],
            },
            {
                type: "input",
                message: ({role}) => `Creating a new ${role}?. What is the ${role}'s name?`,
                name: "name",
                when: ({role}) => role != "Exit",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log('Please enter a name.');
                        return false;
                    }
                }
            },
            {
                type: "input",
                message:  ({role}) => `What is the ${role}'s employee ID?`,
                name: "id",
                when: ({role}) => role != "Exit",
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        console.log('Please enter an employee ID.');
                        return false;
                    }
                }
            },
            {
                type: "input",
                message:  ({role}) =>  `What is the ${role}'s email?`,
                name: "email",
                when: (data) => data.role != "Exit",
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log('Please enter an email.');
                        return false;
                    }
                }
            },
            
            {
                type: "input",
                message:  ({role}) => `What is the ${role}'s github?`,
                name: "github",
                when: ({role}) => role === "Engineer",
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        console.log('Please enter a github username.');
                        return false;
                    }
                }

            },
            {
                type: "input",
                message:  ({role}) => `What is the ${role}'s school?`,
                name: "school",
                when: ({role}) => role === "Intern",
                validate: school => {
                    if (school) {
                        return true;
                    } else {
                        console.log('Please enter a school.');
                        return false;
                    }
                }
            }
        ]
    
  //Create a Manager 
    function createManager ()
     {
        inquirer.prompt(managerPrompt).then(data =>
            {
                employees.push(new Manager(data.name, data.id, data.email, data.officeN));
                createEmployee(); 
                console.log(data.officeN)
            })
              
    }

    //Creates Engineer  and Intern 

    function createEmployee()
     {
        inquirer.prompt(employeePrompt).then(data => {
            if(data.role==="Exit")
             {
               
                    renderHTML();
                    console.log("Team Profile Generated");
            }
            if(data.role==="Manager")
            {
                    employees.push(new Manager(data.name, data.id, data.email, data.officeN));
                    createEmployee();
            }
            if(data.role==="Engineer")
             {
                    employees.push(new Engineer(data.name, data.id, data.email, data.github));
                    createEmployee();
            }
            if(data.role==="Intern")
            {
                    employees.push(new Intern(data.name, data.id, data.email, data.school));
                    createEmployee();
                    
            }
           
        });
    }
  // Created the the html files using the predifined template
    function renderHTML()
     {
        

            fs.writeFile('result/index.html', getTemplate(renderScript()), (err) => {
               
                if (err) throw err;
               
                console.log('HTML generated!');
            });
        

    }


    //render the script that generatess the card cinatining the Employee info 

    function renderScript() 
    {

        let scripts=``;
        for (let i=0 ; i < employees.length; i++)
         {
            var field = "";
            var iconClass = "";

            if(employees[i].getRole()==="Engineer")

            {  field = `${employees[i].getGithub()}`;
              iconClass = `glasses`;
              let employeeScript= `
                    <script>
                    var col = $('<div class="col-4">')
                    var card = $('<div class="card mx-auto border-info mb-3" style="max-width: 18rem;">');
                    var header1 = $('<div class="card-header bg-primary text-white h4">');
                    header1.text("${employees[i].getName()}");
                    var header2 = $('<a class="card-header text-white  bg-primary">');
                    var icon = $('<i class="fas fa-${iconClass}">');
                    header2.text(" ${employees[i].getRole()}");
                    header2.prepend(icon);
                    var cardBody = $('<div class="card-body text-info">');
                    var cardTitle = $('<h5 class="card-title">');
                    var cardText = $('<p class="list-group-item">');
                    cardText.text("ID: ${employees[i].getId()}");
                    var cardText2 = $('<div class="list-group-item">Email : <a href="mailto:${employees[i].getEmail()}">${employees[i].getEmail()}</a></div>');
                    var cardText3 = $('<div class="list-group-item"> Github Username : <a href="https://github.com/${field}" target="_blank">${field}</a></div>');
                    
                    
                    cardBody.append(cardTitle);
                    cardBody.append(cardText);
                    cardBody.append(cardText2);
                    cardBody.append(cardText3);
            
                    card.append(header1);
                    card.append(header2);
                    card.append(cardBody);
                    col.append(card);
                    $("#cards").append(col);    
                    </script>        
                    `;
      
                scripts=scripts + employeeScript  ;
             }

                if(employees[i].getRole()==="Manager")
                        {   
                             field = `Office #: ${employees[i].getOfficeNumber()}`;
                            iconClass = `mug-hot`;
                         var employeeScript= `
                            <script>
                            var col = $('<div class="col-4">')
                            var card = $('<div class="card mx-auto border-info mb-3" style="max-width: 18rem;">');
                            var header1 = $('<div class="card-header bg-primary text-white h4">');
                            header1.text("${employees[i].getName()}");
                            var header2 = $('<a class="card-header text-white  bg-primary">');
                            var icon = $('<i class="fas fa-${iconClass}">');
                            header2.text(" ${employees[i].getRole()}");
                            header2.prepend(icon);
                            var cardBody = $('<div class="card-body text-info">');
                            var cardTitle = $('<h5 class="card-title">');
                            var cardText = $('<p class="list-group-item">');
                            cardText.text("ID: ${employees[i].getId()}");
                            var cardText2 = $('<div class="list-group-item">Email : <a href="mailto:${employees[i].getEmail()}">${employees[i].getEmail()}</a></div>');
                            var cardText3 = $('<div class="list-group-item">');
                            cardText3.text("${field}");
                                        

                            cardBody.append(cardTitle);
                            cardBody.append(cardText);
                            cardBody.append(cardText2);
                            cardBody.append(cardText3);
                    
                            card.append(header1);
                            card.append(header2);
                            card.append(cardBody);
                            col.append(card);
                            $("#cards").append(col);    
                            </script>        
                            `;
                        
                        scripts=scripts + employeeScript  
                        }
                
                if(employees[i].getRole()==="Intern")
                        {  field = `School: ${employees[i].getSchool()}`;
                            iconClass = `graduation-cap`;
                        
                    var employeeScript= `
                    <script>
                    var col = $('<div class="col-4">')
                    var card = $('<div class="card mx-auto border-info mb-3" style="max-width: 18rem;">');
                    var header1 = $('<div class="card-header bg-primary text-white h4">');
                    header1.text("${employees[i].getName()}");
                    var header2 = $('<a class="card-header text-white  bg-primary">');
                    var icon = $('<i class="fas fa-${iconClass}">');
                    header2.text(" ${employees[i].getRole()}");
                    header2.prepend(icon);
                    var cardBody = $('<div class="card-body text-info">');
                    var cardTitle = $('<h5 class="card-title">');
                    var cardText = $('<p class="list-group-item">');
                    cardText.text("ID: ${employees[i].getId()}");
                    var cardText2 = $('<div class="list-group-item">Email : <a href="mailto:${employees[i].getEmail()}">${employees[i].getEmail()}</a></div>');
                    var cardText3 = $('<div class="list-group-item">');
                    cardText3.text("${field}");
                                

                    cardBody.append(cardTitle);
                    cardBody.append(cardText);
                    cardBody.append(cardText2);
                    cardBody.append(cardText3);
            
                    card.append(header1);
                    card.append(header2);
                    card.append(cardBody);
                    col.append(card);
                    $("#cards").append(col);    
                    </script>        
                    `;
                
                scripts=scripts + employeeScript  
                        
                }
            } 
        return scripts;
    }
    
  
// Initialisation of the application
  const init = () => {
     
    createManager()

  }
init();



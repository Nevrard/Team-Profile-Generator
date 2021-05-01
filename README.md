# Team-Profile-Generator

# Table of Content
*[General information](#general-information)

*[Specifications](#specifications)

*[Tests](#tests)

*[Screenshots](#screenshots)

*[Deployment](#deployment)


## General information

I have built this application that genartes automatically the Team profile based on the inputs from the User on a terminal.
Team members are categorized in 3 types:
 - Manager
 - Engineer
 - Intern

As team must have a manager, the user has to create a Manager profile fisrt , then he can add Engineer or intenrs as many as he wish.
User will be prompted with predefined questions, by answering them ,the apllication will capture all the information needed to build Team member profile.

After providing the information of all the team member informations, User has an oprion to Exit the series of Questions and automatically the appliaction will generate the html files that can be viewed on a browser with a well built Team profile.


## Specifications

The application is Built using following tools:
-   Node.js
-   Javascript
-   inquirer
-   fs
-   Jtest
-   OOP concept

I  have Used classes to defines differents Objects that are used in the appliactions.

I have organized my folders as below:
-   Folder "lib" that contains all the js files
-   Folder "result" That contains the generated html file
-   Folder "test" thet contains the differents test js    files 
-   Root  Folder that contains configurations files and  the index.js where the application starts when executed 

To run the apllication ,type "node index.js" in your terminal
then respond to the series of questions prompted


## Tests
 
 I have performed Units Tets on all the classes that are used in the applicatons.
 The Tests defined were all successful.
 Here is the command to run the Test : 'npm run test'

## Screenshots

-Terminal after answering all the Questions:

![image](https://user-images.githubusercontent.com/77184762/116793182-2b66bd80-aa93-11eb-96a9-c30d07e96f56.png)

-Html page Generated,opened in Browser

![image](https://user-images.githubusercontent.com/77184762/116793130-cf9c3480-aa92-11eb-96ac-8524e54ec878.png)


Link to the html file generated: https://github.com/Nevrard/Team-Profile-Generator/blob/854edf2c09e7c3eed0d6baadc21c108e5ce9ae31/result/index.html

## Deployment

Here is the Video Demo of the execution of the application:

 Youtube :[Video Demo](https://youtu.be/K73ewNIAFtE)

 GitHub: https://github.com/Nevrard/Team-Profile-Generator/blob/854edf2c09e7c3eed0d6baadc21c108e5ce9ae31/result/Team%20Profile%20generator.webm
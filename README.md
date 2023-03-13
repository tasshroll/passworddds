# passworddds
This application allows a user to generate a random password based on criteria they've selected.

# passworddds Webpage
Link to Deployed Application;
https://tasshroll.github.io/passworddds/Develop/

Screenshot of application creating a password of length 90 characters with only lowercase letters.
!(Assets/Password-screenshot.png)
or
https://github.com/tasshroll/passworddds/issues/1#issue-1621717123
!(https://github.com/tasshroll/passworddds/issues/1#issue-1621717123)


## Description
This Application will generate a random password based on user criterria selected.
## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```## User Story


- What was your motivation? 
To use character strings to build a valid character set based on user input.
To use an array to build a new password

- Why did you build this project? 
This project allows user input to create output in a text area

- What did you learn?
I learned to analyze the mockup and write pseudo code to generate the password. I created several inner functions without my generate-password function to encapsulate functionality. I learned about global and local variables and event listeners. I utilized the prompt attribute to get user data.

## Installation 
N/A

## Usage
Click the main Generate Password button and answer the prompts.

## Credits
N/A
No collaborators.

## License
Please refer to the LICENSE in the repo.

## Badges
N/A

## Features
N/A

## How to Contribute
N/A

## Tests
N/A%     
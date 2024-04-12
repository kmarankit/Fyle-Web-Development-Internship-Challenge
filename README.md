

# Fyle Web Development Internship Challenge

 ### Challenge: 
    Tax Calculator Web Page

### Description:
 Welcome to the Fyle Web Development Internship Challenge! In this project, I've developed a web page for a Tax Calculator using HTML, CSS, and JavaScript. 

- The challenge interface was straightforward, so I added some CSS to enhance its visual appeal.
The web page is deployed:-
https://ankit-kumar-fyle.netlify.app/

## Authors

#### [Ankit kumar](https://github.com/kmarankit)

An aspiring full-stack developer aged 23, currently pursuing a Master of Computer Application. Passionate about leveraging technology to create innovative solutions and enhance user experiences.
## Screenshots

####   Here the all test case passing's screenshots

1. The rounded question mark serves as a Popover, providing additional details about the corresponding input field.

![Screenshot 1](https://github.com/kmarankit/Fyle-Web-Development-Internship-Challenge/blob/main/Test%20Screenshots/Screenshot%201.png?raw=true)

![Screenshot 1.1](https://github.com/kmarankit/Fyle-Web-Development-Internship-Challenge/blob/main/Test%20Screenshots/Screenshot%201.1.png?raw=true)

![Screenshot 1.2](https://github.com/kmarankit/Fyle-Web-Development-Internship-Challenge/blob/main/Test%20Screenshots/Screenshot%201.2.png?raw=true)

2. If the user attempts to submit the form without filling in the inputs, the placeholders will turn red. 

![Screenshot 2](https://github.com/kmarankit/Fyle-Web-Development-Internship-Challenge/blob/main/Test%20Screenshots/Screenshot%202.png?raw=true)

3. The user has no restrictions on entering inputs. However, if the user enters non-numeric characters, a red exclamation Popover will appear. Hovering over it will display the error in a tooltip.

![Screenshot 3](https://github.com/kmarankit/Fyle-Web-Development-Internship-Challenge/blob/main/Test%20Screenshots/Screenshot%203.png?raw=true)

4. The age dropdown field should have 3 values 
    - <40
    - ≥ 40 & < 60
    - ≥ 60
  The age dropdown field should offer three distinct values for better user understanding and experience:

* "Below 40"
* "Between 40 to 60"
* "Above 60"

![Screenshot 4](https://github.com/kmarankit/Fyle-Web-Development-Internship-Challenge/blob/main/Test%20Screenshots/Screenshot%204.png?raw=true)

5. After filling the input fields and selecting the age group, the modal will open.
- (Ex:- If the Overall income after the deduction is less then 800000 then it will print simply "Your Over all income will be 140000.00 after the tax deduction.")
- Ex - if Gross Annual Income + Extra Income - Deductions =  6 Lakhs, NO TAX.

![Screenshot 5](https://github.com/kmarankit/Fyle-Web-Development-Internship-Challenge/blob/main/Test%20Screenshots/Screenshot%205.1.png?raw=true)

6. Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
    - 30% for people with age < 40
    - 40% for people with age ≥ 40 but < 60
    - 10% for people with age ≥ 60
     Example
      - Age = 34, Income = 40 Lakhs, no deductions, tax = .3 * (40 - 8) = .3 * 32 = 9.6 Lakhs
![Screenshot 6](https://github.com/kmarankit/Fyle-Web-Development-Internship-Challenge/blob/main/Test%20Screenshots/Screenshot%206.png?raw=true)
* For better user experience created a table
![Screenshot 6.1](https://github.com/kmarankit/Fyle-Web-Development-Internship-Challenge/blob/main/Test%20Screenshots/Screenshot%206.1.png?raw=true)

![Screenshot 6.2](https://github.com/kmarankit/Fyle-Web-Development-Internship-Challenge/blob/main/Test%20Screenshots/Screenshot%206.2.png?raw=true)

7. If click the close button the model will be close.
![Screenshot 7](https://github.com/kmarankit/Fyle-Web-Development-Internship-Challenge/blob/main/Test%20Screenshots/Screenshot%207.png?raw=true)



## Deployment

I deployed this project using Netlify, a free web hosting service that offers hosting with a subdomain.

  https://ankit-kumar-fyle.netlify.app/


## Documentation

The challenge involves implementing the following features:

- Tax calculation based on specific criteria:
  - No tax for overall income (after deductions) under 8 Lakhs.
  - Taxation of income over 8 Lakhs based on age:
    - 30% for individuals under 40 years old.
    - 40% for individuals aged 40 to 59.
    - 10% for individuals aged 60 and above.

- Handling of incorrect user inputs:
  - Highlighting of error icons and tooltips for incorrect values.
  - Error icons should appear beside input fields when necessary.

- Age selection dropdown:
  - Options for age categories: <40, ≥ 40 & < 60, and ≥ 60.
  - Display of error icon if age field is left blank before submission.

- User interface requirements:
  - Error icons should be hidden by default.
  - Submission triggers a modal displaying final calculated values.

### Notes:
This project is completed using HTML, CSS, and JavaScript exclusively. Bootstrap and jQuery are allowed, while other libraries or design systems are not permitted.






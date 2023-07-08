

# Project3-Job-Portal
![](/front-end/src/logo.jpeg)


## Table of contents
1. [Introduction](#Introduction)
    * [1.2 Purpose](#Purpose)
2. [Technologies](#Technologies)
3. [Design](#Design)
    * [3.1 Wireframe](#Wireframe)
    * [3.2 UserStories](#UserStories)
    * [3.3 ERD](#ERD)
4. [Planning](#Planning)
5. [Development](#Development)
    * [5.1 Definition](#Definition)
    * [5.2 Functions](#Functions)
    * [5.3 Screenshots](#Screenshots)
6. [Future work and Unsolved problems](#Futurework)
7. [Resources](#Resources)


## Introduction
<hr>

### Description
##### This portal is a free service intended to help job seekers to get their information and CVs in the market, in order for prospective employers to know about their availability for employment and post some jobs.
<br>

### Purpose
##### Build a full-stack application using NodeJS, Express.js and React.
<br>

## Technologies
<hr>

##### 1. ![Nodejs](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

##### 2. ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

##### 2. ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

##### 4. ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
##### 5.![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 

##### 6. <img src="https://blog.openreplay.com/images/why-should-you-use-material-ui/images/hero.png" width="100px" height="40px" >

##### 7. ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)


## Design
<hr>

### Wireframe
##### A basic design for Jamiyah, it contains account authorization, a process of creating updating and deleting Jamiyah's. viewing and updating user profile. furthermore, account balance can be viewd.

![Wireframe](../Project3-Job-Portal/public/imgs/wireframe.png)
<br>
<br>

### UserStories
##### A user story is a general explanation of functionalities written from the perspective of the user. It moves through differnt process till it reach to the testing and the deployment part. 

![userstories](../Project3-Job-Portal/public/imgs/userstories.png)
<br>

### ERD
##### A user story is a general explanation of functionalities written from the perspective of the user. It moves through differnt process till it reach to the testing and the deployment part. 

![userstories](../Project3-Job-Portal/public/imgs/ERD.png)
<br>

### Planning
##### The planning part started with structure the components needed for the views and controllers file. Then, a list of css properties where applied for each of the elements declered in the views and controllers file. Finally, it ended with the logical part, which is applying the functions on the elements declered. 
<br>

## Development
<hr>

### Definition
##### A graph of definitions where given to the user to declare the idea, which are basicly the main functions of the app. The developer has to logicly declare and apply them.
##### 1. The user signup then signin to access jamyia. 
##### 2. The user must create, view, update or delete jamaya if it not started.  
##### 3. The user must view, update, or delete the account balance. 
##### 4. The user must view or update his profile. 
##### 5. The user must logout from the system. 
<br>

### Functions
##### In the controller file, a list of functions where executed, which are:
##### 1. Signup, Signin, signout, and forget password. 
##### 2. Create, update, and delete Jamiyah.
##### 3. View jamiyah details.
##### 4. View and edit user profile
##### 5. View and edit user account balance.

##### Some of functions where needed to apply a problem-solving strategy like: 
##### 1. Image uplaod function:
```sh
 const multer = require('multer');
 var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
  })
  let upload = multer({ storage: storage })
```
##### 2. Viewing User history:
```sh
const updateEndedJamiyahs = async function () {
  const jamiyahs = await Jamiyah.find({ isEnded: false });
  const now = new Date();
  for (const jamiyah of jamiyahs) {
    if (jamiyah.endDate <= now) {
      jamiyah.isEnded = true;
      await History.create({
        jamiyah: jamiyah._id,
        endDate: jamiyah.endDate,
      });
      await jamiyah.save();
    }
  }
};
```

##### 3. Show participants turn in each months:
```sh
<ul class="timeline" name="participants">
    <% jamiyah.participants.forEach(a => {%>
        <% month++ %>
        <% users.forEach(b => {%>
        <% if(a.equals(b._id)) { %>
            <% if(today+1 === month) { %>
        <li class="selected" value="<%= b._id %>" data-year=<%=month.toString() %>  data-text="<%= b.name %>"></li>
        <%} else{%>
        <li value="<%= b._id %>" data-year=<%=month.toString() %>  data-text="<%= b.name %>"></li>
    <%}}}) %>
        <%}) %>
</ul>
```
##### 4. To take user ID from http query: 
```sh
const jamiyah = await Jamiyah.findById(req.query.id);
```

##### 5. Unique Random generator for a unique security code: 
```sh
exports.signUpPage = (req, res) => {
  const securityCode = generateRandomSecurityCode();
  res.render(“auth/signup”, {
    securityCode: securityCode,
  });
};
```
### Screenshots
## Futurework and Unsolved problems
<hr>

##### 1. Implement A Payment Gateway, and automatic payments.   
##### 2. Alerts to inform when actions succeed or fail.
##### 3. Add a search bar. 
##### 4. Handling Edge Cases on things like duration or amount inputs. 
##### 5. Make adding participants with an invite to give the choice of accepting or reclining the Jamiyah.

##### 6. Move the jamyiah from current to history if it ended. 
<br>


## Resources
#### 1.[Wireframes](https://www.figma.com/file/ryh9pajPnMzCKzE1cepPZS/Untitled?type=design&node-id=0%3A1&mode=design&t=z7Qk6oRSnDuLQJ7b-1)

#### 2.[User Stories](https://trello.com/invite/b/HPEum51X/ATTIf96895f9f13ff28564e4acef85894186F1CB6DC3/project3job-portal)

#### 3.[Deployed Application](https://trello.com/invite/b/T3Wmjld3/ATTI56029954509c17209bff882e97906a644B96B25A/project02)



# Project3-Job-Portal
![]


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

##### 7.![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) 
##### 8. ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)


## Design
<hr>

### Wireframe
##### A basic design for Portal jobs " I Job" , containing the process of creating, updating and deleting jobs. View and update user profile seeker and provider.

![Wireframe](../Project3-Job-Portal/front-end/src/wireframe.png)
<br>
<br>

### UserStories
##### A user story is a general explanation of functionalities written from the perspective of the user. It moves through differnt process till it reach to the testing and the deployment part. 

![userstories](../Project3-Job-Portal/front-end/src/userstories.png)
<br>

### ERD
##### An Entity Relationship Digram shows main entities that used inside the portal, fields realted to each one of them and the relationship between these entities. 

![userstories](../Project3-Job-Portal/front-end/src/erd.png)
<br>

### Planning
##### The planning part started with structure the components needed for the views and controllers file. Then,each of the functionalites where tested in Postman. Finally, it ended with the frontend part where a list of components where declared and applying http request on their parts. 
<br>

## Development
<hr>

### Definition
##### A graph of definitions where given to the user to declare the idea, which are basicly the main functions of the app. The developer has to logicly declare and apply them.
##### 1. The seeker and provider user signup then signin . 
##### 2. The user must create, view, update or delete there information and post .  
##### 3. The user must view or update his profile. 
##### 4. The user must logout from the system. 
<br>

### Functions
##### In the controller file, a list of functions where executed, which are:
##### 1. Signup, Signin, signout, and forget password. 
##### 2. Create, update, and delete Post.
##### 3. View the Provider details.
##### 4. View and edit user profile

##### Some of functions where needed to apply a problem-solving strategy like: 

##### 1. Applying icons using fontawsome package

```sh
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faSearch} />
```

##### 2. Using Proxy to change path of axios to Backend

```sh
"proxy": "http://localhost:4006/>
```

##### 3. Search function using 'Filter'
```sh
const [inputValue, setInputValue] = useState('');

function handleSearch() {
        if (inputValue.length > 0) {
            const filtered_posts = posts.filter((p) => {
            return p.jobTitle.match(inputValue);
        });
        setPosts(filtered_posts)
        console.log(filtered_posts);
        }
        //props.onSearch(inputValue);
      }
```

```sh
"proxy": "http://localhost:4006/>
```

##### 4. uplaod file function using multer:
```sh
const multer  = require('multer')
//let upload = multer({ dest: 'uploads/' })

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

upload = multer({ storage: storage })
```


### Screenshots
![Wireframe](../Project3-Job-Portal/front-end/src/screenshots.png)
<br>
## Futurework and Unsolved problems
<hr>

##### 1. upload an image into the portal when I signup.  
##### 2. view notifications of any status update.
##### 3. filter job posts.

## Resources
#### 1.[Wireframes](https://www.figma.com/file/ryh9pajPnMzCKzE1cepPZS/Untitled?type=design&node-id=0-1&mode=design&t=QhAj3aga6UIG4zNj-0)

#### 2.[User Stories](https://trello.com/b/HPEum51X/project3job-portal)

#### 3.[ERD](https://app.diagrams.net/#G12ohiY2fvvATiot3XUlsMdkCZLv68dPjF)

#### 3.[Deployed Application](https://trello.com/invite/b/T3Wmjld3/ATTI56029954509c17209bff882e97906a644B96B25A/project02)

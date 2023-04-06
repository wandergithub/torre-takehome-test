<a name="readme-top"></a>

<!--
HOW TO USE:
This is an example of how you may give instructions on setting up your project locally.

Modify this file to match your project and remove sections that don't apply.

REQUIRED SECTIONS:
- Table of Contents
- About the Project
  - Built With
  - Live Demo
- Getting Started
- Authors
- Future Features
- Contributing
- Show your support
- Acknowledgements
- License

OPTIONAL SECTIONS:
- FAQ

After you're finished please remove all the comments and instructions!
-->

<div align="center">

  <h1><b>Torre technical testing</b></h1>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)



<!-- PROJECT DESCRIPTION -->

# 📖 Torre take home project - Front-End <a name="about-project"></a>

Built a page that lists the skills of any given user existing in the database. It allows one to click on any skill and show details related to that user, shows a list of related experiences from that user, and a list of people who have the same skill.

![image](https://github.com/wandergithub/torre-takehome-backend/blob/dev/ERD.jpeg?raw=true)

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

Built mainly with React.js for the front-end and Ruby on Rails in the [back-end](https://github.com/wandergithub/torre-takehome-backend).

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://reactjs.org/">Bootstrap</a></li>
    <li><a href="https://reactjs.org/">Netlify</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Ruby on Rails</a></li>
    <li><a href="https://expressjs.com/">Render</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **List skills of any given user**
- **Show details about user**
- **Show work experience of user**
- **List people with same skills**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://torre-wander.netlify.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>


To get a local copy up and running, follow these steps.

### Setup

Clone this repository to your desired folder:


Example commands:

```sh
  cd my-folder
  git clone git@github.com:myaccount/my-project.git
```


### Install

Install this project with:


Example command:

```sh
  cd my-project
  npm install
```


### Usage

To run the project, execute the following command:


Example command:

```sh
  npm run start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

*Note*: To have this project working local you would have to clone the back-end and run the server with the rails API.


## Deliverables

- A link for us to test what you built.

  ## 🚀 Live Demo <a name="live-demo"></a>

  - [Live Demo Link](https://torre-wander.netlify.app/)
  - [Back-End deployment](https://torre-c2xf.onrender.com)

- A way for us to review your code through a control version system (for example, GitHub), where we can check your incremental progress. 
   - [Github repo front-end](https://github.com/wandergithub/torre-takehome-test)
   - [Github repo back-end](https://github.com/wandergithub/torre-takehome-backend)

- A paragraph answering this question: What else could you have done or improved if you had more time?
  - With more time I would:
    - Implement a better solution for users with the same skill feature. A solution with less code is possible with a better-elaborated query(join table) I can avoid using the less efficient loops I used.
    - Work on a good detailed design and styling. (Details like overflow, page scrolling, and sizes are some improvements). The details window/modal is something I would do differently.
    - Change brochure-like elements layout.


Is- Anything else you’d like to share with us?
 
An important note: *Keep in mind the back-end is with a free deployment service. It may take 1-2 minutes to respond the first time you use the app*

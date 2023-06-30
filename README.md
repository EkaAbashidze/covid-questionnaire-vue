## About Covid Questionnaire


The Covid Questionnaire Vue is an application created with Vue.js that aims to collect information from new Redberry employees regarding their thoughts and feelings about the Covid situation. The questionnaire helps the company understand how they can improve and support their internal Covid policy.

#
### Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)

#
### Features


 **Questionnaire Pages:** The application consists of multiple pages that guide the user through the Covid questionnaire. Each page focuses on specific aspects such as personal information, Covid status, vaccination status, and desired Covid policy.

- **Form Validation:** The questionnaire implements form validation using Vee-Validate to ensure that the user provides valid and complete information. Validation rules are applied to each required field to ensure data integrity.

- **State Management:** Vuex is used for state management, allowing the application to store and manage the user's responses throughout the questionnaire. This enables easy access to the data across multiple components.

- **localStorage:** Application utilizes the localStorage object to store the user's responses temporarily. This ensures that the user's progress is saved even in the event of accidental page reloads or browser closures.

- **Sending Data to Rest API:** The questionnaire includes the functionality to send the user's responses to an API endpoint. Upon submission of the questionnaire, the data is securely transmitted to the API for further processing and analysis.

- **Tailwind CSS:** The application utilizes Tailwind CSS for styling, providing a utility-first approach for rapid development.

#
### Prerequisites

Before getting started, make sure you have the following dependencies installed:

- **[Node.js](https://nodejs.org/en)**
- **[NPM](https://www.npmjs.com/)**
- **[Git](https://getcomposer.org/)**


#
## Tech Stack

- **[Vue.js](https://vuejs.org/)**
- **[Vuex](https://vuex.vuejs.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[Vee-Validate](https://vee-validate.logaretm.com/v3/)**


#
### Getting Started

1\. Clone the Covid Questionnaire repository from GitHub:
```sh
git clone https://github.com/RedberryInternship/ekaterine-abashidze-covid-questionaire.git
```

2\. Navigate to the project directory and install the dependencies using npm:
```sh
npm install
```

3\. Start the development server using Vite:
```sh
npm run dev
```

With this all, Covid Questionnaire Vue application is ready to be used.

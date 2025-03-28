# **CraftCV**

**CraftCV** is a modern, responsive resume builder application built with **React**. This project was developed by **Pushpender Singh** as a learning tool and proof-of-concept. It allows users to input their personal details, work experience, education, skills, projects, and more, and then choose from a selection of resume templates to generate a downloadable resume.

## **Table of Contents**

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## **Features**

- **User-Friendly Interface:** Clean and intuitive UI built with **React** and **Tailwind CSS**.
- **Step-by-Step Resume Builder:** Guided process where users fill in personal details, work experience, education, skills, projects, and courses.
- **Template Selection:** Choose from multiple resume themes (**Classic**, **Creative**, **Professional**, **Minimalist**, **Modern**) with theme-specific color options.
- **Responsive Design:** Mobile-friendly layout with smooth animations and transitions.
- **State Management:** Uses **Redux** and **redux-persist** for managing and storing user data.
- **Form Management:** Robust form handling with **react-hook-form**.
- **Error Handling:** Includes a **404 page** for invalid routes and proper error handling during data entry.
- **Third-Party Integrations:** Uses **react-icons**, **react-spinners**, and more to enhance the user experience.
- **Tailwind CSS:** Styling and design is managed using **Tailwind CSS** with **PostCSS** integration.

## **Technologies Used**

- **React** – Front-end UI library  
- **React Router DOM** – Client-side routing  
- **Redux & Redux Persist** – State management and persistent storage  
- **React Hook Form** – Form management  
- **Tailwind CSS & PostCSS** – Styling and responsive design  
- **React Icons** – Icon library for UI components  
- **React Spinners** – Loader animations  
- **Axios** – For API requests (if needed)  
- **Other Packages:** @reduxjs/toolkit, testing libraries, etc.

## **Installation**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Pushpender015/CraftCV.git
   cd CraftCV
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm start
   ```

   The app will run on **[http://localhost:3000](http://localhost:3000)**.

## **Usage**

1. **Home Page:**  
   Start by viewing the homepage which offers a brief overview and sample templates.

2. **Resume Building:**  
   Click on **"Start"** to fill out your personal details, work experience, education, and other sections.

3. **Template Selection:**  
   After entering your information, select a resume template and customize the theme color.

4. **Download Resume:**  
   Once you have finalized the template, proceed to download your resume.

## **Project Structure**

```
CraftCV/
├── public/
├── src/
│   ├── Components/
│   │   ├── About.js
│   │   ├── Header.js
│   │   ├── Home.js
│   │   ├── Input.js
│   │   ├── Pagenotfount404.js
│   │   └── Selecttheme.js
│   ├── Redux/
│   │   ├── Reducers/
│   │   │   ├── userReducer.js
│   │   │   └── themeReducer.js
│   │   └── Store.js
│   ├── Themes/
│   │   ├── Classic.js
│   │   ├── Creative.js
│   │   ├── Modern.js
│   │   ├── Minimalist.js
│   │   └── Professional.js
│   ├── utils/
│   │   └── database.js
│   ├── assets/
│   │   └── [Template images and other assets]
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── app.css
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

## **Contributing**

Contributions are welcome! If you’d like to contribute, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch** for your feature or bugfix.
3. **Commit your changes** with clear messages.
4. **Push your changes** and submit a pull request.

Please ensure your code follows the existing style and conventions.

## **Contact**

For any inquiries or feedback, please contact:

- **Name:** Pushpender Singh  
- **GitHub:** [Pushpender015](https://github.com/Pushpender015)

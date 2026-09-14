# Little Lemon Restaurant - Table Booking Web App

A front-end web application built for the Little Lemon Mediterranean restaurant in Chicago. This application allows customers to explore weekly specials, view customer reviews, learn about the bistro, and complete an interactive table reservation flow.

This project serves as the final Capstone submission for the Meta Front-End Developer Professional Certificate course.

## Features
- **Responsive Navigation**: Adaptive header and footer navigation built using `react-router-dom`.
- **Homepage Highlights**: Showcase of weekly specials with item descriptions, prices, and imagery.
- **Table Reservations**: Full booking user journey with dynamic time selection.
- **Form State & Validation**: State managed via `useState` and `useReducer` with integrated HTML5 and React state-driven input validation.
- **Course API Integration**: Connected with `fetchAPI` for available slot fetching and `submitAPI` for table reservation processing.
- **Accessibility**: Built with semantic HTML5 elements (`header`, `nav`, `main`, `section`, `footer`), explicit input labeling (`htmlFor`), keyboard navigation support, and key `aria-*` attributes.
- **Unit Testing**: Suite of unit tests built with Jest and React Testing Library covering reducer functions, validation attributes, and form submissions.

## Technologies
- **React** (v18+)
- **JavaScript** (ES6+)
- **React Router DOM** (v6+)
- **HTML5 & CSS3**
- **Jest & React Testing Library**

## Installation & Setup

1. Install project dependencies:
   ```bash
   npm install
# Amazon Best Sellers Books Project

A React-based web application that showcases Amazon's Best Selling Books. View the live project [here](https://react-practice-amazon-best-sellers.netlify.app/).

## Project Overview

This project was created as a practice exercise to demonstrate fundamental React concepts and component-based architecture. It displays a curated list of best-selling books from Amazon, complete with book covers, titles, authors, and pricing information.

## Features

- Responsive grid layout of best-selling books
- Book card components displaying:
  - Book cover images
  - Book titles
- Clean and modern user interface
- Mobile-friendly design

## Technologies Used

- React.js
- HTML5
- CSS3
- Netlify (for deployment)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd amazon-best-sellers
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open your browser and visit `http://localhost:3000`

## Project Structure

```
amazon-best-sellers/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Book.js
│   │   └── BookList.js
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## Deployment

This project is deployed using Netlify. The live version can be accessed at [https://react-practice-amazon-best-sellers.netlify.app/](https://react-practice-amazon-best-sellers.netlify.app/)

To deploy your own version:

1. Create a Netlify account
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build/`

## Learning Outcomes

Through this project, I practiced:

- Creating and managing React components
- Implementing props and state
- Handling events in React
- CSS styling in React applications
- Deploying a React application to production

## Future Improvements

- Add search functionality
- Implement filtering by category
- Add user reviews and ratings
- Integrate with Amazon's API for real-time data
- Add a shopping cart feature

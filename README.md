# GitHub Blog <img src="./src/assets/browser-logo.svg" height="40px" align="left"> 

Share your ideas and updates through a modern blog interface powered by GitHub. Write posts as issues, manage content directly from your repository, and let the system take care of fetching and displaying everything in real time. With a clean layout and seamless integration, turning your GitHub into a personal blog has never been easier.

> 🔥 Built with the latest web technologies to ensure fast speed, high performance, and a seamless user experience. It leverages modern tools to deliver a responsive and intuitive interface across devices.

<img src="./src/assets/github-blog-banner.jpg" width="100%">

## Running

Follow these steps to run the project locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/joaocruzzq/github-blog
   cd github-blog
   ```

2. Install dependencies:
   ```sh
   npm install # Installs the required dependencies
   ```

3. Run the application:
   ```sh
   npm run dev # Starts the development server
   ```

> Note: Make sure you have <a href="https://nodejs.org/pt">Node.js</a> installed before starting.

## Features

> This application **should be able to**:

- fetch and display user profile data from the GitHub API.
- list and filter issues from a GitHub repository as blog posts.
- view the full content of a post on a dedicated page.
- be fully responsive, optimized for both desktop and mobile devices.

## 🛠️ Technologies Used

| **Technology**           | **Description**                                                   | **Version** |
|--------------------------|-------------------------------------------------------------------|-------------|
| **React**                | A frontend library for building user interfaces.                 | 19.0.0      |
| **React Router DOM**     | A library for handling navigation and routing in React apps.     | 7.1.5       |
| **Styled Components**    | A library for styling React components using tagged template literals. | 6.1.15      |
| **Axios**                | A promise-based HTTP client for making requests in JavaScript.   | 1.9.0       |
| **React Markdown**       | A component for rendering Markdown in React.                     | 10.1.0      |
| **Date-fns**             | A modern JavaScript date utility library.                        | 4.1.0       |
| **Vite**                 | A fast build tool and development server.                        | 6.1.0       |
| **TypeScript**           | A typed superset of JavaScript that provides static types.       | 5.7.2       |

ToDoApp

ToDoApp is a task management application that implements the MicroFrontends architecture using Module Federation. 
The application is divided into three main parts, which work together to provide a modular and scalable experience:

Application Architecture

1. Host:
The Host serves as the main base of the application. It orchestrates the MicroFrontends and ensures they are loaded properly.

2. MicroFrontend: Layout:
This MicroFrontend includes the global design components of the application: Header and Footer.
Between the Header and Footer, there is a designated Children region where the content is dynamically rendered.

3. MicroFrontend: Content:
The Content MicroFrontend is divided into two separate components:
Content(ToDoApp): The main task management interface where users can create, edit, and organize their tasks.
Session: Responsible for user authentication, including Login and Sign-Up functionalities.

This architecture ensures the application is modular, reusable, and easy to maintain or expand.

##

Authentication Mechanism

To determine if a user is logged in and authorized to use the ToDoApp, a Custom Event is used for communication between the MicroFrontends:

The Custom Event is dispatched and resides in the browser, allowing MicroFrontends to detect login status through addEventListener, and performing an authenticity verification.
Upon login, a remote token verification is performed.
Once authentication is successful, the token is stored in the localStorage for subsequent access and session management.
The Host uses React Query to periodically send requests to the server, ensuring the token remains valid over time.

This approach ensures seamless communication between the MicroFrontends and maintains a secure and scalable authentication flow.

##

Technologies Used

Host
1. Redux: State management library for managing global state in JavaScript applications.
2. React Router DOM: A library for routing in React applications, enabling navigation and dynamic route handling.
3. React Redux: Official bindings for using Redux with React.
4. React DOM: A package for rendering React components in the DOM.
5. Framer Motion: A library for animations in React applications.
6. TanStack React Query: A data-fetching library that simplifies server-state management and caching in React.
7. Redux Toolkit: A set of tools for efficiently managing Redux state.
8. TypeScript: A typed superset of JavaScript that enhances development with static typing.
9. Tailwind CSS: A utility-first CSS framework for building custom designs.
10. PostCSS: PostCSS is a tool for transforming CSS with plugins.
11. Autoprefixer: A tool to add vendor prefixes to CSS automatically.
12. Sourcetree: A free Git and Mercurial client for Windows and Mac. It simplifies how you interact with your repositories so you can focus on coding.


Layout
1. Sass (Syntactically Awesome Stylesheets): A CSS preprocessor that adds variables, nested rules, and mixins to CSS.
2. React Router DOM: Used for managing navigation and routing within the layout.
3. React DOM: Responsible for rendering layout components in the DOM.
4. React: JavaScript library for building user interfaces.
5. TypeScript: Enhances React development with static typing.
6. PostCSS: PostCSS is a tool for transforming CSS with plugins.
7. Css Modules: CSS Modules is a technology for writing modular, scoped CSS.


Content (Divided into Session and Content(ToDoApp))
General Technologies for the microfrontend
1. Redux: State management library for managing global state in JavaScript applications.
2. React Router DOM: For routing within the Content microfrontend.
3. React Redux: To connect Redux with React components.
4. React DOM: For rendering React components in the DOM.
5. React: For building the Content microfrontend.
6. JWT Decode: A library for decoding JSON Web Tokens (JWT).
7. Framer Motion: For adding animations to the Content components.
8. Redux Toolkit: For simplifying Redux state management.
9. TypeScript: For type safety and improved development experience.
10. Tailwind CSS: For designing and styling UI components.
11. PostCSS: PostCSS is a tool for transforming CSS with plugins.
12. Jest: A testing framework for JavaScript.
13. Testing Library: It's a set of tools for testing user interactions in web applications.


Session
State Management: Uses Redux for managing authentication state.

Content(ToDoApp)
State Management: Utilizes Context API for managing local state.


##


Design Patterns, Design Principles, Methodologies
1. The Smart and The Dumb: A design pattern that separates logic-heavy "Smart" components from UI-focused "Dumb" components.
2. Observer: An object (subject) automatically notifies multiple dependent objects (observers) about any changes in its state.
3. Atomic Design: A methodology for creating scalable UI components by breaking them into atoms, molecules, organisms, templates, 
and pages.
4. DRY Principle (Don't Repeat Yourself): This principle emphasizes reducing repetition of code or logic. Instead of duplicating code, 
you should abstract it into a single place and reuse it. This makes the code more maintainable and reduces the risk of errors.
5. KISS Principle (Keep It Simple, Silly): This principle advocates for simplicity in design and implementation. The idea is to avoid 
unnecessary complexity and keep the code as straightforward as possible. Simple solutions are easier to understand, maintain, and debug.
6. Single Responsibility Principle: This principle states that a class or module should have only one reason to change, meaning it 
should have only one job or responsibility. This makes the code more modular and easier to maintain.
7. Open/Closed Principle: This principle suggests that software entities (like classes, modules, functions) should be open for extension 
but closed for modification. This means you should be able to add new functionality without changing existing code, typically achieved 
through inheritance or interfaces.
8. BEM:naming convention for CSS classes that helps create reusable and maintainable components in web development.

##


Installation
Follow these steps to install and run the project locally:

# Note: To use this app, you will first need to run the microservices todo-crud and user-auth
# in caso of running it locally
   https://github.com/MatiFiordelli/DevLabs-Microservices.git


Clone the repository:
   git clone https://github.com/MatiFiordelli/DevLabs.git

Host:
1. Change folder:
   cd host

2. Install the dependencies:
   npm install

3. Build the microfrontend
   npm run build:dev

4. Start the server:
   npm run build:start

5. Access the App: The App will be available at: 
http://localhost:3000

Layout:
1. Change folder:
   cd layout

2. Install the dependencies:
   npm install

3. Build the microfrontend
   npm run build:dev

4. Start the server:
   npm run build:start

5. The App will be available at: 
http://localhost:3001 (but it will be used just by the host, internally)

Content:
1. Change folder:
   cd content

2. Install the dependencies:
   npm install

3. Build the microfrontend
   npm run build:dev

4. Start the server:
   npm run build:start

5. The App will be available at: 
http://localhost:3002 (but it will be used just by the host, internally)


##


Running Tests
This project uses Jest and Testing Library for testing. To run the tests, use the following command:

cd content
npm test
# 💡 starter-mern-stack-chakra-ui
Use this template to initialize your MongoDB, Express, React, and Node.js web application or website with a basic structure and starter code stylized with Chakra UI.

*Work In Progress*

## 🚀 Getting Started
### Installation
* Download [Node.js](https://nodejs.org/en/download/).
* Download the [nodemon](https://www.npmjs.com/package/nodemon) package globally.
* Download [MongoDB Community Server](https://www.mongodb.com/try/download/community).

### Initialization & Setup
1. Create a `.env` file in the `server` directory to hold environment variables. ([dotenv module](https://www.npmjs.com/package/dotenv))
    1. LOGGED_IN=true - log in upon server refresh for user development
    2. DEV_USER_ID=\[MongoDB _id\] - MongoDB _id of a record to automatically log in with
2. Edit the name of your database by editing the `DB_NAME` constant in `server/index.js`.
3. Edit metadata information for SEO and data accuracy in:
    * `client/public/manifest.json`
    * `client/public/robots.txt`
    * `client/public/sitemap.xml`
    * `README.md`
4. Run `npm install` in both the `server` and `client` directories to install packages.

## ⚙️ Usage/Workflow Details
### Development Process
1. Ensure that your MongoDB server is running locally for database functionality.
2. Run `nodemon` in the `server` directory while developing to automatically refresh your back-end (Node.js server) after editing.
3. Run `npm start` in the `client` directory while developing to automatically refresh front-end (React app) after editing.
4. Work on back-end by editing `server/models`, `server/routes`, and `server/index.js`.

### Scripts
Run `npm start` in the `client` directory to start the React app at port 3000.  
Run `npm start` in the `server` directory to start the Node server at port 4000.

### Directory Details
1. The `client/public` directory contains front-end assets and site metadata.
2. The `client/src` directory contains React front-end.
3. The `server/models` directory contains MongoDB models.
4. The `server/routes` directory contains routes for endpoints and API calls.

### Deployment
1. Create a MongoDB Atlas database and collection and copy your connection URI.
2. Create a Heroku app and enable automatic deployment to your repository.
3. Set environment variables for your Heroku app.
    1. MONGO_URI - MongoDB Atlas connection URI
    2. SESSION_SECRET - Express session secret

## ✔️ Current Release Details
### Main Package Versions
* **Chakra UI** v1.1.2
* **Express** v4.x
* **Mongoose** v5.11.15

### Packages Included
* @chakra-ui/react - main styling
* bcryptjs - password-hashing
* body-parser - essential for express
* chalk - colorful terminal output
* compression, cors, helmet - essential middleware
* dotenv - environment variables
* express - essential
* express-session - sessions
* lodash - coding utility
* method-override - enabling methods for the client
* mongoose - database functionality
* nodemon - development quality of life
* react-query - api fetching
* validator - formatting validation

## 📅 Future Release Plans
* More detailed starter code
    * Additional example pages
        * Sign up and log in pages
    * Passport.js authentication
    * Email-encryption and forgot password functionality
    * Full database functionality 

## 🗒️ Additional Resources
### Best Practices
* [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

### Documentation
* [Chakra UI Docs](https://chakra-ui.com/docs/getting-started)
* [Express 4.x API Docs](https://expressjs.com/en/4x/api.html)
* [Lodash Docs](https://lodash.com/docs/4.17.15)
* [Mongoose Docs](https://mongoosejs.com/docs/api.html)
* [React Query Docs](https://react-query.tanstack.com/overview)

### Tools and References
* [Can I Use...](https://caniuse.com) - Browser support tables for HTML5, CSS3, etc
* [Coolors Color Picker](https://coolors.co/a8ab66)
* [Font Awesome Icons Gallery](https://fontawesome.com/icons?d=gallery&m=free)
* [Google Fonts](https://fonts.google.com/)
* [Hero Patterns](https://www.heropatterns.com/) - Customizable SVG background patterns
* [Lorem Ipsum Generator](https://www.lipsum.com/)
* [Placeholder.com](https://placeholder.com) - Free image placeholder service
* [Regex Expression Tester](https://regex101.com/)
* [Scale](https://2.flexiple.com/scale/all-illustrations) - Free and customizable vector illustrations
* [SRI Hash Generator](https://www.srihash.org)
# project-job-board
# Project Job Board
Job Board is an end-of-training project in which we are creating an application to help developers find React-related jobs in France.
## Technology Stack 
- Language: JavaScript
- Hosting platform: AWS 
### Server/Backend
- Platform: [NodeJS] (https://nodejs.org/en/download/) (v12 or later)
- Package management: [NPM] (https://www.npmjs.com/package/npm) (v7 or later)
- Framework: [ExpressJS] (https://expressjs.com/fr/starter/installing.html) (v4 or later)
- SGBDR: [PostgreSQL] (https://www.postgresql.org/download/) (v12 or later)
- Database management: [Sqitch] (https://sqitch.org/download/) (v1 or later)
### Web/Frontend
- Framework: [ReactJS] (https://reactjs.org/versions) (v17 or later)
- Toolchain: [Webpack] (https://webpack.js.org/) (v3 or later) and [Babel] (https://babeljs.io/setup) (v7 or later)
- CSS framework: [Chakra] (https://chakra-ui.com/docs/getting-started) (v1 or later)

These tools are essential not only to install, but also to make the application work.
Please install before you continue.
## Installation
Clone the repository locally.
```bash
git clone https://github.com/O-clock-Sinbad/project-job-board.git
```
Then install npm dependencies in your local file.
```bash
npm install
```
Set up .env and sqitch.conf files by taking into account .example files within the present repository.
Also, create a PostgreSQL database and deploy the sqitch project on it.
```bash
createdb jobboard
sqitch deploy db:pg:jobboard
```
Configure PostgreSQL (or provide environnemental variables necessary) for `createdb` and `sqitch` commands to execute correctly.
Finally, place yourself in the front-init folder and start the server.
```bash
cd front-init
npm run start
```
Ctrl + left click on the link `http://localhost:8080/` to run the project in your navigator.
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.
## License
[MIT](https://choosealicense.com/licenses/mit/)

### `One more to-do app`

Just trying out express and making some basic api.

Made with create-react-app, express and Mysql.

![Alt Text](example.gif)

## `Using docker compose`

- In terminal use the command "docker compose up -d" in root folder
- Go to adminer address and login as root (find password in compose file)
- Create a user in mysql (dont forget to either use % or ip as server), right now the user is named "andreas"
- Give the user privlige to edit "taskcontroller" db
- import the taskcontroller_schema.sql
- Now it should work




## old way
Import "taskcontroller_schema.sql" into Mysql, take note of your credentials.

In "**backend/index.js**"
Replace the current credentials with your own:

```
host: "localhost",
user: "apiUser",
password: "",
database: "taskcontroller",
```

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

==You need to start up both backend and client!==

### `One more to-do app`

Just trying out express and making some basic api.

Made with create-react-app, express and Mysql.

![Alt Text](example.gif)

## `Using docker compose`

- In terminal use the command "docker compose up -d" in root folder
- Go to adminer address and login as root (find password in compose file)
- A user named "andreas" should be created 
- The user "andreas" should have privlige to edit "taskcontroller" db. if it do not, use this:
    ```
    CREATE USER 'andreas'@'%' IDENTIFIED BY 'andreaspassword';
    GRANT ALL PRIVILEGES ON `taskcontroller`.* TO 'andreas'@'%';
    ```
- import the taskcontroller_schema.sql, located in "backend" folder
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

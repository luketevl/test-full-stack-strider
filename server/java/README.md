# Intro
The server using:
- maven
- spring framework
- hibernate
  - mysql

# Dependency
- Install the maven
> https://maven.apache.org/

## Database
- Create database i'm prefer called **mysql_todos**
- Get the data create language for application in
  > ../dcl.sql
- Run the script in your Database
- **IMPORTANT** the database configuration locale in
> src/main/java/resources/application.properties

## Run Server
- Run the commands, i want run the command with sudo
```
mvn clean install
mvn tomcat7:deploy
```
- URL
  - http://localhost:9090/todo

in order to use database,
configure .gtipod.dockerfile
	FROM gitpod/workspace-mysql
	
configure .gitpod.yml
	image:
	file: .gitpod.dockerfile

Validate!

mysql -e "CREATE DATABASE name;"

mysql -e "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'go';"
DB: appdb
user: root
pass: go

mysql -p -e "
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);"
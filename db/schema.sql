

USE h5an3c9cs2qu1uaf;

CREATE TABLE burgers (

    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NULL,
    devoured boolean NOT NULL DEFAULT 0,
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)

);
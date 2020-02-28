USE z1819438;

CREATE TABLE IF NOT EXISTS User(
    uid INT(6) AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    email VARCHAR(30) NOT NULL,
    address VARCHAR(30) NOT NULL,
    PRIMARY KEY(uid)
);

CREATE TABLE IF NOT EXISTS Part_Name(
    pnid INT(6) AUTO_INCREMENT,
    description VARCHAR(30) NOT NULL,
    price VARCHAR(30) NOT NULL,
    quantity VARCHAR(30) NOT NULL,
    PRIMARY KEY(pnid)
);

CREATE TABLE IF NOT EXISTS Total_Price(
    tpid INT(6) AUTO_INCREMENT,
    ship_price VARCHAR(20) NOT NULL,
    hand_price VARCHAR(30) NOT NULL,
    PRIMARY KEY(tpid)
);

CREATE TABLE IF NOT EXISTS Credit_Info(
    ciid INT(6) AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    cardnum INT(17) NOT NULL,
    exp INT(6) NOT NULL,
    cvc INT(6) NOT NULL,
    PRIMARY KEY(ciid,name)
);

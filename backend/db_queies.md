# All SQL (MySQL) Queries used in this project 

## 1. Creating db 'blogs'

```sql
CREATE DATABASE blogs;
```

---

## 2. Creating 2 tables with following structure

   1. 'users'
      1. 'id' - int, pk, nn, ai
      2. 'user_name' - varchar(45), nn, uq
      3. 'email' - varchar(100), nn
      4. 'contact_num' - varchar(20), nn, uq
      5. 'img' - varchar(500), nn
   2. 'posts'
      1. 'id' - int, pk, nn, ai
      2. 'title' - varchar(250), nn
      3. 'description' - varchar(1000), nn
      4. 'img' - varchar(500), nn
      5. 'uid' - int, fk('user.id'), nn

```sql
-- users
CREATE TABLE `blogs`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `contact_num` VARCHAR(20) NOT NULL,
  `paswd` VARCHAR(20) NOT NULL,
  `img` VARCHAR(500) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `contact_num_UNIQUE` (`contact_num` ASC) VISIBLE);

-- posts
CREATE TABLE `blogs`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(250) NOT NULL,
  `desc` VARCHAR(1000) NOT NULL,
  `img` VARCHAR(250) NOT NULL,
  `date` DATETIME NOT NULL,
  `uid` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `uid_idx` (`uid` ASC) VISIBLE,
  CONSTRAINT `uid`
    FOREIGN KEY (`uid`)
    REFERENCES `blogs`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
```

---
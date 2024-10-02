# Backend

## DB Schema

1. Creating db 'blogs'
2. Creating 2 tables:
   1. 'users'
   2. 'posts'
3. 'user' table schema:
   1. 'id' - int, pk, nn, ai
   2. 'user_name' - varchar(225), nn, uq
   3. 'email' - varchar(225), nn
   4. 'contact_num' - varchar(12), nn, uq
   5. 'img' - varchar(225), nn
4. 'posts'
   1. 'id' - int, pk, nn, ai
   2. 'title' - varchar(225), nn
   3. 'description' - varchar(225), nn
   4. 'uid' - int, fk('user.id'), nn

[All SQL queries used in this project](./db_queies.md)
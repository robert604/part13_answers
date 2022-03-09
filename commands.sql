Script started on 2022-03-09 12:39:53-05:00 [TERM="xterm-256color" TTY="/dev/pts/2" COLUMNS="95" LINES="24"]
[?2004h]0;robert@T5500: ~/Downloads/nodejs/part13_answers[01;32mrobert@T5500[00m:[01;34m~/Downloads/nodejs/part13_answers[00m$ [7mheroku run psql -h ec2-44-194-167-63.compute-1.[27m[7ma[27m[7mmazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81 -a fathomless-waters-15451[27m[Aheroku run psql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81 -a fathomless-waters-15451
[?2004lRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m...
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⣾[0m
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⣽[0m
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⣻[0m
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⢿[0m starting, run.6806 (Free)
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⡿[0m starting, run.6806 (Free)
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⣟[0m connecting, run.6806 (Free)
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⣯[0m connecting, run.6806 (Free)
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⣷[0m connecting, run.6806 (Free)
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⣾[0m connecting, run.6806 (Free)
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⣽[0m connecting, run.6806 (Free)
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⣻[0m connecting, run.6806 (Free)
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... up, run.6806 (Free)
Password for user efsktoagfldbnv: 
psql (14.2 (Ubuntu 14.2-1.pgdg20.04+1), server 13.6 (Ubuntu 13.6-1.pgdg20.04+1))
SSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, bits: 256, compression: off)
Type "help" for help.

dan8amcg6usd81=> \d
Did not find any relations.
dan8amcg6usd81=> CREATE TABLE blogs (
dan8amcg6usd81(> id SERIAL PRIMARY KEY,
dan8amcg6usd81(> author text,
dan8amcg6usd81(> url text NOT NULL,
dan8amcg6usd81(> title text NOT U NULL,
dan8amcg6usd81(> likes integer DEFAULT 0
dan8amcg6usd81(> );
CREATE TABLE
dan8amcg6usd81=> \d
                 List of relations
 Schema |     Name     |   Type   |     Owner      
--------+--------------+----------+----------------
 public | blogs        | table    | efsktoagfldbnv
 public | blogs_id_seq | sequence | efsktoagfldbnv
(2 rows)

dan8amcg6usd81=> \d l blogs
                            Table "public.blogs"
 Column |  Type   | Collation | Nullable |              Default              
--------+---------+-----------+----------+-----------------------------------
 id     | integer |           | not null | nextval('blogs_id_seq'::regclass)
 author | text    |           |          | 
 url    | text    |           | not null | 
 title  | text    |           | not null | 
 likes  | integer |           |          | 0
Indexes:
    "blogs_pkey" PRIMARY KEY, btree (id)

dan8amcg6usd81=> exit
[?2004h]0;robert@T5500: ~/Downloads/nodejs/part13_answers[01;32mrobert@T5500[00m:[01;34m~/Downloads/nodejs/part13_answers[00m$ exit
[?2004lexit

Script done on 2022-03-09 12:47:03-05:00 [COMMAND_EXIT_CODE="0"]
Script started on 2022-03-09 13:29:42-05:00 [TERM="xterm-256color" TTY="/dev/pts/2" COLUMNS="95" LINES="24"]
[?2004h]0;robert@T5500: ~/Downloads/nodejs/part13_answers[01;32mrobert@T5500[00m:[01;34m~/Downloads/nodejs/part13_answers[00m$ [7mheroku run psql -h ec2-44-194-167-63.compute-1.[27m[7ma[27m[7mmazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81 -a fathomless-waters-15451[27m[Aheroku run psql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81 -a fathomless-waters-15451
[?2004lRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m...
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⣾[0m
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⣽[0m
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⣻[0m
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⢿[0m starting, run.7600 (Free)
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⡿[0m starting, run.7600 (Free)
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⣟[0m connecting, run.7600 (Free)
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⣯[0m connecting, run.7600 (Free)
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⣷[0m connecting, run.7600 (Free)
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⣾[0m connecting, run.7600 (Free)
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⣽[0m connecting, run.7600 (Free)
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⣻[0m connecting, run.7600 (Free)
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⢿[0m connecting, run.7600 (Free)
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... [38;5;104m⡿[0m connecting, run.7600 (Free)
[G[2A[JRunning [36m[1mpsql -h ec2-44-194-167-63.compute-1.amazonaws.com -p 5432 -U efsktoagfldbnv dan8amcg6usd81[22m[39m on [38;5;104m⬢ fathomless-waters-15451[0m... up, run.7600 (Free)
Password for user efsktoagfldbnv: 
psql (14.2 (Ubuntu 14.2-1.pgdg20.04+1), server 13.6 (Ubuntu 13.6-1.pgdg20.04+1))
SSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, bits: 256, compression: off)
Type "help" for help.

dan8amcg6usd81=> insert      INSERT INTO blogs VALUES  
dan8amcg6usd81-> (AUTH    'author1',url   'url1','title1',1);
ERROR:  invalid input syntax for type integer: "author1"
LINE 2: ('author1','url1','title1',1);
         ^
dan8amcg6usd81=> INSERT INTO blogs VALUES
('author1','url1','title1',1);[1P[1@"author1[1@"[1P,[1@"[1Purl1[1@"[1P,[1@"[1Ptitle1[1@"[1P,1);
ERROR:  column "author1" does not exist
LINE 2: ("author1","url1","title1",1);
         ^
HINT:  Perhaps you meant to reference the column "blogs.author".
dan8amcg6usd81=> INSERT INTO blogs VALUES
("author1","url1","title1",1);[Adan8amcg6usd81=> INSERT INTO blogs VALUES[1@([1@)[1@ ([1@a[1@u[1@t[1@h[1@o[1@r[1@,[1@u[1@r[1@l[1@,[1@t[1@i[1@t[1@l[1@e[1@,[1@l[1@i[1@k[1@e[1@s) VALUES
("author1","url1","title1",1);
ERROR:  column "author1" does not exist
LINE 2: ("author1","url1","title1",1);
         ^
HINT:  Perhaps you meant to reference the column "blogs.author".
dan8amcg6usd81=> INSERT INTO blogs (author,url,title,likes) VALUES
("author1","url1","title1",1);[Adan8amcg6usd81=> INSERT INTO blogs (author,url,title,likes) VALUESES      values
("author1","url1","title1",1);
ERROR:  column "author1" does not exist
LINE 2: ("author1","url1","title1",1);
         ^
HINT:  Perhaps you meant to reference the column "blogs.author".
dan8amcg6usd81=> INSERT INTO blogs (author,url,title,likes) values
("author1","url1","title1",1);[Adan8amcg6usd81=> INSERT INTO blogs (author,url,title,likes) values[1P[1P[1P[1P[1P[1P[1P[1P[1P[1P[1P[1@i[1@n[1@s[1@e[1@r[1@t [1@ [1@i[1@n[1@t[1@o blogs (author,url,title,likes) values
("author1","url1","title1",1);
ERROR:  column "author1" does not exist
LINE 2: ("author1","url1","title1",1);
         ^
HINT:  Perhaps you meant to reference the column "blogs.author".
dan8amcg6usd81=> \d blogs
                            Table "public.blogs"
 Column |  Type   | Collation | Nullable |              Default              
--------+---------+-----------+----------+-----------------------------------
 id     | integer |           | not null | nextval('blogs_id_seq'::regclass)
 author | text    |           |          | 
 url    | text    |           | not null | 
 title  | text    |           | not null | 
 likes  | integer |           |          | 0
Indexes:
    "blogs_pkey" PRIMARY KEY, btree (id)

dan8amcg6usd81=> insert into blogs (author,url,title,likes) values ('author1','url1','title1',1));
INSERT 0 1
dan8amcg6usd81=> insert into blogs (author,url,title,likes) values ('author1','url1','title1',1));[An8amcg6usd81=> [K
[K[Adan8amcg6usd81=> insert into blogs (author,url,title,likes) values ('author2','url2','title2',2));
INSERT 0 1
dan8amcg6usd81=> select * from blogs
dan8amcg6usd81-> ;
 id | author  | url  | title  | likes 
----+---------+------+--------+-------
  1 | author1 | url1 | title1 |     1
  2 | author2 | url2 | title2 |     2
(2 rows)

dan8amcg6usd81=> exit
[?2004h]0;robert@T5500: ~/Downloads/nodejs/part13_answers[01;32mrobert@T5500[00m:[01;34m~/Downloads/nodejs/part13_answers[00m$ exit
[?2004lexit

Script done on 2022-03-09 13:42:09-05:00 [COMMAND_EXIT_CODE="0"]

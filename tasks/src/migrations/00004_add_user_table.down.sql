ALTER TABLE
  tasks DROP CONSTRAINT constraint_user_id_fk;
ALTER TABLE
  tasks RENAME COLUMN user_id TO userid;
DROP TABLE users;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS tasks (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  userId uuid NOT NULL,
  email VARCHAR NOT NULL,
  title VARCHAR NOT NULL,
  ref_url VARCHAR NOT NULL DEFAULT '',
  email_reminder BOOLEAN DEFAULT FALSE,
  start_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
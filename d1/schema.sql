DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS leads;
DROP TABLE IF EXISTS users;

-- Admin Users
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Leads (Formularios de contacto de la Landing Page)
CREATE TABLE leads (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  interest TEXT,
  message TEXT,
  status TEXT DEFAULT 'new', -- 'new', 'contacted', 'closed'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- E-commerce Module
CREATE TABLE categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
  id TEXT PRIMARY KEY,
  category_id TEXT,
  name TEXT NOT NULL,
  description TEXT,
  price REAL NOT NULL,
  image_url TEXT,
  stock INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT false,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE orders (
  id TEXT PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  total REAL NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL,
  product_id TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  price REAL NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Insertar Data Inicial
INSERT INTO categories (id, name, slug) VALUES ('cat-1', 'Combos de Café', 'combos-cafe');
INSERT INTO categories (id, name, slug) VALUES ('cat-2', 'Máquinas', 'maquinas');
INSERT INTO categories (id, name, slug) VALUES ('cat-3', 'Café de Especialidad', 'cafe-especialidad');

INSERT INTO products (id, category_id, name, description, price, active) VALUES ('prod-1', 'cat-1', 'Combo Emprendedor Básico', 'Máquina espresso de 1 grupo + Molino + 10kg Café', 1500, true);
INSERT INTO products (id, category_id, name, description, price, active) VALUES ('prod-2', 'cat-1', 'Combo Cafetería Pro', 'Máquina espresso 2 grupos + 2 Molinos + 20kg Café', 3500, true);

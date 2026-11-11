CREATE TABLE IF NOT EXISTS produtos (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nome TEXT NOT NULL UNIQUE,
  preco NUMERIC(10, 2) NOT NULL
);

INSERT INTO produtos (nome, preco)
VALUES
  ('Caderno', 19.90),
  ('Caneta', 4.50),
  ('Mochila', 89.90)
ON CONFLICT (nome) DO NOTHING;


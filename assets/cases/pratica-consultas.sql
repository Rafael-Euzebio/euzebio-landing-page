-- EUZEBIO — prática demonstrativa para a página do estudo de caso.
-- Dados fictícios criados para esta publicação; não reproduz o curso completo.
-- Compatível com MySQL. Execute em um banco de estudos.
CREATE TABLE vendas_demonstrativas (
  id INT PRIMARY KEY,
  servico VARCHAR(40) NOT NULL,
  valor DECIMAL(10, 2) NOT NULL
);

INSERT INTO vendas_demonstrativas (id, servico, valor) VALUES
  (1, 'Consultoria', 1200.00),
  (2, 'Formação', 600.00),
  (3, 'Consultoria', 800.00),
  (4, 'Suporte', 300.00),
  (5, 'Formação', 900.00);

-- Desafio: qual é o valor total vendido por serviço?
-- Ordene do maior para o menor total. Consulte a sintaxe se precisar.
-- Resultado esperado:
-- Consultoria | 2000.00
-- Formação    | 1500.00
-- Suporte     |  300.00

-- Tente resolver antes de consultar a solução na página do caso.

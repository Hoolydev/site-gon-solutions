-- Tabela para armazenar conversas e servir como memória do fluxo
CREATE TABLE IF NOT EXISTS conversas (
    id SERIAL PRIMARY KEY,
    telefone VARCHAR(20) UNIQUE NOT NULL,
    nome VARCHAR(255) NOT NULL,
    mensagem TEXT NOT NULL,
    ultima_mensagem TEXT,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_conversas_telefone ON conversas(telefone);
CREATE INDEX IF NOT EXISTS idx_conversas_timestamp ON conversas(timestamp DESC);

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_conversas_updated_at 
    BEFORE UPDATE ON conversas 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Comentários para documentação
COMMENT ON TABLE conversas IS 'Tabela para armazenar histórico de conversas e servir como memória contextual';
COMMENT ON COLUMN conversas.telefone IS 'Telefone do cliente (chave única para identificar conversas)';
COMMENT ON COLUMN conversas.nome IS 'Nome do cliente';
COMMENT ON COLUMN conversas.mensagem IS 'Última mensagem da conversa';
COMMENT ON COLUMN conversas.ultima_mensagem IS 'Campo auxiliar para última mensagem';
COMMENT ON COLUMN conversas.timestamp IS 'Timestamp da mensagem';
COMMENT ON COLUMN conversas.created_at IS 'Data de criação do registro';
COMMENT ON COLUMN conversas.updated_at IS 'Data da última atualização';

-- Dados de exemplo (opcional)
-- INSERT INTO conversas (telefone, nome, mensagem) VALUES 
-- ('+5562999999999', 'Cliente Teste', 'Olá, preciso de informações sobre automação');

SELECT 'Tabela conversas criada com sucesso!' as status;
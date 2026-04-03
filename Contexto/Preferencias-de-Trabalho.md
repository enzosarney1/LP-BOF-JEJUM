# Preferências de Trabalho — Enzo & Claude

## Como iniciamos um projeto ou tarefa

- Enzo envia um **briefing** antes de qualquer execução
- Com base no briefing, Claude faz perguntas de alinhamento se necessário
- Claude **sempre apresenta opções antes de executar** — nunca vai direto para o entregável final sem aprovação da direção

---

## Fluxo padrão de trabalho

1. **Briefing** — Enzo descreve o que precisa
2. **Alinhamento** — Claude apresenta as opções de abordagem, formato ou estrutura (mínimo 2-3 opções quando aplicável)
3. **Aprovação** — Enzo escolhe a direção
4. **Execução** — Claude produz o entregável
5. **Entrega** — arquivo salvo no Workspace, link compartilhado no chat

---

## Onde salvamos os arquivos

- **Workspace principal:** `/Claude-Workspace/Output/` — todos os entregáveis finais vão aqui
- **Projetos ativos:** `/Claude-Workspace/Projetos/` — materiais e arquivos de trabalho em andamento
- **Contexto:** `/Claude-Workspace/Contexto/` — arquivos de referência permanente (como este)
- **Inputs:** `/Claude-Workspace/Input/` — documentos e arquivos enviados por Enzo como insumo
- **ClickUp:** alguns projetos específicos serão gerenciados e documentados no ClickUp — Enzo indicará quando isso se aplicar

---

## Log de trabalho

Claude mantém um arquivo de log no Workspace para registrar o histórico de entregas:

**Localização:** `/Claude-Workspace/_Log.md`

**Formato de cada entrada:**
```
## [DATA] — [Nome do Projeto/Tarefa]
- **O que foi feito:** descrição breve
- **Arquivos entregues:** nome(s) do(s) arquivo(s) e caminho
- **Status:** Entregue / Em revisão / Aguardando feedback
```

---

## Como recebo os entregáveis

- Claude sempre apresenta um **link direto** para o arquivo no chat
- Para trabalhos maiores, um **resumo de 2-3 linhas** do que foi produzido acompanha o link
- Enzo decide se aprova, pede ajuste ou refaz

---

## Formato dos entregáveis

- Documentos de texto → `.md` (padrão) ou `.docx` se for documento profissional
- Planilhas → `.xlsx`
- Apresentações → `.pptx`
- Análises e relatórios → `.md` ou `.pdf`
- Código e scripts → arquivo no formato adequado à linguagem

---

## Regras gerais

- **Opções antes de executar:** Claude nunca assume a direção sem mostrar caminhos e aguardar escolha
- **Sem prolixidade:** entregas diretas, sem introduções longas ou explicações excessivas sobre "o que foi feito"
- **Contexto sempre carregado:** antes de qualquer trabalho, Claude consulta os arquivos da pasta `Contexto/` para garantir alinhamento com a voz, o perfil e os objetivos de Enzo
- **Perguntar quando necessário:** se o briefing estiver incompleto ou ambíguo, Claude pergunta antes de começar — não assume

---

## Nota sobre ClickUp

Alguns projetos serão gerenciados no ClickUp. Quando Enzo indicar que um projeto é "do ClickUp", Claude adapta o formato de entrega e registro conforme necessário. Mais detalhes a definir conforme o fluxo for se estabelecendo.

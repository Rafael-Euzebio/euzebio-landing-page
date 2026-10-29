# EUZEBIO

Site estático de Rafael Euzebio. HTML5, CSS por bloco BEM e JavaScript para menu e temas da navbar. Poppins em títulos e Inter no corpo, carregadas pelo Google Fonts.

## Visualizar e preparar para hospedagem

```sh
python3 scripts/check-site.py
python3 scripts/export-site.py
python3 -m http.server 8000 --bind 127.0.0.1 --directory dist
```

Abra `http://127.0.0.1:8000`. A exportação cria `dist/` com os arquivos públicos. Publique o conteúdo dessa pasta em uma hospedagem estática que sirva `index.html` nos diretórios. Não há compilador nem dependências de produção a instalar.

A pasta `Casos/` contém referências de trabalho e fica fora da exportação, assim como scripts, documentação e arquivos do Git.

## Páginas

- `/`: homepage, casos selecionados e contato.
- `/casos/continuidade-varejo/`: diagnóstico e continuidade operacional em duas unidades.
- `/casos/violeta-eliz/`: planejamento técnico, colaboração e integração de uma entrega digital.
- `/casos/curriculo-sql/`: redesenho curricular e prática demonstrativa com download.
- `/privacidade/`: informações sobre o contato e serviços externos.

A seleção dos casos permanece na homepage. Cada página interna reutiliza os blocos de navegação e rodapé por meio do mesmo HTML e dos mesmos arquivos CSS/JS. Não existe um mecanismo de templates em tempo de execução.

## Organização

- `tokens.css`: cores, tipografia e breakpoints de 64em e 40em.
- `blocks/`: cada bloco reúne seu CSS, incluindo a própria responsividade; menu e navbar também têm JavaScript.
- `assets/cases/`: diagramas SVG originais e prática SQL demonstrativa.
- `casos/`: páginas estáticas dos três estudos de caso.

Novos temas seguem `data-navbar-theme` nas seções e os modificadores da navbar. Os temas escuros disponíveis são `forest`, `charcoal` e `slate`; seções sem atributo usam o tema papel. A troca continua antecipada em 64px e é observada pelo mesmo IntersectionObserver.

## Contato

O formulário existente `OQQZEk` é incorporado com o script oficial do Tally, carregado com `defer`. O widget carrega o iframe e ajusta sua altura. Campos, mensagens, idioma, confirmação e destino das respostas são configurados no Tally. A seção também oferece o e-mail e um link direto ao formulário.

## Verificação da V1

Em 29/10/2026, as cinco páginas foram verificadas em Chromium isolado nas larguras 360, 390, 768, 1024, 1085 e 1440px, sem transbordamento horizontal da página. Foram conferidas 54 transições de tema nos dois sentidos do scroll, menu por clique e teclado, fechamento ao clicar fora, abertura da solução da prática pelo teclado e download do SQL.

O Tally carregou os três campos e ajustou a altura na mudança entre mobile e desktop. Nenhuma resposta foi enviada. O axe-core não apontou violações automáticas dos critérios WCAG A/AA selecionados nas páginas, em 390 e 1440px; essa verificação não substitui uma avaliação humana completa. Links locais, âncoras, IDs e sintaxe dos scripts também foram conferidos.

## Fontes e decisões editoriais

Os textos partem dos materiais locais de continuidade no varejo, Frontend Fusion/Violeta Eliz e currículo SQL. O caso de varejo omite nomes das unidades, pessoas e parâmetros de rede. O caso Violeta atribui as contribuições à equipe e identifica o papel de Rafael. O currículo apresenta resultados de desenho e execução, sem alegar ganhos de aprendizagem que não foram medidos.

Os diagramas são reconstruções explicativas. A prática SQL e seus dados foram criados para esta publicação, tomando como referência o formato de atividades documentado; o site não redistribui os materiais completos do curso.

Referências editoriais consultadas: [ScaleVP](https://www.scalevp.com/resources/building-a-great-b2b-case-study), [Mercer-MacKay](https://mercermackay.com/thinking/blog/a-complete-guide-to-case-study-writing/) e [IxDF](https://assets.interaction-design.org/literature/article/how-to-write-the-middle-or-process-part-of-your-case-study). A referência Webflow não respondeu durante a consulta. O embed segue a [documentação oficial do Tally](https://tally.so/help/embed-your-form).

## Refinamentos possíveis

- Ajustar no Tally o idioma da interface: o botão atual aparece como “Submit”.
- Acrescentar capturas reais do Violeta Eliz e novas evidências públicas quando disponíveis. O acesso ao domínio e aos PRs não pôde ser reconfirmado nesta sessão; a narrativa utiliza os registros fornecidos, com a publicação identificada como documentada em julho de 2026.
- Validar o recebimento de uma mensagem no fluxo real de atendimento e revisar a confirmação configurada no Tally.

O site está implementado localmente; a publicação no domínio não foi realizada nesta execução.

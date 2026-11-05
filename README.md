# FitCheck PRO — Atualização da esposa

## O que mudou
- Página principal atualizada com biblioteca de 248 exercícios, substituições e vídeos.
- Área do Personal → botão “Aplicar ficha da esposa” e “Anexar ficha JSON”.
- `Ficha-ABC-Esposa-FitCheck.json`: treino avançado ABC, segunda/quarta/sexta, caminhadas terça/quinta, sábado/domingo descanso.
- Exportação da ficha do aluno em JSON e impressão.
- Atualização do service worker para evitar a versão antiga em cache.

## Publique no seu GitHub
Use o repositório `cordeiroatilayuri-collab/fitcheck-pro` já existente; a branch aparece em português como `principal` e em inglês como `main`.
1. Faça backup dos treinos no FitCheck atual (**Perfil > Exportar backup completo**).
2. No GitHub, abra `index.html` (versão antiga) e renomeie para `index-antigo.html`, usando o lápis no editor. Confirme a alteração.
3. Em **Add file → Upload files**, envie o novo `index.html` e `sw.js` deste pacote. Confirme em **Commit changes**. Não suba arquivos de fichas pessoais para repositórios públicos.
4. Em **Settings → Pages**, mantenha Branch `principal/main` e Folder `/(root)`. Aguarde o GitHub indicar publicação concluída.
5. Entre no endereço `https://cordeiroatilayuri-collab.github.io/fitcheck-pro/` e recarregue a página; em celulares com PWA antigo, feche/reabra o app ou use navegador para forçar atualização.
6. Abra **Perfil → Área do Personal → Aplicar ficha da esposa**. Se quiser importar o arquivo manual, use **Anexar ficha JSON** com o arquivo `Ficha-ABC-Esposa-FitCheck.json` baixado separadamente e mantido no seu aparelho.

**Importante**: o aplicativo armazena o histórico apenas no navegador; não há contas de alunos, sincronização entre celulares ou proteção por senha. O arquivo JSON leva a ficha de treino, mas não o histórico de outro aparelho.

O plano é educativo e deve ser revisado conforme condições e evolução reais da pessoa.

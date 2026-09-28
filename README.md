# Obá Bolos

Site institucional e cardápio digital da Obá Bolos. Os pedidos são direcionados para o WhatsApp da Bruna.

## Publicação

O site é publicado automaticamente no GitHub Pages a cada alteração enviada para a branch `main`.

- Build estático: Next.js
- Publicação: GitHub Actions
- Saída: pasta `out`

## Domínio personalizado

O repositório está pronto para receber um domínio próprio. Quando o domínio for definido:

1. criar `public/CNAME` com o domínio exato;
2. enviar a alteração para `main`;
3. configurar o mesmo domínio em **Settings → Pages**;
4. ajustar somente os registros DNS necessários, preservando MX, SPF, DKIM e demais registros de e-mail.

Enquanto não houver `public/CNAME`, o build usa automaticamente o caminho do repositório no GitHub Pages.

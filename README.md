<!-- @format -->

## en vän har köpt en mindre biosalong och vill låta sina kunder boka stolar för kommande föreställningar

-   Applikationen ska vara publik (deployad med Heroku exempelvis).
-   Applikationen ska ha ett animerat galleri för nya filmer

generate cert, key

```bash
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

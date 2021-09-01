<!-- @format -->

## en vän har köpt en mindre biosalong och vill låta sina kunder boka stolar för kommande föreställningar

-   Minst två routes
-   Varje UI enhet ska vara sin egen komponent
-   `useEffect` ska användas för att hämta information (via API eller data fil)
-   En användare ska kunna välja mellan **minst fem filmer** och varje film ska ha **minst 4 föreställningar**.
-   En bokning ska hantera flera antal platser. Varje plats ska vara valbar.
-   Lediga platser i biografen ska presenteras visuellt och plats väljs genom att användaren klickar på en ruta/ikon.

-   Bokningar ska lagras i en databas.
-   Applikationen ska automatiskt synkas med databasen
-   Applikationen ska vara publik (deployad med Heroku exempelvis).

-   Authentisering för admins
-   Admins har en sida för att lägga till nya filmer och föreställningar
-   Applikationen ska ha ett animerat galleri för nya filmer
-   Valfri imponerade feature

generate cert, key

```bash
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

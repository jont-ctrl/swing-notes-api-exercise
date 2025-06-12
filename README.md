## Kom igång

1. **Konfigurera miljövariabler**  
   Skapa en `.env`-fil och ange din databas-url samt PORT och JWT_SECRET:

   ```env
   DATABASE_URL=postgres://användare:lösenord@localhost:5432/databasnamn
   PORT=3000
   JWT_SECRET=dinHemligaNyckel
   ```

2. **Installera beroenden**

   ```bash
   npm install
   ```

3. **Starta utvecklingsservern**

   ```bash
   npm run dev
   ```

4. **Sätt upp PostgreSQL-tabeller**  
   Kör följande kommando en gång för att skapa tabeller:
   ```bash
   node db/dataBaseSetup.js
   ```

## Tips

- Kontrollera att PostgreSQL är igång innan du kör projektet.
- Uppdatera `DATABASE_URL` med dina egna användaruppgifter och databasnamn.
- Vid problem, kontrollera loggarna för felmeddelanden.

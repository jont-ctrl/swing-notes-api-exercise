# Swing Notes API

En RESTful CRUD-backend för hantering av anteckningar. API:et använder JWT för autentisering, bcrypt för lösenordshantering och PostgreSQL som databas. Funktioner inkluderar att skapa konton, logga in och hantera anteckningar på ett säkert sätt.

## Tech Stack

Projektet använder följande bibliotek:

- **express** – Webbramverk för Node.js
- **pg** – PostgreSQL-klient
- **dotenv** – Hantering av env miljövariabler
- **bcryptjs** – Hashning av lösenord
- **jsonwebtoken** – JWT-autentisering
- **cors** – Hantering av CORS
- **swagger-jsdoc** & **swagger-ui-express** – API-dokumentation med Swagger

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

## API-dokumentation

| Metod  | Endpoint          | Beskrivning                                    | 🔒 Skyddad |
| ------ | ----------------- | ---------------------------------------------- | :--------: |
| POST   | /api/user/signup  | Registrera ny användare                        |            |
| POST   | /api/user/login   | Logga in användare och få JWT-token            |            |
| GET    | /api/notes        | Hämta alla anteckningar för inloggad användare |     ✅     |
| POST   | /api/notes        | Skapa en ny anteckning                         |     ✅     |
| PUT    | /api/notes        | Uppdatera en anteckning                        |     ✅     |
| DELETE | /api/notes        | Ta bort en anteckning                          |     ✅     |
| GET    | /api/notes/search | Sök anteckningar på titel                      |     ✅     |

**🔒 Skyddad** = Kräver JWT-token (autentisering)

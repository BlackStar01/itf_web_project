# itf_web_project

## Author

- [@BlackStar01](https://www.github.com/BlackStar01) (vitalwarren@yahoo.com)
- [@M4rluc44](https://github.com/M4rluc44) (vitalwarren@yahoo.com)
- [@Chloe0609](https://www.github.com/Chloe0609) (chloe.tournoux@efrei.net)

## Tech Stack

```bash
    **Client:** Vue3 + Vite
    **Server:** Django
    **Database:** MySQL
```

## Run Locally

### Requirements

```bash
  System : Your ssytem (Ubuntu 22)
  Python 3.10.6
  Django version >= 4 (4.1.1)
  npm >= 8 (8.19.1)
  nodejs >= 12 (v12.22.9)
```

Start the server front end

```bash
  npm run dev
```

Start the server front end

```bash
  python manage.py migrate
  python manage.py runserver
```

## Context

---

The goal of this project is to **creat a web app** on a chosen topic.
Because of our major, IT for Finance, we decided to create a **finance related web app**.

## Idea

---

We want to develop a web application allowing the user to **create a budget for a project**.

### V1

The user should be able to do the following things :

- Enter all the income of the project in different categories he defines

- Enter all expenses of the project in different categories he defines

- Look at the result of his budget (income - expenses)

### Possible V2

The user should be able to do these more things

- Enter what he is earning and buying in his budget (he will be able to see what he needs to earn of expense left)

- See two different results : 
    
    - The one depending on what he budgeted
    
    - The one depending on what he is really earning and spending

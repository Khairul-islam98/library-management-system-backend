 # **Library Management System**


## Live link: https://library-management-system-backend-murex.vercel.app

## Project Description

The Library Management System is a comprehensive backend solution designed to streamline the management of library operations. This system provides robust features for managing books, members, and the borrowing process. Built with modern technologies like Node.js, Express.js, Prisma, and PostgreSQL, it ensures efficient and scalable performance

## Technology Stack & Packages
  - Node.js
  - Express.js
  - Prisma ORM
  - PostgreSQL
  - Typescript
  - cors


## Key Features

- Books Management: Easily manage a comprehensive library collection with streamlined tools for adding, updating, and removing books;
- Member Management: Organize and maintain records of library members, including their personal details;
- Borrowing System: Facilitate an efficient borrowing and returning process and overDue to track book;


# How to run the application locally

1. Clone the repository

```
https://github.com/Khairul-islam98/library-management-system-backend.git
```

2. Project open

```
cd library-management-system-backend
```

3. install the required packages

```
npm i
```

4. Add a .env file

```
PORT=5000
DATABASE_URL
```

5. Run the Application locally

```
npm run start:dev
```
```
└── 📁src
    └── 📁app
        └── 📁config
            └── index.ts
        └── 📁errors
            └── AppError.ts
            └── not-found.ts
        └── 📁middlewares
            └── globalErrorHandler.ts
        └── 📁modules
            └── 📁book
                └── book.controller.ts
                └── book.route.ts
                └── book.service.ts
            └── 📁borrow
                └── borrow.controller.ts
                └── borrow.route.ts
                └── borrow.service.ts
            └── 📁member
                └── member.controller.ts
                └── member.route.ts
                └── member.service.ts
            └── 📁return
                └── return.controller.ts
                └── return.route.ts
                └── return.service.ts
        └── 📁routes
            └── index.ts
        └── 📁utils
            └── catchAsync.ts
            └── prisma.ts
            └── sendResponse.ts
    └── app.ts
    └── server.ts
```
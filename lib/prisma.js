import { PrismaClient } from "@prisma/client";

export const db= globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production"){
  globalThis.prisma = db ;
}

//globalThis.prisma : this global variable ensure that the prisma client instance is resued across hot reloads during development,without this , each time your application reloads, a new instance of prisma client would be created,potentially leading to connection issues.
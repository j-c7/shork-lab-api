import { PrismaClient } from "@prisma/client";

export class RepoBase{
    prisma = new PrismaClient();
    constructor() {}
}
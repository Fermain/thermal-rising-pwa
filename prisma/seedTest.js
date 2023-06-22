import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const allUsers = await prisma.user.findMany({
    include: {
      roles: true,
      inspections: {
        select: {
          site: true,
          machines: {
            select: {
              machine: true,
            },
          },
        },
      },
    },
  });

  console.log(JSON.stringify(allUsers, null, 2)); // pretty print the result
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(() => {
    void prisma.$disconnect();
  });

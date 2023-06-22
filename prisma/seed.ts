import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const managerRole = await prisma.role.create({
    data: {
      name: "Manager",
      type: "MANAGER",
      // Add any permissions specific to the Manager role here
    },
  });

  const inspectorRole = await prisma.role.create({
    data: {
      name: "Inspector",
      type: "INSPECTOR",
      // Add any permissions specific to the Inspector role here
    },
  });

  const users = [];
  for (let i = 0; i < 2; i++) {
    const managerUser = await prisma.user.create({
      data: {
        name: `Manager ${i + 1}`,
        email: `manager${i + 1}@example.com`,
        roleId: managerRole.id,
      },
    });
    users.push(managerUser);

    const inspectorUser = await prisma.user.create({
      data: {
        name: `Inspector ${i + 1}`,
        email: `inspector${i + 1}@example.com`,
        roleId: inspectorRole.id,
      },
    });
    users.push(inspectorUser);
  }

  if (users[0] && users[2]) {
    const site = await prisma.site.create({
      data: {
        name: "Fake Site",
        street: "123 Fake Street",
        city: "Fake City",
        state: "FS",
        postalCode: "12345",
        country: "Fake Country",
        userId: users[0].id, // Assign the first manager as the owner
      },
    });

    for (let i = 0; i < 3; i++) {
      const machine = await prisma.machine.create({
        data: {
          name: `Machine ${i + 1}`,
          siteId: site.id,
        },
      });

      const checklistItem = await prisma.checklistItem.create({
        data: {
          machineId: machine.id,
          description: `Checklist Item for Machine ${i + 1}`,
        },
      });

      const inspection = await prisma.inspection.create({
        data: {
          date: new Date(),
          inspectorId: users[2].id, // Assign the first inspector as the inspector
          siteId: site.id,
        },
      });

      await prisma.machineInspection.create({
        data: {
          machineId: machine.id,
          inspectionId: inspection.id,
        },
      });

      await prisma.inspectionResult.create({
        data: {
          inspectionId: inspection.id,
          checklistItemId: checklistItem.id,
          status: "PASSED",
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });

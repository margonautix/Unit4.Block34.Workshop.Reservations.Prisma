const prisma = require("../prisma");

const seed = async () => {
  // TODO: Create Customers, Restaurants and Reservations

  const createCustomers = async () => {
    const customers = [
      { name: "Jean Jacket" },
      { name: "Ghost" },
      { name: "Ripley" },
      { name: "Padfoot" },
    ];
    await prisma.customer.createMany({ data: customers });
  };

  const createRestaurants = async () => {
    const restaurants = [
      { name: "Fuzzy's Taco Shop" },
      { name: "Ted's Cafe Escondido" },
      { name: "The Lazy Donkey" },
    ];
    await prisma.restaurant.createMany({ data: restaurants });
  };

  const createReservations = async () => {
    const reservations = [
      {
        customerId: 1,
        restaurantId: 1,
        date: new Date("2024-10-01"),
        partyCount: 4,
      },
      {
        customerId: 2,
        restaurantId: 2,
        date: new Date("2024-10-02"),
        partyCount: 2,
      },
      {
        customerId: 3,
        restaurantId: 3,
        date: new Date("2024-10-03"),
        partyCount: 6,
      },
    ];
    await prisma.reservation.createMany({ data: reservations });
  };

  await createCustomers();
  await createRestaurants();
  await createReservations();
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('stations').del()
  await knex('stations').insert(
    [
      {
        // id: 1,
        name: "Beruniy",
        path_id: 8 , 
        forward_id: 2,
        backward_id: null,
        has_path_link: false,
      },
      {
        // id: 2,
        name: "Tinchlik",
        path_id: 8 , 
        forward_id: 3,
        backward_id: 1,
        has_path_link: false,
      },
      {
        // id: 3,
        name: "Chorsu",
        path_id: 8 , 
        forward_id: 4,
        backward_id: 2,
        has_path_link: false,
      },
      {
        // id: 4,
        name: "Gafur Gulom",
        path_id: 8 , 
        forward_id: 3,
        backward_id: 5,
        has_path_link: false,
      },
      {
        // id: 5,
        name: "Alisher Navoiy",
        path_id: 8 , 
        forward_id: 6,
        backward_id: 4,
      has_path_link: true,
    },
    {
      // id: 6,
      name: "Uzbekistan",
      path_id: 8 , 
      forward_id: 5,
      backward_id: 7,
      has_path_link: false,
    },
    {
      // id: 7,
      name: "Kosmonavtlar",
      path_id: 8 , 
      forward_id: 8,
      backward_id: 6,
      has_path_link: false,
    },
    {
      // id: 8,
      name: "Oybek",
      path_id: 8 , 
      forward_id: 7,
      backward_id: 9,
      has_path_link: true,
    },
    {
      // id: 9,
      name: "Toshkent",
      path_id: 8 , 
      forward_id: 10,
      backward_id: 8,
      has_path_link: false,
    },
    {
      // id: 10,
      name: "Mashinasozlar",
      path_id: 8 , 
      forward_id: 9,
      backward_id: 11,
      has_path_link: false,
      
    },
    {
      // id: 11,
      name: "Do'stlik",
      path_id: 8 , 
      forward_id: null,
      backward_id: 10,
      has_path_link: true,
    }
    ]
  );
};

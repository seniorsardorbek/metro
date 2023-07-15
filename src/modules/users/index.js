const fs = require("fs");
const path = require("path");
const db = require("../../db");

const typeDefs = fs.readFileSync(path.join(__dirname, "_schema.gql"), "utf8");

const resolvers = {
  Query: {
    metros: async () => {
      const datas = await db("metros").select("*");
      return datas;
    },
    metro: async (_, parent) => {
      const datas = await db("metros").where({ id: parent.id }).first();
      return datas;
    },
    paths: async () => {
      const datas = await db("paths").select("*");
      return datas;
    },
    path: async (_, parent) => {
      const datas = await db("paths").where({ id: parent.id }).first();
      return datas;
    },
    stations: async () => {
      const datas = await db("stations").select("*");
      return datas;
    },
    station: async (_, parent) => {
      const datas = await db("stations").where({ id: parent.id }).first();
      return datas;
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};

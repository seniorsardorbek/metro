const { makeExecutableSchema } = require('@graphql-tools/schema/makeExecutableSchema');
const usersModule = require('../modules/users');
const schema = makeExecutableSchema({
  typeDefs: [
    usersModule.typeDefs,
    
  ],
  resolvers: [
    usersModule.resolvers,
    // postsModule.resolvers
  ],
});

module.exports = schema;

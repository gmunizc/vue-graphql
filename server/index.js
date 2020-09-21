const { ApolloServer, gql } = require('apollo-server');
const { data, currentUserId } = require('./database');

const schema = gql(`
  type Query {
    currentUser: User
    postsByUser(userId: String!): [Post]
  }

  type User {
    id: ID!
    username: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    content: String!
    userId: ID!
  }
`);

const resolvers = {
  Query: {
    currentUser(_, __, { data, currentUserId }) {
      let user = data.users.find(u => u.id === currentUserId);
      return user;
    },
    postsByUser(_, { userId }, { data }) {
      let posts = data.posts.filter(p => p.userId === userId);
      return posts;
    }
  },

  User: {
    posts(parent, __, { data }) {
      let posts = data.posts.filter(p => p.userId === parent.id);
      return posts;
    }
  }
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers,
  context: {
    currentUserId,
    data
  }
});

server.listen(4001).then(({ url }) => {
  console.log('API server running at localhost: 4001');
});

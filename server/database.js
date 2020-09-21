let data = {
  posts: [
    {
      id: 'xyz-1',
      content: 'First Post - Hello World',
      userId: 'abc-1',
    },
    {
      id: 'xyz-2',
      content: 'Second Post - Hello again',
      userId: 'abc-1',
    },
    {
      id: 'xyz-3',
      content: 'Random Post',
      userId: 'abc-2'
    }
  ],

  users: [
    {
      id: 'abc-1',
      username: 'andy25',
    },
    {
      id: 'abc-2',
      username: 'randomUser'
    }
  ]
};

const currentUserId = 'abc-1';

module.exports = { data, currentUserId };



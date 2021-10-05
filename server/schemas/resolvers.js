
const {User, Book} = require('../models');


const resolvers = {
    Query: {
        user: async() => {
            return User.find({});
        },
        books: async(parent, {_id}) =>{
            const params = _id? {_id} : {};
            return Book.find(params);
        },
    },
    Mutation: {
        createBook: async (parent, args) => {
            const book = await Book.create(args);
            return book;
        },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        }
    }
       

    }
};

module.exports = resolvers;
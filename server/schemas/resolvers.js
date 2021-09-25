const {User, Book} = require('../models');

const revolvers = {
    Query: {
        user: async() => {
            return User.find({});
        },
        books: async(parent, {_id}) =>{
            const params = _id? {_id} : {};
            return Book;
        },
    },
    Mutation: {
        createBook: async (parent, args) => {
            const book = await Book.create(args);
            return book;
        },

    }
};

module.exports = resolvers;
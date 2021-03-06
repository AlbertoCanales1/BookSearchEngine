
const {User, Book} = require('../models');


const resolvers = {
    Query: {
       client: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id }).select('-__v -password')
                console.log(userData);
                return userData;   
            }
        },
    },

        Mutation : {
            login:  async (parent, {  email, password }) => {
                const user = await User.findOne({ email });
                if (!user) {
                    throw new AuthenticationError('Invalid email address');
                
                    const correctPw = await user.isCorrectPassword(password);
                
                }
                const token = signToken(user);
                return { token, user };
            },
            addUser: async (parent, { username, email, password }) => {
                const user = await User.create({ username, email, password });
                const token = signToken(user);
                return { token, user };
            },

            bookSave: async (parent, { bookInfo }, context) => {
                console.log(context.user)
                if (context.user) {
                    const updatedUser = await User.findByIdAndUpdate(
                        { _id: context.user._id },
                        { $push: { bookSaved: bookInfo }},                
                        { new: true }
                    ).populate('bookSaved');
                    return updatedUser;
                    }
                }
        }



}

module.exports = resolvers;

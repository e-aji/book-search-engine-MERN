const { model } = require('mongoose');
const {Book, User} = require ('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {


    Query: {

        users: async () => {
            return User.find().populate('books');
          },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('books');
        },
        books : async () => {


        },
        book: async () => {


        },
        me: async (parent, args, context) => {
        if (context.user) {
            return User.findOne({ _id: context.user._id }).populate('books');
        }
        throw AuthenticationError;
        },
    },


    Mutation: {

        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
          },
        login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
    
        if (!user) {
            throw AuthenticationError;
        }
    
        const correctPw = await user.isCorrectPassword(password);
    
        if (!correctPw) {
            throw AuthenticationError;
        }
    
        const token = signToken(user);
    
        return { token, user };
        },
        
        saveBook: async (parent, { book }, context) => {

        },

        removeBook: async (parent, { bookId }, context) => {

        }

    }


}


module.exports = resolvers
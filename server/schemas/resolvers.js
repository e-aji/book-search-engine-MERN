const { model } = require('mongoose');
const {User} = require ('../models');
const { signToken, AuthenticationError } = require('../utils/auth'); 

const resolvers = {

    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
          return userData;
        }
        throw new AuthenticationError('You are not logged in');
      }
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
            throw AuthenticationError('User not found!');
        }
    
        const correctPw = await user.isCorrectPassword(password);
    
        if (!correctPw) {
            throw AuthenticationError('Wrong password!');
        }

        const token = signToken(user);
    
        return { token, user };
        },
        
        saveBook: async (parent, { book }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$addToSet: {savedBooks: book}},
                    {new: true}
                );
                return updatedUser;
            }
            throw AuthenticationError;
            ('You need to be logged in!');
        },

        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: {savedBooks: {bookId}}},
                    {new: true}
                );
                return updatedUser;
            }
            throw AuthenticationError;
            ('You need to be logged in!');

        }

    }

}


module.exports = resolvers
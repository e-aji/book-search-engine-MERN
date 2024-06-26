const {User} = require ('../models');
const { signToken, AuthenticationError } = require('../utils/auth'); 

const resolvers = {

    Query: {

      users: async () => {
        return User.find();
      },
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
          return userData;
        }
        throw new AuthenticationError('You are not logged in');
      }
    },

    Mutation: {

        addUser: async (parent, { username, email, password }) => {
            console.log(username, email, password)

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
    
        saveBook: async (parent, { addedBook }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$addToSet: {savedBooks: addedBook}},
                    {new: true}
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
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
            throw new AuthenticationError('You need to be logged in!');

        }

    }

}


module.exports = resolvers
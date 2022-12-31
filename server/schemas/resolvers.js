const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const { User, Animal } = require('../models');

const resolvers = {
    Query: {
        //gets all data of logged in user
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('animal');
                
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        // gets data of every user
        users: async () => {
            return await User.find()
            .select('-__v -password')
            .populate('animal')
        },
        //gets data of all animals
        animals: async (parent, { username }) => {
            const params = username ? { username } : {};
            return await Animal.find(params).sort({ createdAt: -1 });
        },
        animal: async (parent, { _id }) => {
            return await Animal.findOne({ _id });
        }
    },
    Mutation: {
        //add a new user
        addUser: async(parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async(parent, { username, password }) => {
            const user = await User.findOne({ username });
            if(!user) {
                throw new AuthenticationError('User not found');
        }
        
        const correctPw = await user.isCorrectPassword(password);
        if(!correctPw) {
            throw new AuthenticationError('Wrong password');
        }

        const token = signToken(user);

        return { token, user };
        },
        addAnimal: async (parent, args, context) => {
            if(context.user) {
                const animal = await Animal.create({ ...args, username: context.user.username });
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { animal: animal._id } },
                    { new: true }
                );
                return animal;
            }
            throw new AuthenticationError('Not logged in');
        },
        deleteAnimal: async (parent, args, context) => {
            if(context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { animal: args._id } },
                    { new: true }
                );
                const removeAnimal = await Animal.deleteOne(
                    { _id: args._id }
                );
                return updatedUser;
            }
            throw new AuthenticationError('Not logged in');
        },
    }
}

module.exports = resolvers; 
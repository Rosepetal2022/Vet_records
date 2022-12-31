const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//schmea for users to 
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            minLength: 5
        },
        animal: [
            {
                type: Schema.Types.ObjectId, 
                ref: 'Animal'
            }
        ]
    },
);

userSchema.pre('save', async function (next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const User = model('User', userSchema);

module.exports = User;
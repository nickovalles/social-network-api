const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: 'You must provide a username',
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: 'You must provide a valid email address',
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        // add thoughts
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        // add friends
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// add virtual to get total count of user's friends
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
});

const User = model('User', UserSchema);

module.exports = User;
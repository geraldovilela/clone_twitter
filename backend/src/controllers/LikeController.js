const Tweet = require('../models/Tweet');

module.exports = {
    async store(require, response) {
        const tweet = await Tweet.findById(require.params.id);

        tweet.set({likes: tweet.likes + 1});

        await tweet.save();

        return response.json(tweet);

    },
}


const Tweet = require('../models/Tweet');

module.exports = {
    async index(require, response) {
        const tweets = await Tweet.find({}).sort("-createdAt");

        return response.json(tweets);

    },
    async store(require, response) {
        const tweet = await Tweet.create(require.body);

        return require.json(tweet);

    }
}
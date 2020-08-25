const { Comment, Image } = require('../models');

async function imagesCounter() {
    return await Image.countDocuments();
}

async function commentsCounter() {
    return await Comment.countDocuments();
}

async function imageTotalViewsCounter() {
    // Mongodb aggregation.
    const result = await Image.aggregate([{
        $group: {
            _id: 1,
            viewsTotal: {$sum: '$views'}
        }
    }]);
    return result[0].viewsTotal;
}

async function likesTotalCounter() {
    const result = await Image.aggregate([{
        $group: {
            _id: 1,
            likesTotal: {$sum: '$likes'}
        }
    }]);
    return result[0].likesTotal;
}

module.exports = async () => {

    // Ejecución en paralelo de todas las funciones asincronas y retorna un array con sus
    // resultados.
    const results = await Promise.all([
        imagesCounter(),
        commentsCounter(),
        imageTotalViewsCounter(),
        likesTotalCounter()
    ]);

    return {
        images: results[0],
        comments: results[1],
        views: results[2],
        likes: results[3]
    }

}
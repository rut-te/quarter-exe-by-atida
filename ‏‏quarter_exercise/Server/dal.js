const db = require('./DB');

const getAll = () => {
    return new Promise((resolve, reject) => {
        resolve(db.cardsArr);
    });
};

const put = (cardDetails) => {
    const index = db.cardsArr.findIndex(card => card.id == cardDetails.id);
    db.cardsArr[index] = cardDetails;
    return new Promise((resolve, reject) => {
        resolve(db.cardsArr);
    });
};

const post = (cardDetails) => {
    const newCard ={
        id: db.nextId++,
        color: cardDetails.color,
        text: cardDetails.text
    }
    db.cardsArr.push(newCard);
    return new Promise((resolve, reject) => {
        resolve(db.cardsArr);
    });
};

const delete_ = (cardId) => {
    db.cardsArr = db.cardsArr.filter(card => card.id !== cardId);
    return new Promise((resolve, reject) => {
        resolve(db.cardsArr);
    });
};

const crudFunctions = {
    getAll,
    put,
    post,
    delete_
};

module.exports = crudFunctions;
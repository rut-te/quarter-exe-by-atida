const express = require('express');
const dal = require('./dal');
const router = express.Router();

router.get('/', async (req, res) => {
    dal.getAll()
        .then((results) => {
            console.log("All books retrieved:", results);
            res.status(200).json(results);
        })
        .catch((err) => {
            console.error("Error retrieving all books:", err);
            res.status(404).json({ error: "An error occurred while retrieving POSTS" });
        });
});

router.put('/:cardId', async (req, res) => {
    const cardId = req.params.cardId;
    const cardDetails= req.body.cardDetails;
    dal.put(cardId,cardDetails)
        .then((results) => {
            console.log("update card:", results);
            res.status(200).json(results);
        })
        .catch((err) => {
            console.error("Error ypdate card", err);
            res.status(404).json({ error: "An error occurred while updating card" });
        });
});

router.post('/', async (req, res) => {
    const cardDetails= req.body.cardDetails;
    dal.post(cardDetails)
        .then((results) => {
            console.log("new card add", results);
            res.status(200).json(results);
        })
        .catch((err) => {
            console.error("Error add card", err);
            res.status(404).json({ error: "An error occurred while adding card" });
        });
});

router.delete('/:cardId', async (req, res) => {
    const cardId = req.params.cardId;
    dal.delete(cardId)
        .then((results) => {
            console.log("card delete", results);
            res.status(200).json(results);
        })
        .catch((err) => {
            console.error("Error retrieving deleting card", err);
            res.status(404).json({ error: "An error occurred while deleting card" });
        });
});

module.exports = router;
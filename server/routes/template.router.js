const express = require('express');
const pool = require('../modules/pool');
//const { l } = require('vite/dist/node/types.d-aGj9QkWt');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  const qText = `SELECT * FROM "prompts" WHERE "id" = $1;`;
  pool.query(qText, [req.params.id])
  .then((r) => res.send(r.rows))
  .catch((e) => {
    console.log('Error in server-side GET request', e);
    res.sendStatus(500);
  })
});

router.put('/:id', (req, res) => {
  console.log(req.params.id);
  const qText =  `UPDATE "inventory" SET "acquired" = TRUE WHERE "user_id" = $1;`;
  pool.query(qText, [req.params.id]).then(() => {
    res.sendStatus(200);
  }).catch((e) => {
    console.log('Error in server-side PUT request', e)
  })
});

/**
 * Inventory POST request on Registration
 */
router.post('/', (req, res) => {
    const qText = `INSERT INTO "inventory" ("name", "description", "user_id")
    VALUES ('key', 'key', (SELECT "id" FROM "user" WHERE "username" = $1));`
    pool.query(qText, [req.body.username]).then((r) => {
      res.sendStatus(201);
    }).catch((e) => {
      console.log('Error in server-side POST for inventory', e);
      res.sendStatus(500);
    })
});

module.exports = router;

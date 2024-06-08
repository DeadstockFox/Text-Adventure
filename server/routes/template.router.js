const express = require('express');
const pool = require('../modules/pool');
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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;

const express = require('express');
const postsDB = require('./db.js');

const router = express.Router();

router.get('/', (req, res) => {
 postsDB
  .find()
  .then(posts => {
   res.status(200).json(posts);
  })
  .catch(err => {
   res
    .status(500)
    .json({ error: 'The posts information could not be retrieved.' });
  });
});

router.get('/:id', (req, res) => {
 const { id } = req.params;
 postsDB
  .findById(id)
  .then(post => {
   if (post && post.length > 0) {
    res.status(200).json(post);
   } else {
    res
     .status(404)
     .json({ message: 'The post with the specified ID does not exist.' });
   }
  })
  .catch(err => {
   res
    .status(500)
    .json({ error: 'The post information could not be retrieved.' });
  });
});
   }
  })
  .catch(err => {
   res.status(500).json({ err });
  });
});

module.exports = router;
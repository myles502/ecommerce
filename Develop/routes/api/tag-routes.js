const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// find all tags
  // be sure to include its associated Product data
router.get('/', (req, res) => {
  try{
    const tagData = await Tag.findAll({
      include: [Product,ProductTag]
    }); 
    res.status(200).json(tagData);
  } catch (err){
    res.status(500).json(err);
  }
});
// find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', (req, res) => {
  try{
    const tagData = await Tag.findByPk(req.params.id, {
      include: [Product,ProductTag]
    }); 
    res.status(200).json(tagData);
  } catch (err){
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No Tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

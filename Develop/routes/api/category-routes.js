const router = require('express').Router();
const { Category, Product } = require('../../models');
const { restore } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => { 
  try{
    const categoryData = await Category.findAll({
      include: [Product]
    }); 
    res.status(200).json(categoryData);
  } catch (err){
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findByPk(req.params.id, {
      include: [Product]
    }); 
    res.status(200).json(categoryData);
  } catch (err){
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try{
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err){
    res.status(500).json(err);
  }
});
//update a category by its `id` value 
router.put('/:id', (req, res) => {
  try {
    const categoryData = await Category.update(req.body.id);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);// do i add where id:req.body.id?
  }
});
  // delete a category by its `id` value

router.delete('/:id', (req, res) => {
  try {
    const CategoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!CategoryData) {
      res.status(404).json({ message: 'No Category found with this id!' });
      return;
    }

    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

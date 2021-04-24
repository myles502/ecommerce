// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category, {
  // Define the third table needed to store the foreign keys
  foreignKey: 'category_id',
  onDelete: 'cascade',
  // Define an alias for when data is retrieved
 
});


// Categories have many Products
Category.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  foreignKey: 'category_id',
  
  // Define an alias for when data is retrieved
 
});
// Products belongToMany Tags (through ProductTag)
// Products belongsTo Category
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: ProductTag,
  // as: 'product_tags',
  foreignKey: 'product_id', 
  // Define an alias for when data is retrieved
 
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: ProductTag,
  // as: 'product_tags',
  foreignKey: 'tag_id', 
  // Define an alias for when data is retrieved
 
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

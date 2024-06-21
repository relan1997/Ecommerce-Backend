import Category from "../src/models/categoryModel";
import Product from "../src/models/productModel";

const createProduct = async (reqData) => {
  let topLevel = await Category.findOne({ name: reqData.topLevelCategory });

  if (!topLevel) {
    topLevel = new Category({
      name: reqData.topLevelCategory,
      level: 1,
    });
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory,
    parentCategory: topLevel._id,
  });

  if (!secondLevel) {
    secondLevel = new Category({
      name: reqData.secondLevelCategory,
      parentCategory: topLevel._id,
      level: 2,
    });
  }

  let thirdLevel = await Category.findOne({
    name: reqData.thridLevelCategory,
    parentCategory: secondLevel._id,
  });

  if (!thridLevelCategory) {
    thirdLevel = new Category({
      name: reqData.thridLevelCategory,
      parentCategory: secondLevelCategory._id,
      level: 3,
    });
  }

  const product = new Product({
    title: reqData.title,
    color: reqData.color,
    description: reqData.description,
    discountedPrice: reqData.discountedPrice,
    discountPercent: reqData.discountPercent,
    imageUrl: reqData.imageUrl,
    brand: reqData.brand,
    price: reqData.price,
    sizes: reqData.size,
    quantity: reqData.quantity,
    category: thirdLevel._id,
  });
  return await product.save();
};

const deleteProduct = async (productId) => {
  const product = await findProductById(productId);

  await Product.findByIdAndDelete(productId);
  return "Product deleted successfully";
};

const updateProduct = async (productId, reqData) => {
  return await Product.findByIdAndUpdate(productId, reqData);
};

const findProductById = async (id) => {
  const product = await Product.findById(id).populate("category").exec();
  // for meaning of exec and lean functions in mongoose pls read https://chatgpt.com/c/e1a1d2d8-2cf0-44b9-a072-d97138b2f069

  if (!product) {
    throw new Error("Product not found with id ", id);
  }
  return product;
};

const getAllProducts = async (reqQuery) => {
  let {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqQuery;

  pageSize = pageSize || 10;

  let query = await Product.find().populate("category");

  if (category) {
    const existCategory = await Category.findOne({ name: category });
    if (existCategory) {
      query = query.where("category").equals(existCategory._id); //jo category humne reqQuery mai di hai wahi waale products tumahre query mai set ho jaayenge
    } else {
      return { content: [], currentPage: 1, totalPages: 0 };
    }
  }
  if (color) {
    // the color variable is an array here
    const colorSet = new Set(
      color.split(",").map((color) => color.trim().toLowerCase())
    );

    const colorRegex =
      colorSet.size > 0 ? new Regex([...colorSet].join("|", "i")) : null;

    query = query.where("color").regex(colorRegex);

    /* This modifies the query to filter products whose color field matches the colorRegex. */
  }
  if (sizes) {
    const sizesSet = new Set(sizes);
    query = query.where("sizes.name").in([...sizesSet]);

    /* query = query.where('sizes.name').in([...sizesSet]):
This modifies the query to filter products whose sizes.name field contains any of the sizes in the sizesSet.
in([...sizesSet]):
This specifies that the sizes.name field should match any of the values in the sizesSet. */
  }
  if (minPrice && maxPrice) {
    query = query.where("dicountedPrice").gte(minPrice).lte(maxPrice);
  }

  if (minDiscount) {
    query = query.where("discountPercent").gte(minDiscount);
  }

  if (stock) {
    if (stock == "in_stock") {
      query = query.where("quantity").gt(0);
    }
    if (stock == "out_of_stock") {
      query = query.where("quantity").gt(1);
    }
  }

  if (sort) {
    const sortDirection = sort === "price_high" ? -1 : 1;
    query = query.sort({ discountedPrice: sortDirection });
  }

  const totalProducts = await Product.countDocuments(query);

  const skip = (pageNumber - 1) * pageSize;

  query = query.skip(skip).limit(pageSize);

  const products = await query.exec(); // the query now has been executed and therefore no changes can be made to it

  const totalPages = Math.ceil(totalProducts / pageSize);

  return { content: products, currentPage: pageNumber, totalPages };
};

const createMutipleProduct = async (products) => {
  for (let product of products) {
    await createProduct(product);
  }
};

export {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  createMutipleProduct,
  findProductById,
};

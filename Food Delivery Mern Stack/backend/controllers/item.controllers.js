import Item from "../models/item.model";
import Shop from "../models/shop.model";
import uploadOnCloudinary from "../utils/cloudinary";

export const addItem = async (req, res) => {
  try {
    const { name, category, foodType, price } = req.body;
    let image;
    if (req.file) {
      image = await uploadOnCloudinary(req.file.path);
    }
    const shop = await Shop.findOne({ owner: req.userId });
    if (!shop) {
      return res.status(400).json({ message: "Shop not Found" });
    }
    const item = await Item.create({
      name,
      category,
      foodType,
      price,
      image,
      shop: shop_id,
    });
    return res.status(201).json(item);
  } catch (error) {
    return res.status(500).json({ message: `Add Item Error ${error}` });
  }
};

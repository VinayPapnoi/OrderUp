import axios from "axios";
import CustomError from "../utils/customError.js";

const ML_MODEL_URL = "https://recommend-88ef.onrender.com/predict";

export const getTop10Recommendations = async (req, res, next) => {
  try {
    const { Category, Group_Size, Rating, Avg_Spend, Delivery_Time } = req.body;

    const groupSize = Number(Group_Size);
    const rating = Number(Rating);
    const avgSpend = Number(Avg_Spend);
    const deliveryTime = Number(Delivery_Time);

    const validCategories = [
      "Dessert",
      "Drink",
      "Fast Food",
      "Main Course",
      "Snack",
    ];

    if (!Category) {
      throw new CustomError("Category is required", 400);
    }
    if (!validCategories.includes(Category)) {
      throw new CustomError(
        `Invalid Category. Must be one of: ${validCategories.join(", ")}`,
        400
      );
    }
    
    if (avgSpend < 0 || avgSpend > 1000) {
      throw new CustomError("Avg_Spend must be between 0 and 1000", 400);
    }

    if (groupSize < 1 || groupSize > 10) {
      throw new CustomError("Group_Size must be between 1 and 10", 400);
    }
     
    if (rating < 1 || rating > 5) {
      throw new CustomError("Rating must be between 1 and 5", 400);
    }

    if (deliveryTime < 0 || deliveryTime > 30) {
      throw new CustomError("Delivery_Time must be between 0 and 30 minutes", 400);
    }

    const response = await axios.post(
      ML_MODEL_URL,
      {  Category, Group_Size, Rating, Avg_Spend, Delivery_Time},
      {
        headers: { "Content-Type": "application/json" },
        timeout: 10*60000, // 10 minutes timeout
      }
    );

    return res.status(200).json({
      success: true,
      recommendations: response.data,
    });
  } catch (error) {
    console.error("🔴 ML model request failed:", error);

    // 🧠 Preserve real ML or validation messages
    const mlErrorMessage =
      error.response?.data?.message ||
      error.message ||
      "Failed to connect to ML service. Please try again later.";

    // Detect if it's a user-facing validation error
    const isClientError =
      error.response?.status === 400 ||
      mlErrorMessage.includes("must") ||
      mlErrorMessage.includes("invalid");

    const statusCode = isClientError ? 400 : 500;
    next(new CustomError(mlErrorMessage, statusCode));
  }
};












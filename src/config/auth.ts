import "dotenv/config";

export default {
  secret_token: process.env.SECRET_TOKEN,
  expires_in_token: "7d",
};

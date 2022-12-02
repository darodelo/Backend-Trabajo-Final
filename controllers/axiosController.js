const axios = require('axios');


const axiosRequest = async (req, res) => {
  try {
      const response = await axios.get(
        "https://breakingbadapi.com/api/character/random", { timeout: 10000 })
        res.json(response.data)

  } catch (error) {
      res.json(error.response.data)
  }
}

module.exports = { axiosRequest }
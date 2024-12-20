import axios from 'axios';

/**
 * OpenAI Service
 * Handles communication with OpenAI's moderation endpoint
 */
class OpenAIService {
  static async moderateContent(content) {
    try {
      const openAIKey = process.env.OPENAI_KEY || null
      const response = await axios.post('https://api.openai.com/v1/moderations', {
        input: content
      }, {
        headers: {
          'Authorization': `Bearer ${openAIKey}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error communicating with OpenAI:', error);
      throw new Error('Failed to moderate content');
    }
  }
}

export default OpenAIService;

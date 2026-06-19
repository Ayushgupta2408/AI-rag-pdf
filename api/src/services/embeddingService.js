import { HuggingFaceInferenceEmbeddings } from '@langchain/community/embeddings/hf';
import dotenv from 'dotenv';

dotenv.config();

const createEmbeddingsService = () => {
  if (!process.env.HUGGINGFACE_API_KEY) {
    throw new Error("Hugging Face API key is required");
  }

  return new HuggingFaceInferenceEmbeddings({
    apiKey: process.env.HUGGINGFACE_API_KEY,
    model: "sentence-transformers/all-MiniLM-L6-v2",
    maxRetries: 5,
  });
};

export default createEmbeddingsService;
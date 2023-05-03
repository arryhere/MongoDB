import dotenv from 'dotenv';

dotenv.config()

export const config = {
  server: {
    host: 'localhost',
    port: 3001
  },
  db: {
    username: 'arijitdasofficial',
    password:'xsDL82iie3jxCpkF',
    uri: 'mongodb+srv://arijitdasofficial:xsDL82iie3jxCpkF@cluster1.fqu0vee.mongodb.net/?retryWrites=true&w=majority'
  }
}
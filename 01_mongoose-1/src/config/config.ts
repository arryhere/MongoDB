import dotenv from 'dotenv';

dotenv.config();

export const config = {
  server: {
    host: 'localhost',
    port: 3001,
  },
  db: {
    // username: 'arijitdasofficial',
    username: 'arijit',
    // password: 'xsDL82iie3jxCpkF',
    password: 'J2kF6x2pgdpPRExc',
    // uri: 'mongodb+srv://arijitdasofficial:xsDL82iie3jxCpkF@cluster1.fqu0vee.mongodb.net/?retryWrites=true&w=majority'
    uri: 'mongodb+srv://arijit:J2kF6x2pgdpPRExc@cluster1.9f26iul.mongodb.net/?retryWrites=true&w=majority',
  },
};

import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://luckysahu:3GcRp2s0iYYRfdNs@cluster0.c9jak.mongodb.net/`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;


// Middleware to parse JSON in request body
app.use(express.json());
app.use(express.static(__dirname))
// Route to handle incoming data via URL query parameters

app.get("/",(req,res)=>{
    res.send("index.html")
})
app.post('/ls-data', async (req, res) => {
    try {

        // MongoDB Atlas connection string
        const mongoURI = 'mongodb+srv://viaseguro:via123@cluster0.quzafgm.mongodb.net/?retryWrites=true&w=majority';
        const dbName = 'LoginandSignup'; // Replace with your database name
        const collectionName = 'LS'; // Replace with your collection name
        const { Name, Mobile, Password } = req.query;


        // Connect to MongoDB Atlas
        const client = new MongoClient(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await client.connect();
        console.log('Connected to MongoDB Atlas');

        // Get a reference to the collection
        const collection = client.db(dbName).collection(collectionName);

        // Create an object to insert into MongoDB
        const dataToInsert = {
            Username: Name,
            Mobilenumber: Mobile,
            Password: Password
            // Add more fields as needed
        };

        // Insert the object into the collection
        const result = await collection.insertOne(dataToInsert);
        console.log('Data saved to MongoDB Atlas:');
        console.log(result.status);

        // Close the MongoDB connection
        client.close();
        console.log('Connection closed');

        return res.status(200).json({ message: 'Data saved to MongoDB Atlas' });
    } catch (error) {
        console.error('Error saving data:', error);
        return res.status(500).json({ message: 'Error saving data' });
    }
});

app.post('/health-data', async (req, res) => {
    try {

        // MongoDB Atlas connection string
        const mongoURI = 'mongodb+srv://viaseguro:via123@cluster0.quzafgm.mongodb.net/?retryWrites=true&w=majority';
        const dbName = 'Health_insurance_details'; // Replace with your database name
        const collectionName = 'HD'; // Replace with your collection name
        const { occu, Bank, Benefi, Age, child, marital, aaorpan,
            income, plan, health, smoke, email, phone, address,
            gender, dob, name } = req.query;


        // Connect to MongoDB Atlas
        const client = new MongoClient(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await client.connect();
        console.log('Connected to MongoDB Atlas');

        // Get a reference to the collection
        const collection = client.db(dbName).collection(collectionName);

        // Create an object to insert into MongoDB
        const dataToInsert = {
            Occupation: occu,
            Bankaccountnumber: Bank,
            Beneficiay: Benefi,
            Age: Age,
            Children: child,
            Maritalstatus: marital,
            Idnumber: aaorpan,
            Income: income,
            Plan: plan,
            PreviousHealthsuffering: health,
            Smoke: smoke,
            Email: email,
            Phone: phone,
            Address: address,
            Gender: gender,
            DOB:dob ,
            Name: name           // Add more fields as needed
        };

        // Insert the object into the collection
        const result = await collection.insertOne(dataToInsert);
        console.log('Data saved to MongoDB Atlas:');
        console.log(result.status);

        // Close the MongoDB connection
        client.close();
        console.log('Connection closed');

        return res.status(200).json({ message: 'Data saved to MongoDB Atlas' });
    } catch (error) {
        console.error('Error saving data:', error);
        return res.status(500).json({ message: 'Error saving data' });
    }
});


app.post('/Term-data', async (req, res) => {
    try {

        // MongoDB Atlas connection string
        const mongoURI = 'mongodb+srv://viaseguro:via123@cluster0.quzafgm.mongodb.net/?retryWrites=true&w=majority';
        const dbName = 'Termlife_insurance_details'; // Replace with your database name
        const collectionName = 'TD'; // Replace with your collection name
        const { occu, Bank, Age, child, marital, aaorpan,
            income, plan, health, smoke, email, phone, address,
            gender, dob, name, agree, emailn, phonen, relation, 
            dobn, nomineename } = req.query;


        // Connect to MongoDB Atlas
        const client = new MongoClient(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await client.connect();
        console.log('Connected to MongoDB Atlas');

        // Get a reference to the collection
        const collection = client.db(dbName).collection(collectionName);

        // Create an object to insert into MongoDB
        const dataToInsert = {
            Occupation: occu,
            Bankaccountnumber: Bank,
            Age: Age,
            Children: child,
            Maritalstatus: marital,
            Idnumber: aaorpan,
            Income: income,
            Plan: plan,
            PreviousHealthsuffering: health,
            Smoke: smoke,
            Email: email,
            Phone: phone,
            Address: address,
            Gender: gender,
            DOB:dob ,
            Name: name,
            Agree: agree,
            Nomineemail: emailn,
            Nominename: nomineename,
            Nomineephone: phonen,
            Relationsip: relation,
            NomineeDOB: dobn
        };

        // Insert the object into the collection
        const result = await collection.insertOne(dataToInsert);
        console.log('Data saved to MongoDB Atlas:');
        console.log(result.status);

        // Close the MongoDB connection
        client.close();
        console.log('Connection closed');

        return res.status(200).json({ message: 'Data saved to MongoDB Atlas' });
    } catch (error) {
        console.error('Error saving data:', error);
        return res.status(500).json({ message: 'Error saving data' });
    }
});

app.post('/premium-data', async (req, res) => {
    try {

        // MongoDB Atlas connection string
        const mongoURI = 'mongodb+srv://viaseguro:via123@cluster0.quzafgm.mongodb.net/?retryWrites=true&w=majority';
        const dbName = 'Termlife_insurance_details'; // Replace with your database name
        const collectionName = 'TD'; // Replace with your collection name
        const { Plan,Id,Premium,Name } = req.query;


        // Connect to MongoDB Atlas
        const client = new MongoClient(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });


        await client.connect();
        console.log('Connected to MongoDB Atlas');

        // Get a reference to the collection
        const collection = client.db(dbName).collection(collectionName);

        // Create an object to insert into MongoDB
        const dataToInsert = {
            Plan: Plan,
            Id: Id,
            Premium: Premium,
            Name: Name
        };

        // Insert the object into the collection
        const result = await collection.insertOne(dataToInsert);
        console.log('Data saved to MongoDB Atlas:');
        console.log(result.status);

        // Close the MongoDB connection
        client.close();
        console.log('Connection closed');

        return res.status(200).json({ message: 'Data saved to MongoDB Atlas' });
    } catch (error) {
        console.error('Error saving data:', error);
        return res.status(500).json({ message: 'Error saving data' });
    }
});

app.post('/amountpaid-data', async (req, res) => {
    try {

        // MongoDB Atlas connection string
        const mongoURI = 'mongodb+srv://viaseguro:via123@cluster0.quzafgm.mongodb.net/?retryWrites=true&w=majority';
        const dbName = 'Amount_paid_details'; // Replace with your database name
        const collectionName = 'AD'; // Replace with your collection name
        const { Amountpaid,Id,Name } = req.query;


        // Connect to MongoDB Atlas
        const client = new MongoClient(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await client.connect();
        console.log('Connected to MongoDB Atlas');

        // Get a reference to the collection
        const collection = client.db(dbName).collection(collectionName);

        // Create an object to insert into MongoDB
        const dataToInsert = {
            Amountpaid: Amountpaid,
            Id: Id,
            Name: Name
        };

        // Insert the object into the collection
        const result = await collection.insertOne(dataToInsert);
        console.log('Data saved to MongoDB Atlas:');
        console.log(result.status);

        // Close the MongoDB connection
        client.close();
        console.log('Connection closed');

        return res.status(200).json({ message: 'Data saved to MongoDB Atlas' });
    } catch (error) {
        console.error('Error saving data:', error);
        return res.status(500).json({ message: 'Error saving data' });
    }
});


// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

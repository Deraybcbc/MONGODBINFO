
const {
    insertPre
} = require("./mongodb")

let pre = {
    "pregunta": {"first": "Que dia es hoy?", "second": "Hola"},
}

let res = {
    "respuesta": "Hoy es Martes"
}

insertPre(pre)

/*
async function run() {
    try {
        // Connect to the Atlas cluster
        await client.connect();
        const db = client.db(dbName);

        // Reference the "people" collection in the specified database
        const col = db.collection("Validacion");

        // Create a new document                                                                                                                                           
        let personDocument = {
            "name": { "first": "Alan", "last": "Turing" },
            "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
        }

        // Insert the document into the specified collection        
        const p = await col.insertOne(personDocument);

        // Find and return the document
        const filter = { "name.last": "Turing" };
        const document = await col.findOne(filter);
        console.log("Document found:\n" + JSON.stringify(document));

    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);*/
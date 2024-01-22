const { MongoClient } = require("mongodb");



// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://deraybcbc:kevin@clusterprueba.l7loetj.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url);

// Reference the database to use
const dbName = "Validacion";


let pregunta = {
    "pregunta": { "fisrts": "Que dia es hoy?", "second": "Hola" }
}

let res = {
    "respuesta": "Hoy es Martes"
}


async function run() {
    try {
        await client.connect();


        //CONEXION
        const db = client.db(dbName);
        const col = db.collection("Validacion");
        /*
        //INSERT
        const result = await col.insertOne({ pregunta });
        console.log(`Pregunta insertada con _id: ${result.insertedId}`);*/
/*
        //UPDATE
        const updateFilter = { "pregunta.pregunta.first": "Que dia es mañana?" }; // Utilizamos un campo conocido para identificar el documento
        const update = await col.updateOne(updateFilter, { $set: { "pregunta.pregunta.first": "Que dia es hoy?" } });
        console.log(`Pregunta actualizada: ${update.modifiedCount} documentos modificados`);*/
/*
        //ELIMINAR
        const deleteFilter = { "pregunta.pregunta.first": "Que dia es hoy?" };
        const result = await col.deleteOne(deleteFilter);
        console.log(`Pregunta eliminada: ${result.deletedCount} documentos eliminados`);*/
/*
        //SELECT
        const selectFilter = { "pregunta.pregunta": "Que dia es hoy?" }; // Criterios de selección
        const selectedDocuments = await col.find(selectFilter).toArray();
        console.log("Documentos seleccionados:");
        selectedDocuments.forEach((doc) => {
            console.log(doc);
        });*/

    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
}

run().catch(console.dir)
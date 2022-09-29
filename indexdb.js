




const dbConnection = window.indexedDB.open('laboratorio', 3);                                   // version 1
let db;
//on success = El successevent se dispara cuando un IDBRequesttiene éxito.
dbConnection.onsuccess = () => {
    db = dbConnection.result;
    console.log("Base de datos abierta", db);
}
// El upgradeneededevento se activa cuando se intentó abrir una base de datos 
// con un número de versión superior a su versión actual.
dbConnection.onupgradeneeded = (e) => {
    db = e.target.result;//elemento que nos devuelve
    console.log("Crear objetos de DB", db);
    const coleccionObjetos = db.createObjectStore('paciente', {
        keyPath: 'id'
    });
    coleccionObjetos.createIndex("id","id", { unique:false});
    coleccionObjetos.createIndex("nombre","nombre", { unique:false});
    coleccionObjetos.createIndex("apellido","apellido", { unique:false});
    coleccionObjetos.createIndex("direccion","direccion", { unique:false});
    coleccionObjetos.createIndex("ciudad","ciudad", { unique:false});
    coleccionObjetos.createIndex("pais","pais", { unique:false});

    const coleccionCitas = db.createObjectStore('citas', {
        keyPath: 'idCita'
    });
    coleccionCitas.createIndex("idCita","idCita", { unique:false});
    coleccionCitas.createIndex("fecha","fecha", { unique:false});
    coleccionCitas.createIndex("descripcion","descripcion", { unique:false});
    coleccionCitas.createIndex("id","id", { unique:false});
  const coleccionServicio = db.createObjectStore('servicios', {
        keyPath: 'idServicio'
    });
    coleccionServicio.createIndex("idServicio","idServicio", { unique:false}); 
    coleccionServicio.createIndex("precio","precio", { unique:false});    
    coleccionServicio.createIndex("descripcion","descripcion", { unique:false});
    coleccionServicio.createIndex("id","id", { unique:false});
    
    
    
    
}
// El errorevento se activa IDBTransactioncuando una solicitud devuelve un error 
// y el evento aparece en el objeto de la transacción.
dbConnection.onerror = (error) =>{
    console.log(error);
}


import Client, { ConnectOptions } from 'ssh2-sftp-client';
import {parse} from 'csv-parse/sync'
import fs from 'node:fs';

const opcionesDeConexion:ConnectOptions={
    host:'56.124.102.18',
    port:22,
    username:'ec2-user',
    privateKey: fs.readFileSync('./src/par_de_clave_region_sur.pem')
}

async function crearClienteSFTP(opcionesDeConexion:ConnectOptions):Promise<Client> {

    
    const conexionSftp=new Client();

    await conexionSftp.connect(opcionesDeConexion);

    return conexionSftp;
}

async function obtenerArchivo(path:string):Promise<Buffer> {
        const clienteSFTP=await crearClienteSFTP(opcionesDeConexion);
    try {
        
        const archivo=await clienteSFTP.get(path);
        return archivo as Buffer;
    } 
    finally{
       await clienteSFTP.end();
    }
}

async function main() {
  const buffer = await obtenerArchivo(
    '/home/ec2-user/bulk/archivo_prueba.csv'
  );

  const objetoParseado=parsearCSV(buffer);

  console.log('Es Buffer:', Buffer.isBuffer(buffer));
  console.log('Tamaño:', buffer.length);
  console.log('Primeros bytes:\n', buffer.toString('utf8').slice(0, 200));
  console.log(objetoParseado);
}

main().catch(console.error);

function parsearCSV(archivoCSV:Buffer):any{

    return parse(archivoCSV.toString('utf-8'),{
        columns:(headers)=>headers.map(h =>snakeToCamel(h)),
        delimiter:';',
        skip_empty_lines:true,
        trim:true
    })
}

function snakeToCamel(str: string) {
  return str.toLowerCase().replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}














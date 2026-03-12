import pkg from "pg" ;

const {Pool}=pkg
const pool = new Pool({
    user: 'postgres',      
    host: 'localhost',          
    database: 'restaurant_db',  
    password: 'Kamili@2000',  
    port: 5432,
  });
  try {
    const client = await pool.connect();
    console.log('Connected to PostgreSQL successfully!');
    client.release(); // release the client back to the pool
  } catch (err) {
    console.error('Connection error:', err);
  }

export default pool;
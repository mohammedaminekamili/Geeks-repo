import pool from "../db.js";


const  getAllItems= async()=>{
    try {
        const result= await pool.query("select * from menu_items")
        console.log(result.rows)
        return result.rows
        
        
    } catch (error) {
        console.error(error)
    }
}

const getItemByName=async(name)=>{
    try {
        
        const result= await pool.query("select distinct * from menu_items where item_name ilike('"+name+"');")
        console.log(result.rows)
        return result.rows
    } catch (error) {
        console.error(error)
    }
}

const createItem= async (name, price)=>{
   try {
 const result= await pool.query("insert into menu_items (item_name,item_price) values ('"+name+"',"+price+");")
    console.log("item created succefuly")
   } catch (error) {
    console.error(error)

   }
    
}

const updateItem=async (id, name, price)=>{
    try {
        const result=await pool.query("update menu_items set item_name='"+name+"',item_price="+price+" where item_id="+id+";")
           console.log("item updated succefuly")
          } catch (error) {
           console.error(error)
       
          }
}

const deleteItem= async (id)=>{
    try {
        const result=await pool.query("delete from menu_items where item id="+id+";")
           console.log("item created succefuly")
          } catch (error) {
           console.error(error)
       
          }
}

export {deleteItem,createItem,getAllItems,getItemByName,updateItem}
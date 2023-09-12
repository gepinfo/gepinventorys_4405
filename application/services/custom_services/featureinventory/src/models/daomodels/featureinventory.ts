
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const featureinventorySchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   item_uuid: { type: String },
   name: { type: String },
   type: { type: String },
   description: { type: String },
   attachments: { type: String },
   price: { type: String },
   price_currency_type: { type: String },
   cost: { type: String },
   cost_currency_type: { type: String },
   tag: { type: String },
   isMatrix: { type: String },
   matrixid: { type: String },
   warehouse: { type: String },
   warehouse_loc: { type: String },
   lot_or_batch_num: { type: String },
   manufacturer: { type: String },
   manufacture_country: { type: String },
   external_reference_one: { type: String },
   gephistoryid: { type: String }
})

const featureinventoryModel = mongoose.model('featureinventory', featureinventorySchema, 'featureinventory');
export default featureinventoryModel;

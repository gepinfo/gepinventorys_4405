import * as mongoose from 'mongoose';
import featureinventoryModel from '../models/daomodels/featureinventory';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class featureinventoryDao {
    private featureinventory = featureinventoryModel;
    constructor() { }
    
    public async GpDelete(featureinventoryId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into featureinventoryDao.ts: GpDelete');

    

    
    
    
    this.featureinventory.findByIdAndRemove(featureinventoryId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from featureinventoryDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(featureinventoryData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into featureinventoryDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(featureinventoryData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.featureinventory.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from featureinventoryDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(featureinventoryData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into featureinventoryDao.ts: GpSearchForUpdate');

    

    
    
    
    this.featureinventory.findOneAndUpdate({ _id: featureinventoryData._id }, featureinventoryData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from featureinventoryDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(featureinventoryData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into featureinventoryDao.ts: GpUpdate');

    

    
    
    
    featureinventoryData.last_modified_date = new Date(),
                                                   this.featureinventory.findOneAndUpdate({ _id: featureinventoryData._id }, featureinventoryData).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from featureinventoryDao.ts: GpUpdate');

         let newresult = result.toObject();  
                                                     delete newresult._id;
                                                     result.last_modified_date = "";
                                                    let temp = new featureinventoryModel(newresult);
                                                    temp.save();

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(featureinventoryId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into featureinventoryDao.ts: GpGetEntityById');

    

    
    
    
    this.featureinventory.find({"gephistoryid":featureinventoryId}).sort({last_modified_date: -1}).limit(1).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from featureinventoryDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into featureinventoryDao.ts: GpGetAllValues');

    

    
    
    
    this.featureinventory.aggregate(([
                        { "$sort": { "last_modified_date": 1 } },{ "$group": { "_id": "$gephistoryid",  "item": { "$last": "$$ROOT" }  }}    
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from featureinventoryDao.ts: GpGetAllValues');

        let lastupdated:any = [];
                         result.forEach(item=> lastupdated.push(item.item))
                         result=lastupdated 

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(featureinventoryData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into featureinventoryDao.ts: GpCreate');

    let gepCallGuid = `${generate(dictionary.numbers, 50)}`;
                    featureinventoryData.gephistoryid = gepCallGuid;
                    let temp = new featureinventoryModel(featureinventoryData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from featureinventoryDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(featureinventoryData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into featureinventoryDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.featureinventory.aggregate(([
                        { $match: { $and: [{ created_by: featureinventoryData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from featureinventoryDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}
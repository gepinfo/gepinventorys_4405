import { Request, Response } from 'express';
import {featureinventoryDao} from '../dao/featureinventoryDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let featureinventory = new featureinventoryDao();

export class featureinventoryService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into featureinventoryService.ts: GpDelete')
     let  featureinventoryId = req.params.id;
     featureinventory.GpDelete(featureinventoryId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from featureinventoryService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into featureinventoryService.ts: GpSearch')
     let  featureinventoryData = req.query;
     featureinventory.GpSearch(featureinventoryData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from featureinventoryService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into featureinventoryService.ts: GpSearchForUpdate')
     let  featureinventoryData = req.body;
     featureinventory.GpSearchForUpdate(featureinventoryData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from featureinventoryService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into featureinventoryService.ts: GpUpdate')
     let  featureinventoryData = req.body;
     featureinventory.GpUpdate(featureinventoryData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from featureinventoryService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into featureinventoryService.ts: GpGetEntityById')
     let  featureinventoryId = req.params.id;
     featureinventory.GpGetEntityById(featureinventoryId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from featureinventoryService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into featureinventoryService.ts: GpGetAllValues')
     
     featureinventory.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from featureinventoryService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into featureinventoryService.ts: GpCreate')
     let  featureinventoryData = req.body;
     featureinventory.GpCreate(featureinventoryData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from featureinventoryService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into featureinventoryService.ts: GpGetNounCreatedBy')
     let  featureinventoryData = { created_by: req.query.createdby };
     featureinventory.GpGetNounCreatedBy(featureinventoryData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from featureinventoryService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}
import { Request, Response } from 'express';
import { featureinventoryService } from '../service/featureinventoryService';
import { CustomLogger } from '../config/Logger'
let featureinventory = new featureinventoryService();

export class featureinventoryController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    featureinventory.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into featureinventoryController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from featureinventoryController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    featureinventory.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into featureinventoryController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from featureinventoryController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    featureinventory.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into featureinventoryController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from featureinventoryController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    featureinventory.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into featureinventoryController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from featureinventoryController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    featureinventory.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into featureinventoryController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from featureinventoryController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    featureinventory.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into featureinventoryController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from featureinventoryController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    featureinventory.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into featureinventoryController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from featureinventoryController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    featureinventory.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into featureinventoryController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from featureinventoryController.ts: GpGetNounCreatedBy');
    })}


}
import { Request, Response, NextFunction } from "express";
import { featureinventoryController } from '../controller/featureinventoryController';


export class Routes {
    private featureinventory: featureinventoryController = new featureinventoryController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/featureinventory/:id').delete(this.featureinventory.GpDelete);
app.route('/featureinventory/get/search').get(this.featureinventory.GpSearch);
app.route('/featureinventory/get/update').put(this.featureinventory.GpSearchForUpdate);
app.route('/featureinventory').put(this.featureinventory.GpUpdate);
app.route('/featureinventory/:id').get(this.featureinventory.GpGetEntityById);
app.route('/featureinventory').get(this.featureinventory.GpGetAllValues);
app.route('/featureinventory').post(this.featureinventory.GpCreate);
app.route('/featureinventory/userid/created_by').get(this.featureinventory.GpGetNounCreatedBy);
     }

}
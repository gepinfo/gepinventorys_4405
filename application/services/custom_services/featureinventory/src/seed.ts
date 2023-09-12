import * as mongoose from 'mongoose';
import { featureinventorySchema } from './models/daomodels/featureinventory';

const featureinventoryModel = mongoose.model('featureinventory', featureinventorySchema);

export class Seed {

    constructor() {

    }

    

}

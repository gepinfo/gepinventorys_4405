import { Component, OnInit, ViewChild } from '@angular/core';
import { GetallgepinventoryService } from './getallgepinventory.service';





@Component({
  selector: 'app-getallgepinventory',
  templateUrl: './getallgepinventory.component.html',
  styleUrls: ['./getallgepinventory.component.scss'],
})

export class GetallgepinventoryComponent implements OnInit {
    columnDefs: any = [{ headerName: 'item_uuid', field: 'item_uuid'  },{ headerName: 'type', field: 'type'  },{ headerName: 'description', field: 'description'  },{ headerName: 'name', field: 'name'  },{ headerName: 'attachements', field: 'attachments'  },{ headerName: 'price', field: 'price'  },{ headerName: 'price_currency_', field: 'price_currency_type'  },{ headerName: 'cost', field: 'cost'  },{ headerName: 'cost_currency_type', field: 'cost_currency_type'  },{ headerName: 'tag', field: 'tag'  },{ headerName: 'ismatrix', field: 'isMatrix'  },{ headerName: 'warehouse', field: 'warehouse'  },{ headerName: 'warehouse_location', field: 'warehouse_loc'  },{ headerName: 'manufacturer', field: 'manufacturer'  },{ headerName: 'manufacture_country', field: 'manufacture_country'  },{ headerName: 'lot_or_batch', field: 'lot_or_batch_num'  },{ headerName: 'column_17', field: 'external_reference_one'  },];
    public featureinventory:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        item_uuid: '',
        name: '',
        type: '',
        description: '',
        attachments: '',
        price: '',
        price_currency_type: '',
        cost: '',
        cost_currency_type: '',
        tag: '',
        isMatrix: '',
        matrixid: '',
        warehouse: '',
        warehouse_loc: '',
        lot_or_batch_num: '',
        manufacturer: '',
        manufacture_country: '',
        external_reference_one: '',
        gephistoryid: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any[] = [];
 	rowIndex: Number = 0;




    constructor (
        private getallgepinventoryService: GetallgepinventoryService,
    ) { }

    ngOnInit() {
        this.featureinventory.created_by = sessionStorage.getItem('email') || ''; 
        


        this.GpGetAllValues();
    
    }
    GpGetAllValues() {
        this.getallgepinventoryService.GpGetAllValues().subscribe((data:any) => {
            this.rowData = data;
 	 	console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}
import Sequilize from 'sequelize';
import {connect} from '../config/dbconfig.js';

const Sales = connect.define('sales',{
    region:{
        type: Sequilize.STRING,
        required: true,
    },
    country:{
        type:Sequilize.STRING,
        required:true,
    },
    itemType:{
        type:Sequilize.STRING,
        required:true,
    },
    salesChannel:{
        type: Sequilize.STRING,
        required:true,
    },
    priority:{
        type: Sequilize.STRING,
        required:true,
    },
    orderDate:{
        type: Sequilize.DATEONLY,
        required:true,
    },
    orderId:{
        type:Sequilize.BIGINT,
        required:true,
        unique:true,
    },
    shipDate:{
        type:Sequilize.DATEONLY,
        required:true,
    },
    unitsSold:{
        type:Sequilize.STRING,
        required: true,
    },
    unitPrice:{
        type: Sequilize.DECIMAL(10,2),
        required:true
    },
    unitCost:{
        type: Sequilize.DECIMAL(10,2),
        required:true
    },
    totalRevenue:{
        type: Sequilize.DECIMAL(10,2),
        required:true,
    },
    totalCost:{
        type: Sequilize.DECIMAL(10,2),
        required:true,
    },
    totalProfit:{
        type: Sequilize.DECIMAL(10,2),
        required:true
    }
});

Sales.sync().then(()=>{
    console.log('table created');
})

export default Sales;
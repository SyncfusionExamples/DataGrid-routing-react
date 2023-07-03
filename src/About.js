import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { data } from './data';

function About() {
    return (
        <div className='control-pane'>
            <div className='control-section'>
                <GridComponent dataSource={data.slice(0,5)} >
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'></ColumnDirective>
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'></ColumnDirective>
                        <ColumnDirective field='OrderDate' headerText='Order Date' width='130' format='yMd' textAlign='Right' />
                        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' />
                        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
                    </ColumnsDirective>
                </GridComponent>
            </div>
        </div>
    )
}
export default About;
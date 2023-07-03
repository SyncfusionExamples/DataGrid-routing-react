import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { employeeData } from './data';

function Contact() {
    return (
        <div className='control-pane'>
            <div className='control-section'>
                <GridComponent dataSource={employeeData.slice(0,5)} >
                    <ColumnsDirective>
                        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right"></ColumnDirective>
                        <ColumnDirective field='FirstName' headerText='Name' width='140'></ColumnDirective>
                        <ColumnDirective field='Title' headerText='Title' width='170' />
                        <ColumnDirective field='HireDate' headerText='Hired Date' width='120' format='yMd' textAlign="Right" />
                        <ColumnDirective field='ReportsTo' headerText='Reports To' width='120' textAlign="Right"></ColumnDirective>
                    </ColumnsDirective>
                </GridComponent>
            </div>
        </div>
    )
}
export default Contact;

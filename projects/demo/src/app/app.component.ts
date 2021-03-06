import { Component } from '@angular/core';
import { ColumnDefinition } from 'ngx-mat-edit-table';
import { Customer } from './Customer';
import { MockCustomerService } from './mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  columns: ColumnDefinition<Customer>[] = [
    {
      title: 'ID',
      data: 'id',
      type: 'number',
      disabled: 'ALWAYS',
      width: '10%'
    },
    {
      title: 'Name',
      data: 'name',
      width: '20%',
      maxLength: 10
    },
    {
      title: 'Surname',
      data: 'surname',
      width: '20%'
    },
    {
      title: 'Birthday',
      data: 'birthday',
      type: 'date',
      width: '10%'
    },
    {
      title: 'Active yet?',
      data: 'active',
      type: 'checkbox',
      width: '10%'
    },
    {
      title: 'Size',
      data: 'size',
      type: 'select',
      options: [{
        value: 'S',
        label: 'Small'
      },{
        value: 'M',
        label: 'Medium'
      },{
        value: 'L',
        label: 'Large'
      }],
      width: '10%'
    },
    {
      title: 'Notes',
      data: 'notes',
      type: 'textarea',
      width: '20%',
      render: (x: string) => x == null ? '' : x.substring(0, 30),
      cellTitle: (x: string) => x
    },
    {
      title: 'Pet',
      data: 'petImage',
      type: 'b64image',
      imgStyle: { 'max-width': '2cm'},
    },
    {
      title: 'Best Friend',
      data: '_bfname',
      type: 'input',
      render: (x, c) => c?.bestFriend?.name || '',
      onChange: (x, col, c) => {
        // this is an idea about accessing inner properties
        if (!c.bestFriend) (c.bestFriend as any) = {};
        c.bestFriend!.name = (c as any)._bfname;
      },
    },
  ];

  constructor(public service: MockCustomerService) {
  }


}

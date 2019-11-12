import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ViewInternshipDataSource, ViewInternshipItem } from './view-internship-datasource';

@Component({
  selector: 'app-view-internship',
  templateUrl: './view-internship.component.html',
  styleUrls: ['./view-internship.component.scss']
})
export class ViewInternshipComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<ViewInternshipItem>;
  dataSource: ViewInternshipDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Date', 'Status','Start Date','Job Profile','Action'];

  ngOnInit() {
    this.dataSource = new ViewInternshipDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

import { AfterViewInit, Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ViewInternshipDataSource, ViewInternshipItem } from './view-internship-datasource';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WriteReviewComponent } from '../write-review/write-review.component';
import { AddInternshipComponent } from '../add-internship/add-internship.component';

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
  constructor(public dialog: MatDialog){

  }
  ngOnInit() {
    this.dataSource = new ViewInternshipDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  ViewDetails(): void {
    const dialogRef = this.dialog.open(ViewInternshipDialog, {
      // width: '250px',
      data: {name: "this.name", animal: "this.animal"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed, result is ',result);
      // this.animal = result;
    });
  }
  WriteReview(): void {
    const dialogRef = this.dialog.open(WriteReviewComponent, {
      width: '700px',
      height: '600px',
      data: {name: "this.name", animal: "this.animal"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed, result is ',result);
      // this.animal = result;
    });
  }
  AddInternship():void{
    const dialogRef = this.dialog.open(AddInternshipComponent, {
      // width: '700px',
      // height: '600px',
      data: {name: "this.name", animal: "this.animal"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed, result is ',result);
      // this.animal = result;
    });
  }
}
@Component({
  selector: 'view-internship-dialog',
  templateUrl: 'view-internship-dialog.html',
})
export class ViewInternshipDialog {

  constructor(
    public dialogRef: MatDialogRef<ViewInternshipDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

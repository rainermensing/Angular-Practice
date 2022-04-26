import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { CommerceApiService } from '../api.service';
import { ICommerce } from './models/commerce';


@Component({
  selector: 'app-commerce',
  templateUrl: './commerce.component.html',
  styleUrls: ['./commerce.component.css']
})
export class CommerceComponent implements OnInit,  OnDestroy {

  private subs = new Subscription();

  displayedColumns: string[] = ['product_name', 'price','promo_code'];
  dataSource: MatTableDataSource<ICommerce> = new MatTableDataSource<ICommerce>([]);


  @ViewChild(MatPaginator)  paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  private dataArray: any;

  constructor(private apiService: CommerceApiService,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.subs.add(this.apiService.getPromos().subscribe((res) => {
        //console.log(res);
        this.dataArray = res;
        this.dataSource = new MatTableDataSource(this.dataArray);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
        (err: HttpErrorResponse) => {
          console.log(err);
        }));
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  public openRecord(promo_code: string): void {
    this._snackBar.open(`Your Promo Code: ${promo_code} `, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });    
  }
}
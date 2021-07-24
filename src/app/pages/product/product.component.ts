import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    public product: any;
    private currentPage = 1;
    public isLoadMore = false;
    private url: any;
    private total: any;
    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.productService.getProductObserver().subscribe((data: any) => {
            this.currentPage = 1;
            this.isLoadMore = false;
            this.url = data.url;
            this.product = data.product;
            this.total = data.total;
            if (this.currentPage < this.total) {
                this.isLoadMore = true;
                this.currentPage++;
            }
        })
    }

    loadMore() {
        const url = this.url + '?page=' + this.currentPage;
        // this.productService.setUrl(url);
            // this.url = url;
        const params = {
            'url': url
        };
        this.productService.getAll(params).subscribe((data: any) => {
            this.product = this.product.concat(data['data']['product']);
            if (this.currentPage < data['data']['total']) {
                this.currentPage++;
                this.isLoadMore = true;
            } else {
                this.isLoadMore = false;
            }
        });
    }

}

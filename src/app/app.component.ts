import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProductService } from './services/product.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'website';

    public category: any;
    public tags: any;
    public color: any;
    public features: any;
    public styles: any;
    private filterTopic = 'a.sidebar-link.sidebar-link_entity';
    private filterOther = 'a.sidebar-link.sidebar-link_filter';
    public crawUrl = environment.crawUrl;
    public classActive = 'sidebar-link_active_filter';
    private tagsSelected: any = [];
    private colorSelected: any = [];
    private featuresSelected: any = [];
    private stylesSelected: any = [];
    private alias: string = '';
    constructor(private productService: ProductService,
        private _sanitizer: DomSanitizer,
        private router: Router
        ) {
        // get category
        this.getCategory();
    }

    getCategory() {
        const params = {
            'url': this.crawUrl
        };
        this.productService.getSlideBar(params).subscribe((data: any) => {
            this.category = data['data']['category'];
            this.tags = data['data']['tags'];
            this.features = data['data']['features'];
            this.color = data['data']['color'];
            this.styles = data['data']['styles'];
            const dataProduct = {
                'url': this.crawUrl,
                'total': data['data']['total'],
                'product': data['data']['product']
            };
            this.productService.setDataProduct(dataProduct);
        });
    }

    setUrl(url: string) {
        //close overlay
        const overlay: any = document.querySelector('.overlay');
        if (overlay) {
            overlay.click();
        }

        this.crawUrl = url;
        // this.productService.setUrl(url);
        // get category
        this.getCategory();
        this.router.navigate(['product/' + this.alias]);
    }

    renderColor(text: string) {
        return this._sanitizer.bypassSecurityTrustHtml(text);
    }

    checkTagsSelected(value: string) {
        if (this.tagsSelected.find((item: string) => item === value)) {
            return true;
        }
        return false;
    }

    checkColorSelected(value: string) {
        if (this.colorSelected.find((item: string) => item === value)) {
            return true;
        }
        return false;
    }

    checkFeaturesSelected(value: string) {
        if (this.featuresSelected.find((item: string) => item === value)) {
            return true;
        }
        return false;
    }

    checkStylesSelected(value: string) {
        if (this.stylesSelected.find((item: string) => item === value)) {
            return true;
        }
        return false;
    }

    addValueToSelected(type: string, value: any) {
        if (type === 'tags') {
            if (!this.checkTagsSelected(value)) {
                this.tagsSelected.push(value);
            } else {
                this.removeValueFromArray(this.tagsSelected, value);
            }
            return;
        }

        if (type === 'features') {
            if (!this.checkFeaturesSelected(value)) {
                this.featuresSelected.push(value);
            } else {
                this.removeValueFromArray(this.featuresSelected, value);
            }
            return;
        }

        if (type === 'color') {
            if (!this.checkColorSelected(value)) {
                this.colorSelected.push(value);
            } else {
                this.removeValueFromArray(this.colorSelected, value);
            }
            return;
        }

        if (type === 'styles') {
            if (!this.checkStylesSelected(value)) {
                this.stylesSelected.push(value);
            } else {
                this.removeValueFromArray(this.stylesSelected, value);
            }
            return;
        }
    }

    removeValueFromArray(array: any, value: string) {
        const index = array.indexOf(value);
        if (index > -1) {
            array.splice(index, 1);
        }
    }

    showMobileCategory() {
        const sidebar: any = document.querySelector('.sidebar');
        sidebar.style = "display: block";
        sidebar.classList.add('sidebar_active');
        document.body.className = 'no-body-scroll body-overlayed body-overlayed_behind-header';
        var div = document.createElement('div');
        div.className = 'overlay';
        document.body.appendChild(div);
        this.loadOverlay();
    }

    loadOverlay() {
        const overlay: any = document.querySelector('.overlay');
        if (overlay) {
            overlay.addEventListener('click', function() {
                const sidebar: any = document.querySelector('.sidebar');
                sidebar.style = "display: none";
                document.body.className = '';
                overlay.remove();
            });
        }
    }

    convertAlias(title: any) {
        if (title) {
            this.alias = title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
        }
    }
}

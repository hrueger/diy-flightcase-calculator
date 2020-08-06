import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public extras = [
        {
            name: '8 Kugel-Ecken',
            link: 'https://www.thomann.de/de/adam_hall_4107_kugelecke.htm',
            price: 1.07,
            count: 8,
            checked: false,
        },
        {
            name: '4 Rollen (2x mit Bremse)',
            link: 'https://www.thomann.de/de/millenium_blue_wheel_bundle_80_mm.htm',
            price: 21.40,
            count: 1,
            checked: false,
        },
        {
            name: '4 Gummifüße',
            link: 'https://www.thomann.de/de/adam_hall_4911_gummifuss_pack.htm',
            price: 3.70,
            count: 1,
            checked: false,
        },
        {
            name: '2 Tragegriffe',
            link: 'https://www.thomann.de/de/adam_hall_34082_klappgriff.htm',
            price: 3.61,
            count: 2,
            checked: false,
        },
        {
            name: '2 weitere Tragegriffe',
            link: 'https://www.thomann.de/de/adam_hall_34082_klappgriff.htm',
            price: 3.61,
            count: 2,
            checked: false,
        },
        {
            name: '2 Butterfly Verschlüsse',
            link: 'https://www.thomann.de/de/adam_hall_17295_butterfly.htm',
            price: 5.40,
            count: 2,
            checked: false,
        },
        {
            name: '2 Scharniere',
            link: 'https://www.thomann.de/de/adam_hall_2524_feststellscharnier.htm',
            price: 1.46,
            count: 2,
            checked: false,
        }
    ];
    public woodPricePerM2 = 14.06;
    public woodLink = 'https://www.hornbach.de/shop/Mulitplexplatte-Birke-BB-BB-1500x3000x9-mm/10284886/artikel.html';
    public profilePricePerM = 2.83;
    public profileLink = 'https://www.thomann.de/de/adam_hall_6105.htm';
    public dimensions = {
        length: 100,
        width: 50,
        height: 50,
    };

    public getWoodArea(): number {
        return (
            (this.dimensions.width * this.dimensions.height * 2) +
            (this.dimensions.width * this.dimensions.length * 2) +
            (this.dimensions.height * this.dimensions.length * 2)
        ) / 10000;
    }

    public getProfileLength(): number {
        return (
            this.dimensions.width +
            this.dimensions.length +
            this.dimensions.height
        ) * 4 / 100;
    }
}

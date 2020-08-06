import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public twoPieces = false;
    public extras = [
        {
            name: '8 Kugel-Ecken',
            link: 'https://www.thomann.de/de/adam_hall_4107_kugelecke.htm',
            image: 'https://www.thomann.de/pics/bdb/149752/9325828_800.jpg',
            price: 1.07,
            count: 8,
            checked: false,
        },
        {
            name: '8 L-Ecken für Deckelverschluss',
            link: 'https://www.thomann.de/de/adam_hall_4044_l_corner_40_x_50.htm',
            image: 'https://www.thomann.de/pics/bdb/412409/12111777_800.jpg',
            price: 0.39,
            count: 8,
            checked: false,
        },
        {
            name: '4 Rollen (2x mit Bremse)',
            link: 'https://www.thomann.de/de/millenium_blue_wheel_bundle_80_mm.htm',
            image: 'https://www.thomann.de/pics/prod/495395.jpg',
            price: 21.40,
            count: 1,
            checked: false,
        },
        {
            name: '4 Gummifüße',
            link: 'https://www.thomann.de/de/adam_hall_4911_gummifuss_pack.htm',
            image: 'https://www.thomann.de/pics/bdb/109593/11970972_800.jpg',
            price: 3.70,
            count: 1,
            checked: false,
        },
        {
            name: '2 Tragegriffe',
            link: 'https://www.thomann.de/de/adam_hall_34082_klappgriff.htm',
            image: 'https://www.thomann.de/pics/bdb/128099/11995793_800.jpg',
            price: 3.61,
            count: 2,
            checked: false,
        },
        {
            name: '2 weitere Tragegriffe',
            link: 'https://www.thomann.de/de/adam_hall_34082_klappgriff.htm',
            image: 'https://www.thomann.de/pics/bdb/128099/11995793_800.jpg',
            price: 3.61,
            count: 2,
            checked: false,
        },
        {
            name: '2 Butterfly Verschlüsse',
            link: 'https://www.thomann.de/de/adam_hall_17295_butterfly.htm',
            image: 'https://www.thomann.de/pics/bdb/182588/9343842_800.jpg',
            price: 5.40,
            count: 2,
            checked: false,
        },
        {
            name: '2 Scharniere',
            link: 'https://www.thomann.de/de/adam_hall_2524_feststellscharnier.htm',
            image: 'https://www.thomann.de/pics/bdb/120297/12265782_800.jpg',
            price: 1.46,
            count: 2,
            checked: false,
        },
        {
            name: '4 Stapel-Einbauschalen',
            link: 'https://www.thomann.de/de/adam_hall_38083_castor_dish.htm',
            image: 'https://www.thomann.de/pics/bdb/109463/9346144_800.jpg',
            price: 1.85,
            count: 4,
            checked: false,
        }
    ];
    public woodPricePerM2 = 14.06;
    public woodLink = 'https://www.hornbach.de/shop/Mulitplexplatte-Birke-BB-BB-1500x3000x9-mm/10284886/artikel.html';
    public woodImage = 'https://www.hornbach.de/data/shop/D04/001/780/491/455/322/DV_8_6345078_02_4c_DE_20200326131650.jpg';
    public profilePricePerM = 2.83;
    public profileLink = 'https://www.thomann.de/de/adam_hall_6105.htm';
    public profileImage = 'https://www.thomann.de/pics/bdb/103506/9515170_800.jpg';
    public closeProfilePricePerM = 3.44;
    public closeProfileLink = 'https://www.thomann.de/de/adam_hall_6103.htm';
    public closeProfileImage = 'https://www.thomann.de/pics/bdb/103574/9185493_800.jpg';
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

    public getCloseProfileLength(): number {
        return (
            this.dimensions.width +
            this.dimensions.length
        ) * 4 / 100;
    }

    public getCheckedExtras(): any[] {
        return this.extras.filter((e) => !!e.checked);
    }

    public getTotalPrice(): number {
        return (this.woodPricePerM2 * this.getWoodArea()) +
            (this.profilePricePerM * this.getProfileLength()) +
            (this.twoPieces ? this.closeProfilePricePerM * this.getCloseProfileLength() : 0) +
            this.getCheckedExtras().map((e) => e.count * e.price).reduce((p, c) => p + c, 0);
    }
}

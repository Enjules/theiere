export class Product {
    id?: number;
    libelle: string;
    abstract: string;
    description: string;
    origin: string;
    pricing: Pricing;
    reference: string;
    title: string;
    slug: string;
    image: Image;
    order: Order;

    constructor(
        id = null,
        libelle = null,
        abstract = null,
        description = null,
        origin = null,
        pricing = new Pricing(),
        reference = null,
        title = null,
        slug = null,
        image = new Image(),
        order = new Order()
    ) {
        this.id = id;
        this.libelle = libelle;
        this.abstract = abstract;
        this.description = description;
        this.origin = origin;
        this.pricing = pricing;
        this.reference = reference;
        this.title = title;
        this.slug = slug;
        this.image = image;
        this.order = order;
    }

    public deserialize(data, slug?: string): Product {
        this.abstract = data[0] ? data[0].abstract.fr : data.content.abstract.fr;
        this.description = data[0] ? data[0].description.fr : data.content.description.fr;
        this.libelle = data[0] ? data[0].libelle.fr : data.content.libelle.fr;
        this.origin = data[0] ? data[0].origin.fr : data.content.origin.fr;
        this.pricing = data[0] ? data[0].pricing[0] : data.content.pricing[0];
        this.reference = data[0] ? data[0].reference : data.content.reference;
        this.title = data[0] ? data[0].title.fr : data.content.title.fr;
        this.slug = slug;
        this.image = {
            url: data[1][1].values[0] ?
                data[1][1].decorator.root + data[1][1].values[0].src :
                'assets/img/no_image.png',
            alt: data[1][1].values[0] ?
                data[1][1].values[0].alt.fr :
                'image'
        };

        return this;
    }
}

export class Pricing {
    ht: number;
    maxPerOrder: number;
    quantity: number;
    stock: number;
    thresold: number;
    ttc: number;

    constructor(
        ht = null,
        maxPerOrder = null,
        quantity = null,
        stock = null,
        thresold = null,
        ttc = null,
    ) {
        this.ht = ht;
        this.maxPerOrder = maxPerOrder;
        this.quantity = quantity;
        this.stock = stock;
        this.thresold = thresold;
        this.ttc = ttc;
    }
}

export class Order {
    quantity: number;
    total: number;

    constructor(
        quantity = 1,
        total = null
    ) {
        this.quantity = quantity;
        this.total = total;
    }
}

class Image {
    url: string;
    alt: string;

    constructor(
        url = null,
        alt = null
    ) {
        this.url = url;
        this.alt = alt;
    }
}


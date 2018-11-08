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
        this.order = order;
    }

    public deserialize(data, slug?: string): Product {

        this.id = data
        this.abstract = data.abstract.fr;
        this.description = data.description.fr;
        this.libelle = data.libelle.fr;
        this.origin = data.origin.fr;
        this.pricing = data.pricing[0];
        this.reference = data.reference;
        this.title = data.title.fr;
        this.slug = slug;

        return this;
    }
}

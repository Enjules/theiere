import { Nodes } from './MenuNodes';

export class MenuOption {
    id?: number;
    ordre: string;
    route: string;
    slug: string;
    nodes: Nodes[];

    constructor() {
        this.id = null;
        this.ordre = null;
        this.route = null;
        this.slug = null;
        this.nodes = [new Nodes];
    }
}

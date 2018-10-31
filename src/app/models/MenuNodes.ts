import { Content } from './MenuContent';

export class Nodes {
    id?: number;
    content: Content;
    ordre: string;
    route: string;
    slug: string;
    nodes: Nodes;

    constructor() {
        this.id = null;
        this.content = new Content;
        this.ordre = null;
        this.route = null;
        this.slug = null;
        this.nodes = null;
    }
}

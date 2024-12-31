export default interface Article {
    id: number;
    attributes: {
        title: string;
        description: string;
        content: string;
        slug: string;
        category: string;
        author: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: Date;
        tags: string[];
        image: {
            data: {
                attributes: {
                    url: string;
                    alt: string;
                };
            };
        };
    };
}
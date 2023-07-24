export class Book {

    public name: string;
    public description: string;
    public author: string;
    public publisher: string;
    public published: string;
    public price: string;
    public edition: string;
    public isbn: string;
    public supplier: string;
    public coverImage: string;

    constructor(name: string, description: string, author: string, publisher: string,
        published: string, price: string, edition: string, isbn: string, supplier: string, coverImage: string) {
        this.name = name;
        this.description = description;
        this.author = author;
        this.publisher = publisher;
        this.published = published;
        this.price = price;
        this.edition = edition;
        this.isbn = isbn;
        this.supplier = supplier;
        this.coverImage = coverImage;

    }
}
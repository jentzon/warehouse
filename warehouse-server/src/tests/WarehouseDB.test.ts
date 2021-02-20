import { Article, ArticleEntry } from "../models/Article";
import { Product } from "../models/Product";
import { WarehouseDB } from "../WarehouseDB";

let unitUnderTest: WarehouseDB;

describe("WarehouseDB", () => {

  beforeEach(() => {
    unitUnderTest = new WarehouseDB();
  })

  it('adds multiple products correctly', () => {

    // Arrange
    const newProducts: Product[] = [
      { name: 'P1', contain_articles: [{ art_id: 1, amount_of: 2 }] },
      { name: 'P1', contain_articles: [{ art_id: 1, amount_of: 2 }] },
      { name: 'P2', contain_articles: [{ art_id: 2, amount_of: 4 }] }
    ];

    // Act
    unitUnderTest.addProducts(newProducts);

    // Assert
    const dbProducts = unitUnderTest.products;

    const p1 = dbProducts.get('P1');
    const p2 = dbProducts.get('P2');

    expect(p1).toBeDefined();
    expect(p2).toBeDefined();

    expect(p1?.name).toEqual('P1');
    expect(p2?.name).toEqual('P2');
  })

  it('adds single product correctly', () => {

    // Arrange
    const product: Product = { name: 'P1', contain_articles: [{ art_id: 1, amount_of: 2 }] };

    // Act
    unitUnderTest.addProduct(product);

    // Assert
    const dbProducts = unitUnderTest.products;
    const p1 = dbProducts.get('P1');

    expect(p1).toBeDefined();
    expect(p1?.name).toEqual('P1');
  })

  it('adds multiple articles correctly', () => {
    const newArticles: ArticleEntry[] = [
      { name: 'A1', art_id: 1, stock: 5 },
      { name: 'A1', art_id: 1, stock: 1 },
      { name: 'A2', art_id: 2, stock: 10 }
    ]

    unitUnderTest.addArticles(newArticles);

    const a1 = unitUnderTest.articles.get(1);
    const a2 = unitUnderTest.articles.get(2);

    expect(a1?.stock).toEqual(6);
    expect(a2?.stock).toEqual(10);
  })

  it('adds single article correctly', () => {
    const article: Article = { name: 'A1', art_id: 1 }

    unitUnderTest.addArticle(article);
    unitUnderTest.addArticle(article);

    const a1 = unitUnderTest.articles.get(1);

    expect(a1?.stock).toEqual(2);
  })

  it('withdraws a products corresponding articles correctly', () => {
    // Arrange
    const newProducts: Product[] = [
      { name: 'P1', contain_articles: [{ art_id: 1, amount_of: 2 }, { art_id: 2, amount_of: 4 }] },
      { name: 'P2', contain_articles: [{ art_id: 2, amount_of: 6 }] }
    ];

    const newArticles: ArticleEntry[] = [
      { name: 'A1', art_id: 1, stock: 16 },
      { name: 'A2', art_id: 2, stock: 20 },
      { name: 'A3', art_id: 3, stock: 40 }
    ]

    unitUnderTest.addProducts(newProducts);
    unitUnderTest.addArticles(newArticles);

    // Act
    unitUnderTest.withdrawProduct('P1');

    // Assert
    const a1StockVaslue = unitUnderTest.articles.get(1)?.stock;
    const a2StockVaslue = unitUnderTest.articles.get(2)?.stock;
    const a3StockVaslue = unitUnderTest.articles.get(3)?.stock;

    expect(a1StockVaslue).toEqual(14);
    expect(a2StockVaslue).toEqual(16);
    expect(a3StockVaslue).toEqual(40);
  })
})
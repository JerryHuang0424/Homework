/* Library Database */


// Clean-up previous data
db.books.deleteMany({})
db.authors.deleteMany({})

// Insert books into the books collection with more reviews
db.books.insertMany([
  {
    title: "The Color of Magic",
    author: "Terry Pratchett",
    year: 1983,
    pages: 300,
    rating: 7,
    genres: ["Fantasy", "magic"],
    copies_available: 5,
    reviews: [
      {
        name: "Book Lover",
        body: "An amusing fantasy world with lots of wit.",
      },
      {
        name: "FantasyFan",
        body: "A bit quirky, but a fun read for fans of fantasy.",
      },
      {
        name: "Critical Thinker",
        body: "A little too chaotic at times, but still entertaining.",
      },
    ],
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    pages: 412,
    rating: 10,
    genres: ["science fiction", "adventure"],
    copies_available: 8,
    reviews: [
      {
        name: "SciFiFan",
        body: "A masterwork of science fiction. Truly epic!",
      },
      {
        name: "BookCritic",
        body: "Complex and dense, but absolutely groundbreaking.",
      },
      {
        name: "AdventureSeeker",
        body: "A thrilling journey into a deeply immersive universe.",
      },
    ],
  },
  {
    title: "The Way of the Kings",
    author: "Brandon Sanderson",
    year: 2010,
    pages: 1007,
    rating: 9,
    genres: ["fantasy", "magic"],
    copies_available: 4,
    reviews: [
      {
        name: "Fantasy Buff",
        body: "Intricate world-building and epic storytelling.",
      },
      {
        name: "Reader123",
        body: "A bit slow to start, but the payoff is incredible.",
      },
      {
        name: "Book Worm",
        body: "Sanderson continues to amaze with his complex characters and plots.",
      },
    ],
  },
  {
    title: "The Odyssey",
    author: "Homer",
    year: -800,
    pages: 400,
    rating: 8,
    genres: ["Epic", "Poetry"],
    copies_available: 5,
    reviews: [
      {
        name: "Classics Enthusiast",
        body: "An ancient epic that stands the test of time.",
      },
      {
        name: "Literature Lover",
        body: "A masterpiece of Western literature.",
      },
      { name: "History Buff", body: "Rich in history, myth, and adventure." },
    ],
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    pages: 328,
    rating: 9,
    genres: ["Dystopian", "Science Fiction"],
    copies_available: 10,
    reviews: [
      {
        name: "Dystopia Reader",
        body: "A chilling vision of totalitarianism and surveillance.",
      },
      {
        name: "Philosophy Fan",
        body: "An essential read in understanding political control and freedom.",
      },
      {
        name: "BookCritic",
        body: "Disturbing yet thought-provoking, Orwell's warning still resonates today.",
      },
    ],
  },
  {
    _id: "9780141439600",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    pages: 279,
    rating: 8,
    genres: ["Romance", "Classic"],
    copies_available: 7,
    reviews: [
      {
        name: "Romantic Reader",
        body: "A beautifully crafted story of love and class.",
      },
      {
        name: "Historical Fiction Enthusiast",
        body: "A timeless exploration of social expectations and romance.",
      },
      {
        name: "Classic Buff",
        body: "A brilliantly written novel, though some of the social critique is dated.",
      },
    ],
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    pages: 310,
    rating: 8,
    genres: ["fantasy", "adventure"],
    copies_available: 9,
    reviews: [
      {
        name: "Adventure Seeker",
        body: "An enchanting tale of adventure and friendship.",
      },
      {
        name: "FantasyReader",
        body: "A wonderful prelude to the Lord of the Rings.",
      },
      {
        name: "Bookworm",
        body: "Tolkien’s storytelling is unparalleled. A charming tale for all ages.",
      },
    ],
  },
  {
    title: "Ulysses",
    author: "James Joyce",
    year: 1922,
    pages: 732,
    rating: 7,
    genres: ["Modernist", "Fiction"],
    copies_available: 6,
    reviews: [
      { name: "Literary Critic", body: "A dense and complex masterpiece." },
      {
        name: "ReaderWithPatience",
        body: "Challenging, but rewarding for those who appreciate experimental literature.",
      },
      {
        name: "BookAnalyst",
        body: "A difficult but brilliant exploration of consciousness and human experience.",
      },
    ],
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    year: 1890,
    pages: 254,
    rating: 8,
    genres: ["Philosophical", "Gothic"],
    copies_available: 7,
    reviews: [
      { name: "Great Recall", body: "Interesting Read" },
      { name: "So so", body: "An ok Read" },
      {
        name: "BookCritic",
        body: "Wilde’s exploration of vanity and morality is as relevant as ever.",
      },
      {
        name: "LiteratureBuff",
        body: "An unforgettable blend of beauty, decadence, and philosophy.",
      },
    ],
  },
  {
    title: "Brooklyn",
    author: "Colm Tóibín",
    year: 2009,
    pages: 416,
    rating: 8,
    genres: ["Historical Fiction", "Romance"],
    copies_available: 10,
    reviews: [
      {
        name: "Historical Fiction Fan",
        body: "A poignant story of immigration and identity.",
      },
      {
        name: "Romantic Enthusiast",
        body: "A beautifully written tale of love and sacrifice.",
      },
      {
        name: "BookLover",
        body: "A moving portrayal of the challenges and triumphs of starting a new life.",
      },
    ],
  },
])

// Insert authors into the authors collection
db.authors.insertMany([
  { name: "Brandon Sanderson", age: 60 },
  { name: "Terry Pratchett", age: 66 },
  { name: "Frank Herbert", age: 65 },
  { name: "Jane Austen", age: 41 },
  { name: "George Orwell", age: 46 },
  { name: "James Joyce", age: 59 },
  { name: "Oscar Wilde", age: 46 },
  { name: "Colm Tóibín", age: 68 },
  { name: "Homer", age: null },
])

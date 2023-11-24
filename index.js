function Author(name,birthyear,nationality){
    this.name = name;
    this.birthyear = birthyear;
    this.nationality = nationality;
}

function Book(title,Author,genre,price){
    this.title = title;
    this.Author = Author;
    this.genre = genre;
    this.price = price;

    this.getBookInfo = function(){
        console.log(`Book Name:- ${this.title}, Author Name:- ${Author.name}, genre:- ${this.genre}, Price:- ${this.price}`);
    }

}

let a1 = new Author('Hrithik',2000,'Indian');
let a2 = new Author('John',1996,'American');
let b1 = new Book('The Riders',a1,'Lifestyle',1200);
let b2 = new Book('Space',a2,'Science',2000);

b1.getBookInfo();


let alldata = [];
alldata.push(b1,b2);

function bookStore(){
    let bookdetails = []
    for(let i = 0; i < alldata.length; i++){
        bookdetails.push(alldata[i]);
    }
    console.log(bookdetails);
}

bookStore();


class Book{
  String author;
  String novel;
  Book(this.author, this.novel);
  
}
void main(){

List <Book> books  = [
Book('J.K Rowling','Harry potter '),
Book('Henry Dell-man','Pirates of the carribean'),
Book('Mr. Smithie','Lord of the ring'),

];

for (var book in books) {
  print(book.author);

}


}
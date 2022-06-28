/*
Задание 1.2 es5
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true.
*/

'use strict'

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    return this.text = text;
}

function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date);
    this.highlighted = highlighted;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    return this.highlighted = true;
}

let newPost1 = new Post('Ivan', 'lorem 10', new Date().toLocaleDateString());
console.log(newPost1);
newPost1.edit('lorem 500');
console.log(newPost1);

let newAttachedPost1 = new AttachedPost('Petr', 'lorem 100', new Date().toLocaleDateString(), false);
console.log(newAttachedPost1);
newAttachedPost1.edit('lorem 430 lorem');
newAttachedPost1.makeTextHighlighted();
console.log(newAttachedPost1);
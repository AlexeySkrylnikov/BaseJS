/*
Задание 1.2 es6
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

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        return this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = highlighted;
    }

    makeTextHighlighted() {
        return this.highlighted = true;
    }
}

let newPost1 = new Post('Name1', 'text123123', new Date().toLocaleDateString());
console.log(newPost1);
newPost1.edit('new text 123123');
console.log(newPost1);

let newAttachedPost1 = new AttachedPost('Name2', 'aSDFASF SXCV CCVV', new Date().toLocaleDateString(), false);
console.log(newAttachedPost1);
newAttachedPost1.edit('новый текст');
newAttachedPost1.makeTextHighlighted();
console.log(newAttachedPost1);
function textEdit(item__text) {
    console.log(item__text.textContent);
    if (item__text.textContent.length <= 210) {
        return item__text.textContent.substring(0, 210);
    }
    return item__text.textContent.substring(0, 210) + '...';
};

const item__text = document.getElementsByClassName('news-item-text');

let i = 0;
while (i < item__text.length) {
    item__text[i].textContent = textEdit(item__text[i]);
    i++;
}
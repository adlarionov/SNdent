function init() {
    var myMap = new ymaps.Map('map-yandex', {
        center: [55.796613, 37.781632],
        zoom: 16,
        controls: []
    });
    // Создадим экземпляр элемента управления «поиск по карте»
    // с установленной опцией провайдера данных для поиска по организациям.
    var searchControl = new ymaps.control.SearchControl({
        options: {
            provider: 'yandex#search'
        }
    });
    myMap.controls.add(searchControl);
    // Программно выполним поиск определённых кафе в текущей
    // прямоугольной области карты.
    searchControl.search('СНдент');
}
ymaps.ready(init);
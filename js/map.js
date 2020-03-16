ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.938428, 30.322192],
          zoom: 17
      }, {
          searchControlProvider: 'yandex#search'
      }),

      myPlacemarkWithContent = new ymaps.Placemark([59.938428, 30.322192], {
          hintContent: 'Собственный значок метки с контентом',
          iconContent: '12'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'images/ball.png',
          // Размеры метки.
          iconImageSize: [48, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemarkWithContent);
});

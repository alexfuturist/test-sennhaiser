(function () {

    var TABLET_WIDTH = 768;
    var DESKTOP_WIDTH = 1150;
    var SMALL_PIN = {
        width: 57,
        height: 53
    };

    var BIG_PIN = {
        width: 113,
        height: 106
    };


    //
    function debounce(f, ms) {
        var timer = null;

        return function (cb) {
            var onComplete = function () {
                f.apply(this, cb);
                timer = null;
            };
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(onComplete, ms);
        };
    }

    //Инициализируем область карты
    window.initialize = function () {
        var viewport = document.documentElement.clientWidth || window.innerWidth;

        var mapCenter = viewport < DESKTOP_WIDTH ? {
            lat: 50.428805,
            lng: 30.538487
        } : {
            lat: 50.429205,
            lng: 30.534900
        };

        var pinCenter = viewport < TABLET_WIDTH ? {
            lat: 50.428499,
            lng: 30.538487
        } : {
            lat: 50.428499,
            lng: 30.538487
        };

        var pinSize = viewport < TABLET_WIDTH ? SMALL_PIN : BIG_PIN;

        var option = {
            center: mapCenter,
            zoom: 17,
            disableDefaultUI: false,
            content: popupContent,
            // Стилизируем карту
            styles:

                [{
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#ffffff"
                        }]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [{
                                "visibility": "on"
                            },
                            {
                                "color": "#333739"
                            },
                            {
                                "weight": 0.8
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#68b738"
                        }]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [{
                                "color": "#2ecc71"
                            },
                            {
                                "lightness": -7
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.business",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "poi.government",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "poi.medical",
                        "elementType": "geometry",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "all",
                        "stylers": [{
                            "color": "#2ecc71"
                        }]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                                "color": "#333739"
                            },
                            {
                                "weight": 0.3
                            },
                            {
                                "lightness": 10
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#68b738"
                            },
                            {
                                "lightness": -28
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#68b738"
                            },
                            {
                                "visibility": "on"
                            },
                            {
                                "lightness": -15
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#68b738"
                            },
                            {
                                "lightness": -18
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#2ecc71"
                            },
                            {
                                "lightness": -34
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#333739"
                        }]
                    }
                ]

        }

        //Подключаем карту
        var map = new google.maps.Map(document.getElementById('map'), option);




        // Стилизируем и подключаем маркер
        var image = {
            url: "img/8/map_tag.png",
            scaledSize: pinSize
        };

        var marker = new google.maps.Marker({
            position: pinCenter,
            map: map,
            title: "Cat Energy — функциональное питание для котов",
            icon: image,
            animation: google.maps.Animation.BOUNCE
        });
        
        //Остановка маркера при клике по нему
        marker.addListener('click', function () {
            marker.setAnimation(null);
        });




        // Инициализируем информационное окно
        var popupContent = '<p class="map-content">Cat Energy — функциональное питание для котов</p>' + '<br>' +
        '<p class="map-content">Режим работы: <span class="map-time">9:00 — 21:00</span></></p>';

        var infowindow = new google.maps.InfoWindow({
            content: popupContent
        });

        // открыто сразу
        // infowindow.open(map, marker);

        // открывается по клику на маркер
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        // Продожение анимации маркера после закрытия инф. окна
        google.maps.event.addListener(infowindow,'closeclick',function(){
            marker.setAnimation(google.maps.Animation.BOUNCE);
        });
    };

    // function toggleBounce() {
    //     if (marker.getAnimation() !== null) {
    //         marker.setAnimation(null);
    //     } else {
    //         marker.setAnimation(google.maps.Animation.BOUNCE);
    //     }
    // };

    window.addEventListener("resize", debounce(initialize, 1000));
    window.addEventListener("load", debounce(initialize, 0));

})();
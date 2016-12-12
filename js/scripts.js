DG.then(function () {
        map = DG.map('map', {
            center: [54.98, 82.89],
            zoom: 13,
              scrollWheelZoom: false,
              fullscreenControl: false
        });
                myIcon = DG.icon({
                    iconUrl: 'img/map-pin.png',
                    iconSize: [230, 190]
                });
                DG.marker([54.98, 82.89], {
                    icon: myIcon
                }).addTo(map);

                
                DG.marker([54.98, 82.89], {
                    icon: myDivIcon
                }).addTo(map);
            });
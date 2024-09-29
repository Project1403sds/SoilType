var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_soil1km_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "soil1km",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/soil1km_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [4902241.657211, 2883455.821182, 7048481.439705, 4832975.798168]
                            })
                        });
var format_country_2 = new ol.format.GeoJSON();
var features_country_2 = format_country_2.readFeatures(json_country_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_country_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_country_2.addFeatures(features_country_2);
var lyr_country_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_country_2, 
                style: style_country_2,
                popuplayertitle: "country",
                interactive: true,
                title: '<img src="styles/legend/country_2.png" /> country'
            });

lyr_OSMStandard_0.setVisible(true);lyr_soil1km_1.setVisible(true);lyr_country_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_soil1km_1,lyr_country_2];
lyr_country_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Ostan': 'Ostan', 'InfoTxt': 'InfoTxt', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'province': 'province', 'idcode': 'idcode', 'InfoTxt_1': 'InfoTxt_1', 'scalee': 'scalee', 'En': 'En', });
lyr_country_2.set('fieldImages', {'OBJECTID': 'Range', 'Ostan': 'TextEdit', 'InfoTxt': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'province': 'TextEdit', 'idcode': 'TextEdit', 'InfoTxt_1': 'TextEdit', 'scalee': 'TextEdit', 'En': 'TextEdit', });
lyr_country_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Ostan': 'no label', 'InfoTxt': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'province': 'hidden field', 'idcode': 'hidden field', 'InfoTxt_1': 'hidden field', 'scalee': 'hidden field', 'En': 'inline label - always visible', });
lyr_country_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
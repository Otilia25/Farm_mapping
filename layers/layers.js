ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32735").setExtent([643532.420134, 8297576.252890, 643559.293689, 8297603.288090]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_farm_3_1 = new ol.format.GeoJSON();
var features_farm_3_1 = format_farm_3_1.readFeatures(json_farm_3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_farm_3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_farm_3_1.addFeatures(features_farm_3_1);
var lyr_farm_3_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_farm_3_1, 
                style: style_farm_3_1,
                popuplayertitle: 'farm_3',
                interactive: true,
                title: '<img src="styles/legend/farm_3_1.png" /> farm_3'
            });
var format_farm_3_blocks_2 = new ol.format.GeoJSON();
var features_farm_3_blocks_2 = format_farm_3_blocks_2.readFeatures(json_farm_3_blocks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_farm_3_blocks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_farm_3_blocks_2.addFeatures(features_farm_3_blocks_2);
var lyr_farm_3_blocks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_farm_3_blocks_2, 
                style: style_farm_3_blocks_2,
                popuplayertitle: 'farm_3_blocks',
                interactive: true,
                title: '<img src="styles/legend/farm_3_blocks_2.png" /> farm_3_blocks'
            });
var format_farm_3_planting_row_centroids_3 = new ol.format.GeoJSON();
var features_farm_3_planting_row_centroids_3 = format_farm_3_planting_row_centroids_3.readFeatures(json_farm_3_planting_row_centroids_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_farm_3_planting_row_centroids_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_farm_3_planting_row_centroids_3.addFeatures(features_farm_3_planting_row_centroids_3);
var lyr_farm_3_planting_row_centroids_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_farm_3_planting_row_centroids_3, 
                style: style_farm_3_planting_row_centroids_3,
                popuplayertitle: 'farm_3_planting_row_centroids',
                interactive: true,
    title: 'farm_3_planting_row_centroids<br />\
    <img src="styles/legend/farm_3_planting_row_centroids_3_0.png" /> A1 R1<br />\
    <img src="styles/legend/farm_3_planting_row_centroids_3_1.png" /> A1 R14<br />\
    <img src="styles/legend/farm_3_planting_row_centroids_3_2.png" /> A1 R15<br />\
    <img src="styles/legend/farm_3_planting_row_centroids_3_3.png" /> A1 R16<br />\
    <img src="styles/legend/farm_3_planting_row_centroids_3_4.png" /> A10 R1<br />\
    <img src="styles/legend/farm_3_planting_row_centroids_3_5.png" /> A11 R1<br />\
    <img src="styles/legend/farm_3_planting_row_centroids_3_6.png" /> A12 R1<br />\
    <img src="styles/legend/farm_3_planting_row_centroids_3_7.png" /> A13 R1<br />\
    <img src="styles/legend/farm_3_planting_row_centroids_3_8.png" /> A2 R1<br />\
    <img src="styles/legend/farm_3_planting_row_centroids_3_9.png" /> A3 R1<br />\
    <img src="styles/legend/farm_3_planting_row_centroids_3_10.png" /> A4 R1<br />\
    <img src="styles/legend/farm_3_planting_row_centroids_3_11.png" /> A5 R1<br />\
    <img src="styles/legend/farm_3_planting_row_centroids_3_12.png" /> A6 R1<br />\
    <img src="styles/legend/farm_3_planting_row_centroids_3_13.png" /> A7 R1<br />\
    <img src="styles/legend/farm_3_planting_row_centroids_3_14.png" /> A8 R1<br />\
    <img src="styles/legend/farm_3_planting_row_centroids_3_15.png" /> A9 R1<br />\
    <img src="styles/legend/farm_3_planting_row_centroids_3_16.png" /> Emerald<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_farm_3_1.setVisible(true);lyr_farm_3_blocks_2.setVisible(true);lyr_farm_3_planting_row_centroids_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_farm_3_1,lyr_farm_3_blocks_2,lyr_farm_3_planting_row_centroids_3];
lyr_farm_3_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Location': 'Location', 'Date_plant': 'Date_plant', 'Area': 'Area', });
lyr_farm_3_blocks_2.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'Block_ID': 'Block_ID', });
lyr_farm_3_planting_row_centroids_3.set('fieldAliases', {'id': 'id', 'Crop Class': 'Crop Class', 'Crop Varie': 'Crop Varie', 'Plant date': 'Plant date', 'Block_ID': 'Block_ID', 'Row ID': 'Row ID', 'monitoring': 'monitoring', 'monitor': 'monitor', });
lyr_farm_3_1.set('fieldImages', {'id': '', 'Name': '', 'Location': '', 'Date_plant': '', 'Area': '', });
lyr_farm_3_blocks_2.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'Block_ID': 'TextEdit', });
lyr_farm_3_planting_row_centroids_3.set('fieldImages', {'id': 'TextEdit', 'Crop Class': 'TextEdit', 'Crop Varie': 'TextEdit', 'Plant date': 'DateTime', 'Block_ID': 'TextEdit', 'Row ID': 'TextEdit', 'monitoring': '', 'monitor': '', });
lyr_farm_3_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Location': 'no label', 'Date_plant': 'no label', 'Area': 'no label', });
lyr_farm_3_blocks_2.set('fieldLabels', {'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'Block_ID': 'inline label - visible with data', });
lyr_farm_3_planting_row_centroids_3.set('fieldLabels', {'id': 'hidden field', 'Crop Class': 'inline label - visible with data', 'Crop Varie': 'inline label - visible with data', 'Plant date': 'inline label - visible with data', 'Block_ID': 'inline label - visible with data', 'Row ID': 'hidden field', 'monitoring': 'hidden field', 'monitor': 'inline label - visible with data', });
lyr_farm_3_planting_row_centroids_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
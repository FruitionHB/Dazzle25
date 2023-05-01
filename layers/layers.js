var wms_layers = [];


        var lyr_ESRIImagery_0 = new ol.layer.Tile({
            'title': 'ESRI Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Dazzleblocks_1 = new ol.format.GeoJSON();
var features_Dazzleblocks_1 = format_Dazzleblocks_1.readFeatures(json_Dazzleblocks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dazzleblocks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dazzleblocks_1.addFeatures(features_Dazzleblocks_1);
var lyr_Dazzleblocks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dazzleblocks_1, 
                style: style_Dazzleblocks_1,
                interactive: true,
                title: '<img src="styles/legend/Dazzleblocks_1.png" /> Dazzle blocks'
            });

lyr_ESRIImagery_0.setVisible(true);lyr_Dazzleblocks_1.setVisible(true);
var layersList = [lyr_ESRIImagery_0,lyr_Dazzleblocks_1];
lyr_Dazzleblocks_1.set('fieldAliases', {'ID': 'ID', 'Grower': 'Grower', 'Address': 'Address', 'Region': 'Region', 'RPIN': 'RPIN', 'Block_name': 'Block_name', 'Yr_planted': 'Yr_planted', 'Row_width': 'Row_width', 'Tree_space': 'Tree_space', 'Density': 'Density', 'Area (ha)': 'Area (ha)', 'Calc_trees': 'Calc_trees', 'Licence_trees': 'Licence_trees', 'Photo': 'Photo', });
lyr_Dazzleblocks_1.set('fieldImages', {'ID': 'Range', 'Grower': 'TextEdit', 'Address': 'TextEdit', 'Region': 'TextEdit', 'RPIN': 'TextEdit', 'Block_name': 'TextEdit', 'Yr_planted': 'TextEdit', 'Row_width': 'TextEdit', 'Tree_space': 'TextEdit', 'Density': 'TextEdit', 'Area (ha)': 'TextEdit', 'Calc_trees': 'TextEdit', 'Licence_trees': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_Dazzleblocks_1.set('fieldLabels', {'ID': 'inline label', 'Grower': 'inline label', 'Address': 'inline label', 'Region': 'inline label', 'RPIN': 'inline label', 'Block_name': 'inline label', 'Yr_planted': 'inline label', 'Row_width': 'inline label', 'Tree_space': 'inline label', 'Density': 'inline label', 'Area (ha)': 'inline label', 'Calc_trees': 'inline label', 'Licence_trees': 'inline label', 'Photo': 'no label', });
lyr_Dazzleblocks_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
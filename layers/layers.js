var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIImagery_1 = new ol.layer.Tile({
            'title': 'ESRI Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Dazzle_2 = new ol.format.GeoJSON();
var features_Dazzle_2 = format_Dazzle_2.readFeatures(json_Dazzle_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dazzle_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dazzle_2.addFeatures(features_Dazzle_2);
var lyr_Dazzle_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dazzle_2, 
                style: style_Dazzle_2,
                interactive: true,
                title: '<img src="styles/legend/Dazzle_2.png" /> Dazzle'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ESRIImagery_1.setVisible(true);lyr_Dazzle_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ESRIImagery_1,lyr_Dazzle_2];
lyr_Dazzle_2.set('fieldAliases', {'ID': 'ID', 'Grower': 'Grower', 'Address': 'Address', 'Region': 'Region', 'RPIN': 'RPIN', 'Block_name': 'Block name', 'Yr_planted': 'Year planted', 'Row_width': 'Row width', 'Tree_space': 'Tree space', 'Density': 'Density', 'Area (ha)': 'Area (ha)', 'Calc_trees': 'Calculated trees', 'Licence_trees': 'Licenced trees', 'Labels_2': 'Label', });
lyr_Dazzle_2.set('fieldImages', {'ID': 'Range', 'Grower': 'TextEdit', 'Address': 'TextEdit', 'Region': 'TextEdit', 'RPIN': 'TextEdit', 'Block_name': 'TextEdit', 'Yr_planted': 'TextEdit', 'Row_width': 'TextEdit', 'Tree_space': 'TextEdit', 'Density': 'TextEdit', 'Area (ha)': 'TextEdit', 'Calc_trees': 'TextEdit', 'Licence_trees': 'TextEdit', 'Labels_2': 'TextEdit', });
lyr_Dazzle_2.set('fieldLabels', {'ID': 'inline label', 'Grower': 'inline label', 'Address': 'inline label', 'Region': 'inline label', 'RPIN': 'inline label', 'Block_name': 'inline label', 'Yr_planted': 'inline label', 'Row_width': 'inline label', 'Tree_space': 'inline label', 'Density': 'inline label', 'Area (ha)': 'inline label', 'Calc_trees': 'inline label', 'Licence_trees': 'inline label', 'Labels_2': 'inline label', });
lyr_Dazzle_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
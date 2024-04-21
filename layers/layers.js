var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KDMCBoundry_1 = new ol.format.GeoJSON();
var features_KDMCBoundry_1 = format_KDMCBoundry_1.readFeatures(json_KDMCBoundry_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KDMCBoundry_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KDMCBoundry_1.addFeatures(features_KDMCBoundry_1);
var lyr_KDMCBoundry_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KDMCBoundry_1, 
                style: style_KDMCBoundry_1,
                popuplayertitle: "KDMC Boundry",
                interactive: true,
                title: '<img src="styles/legend/KDMCBoundry_1.png" /> KDMC Boundry'
            });
var format_Ambernath_2 = new ol.format.GeoJSON();
var features_Ambernath_2 = format_Ambernath_2.readFeatures(json_Ambernath_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ambernath_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ambernath_2.addFeatures(features_Ambernath_2);
var lyr_Ambernath_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ambernath_2, 
                style: style_Ambernath_2,
                popuplayertitle: "Ambernath",
                interactive: true,
                title: '<img src="styles/legend/Ambernath_2.png" /> Ambernath'
            });
var format_BadlapurBoundary_3 = new ol.format.GeoJSON();
var features_BadlapurBoundary_3 = format_BadlapurBoundary_3.readFeatures(json_BadlapurBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BadlapurBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BadlapurBoundary_3.addFeatures(features_BadlapurBoundary_3);
var lyr_BadlapurBoundary_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BadlapurBoundary_3, 
                style: style_BadlapurBoundary_3,
                popuplayertitle: "Badlapur Boundary",
                interactive: true,
                title: '<img src="styles/legend/BadlapurBoundary_3.png" /> Badlapur Boundary'
            });
var format_BhiwandiBoundary_4 = new ol.format.GeoJSON();
var features_BhiwandiBoundary_4 = format_BhiwandiBoundary_4.readFeatures(json_BhiwandiBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhiwandiBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhiwandiBoundary_4.addFeatures(features_BhiwandiBoundary_4);
var lyr_BhiwandiBoundary_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BhiwandiBoundary_4, 
                style: style_BhiwandiBoundary_4,
                popuplayertitle: "Bhiwandi Boundary",
                interactive: true,
                title: '<img src="styles/legend/BhiwandiBoundary_4.png" /> Bhiwandi Boundary'
            });
var format_UlhasnagarBoundry_5 = new ol.format.GeoJSON();
var features_UlhasnagarBoundry_5 = format_UlhasnagarBoundry_5.readFeatures(json_UlhasnagarBoundry_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UlhasnagarBoundry_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UlhasnagarBoundry_5.addFeatures(features_UlhasnagarBoundry_5);
var lyr_UlhasnagarBoundry_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UlhasnagarBoundry_5, 
                style: style_UlhasnagarBoundry_5,
                popuplayertitle: "Ulhasnagar Boundry",
                interactive: true,
                title: '<img src="styles/legend/UlhasnagarBoundry_5.png" /> Ulhasnagar Boundry'
            });
var format_AllRoutesKDMC_6 = new ol.format.GeoJSON();
var features_AllRoutesKDMC_6 = format_AllRoutesKDMC_6.readFeatures(json_AllRoutesKDMC_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllRoutesKDMC_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllRoutesKDMC_6.addFeatures(features_AllRoutesKDMC_6);
var lyr_AllRoutesKDMC_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AllRoutesKDMC_6, 
                style: style_AllRoutesKDMC_6,
                popuplayertitle: "All Routes KDMC",
                interactive: true,
    title: 'All Routes KDMC<br />\
    <img src="styles/legend/AllRoutesKDMC_6_0.png" /> R01AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_1.png" /> R01R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_2.png" /> R02R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_3.png" /> R03R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_4.png" /> R05R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_5.png" /> R06R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_6.png" /> R07R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_7.png" /> R08R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_8.png" /> R09R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_9.png" /> R102AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_10.png" /> R102R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_11.png" /> R108ACR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_12.png" /> R108AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_13.png" /> R108BR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_14.png" /> R10AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_15.png" /> R10R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_16.png" /> R11R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_17.png" /> R12R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_18.png" /> R13R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_19.png" /> R14R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_20.png" /> R15R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_21.png" /> R16R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_22.png" /> R17R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_23.png" /> R18R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_24.png" /> R19R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_25.png" /> R20R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_26.png" /> R21R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_27.png" /> R22R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_28.png" /> R23R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_29.png" /> R24R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_30.png" /> R25R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_31.png" /> R26R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_32.png" /> R27R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_33.png" /> R28R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_34.png" /> R29R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_35.png" /> R33AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_36.png" /> R33BR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_37.png" /> R33R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_38.png" /> R34AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_39.png" /> R34B<br />\
    <img src="styles/legend/AllRoutesKDMC_6_40.png" /> R34CR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_41.png" /> R34R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_42.png" /> R35ACR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_43.png" /> R35AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_44.png" /> R35R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_45.png" /> R37R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_46.png" /> R38AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_47.png" /> R38R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_48.png" /> R3AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_49.png" /> R40R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_50.png" /> R42R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_51.png" /> R44R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_52.png" /> R45R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_53.png" /> R4AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_54.png" /> R4BR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_55.png" /> R51AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_56.png" /> R51R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_57.png" /> R55AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_58.png" /> R55BR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_59.png" /> R55R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_60.png" /> R57BR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_61.png" /> R57R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_62.png" /> R58AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_63.png" /> R58R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_64.png" /> R62R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_65.png" /> R63DR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_66.png" /> R63R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_67.png" /> R64AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_68.png" /> R64R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_69.png" /> R65R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_70.png" /> R74R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_71.png" /> R76R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_72.png" /> <br />'
        });
var format_TemplesMgrd_7 = new ol.format.GeoJSON();
var features_TemplesMgrd_7 = format_TemplesMgrd_7.readFeatures(json_TemplesMgrd_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemplesMgrd_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemplesMgrd_7.addFeatures(features_TemplesMgrd_7);
var lyr_TemplesMgrd_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TemplesMgrd_7, 
                style: style_TemplesMgrd_7,
                popuplayertitle: "Temples Mgrd",
                interactive: true,
                title: '<img src="styles/legend/TemplesMgrd_7.png" /> Temples Mgrd'
            });
var format_PublicBuildings_8 = new ol.format.GeoJSON();
var features_PublicBuildings_8 = format_PublicBuildings_8.readFeatures(json_PublicBuildings_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicBuildings_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicBuildings_8.addFeatures(features_PublicBuildings_8);
var lyr_PublicBuildings_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PublicBuildings_8, 
                style: style_PublicBuildings_8,
                popuplayertitle: "Public Buildings",
                interactive: true,
                title: '<img src="styles/legend/PublicBuildings_8.png" /> Public Buildings'
            });
var format_Mall_9 = new ol.format.GeoJSON();
var features_Mall_9 = format_Mall_9.readFeatures(json_Mall_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mall_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mall_9.addFeatures(features_Mall_9);
var lyr_Mall_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mall_9, 
                style: style_Mall_9,
                popuplayertitle: "Mall",
                interactive: true,
                title: '<img src="styles/legend/Mall_9.png" /> Mall'
            });
var format_PrivateOffice_10 = new ol.format.GeoJSON();
var features_PrivateOffice_10 = format_PrivateOffice_10.readFeatures(json_PrivateOffice_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrivateOffice_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrivateOffice_10.addFeatures(features_PrivateOffice_10);
var lyr_PrivateOffice_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrivateOffice_10, 
                style: style_PrivateOffice_10,
                popuplayertitle: "Private Office",
                interactive: true,
                title: '<img src="styles/legend/PrivateOffice_10.png" /> Private Office'
            });
var format_office_government_11 = new ol.format.GeoJSON();
var features_office_government_11 = format_office_government_11.readFeatures(json_office_government_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_office_government_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_office_government_11.addFeatures(features_office_government_11);
var lyr_office_government_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_office_government_11, 
                style: style_office_government_11,
                popuplayertitle: "office_government",
                interactive: true,
                title: '<img src="styles/legend/office_government_11.png" /> office_government'
            });
var format_Medical_12 = new ol.format.GeoJSON();
var features_Medical_12 = format_Medical_12.readFeatures(json_Medical_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Medical_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Medical_12.addFeatures(features_Medical_12);
var lyr_Medical_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Medical_12, 
                style: style_Medical_12,
                popuplayertitle: "Medical",
                interactive: true,
                title: '<img src="styles/legend/Medical_12.png" /> Medical'
            });
var format_Industrial_13 = new ol.format.GeoJSON();
var features_Industrial_13 = format_Industrial_13.readFeatures(json_Industrial_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrial_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrial_13.addFeatures(features_Industrial_13);
var lyr_Industrial_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Industrial_13, 
                style: style_Industrial_13,
                popuplayertitle: "Industrial",
                interactive: true,
                title: '<img src="styles/legend/Industrial_13.png" /> Industrial'
            });
var format_Education_14 = new ol.format.GeoJSON();
var features_Education_14 = format_Education_14.readFeatures(json_Education_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Education_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Education_14.addFeatures(features_Education_14);
var lyr_Education_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Education_14, 
                style: style_Education_14,
                popuplayertitle: "Education",
                interactive: true,
                title: '<img src="styles/legend/Education_14.png" /> Education'
            });
var format_BhiwandiRouteIntercity_15 = new ol.format.GeoJSON();
var features_BhiwandiRouteIntercity_15 = format_BhiwandiRouteIntercity_15.readFeatures(json_BhiwandiRouteIntercity_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhiwandiRouteIntercity_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhiwandiRouteIntercity_15.addFeatures(features_BhiwandiRouteIntercity_15);
var lyr_BhiwandiRouteIntercity_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BhiwandiRouteIntercity_15, 
                style: style_BhiwandiRouteIntercity_15,
                popuplayertitle: "Bhiwandi Route Intercity",
                interactive: true,
    title: 'Bhiwandi Route Intercity<br />\
    <img src="styles/legend/BhiwandiRouteIntercity_15_0.png" /> Bhiwandi Railway Station to Mira Road Station (E)<br />\
    <img src="styles/legend/BhiwandiRouteIntercity_15_1.png" /> Bhiwandi Stn to Bombay Central<br />\
    <img src="styles/legend/BhiwandiRouteIntercity_15_2.png" /> Bhiwandi to Kalyan<br />\
    <img src="styles/legend/BhiwandiRouteIntercity_15_3.png" /> Bhiwandi To Thane<br />\
    <img src="styles/legend/BhiwandiRouteIntercity_15_4.png" /> Shivaji Chowk to Padgha<br />\
    <img src="styles/legend/BhiwandiRouteIntercity_15_5.png" /> Shivaji Chowk to Sanpada<br />\
    <img src="styles/legend/BhiwandiRouteIntercity_15_6.png" /> Shivaji Chowk to Virar<br />\
    <img src="styles/legend/BhiwandiRouteIntercity_15_7.png" /> <br />'
        });
var format_BhiwandiTerminalsIntercity_16 = new ol.format.GeoJSON();
var features_BhiwandiTerminalsIntercity_16 = format_BhiwandiTerminalsIntercity_16.readFeatures(json_BhiwandiTerminalsIntercity_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhiwandiTerminalsIntercity_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhiwandiTerminalsIntercity_16.addFeatures(features_BhiwandiTerminalsIntercity_16);
var lyr_BhiwandiTerminalsIntercity_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BhiwandiTerminalsIntercity_16, 
                style: style_BhiwandiTerminalsIntercity_16,
                popuplayertitle: "Bhiwandi Terminals Intercity",
                interactive: true,
    title: 'Bhiwandi Terminals Intercity<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_16_0.png" /> Bhiwandi Railway Station<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_16_1.png" /> Kalyan Railway Station<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_16_2.png" /> Mira Road Station (E)<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_16_3.png" /> Mumbai Central S.T Depot<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_16_4.png" /> Padgha<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_16_5.png" /> Sanpada Depot/ Sanpada Railway Station<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_16_6.png" /> Shivaji Chowk Bhiwandi<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_16_7.png" /> Thane Railway Station<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_16_8.png" /> Vasai Station<br />\
    <img src="styles/legend/BhiwandiTerminalsIntercity_16_9.png" /> <br />'
        });
var format_KDMTBusStops_17 = new ol.format.GeoJSON();
var features_KDMTBusStops_17 = format_KDMTBusStops_17.readFeatures(json_KDMTBusStops_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KDMTBusStops_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KDMTBusStops_17.addFeatures(features_KDMTBusStops_17);
var lyr_KDMTBusStops_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KDMTBusStops_17, 
                style: style_KDMTBusStops_17,
                popuplayertitle: "KDMT Bus Stops",
                interactive: true,
                title: '<img src="styles/legend/KDMTBusStops_17.png" /> KDMT Bus Stops'
            });
var format_RtShivajiChowktoVirar_18 = new ol.format.GeoJSON();
var features_RtShivajiChowktoVirar_18 = format_RtShivajiChowktoVirar_18.readFeatures(json_RtShivajiChowktoVirar_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtShivajiChowktoVirar_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtShivajiChowktoVirar_18.addFeatures(features_RtShivajiChowktoVirar_18);
var lyr_RtShivajiChowktoVirar_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RtShivajiChowktoVirar_18, 
                style: style_RtShivajiChowktoVirar_18,
                popuplayertitle: "Rt Shivaji Chowk to Virar",
                interactive: true,
                title: '<img src="styles/legend/RtShivajiChowktoVirar_18.png" /> Rt Shivaji Chowk to Virar'
            });
var format_SCVRTerminals_19 = new ol.format.GeoJSON();
var features_SCVRTerminals_19 = format_SCVRTerminals_19.readFeatures(json_SCVRTerminals_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRTerminals_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRTerminals_19.addFeatures(features_SCVRTerminals_19);
var lyr_SCVRTerminals_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRTerminals_19, 
                style: style_SCVRTerminals_19,
                popuplayertitle: "SCVR Terminals",
                interactive: true,
    title: 'SCVR Terminals<br />\
    <img src="styles/legend/SCVRTerminals_19_0.png" /> Shivaji Chowk Bhiwandi<br />\
    <img src="styles/legend/SCVRTerminals_19_1.png" /> Vasai Station<br />\
    <img src="styles/legend/SCVRTerminals_19_2.png" /> <br />'
        });
var format_BhiwandiTerminalsIntracity_20 = new ol.format.GeoJSON();
var features_BhiwandiTerminalsIntracity_20 = format_BhiwandiTerminalsIntracity_20.readFeatures(json_BhiwandiTerminalsIntracity_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhiwandiTerminalsIntracity_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhiwandiTerminalsIntracity_20.addFeatures(features_BhiwandiTerminalsIntracity_20);
var lyr_BhiwandiTerminalsIntracity_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BhiwandiTerminalsIntracity_20, 
                style: style_BhiwandiTerminalsIntracity_20,
                popuplayertitle: "Bhiwandi Terminals Intracity",
                interactive: true,
    title: 'Bhiwandi Terminals Intracity<br />\
    <img src="styles/legend/BhiwandiTerminalsIntracity_20_0.png" /> 19.240183128764233, 73.04149930842456<br />\
    <img src="styles/legend/BhiwandiTerminalsIntracity_20_1.png" /> Anjur Phata<br />\
    <img src="styles/legend/BhiwandiTerminalsIntracity_20_2.png" /> Bhadwad Saskiya<br />\
    <img src="styles/legend/BhiwandiTerminalsIntracity_20_3.png" /> Govana<br />\
    <img src="styles/legend/BhiwandiTerminalsIntracity_20_4.png" /> Kasheli<br />\
    <img src="styles/legend/BhiwandiTerminalsIntracity_20_5.png" /> Shivaji Chowk Bhiwandi<br />\
    <img src="styles/legend/BhiwandiTerminalsIntracity_20_6.png" /> Yewai Chowk<br />\
    <img src="styles/legend/BhiwandiTerminalsIntracity_20_7.png" /> <br />'
        });
var format_SCVREducation_21 = new ol.format.GeoJSON();
var features_SCVREducation_21 = format_SCVREducation_21.readFeatures(json_SCVREducation_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVREducation_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVREducation_21.addFeatures(features_SCVREducation_21);
var lyr_SCVREducation_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVREducation_21, 
                style: style_SCVREducation_21,
                popuplayertitle: "SCVR Education",
                interactive: true,
                title: '<img src="styles/legend/SCVREducation_21.png" /> SCVR Education'
            });
var format_SCVRTemples_22 = new ol.format.GeoJSON();
var features_SCVRTemples_22 = format_SCVRTemples_22.readFeatures(json_SCVRTemples_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRTemples_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRTemples_22.addFeatures(features_SCVRTemples_22);
var lyr_SCVRTemples_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRTemples_22, 
                style: style_SCVRTemples_22,
                popuplayertitle: "SCVR Temples",
                interactive: true,
                title: '<img src="styles/legend/SCVRTemples_22.png" /> SCVR Temples'
            });
var format_SCVRPSU_23 = new ol.format.GeoJSON();
var features_SCVRPSU_23 = format_SCVRPSU_23.readFeatures(json_SCVRPSU_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRPSU_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRPSU_23.addFeatures(features_SCVRPSU_23);
var lyr_SCVRPSU_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRPSU_23, 
                style: style_SCVRPSU_23,
                popuplayertitle: "SCVR PSU",
                interactive: true,
                title: '<img src="styles/legend/SCVRPSU_23.png" /> SCVR PSU'
            });
var format_SCVRIndustries_24 = new ol.format.GeoJSON();
var features_SCVRIndustries_24 = format_SCVRIndustries_24.readFeatures(json_SCVRIndustries_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRIndustries_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRIndustries_24.addFeatures(features_SCVRIndustries_24);
var lyr_SCVRIndustries_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRIndustries_24, 
                style: style_SCVRIndustries_24,
                popuplayertitle: "SCVR Industries",
                interactive: true,
                title: '<img src="styles/legend/SCVRIndustries_24.png" /> SCVR Industries'
            });
var format_SCVROffices_25 = new ol.format.GeoJSON();
var features_SCVROffices_25 = format_SCVROffices_25.readFeatures(json_SCVROffices_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVROffices_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVROffices_25.addFeatures(features_SCVROffices_25);
var lyr_SCVROffices_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVROffices_25, 
                style: style_SCVROffices_25,
                popuplayertitle: "SCVR Offices",
                interactive: true,
                title: '<img src="styles/legend/SCVROffices_25.png" /> SCVR Offices'
            });
var format_SCVRHospitals_26 = new ol.format.GeoJSON();
var features_SCVRHospitals_26 = format_SCVRHospitals_26.readFeatures(json_SCVRHospitals_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRHospitals_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRHospitals_26.addFeatures(features_SCVRHospitals_26);
var lyr_SCVRHospitals_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRHospitals_26, 
                style: style_SCVRHospitals_26,
                popuplayertitle: "SCVR Hospitals",
                interactive: true,
                title: '<img src="styles/legend/SCVRHospitals_26.png" /> SCVR Hospitals'
            });
var format_SCVRStopPopulation_27 = new ol.format.GeoJSON();
var features_SCVRStopPopulation_27 = format_SCVRStopPopulation_27.readFeatures(json_SCVRStopPopulation_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRStopPopulation_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRStopPopulation_27.addFeatures(features_SCVRStopPopulation_27);
var lyr_SCVRStopPopulation_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRStopPopulation_27, 
                style: style_SCVRStopPopulation_27,
                popuplayertitle: "SCVR Stop Population",
                interactive: true,
    title: 'SCVR Stop Population<br />\
    <img src="styles/legend/SCVRStopPopulation_27_0.png" /> 10 min<br />'
        });
var format_SCVRRoutePop1000Mtrs_28 = new ol.format.GeoJSON();
var features_SCVRRoutePop1000Mtrs_28 = format_SCVRRoutePop1000Mtrs_28.readFeatures(json_SCVRRoutePop1000Mtrs_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRRoutePop1000Mtrs_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRRoutePop1000Mtrs_28.addFeatures(features_SCVRRoutePop1000Mtrs_28);
var lyr_SCVRRoutePop1000Mtrs_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRRoutePop1000Mtrs_28, 
                style: style_SCVRRoutePop1000Mtrs_28,
                popuplayertitle: "SCVR Route Pop 1000 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/SCVRRoutePop1000Mtrs_28.png" /> SCVR Route Pop 1000 Mtrs'
            });
var format_SCVRRtPop500Mtrs_29 = new ol.format.GeoJSON();
var features_SCVRRtPop500Mtrs_29 = format_SCVRRtPop500Mtrs_29.readFeatures(json_SCVRRtPop500Mtrs_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRRtPop500Mtrs_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRRtPop500Mtrs_29.addFeatures(features_SCVRRtPop500Mtrs_29);
var lyr_SCVRRtPop500Mtrs_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRRtPop500Mtrs_29, 
                style: style_SCVRRtPop500Mtrs_29,
                popuplayertitle: "SCVR Rt Pop 500 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/SCVRRtPop500Mtrs_29.png" /> SCVR Rt Pop 500 Mtrs'
            });
var format_SCVRRtPop250mtrs_30 = new ol.format.GeoJSON();
var features_SCVRRtPop250mtrs_30 = format_SCVRRtPop250mtrs_30.readFeatures(json_SCVRRtPop250mtrs_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRRtPop250mtrs_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRRtPop250mtrs_30.addFeatures(features_SCVRRtPop250mtrs_30);
var lyr_SCVRRtPop250mtrs_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRRtPop250mtrs_30, 
                style: style_SCVRRtPop250mtrs_30,
                popuplayertitle: "SCVR Rt Pop 250 mtrs",
                interactive: true,
                title: '<img src="styles/legend/SCVRRtPop250mtrs_30.png" /> SCVR Rt Pop 250 mtrs'
            });
var format_SCVRRtPop100Mtrs_31 = new ol.format.GeoJSON();
var features_SCVRRtPop100Mtrs_31 = format_SCVRRtPop100Mtrs_31.readFeatures(json_SCVRRtPop100Mtrs_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRRtPop100Mtrs_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRRtPop100Mtrs_31.addFeatures(features_SCVRRtPop100Mtrs_31);
var lyr_SCVRRtPop100Mtrs_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRRtPop100Mtrs_31, 
                style: style_SCVRRtPop100Mtrs_31,
                popuplayertitle: "SCVR Rt Pop 100 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/SCVRRtPop100Mtrs_31.png" /> SCVR Rt Pop 100 Mtrs'
            });
var format_SCVRRouteMtrs_32 = new ol.format.GeoJSON();
var features_SCVRRouteMtrs_32 = format_SCVRRouteMtrs_32.readFeatures(json_SCVRRouteMtrs_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRRouteMtrs_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRRouteMtrs_32.addFeatures(features_SCVRRouteMtrs_32);
var lyr_SCVRRouteMtrs_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRRouteMtrs_32, 
                style: style_SCVRRouteMtrs_32,
                popuplayertitle: "SCVR Route Mtrs",
                interactive: true,
                title: '<img src="styles/legend/SCVRRouteMtrs_32.png" /> SCVR Route Mtrs'
            });
var format_SCVRStops_33 = new ol.format.GeoJSON();
var features_SCVRStops_33 = format_SCVRStops_33.readFeatures(json_SCVRStops_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRStops_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRStops_33.addFeatures(features_SCVRStops_33);
var lyr_SCVRStops_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRStops_33, 
                style: style_SCVRStops_33,
                popuplayertitle: "SCVR Stops",
                interactive: true,
    title: 'SCVR Stops<br />\
    <img src="styles/legend/SCVRStops_33_0.png" /> 0<br />\
    <img src="styles/legend/SCVRStops_33_1.png" /> 1<br />\
    <img src="styles/legend/SCVRStops_33_2.png" /> 2<br />\
    <img src="styles/legend/SCVRStops_33_3.png" /> 3<br />\
    <img src="styles/legend/SCVRStops_33_4.png" /> 4<br />\
    <img src="styles/legend/SCVRStops_33_5.png" /> 5<br />\
    <img src="styles/legend/SCVRStops_33_6.png" /> 6<br />\
    <img src="styles/legend/SCVRStops_33_7.png" /> 7<br />\
    <img src="styles/legend/SCVRStops_33_8.png" /> 8<br />\
    <img src="styles/legend/SCVRStops_33_9.png" /> 9<br />\
    <img src="styles/legend/SCVRStops_33_10.png" /> 10<br />\
    <img src="styles/legend/SCVRStops_33_11.png" /> 11<br />\
    <img src="styles/legend/SCVRStops_33_12.png" /> 12<br />\
    <img src="styles/legend/SCVRStops_33_13.png" /> 13<br />\
    <img src="styles/legend/SCVRStops_33_14.png" /> 14<br />\
    <img src="styles/legend/SCVRStops_33_15.png" /> 15<br />\
    <img src="styles/legend/SCVRStops_33_16.png" /> 16<br />\
    <img src="styles/legend/SCVRStops_33_17.png" /> 17<br />\
    <img src="styles/legend/SCVRStops_33_18.png" /> 18<br />\
    <img src="styles/legend/SCVRStops_33_19.png" /> 19<br />\
    <img src="styles/legend/SCVRStops_33_20.png" /> 20<br />\
    <img src="styles/legend/SCVRStops_33_21.png" /> 21<br />\
    <img src="styles/legend/SCVRStops_33_22.png" /> 22<br />\
    <img src="styles/legend/SCVRStops_33_23.png" /> 23<br />\
    <img src="styles/legend/SCVRStops_33_24.png" /> 24<br />\
    <img src="styles/legend/SCVRStops_33_25.png" /> 25<br />\
    <img src="styles/legend/SCVRStops_33_26.png" /> 26<br />\
    <img src="styles/legend/SCVRStops_33_27.png" /> 27<br />\
    <img src="styles/legend/SCVRStops_33_28.png" /> 28<br />\
    <img src="styles/legend/SCVRStops_33_29.png" /> 29<br />\
    <img src="styles/legend/SCVRStops_33_30.png" /> 30<br />\
    <img src="styles/legend/SCVRStops_33_31.png" /> 31<br />\
    <img src="styles/legend/SCVRStops_33_32.png" /> 32<br />\
    <img src="styles/legend/SCVRStops_33_33.png" /> 33<br />\
    <img src="styles/legend/SCVRStops_33_34.png" /> 34<br />\
    <img src="styles/legend/SCVRStops_33_35.png" /> 35<br />\
    <img src="styles/legend/SCVRStops_33_36.png" /> 36<br />\
    <img src="styles/legend/SCVRStops_33_37.png" /> 37<br />\
    <img src="styles/legend/SCVRStops_33_38.png" /> 38<br />\
    <img src="styles/legend/SCVRStops_33_39.png" /> 39<br />\
    <img src="styles/legend/SCVRStops_33_40.png" /> 40<br />\
    <img src="styles/legend/SCVRStops_33_41.png" /> 41<br />\
    <img src="styles/legend/SCVRStops_33_42.png" /> 42<br />\
    <img src="styles/legend/SCVRStops_33_43.png" /> 43<br />\
    <img src="styles/legend/SCVRStops_33_44.png" /> 44<br />\
    <img src="styles/legend/SCVRStops_33_45.png" /> 45<br />\
    <img src="styles/legend/SCVRStops_33_46.png" /> 46<br />\
    <img src="styles/legend/SCVRStops_33_47.png" /> 47<br />\
    <img src="styles/legend/SCVRStops_33_48.png" /> 48<br />\
    <img src="styles/legend/SCVRStops_33_49.png" /> 49<br />\
    <img src="styles/legend/SCVRStops_33_50.png" /> 50<br />\
    <img src="styles/legend/SCVRStops_33_51.png" /> 51<br />\
    <img src="styles/legend/SCVRStops_33_52.png" /> <br />'
        });
var format_SCVRRWI_34 = new ol.format.GeoJSON();
var features_SCVRRWI_34 = format_SCVRRWI_34.readFeatures(json_SCVRRWI_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCVRRWI_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCVRRWI_34.addFeatures(features_SCVRRWI_34);
var lyr_SCVRRWI_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCVRRWI_34, 
                style: style_SCVRRWI_34,
                popuplayertitle: "SCVR RWI",
                interactive: true,
    title: 'SCVR RWI<br />\
    <img src="styles/legend/SCVRRWI_34_0.png" /> 0.365 - 0.4162<br />\
    <img src="styles/legend/SCVRRWI_34_1.png" /> 0.4162 - 0.5202<br />\
    <img src="styles/legend/SCVRRWI_34_2.png" /> 0.5202 - 0.5902<br />\
    <img src="styles/legend/SCVRRWI_34_3.png" /> 0.5902 - 0.634<br />\
    <img src="styles/legend/SCVRRWI_34_4.png" /> 0.634 - 0.754<br />\
    <img src="styles/legend/SCVRRWI_34_5.png" /> 0.754 - 0.7916<br />\
    <img src="styles/legend/SCVRRWI_34_6.png" /> 0.7916 - 0.8286<br />\
    <img src="styles/legend/SCVRRWI_34_7.png" /> 0.8286 - 0.8502<br />\
    <img src="styles/legend/SCVRRWI_34_8.png" /> 0.8502 - 0.8618<br />\
    <img src="styles/legend/SCVRRWI_34_9.png" /> 0.8618 - 0.889<br />\
    <img src="styles/legend/SCVRRWI_34_10.png" /> 0.889 - 0.8986<br />\
    <img src="styles/legend/SCVRRWI_34_11.png" /> 0.8986 - 0.9148<br />\
    <img src="styles/legend/SCVRRWI_34_12.png" /> 0.9148 - 0.9884<br />\
    <img src="styles/legend/SCVRRWI_34_13.png" /> 0.9884 - 1.1038<br />\
    <img src="styles/legend/SCVRRWI_34_14.png" /> 1.1038 - 1.179<br />'
        });
var format_APSCStopPop_35 = new ol.format.GeoJSON();
var features_APSCStopPop_35 = format_APSCStopPop_35.readFeatures(json_APSCStopPop_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCStopPop_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCStopPop_35.addFeatures(features_APSCStopPop_35);
var lyr_APSCStopPop_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCStopPop_35, 
                style: style_APSCStopPop_35,
                popuplayertitle: "APSC Stop Pop",
                interactive: true,
    title: 'APSC Stop Pop<br />\
    <img src="styles/legend/APSCStopPop_35_0.png" /> 10 min<br />'
        });
var format_APSCRtPop1000Mtrs_36 = new ol.format.GeoJSON();
var features_APSCRtPop1000Mtrs_36 = format_APSCRtPop1000Mtrs_36.readFeatures(json_APSCRtPop1000Mtrs_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCRtPop1000Mtrs_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCRtPop1000Mtrs_36.addFeatures(features_APSCRtPop1000Mtrs_36);
var lyr_APSCRtPop1000Mtrs_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCRtPop1000Mtrs_36, 
                style: style_APSCRtPop1000Mtrs_36,
                popuplayertitle: "APSC Rt Pop 1000 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/APSCRtPop1000Mtrs_36.png" /> APSC Rt Pop 1000 Mtrs'
            });
var format_APSCRtPop500Mtrs_37 = new ol.format.GeoJSON();
var features_APSCRtPop500Mtrs_37 = format_APSCRtPop500Mtrs_37.readFeatures(json_APSCRtPop500Mtrs_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCRtPop500Mtrs_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCRtPop500Mtrs_37.addFeatures(features_APSCRtPop500Mtrs_37);
var lyr_APSCRtPop500Mtrs_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCRtPop500Mtrs_37, 
                style: style_APSCRtPop500Mtrs_37,
                popuplayertitle: "APSC Rt Pop 500 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/APSCRtPop500Mtrs_37.png" /> APSC Rt Pop 500 Mtrs'
            });
var format_APSCRtPop250Mtrs_38 = new ol.format.GeoJSON();
var features_APSCRtPop250Mtrs_38 = format_APSCRtPop250Mtrs_38.readFeatures(json_APSCRtPop250Mtrs_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCRtPop250Mtrs_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCRtPop250Mtrs_38.addFeatures(features_APSCRtPop250Mtrs_38);
var lyr_APSCRtPop250Mtrs_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCRtPop250Mtrs_38, 
                style: style_APSCRtPop250Mtrs_38,
                popuplayertitle: "APSC Rt Pop 250 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/APSCRtPop250Mtrs_38.png" /> APSC Rt Pop 250 Mtrs'
            });
var format_APSCRtPop100Mtrs_39 = new ol.format.GeoJSON();
var features_APSCRtPop100Mtrs_39 = format_APSCRtPop100Mtrs_39.readFeatures(json_APSCRtPop100Mtrs_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCRtPop100Mtrs_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCRtPop100Mtrs_39.addFeatures(features_APSCRtPop100Mtrs_39);
var lyr_APSCRtPop100Mtrs_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCRtPop100Mtrs_39, 
                style: style_APSCRtPop100Mtrs_39,
                popuplayertitle: "APSC Rt Pop 100 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/APSCRtPop100Mtrs_39.png" /> APSC Rt Pop 100 Mtrs'
            });
var format_APSCRouteMtrs_40 = new ol.format.GeoJSON();
var features_APSCRouteMtrs_40 = format_APSCRouteMtrs_40.readFeatures(json_APSCRouteMtrs_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCRouteMtrs_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCRouteMtrs_40.addFeatures(features_APSCRouteMtrs_40);
var lyr_APSCRouteMtrs_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCRouteMtrs_40, 
                style: style_APSCRouteMtrs_40,
                popuplayertitle: "APSC Route Mtrs",
                interactive: true,
                title: '<img src="styles/legend/APSCRouteMtrs_40.png" /> APSC Route Mtrs'
            });
var format_APSCStops_41 = new ol.format.GeoJSON();
var features_APSCStops_41 = format_APSCStops_41.readFeatures(json_APSCStops_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCStops_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCStops_41.addFeatures(features_APSCStops_41);
var lyr_APSCStops_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCStops_41, 
                style: style_APSCStops_41,
                popuplayertitle: "APSC Stops",
                interactive: true,
    title: 'APSC Stops<br />\
    <img src="styles/legend/APSCStops_41_0.png" /> 0<br />\
    <img src="styles/legend/APSCStops_41_1.png" /> 1<br />\
    <img src="styles/legend/APSCStops_41_2.png" /> 2<br />\
    <img src="styles/legend/APSCStops_41_3.png" /> 3<br />\
    <img src="styles/legend/APSCStops_41_4.png" /> 4<br />\
    <img src="styles/legend/APSCStops_41_5.png" /> 5<br />\
    <img src="styles/legend/APSCStops_41_6.png" /> 6<br />\
    <img src="styles/legend/APSCStops_41_7.png" /> 7<br />\
    <img src="styles/legend/APSCStops_41_8.png" /> 8<br />\
    <img src="styles/legend/APSCStops_41_9.png" /> 9<br />\
    <img src="styles/legend/APSCStops_41_10.png" /> 10<br />\
    <img src="styles/legend/APSCStops_41_11.png" /> 11<br />\
    <img src="styles/legend/APSCStops_41_12.png" /> 12<br />\
    <img src="styles/legend/APSCStops_41_13.png" /> 13<br />\
    <img src="styles/legend/APSCStops_41_14.png" /> 14<br />\
    <img src="styles/legend/APSCStops_41_15.png" /> 15<br />\
    <img src="styles/legend/APSCStops_41_16.png" /> 16<br />\
    <img src="styles/legend/APSCStops_41_17.png" /> 17<br />\
    <img src="styles/legend/APSCStops_41_18.png" /> 18<br />\
    <img src="styles/legend/APSCStops_41_19.png" /> 19<br />\
    <img src="styles/legend/APSCStops_41_20.png" /> 20<br />\
    <img src="styles/legend/APSCStops_41_21.png" /> 21<br />\
    <img src="styles/legend/APSCStops_41_22.png" /> 22<br />\
    <img src="styles/legend/APSCStops_41_23.png" /> <br />'
        });
var format_APSCTerminals_42 = new ol.format.GeoJSON();
var features_APSCTerminals_42 = format_APSCTerminals_42.readFeatures(json_APSCTerminals_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCTerminals_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCTerminals_42.addFeatures(features_APSCTerminals_42);
var lyr_APSCTerminals_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCTerminals_42, 
                style: style_APSCTerminals_42,
                popuplayertitle: "APSC Terminals",
                interactive: true,
    title: 'APSC Terminals<br />\
    <img src="styles/legend/APSCTerminals_42_0.png" /> Anjur Phata<br />\
    <img src="styles/legend/APSCTerminals_42_1.png" /> Shivaji Chowk Bhiwandi<br />\
    <img src="styles/legend/APSCTerminals_42_2.png" /> <br />'
        });
var format_APSCRWI_43 = new ol.format.GeoJSON();
var features_APSCRWI_43 = format_APSCRWI_43.readFeatures(json_APSCRWI_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCRWI_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCRWI_43.addFeatures(features_APSCRWI_43);
var lyr_APSCRWI_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCRWI_43, 
                style: style_APSCRWI_43,
                popuplayertitle: "APSC RWI",
                interactive: true,
    title: 'APSC RWI<br />\
    <img src="styles/legend/APSCRWI_43_0.png" /> 0.583 - 0.647<br />\
    <img src="styles/legend/APSCRWI_43_1.png" /> 0.647 - 0.71<br />\
    <img src="styles/legend/APSCRWI_43_2.png" /> 0.71 - 0.774<br />\
    <img src="styles/legend/APSCRWI_43_3.png" /> 0.774 - 0.81<br />\
    <img src="styles/legend/APSCRWI_43_4.png" /> 0.81 - 0.846<br />\
    <img src="styles/legend/APSCRWI_43_5.png" /> 0.846 - 0.882<br />\
    <img src="styles/legend/APSCRWI_43_6.png" /> 0.882 - 0.899<br />\
    <img src="styles/legend/APSCRWI_43_7.png" /> 0.899 - 0.917<br />\
    <img src="styles/legend/APSCRWI_43_8.png" /> 0.917 - 0.934<br />\
    <img src="styles/legend/APSCRWI_43_9.png" /> 0.934 - 0.947<br />\
    <img src="styles/legend/APSCRWI_43_10.png" /> 0.947 - 0.959<br />\
    <img src="styles/legend/APSCRWI_43_11.png" /> 0.959 - 0.972<br />\
    <img src="styles/legend/APSCRWI_43_12.png" /> 0.972 - 1.004<br />\
    <img src="styles/legend/APSCRWI_43_13.png" /> 1.004 - 1.036<br />\
    <img src="styles/legend/APSCRWI_43_14.png" /> 1.036 - 1.068<br />'
        });
var format_BhiwandiRWI_44 = new ol.format.GeoJSON();
var features_BhiwandiRWI_44 = format_BhiwandiRWI_44.readFeatures(json_BhiwandiRWI_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhiwandiRWI_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhiwandiRWI_44.addFeatures(features_BhiwandiRWI_44);
var lyr_BhiwandiRWI_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BhiwandiRWI_44, 
                style: style_BhiwandiRWI_44,
                popuplayertitle: "Bhiwandi RWI",
                interactive: true,
    title: 'Bhiwandi RWI<br />\
    <img src="styles/legend/BhiwandiRWI_44_0.png" /> 0.32 - 0.4411<br />\
    <img src="styles/legend/BhiwandiRWI_44_1.png" /> 0.4411 - 0.5621<br />\
    <img src="styles/legend/BhiwandiRWI_44_2.png" /> 0.5621 - 0.6832<br />\
    <img src="styles/legend/BhiwandiRWI_44_3.png" /> 0.6832 - 0.7872<br />\
    <img src="styles/legend/BhiwandiRWI_44_4.png" /> 0.7872 - 0.84<br />\
    <img src="styles/legend/BhiwandiRWI_44_5.png" /> 0.84 - 0.8928<br />\
    <img src="styles/legend/BhiwandiRWI_44_6.png" /> 0.8928 - 0.9456<br />\
    <img src="styles/legend/BhiwandiRWI_44_7.png" /> 0.9456 - 0.9811<br />\
    <img src="styles/legend/BhiwandiRWI_44_8.png" /> 0.9811 - 0.9992<br />\
    <img src="styles/legend/BhiwandiRWI_44_9.png" /> 0.9992 - 1.0173<br />\
    <img src="styles/legend/BhiwandiRWI_44_10.png" /> 1.0173 - 1.0355<br />\
    <img src="styles/legend/BhiwandiRWI_44_11.png" /> 1.0355 - 1.0456<br />\
    <img src="styles/legend/BhiwandiRWI_44_12.png" /> 1.0456 - 1.0531<br />\
    <img src="styles/legend/BhiwandiRWI_44_13.png" /> 1.0531 - 1.0605<br />\
    <img src="styles/legend/BhiwandiRWI_44_14.png" /> 1.0605 - 1.068<br />'
        });
var format_BhiwandiPop_45 = new ol.format.GeoJSON();
var features_BhiwandiPop_45 = format_BhiwandiPop_45.readFeatures(json_BhiwandiPop_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhiwandiPop_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhiwandiPop_45.addFeatures(features_BhiwandiPop_45);
var lyr_BhiwandiPop_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BhiwandiPop_45, 
                style: style_BhiwandiPop_45,
                popuplayertitle: "Bhiwandi Pop",
                interactive: true,
                title: '<img src="styles/legend/BhiwandiPop_45.png" /> Bhiwandi Pop'
            });
var format_BhiwandiDemographics_46 = new ol.format.GeoJSON();
var features_BhiwandiDemographics_46 = format_BhiwandiDemographics_46.readFeatures(json_BhiwandiDemographics_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhiwandiDemographics_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhiwandiDemographics_46.addFeatures(features_BhiwandiDemographics_46);
var lyr_BhiwandiDemographics_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BhiwandiDemographics_46, 
                style: style_BhiwandiDemographics_46,
                popuplayertitle: "Bhiwandi Demographics",
                interactive: true,
                title: '<img src="styles/legend/BhiwandiDemographics_46.png" /> Bhiwandi Demographics'
            });
var format_APSCRoutePopMerged_47 = new ol.format.GeoJSON();
var features_APSCRoutePopMerged_47 = format_APSCRoutePopMerged_47.readFeatures(json_APSCRoutePopMerged_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APSCRoutePopMerged_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APSCRoutePopMerged_47.addFeatures(features_APSCRoutePopMerged_47);
var lyr_APSCRoutePopMerged_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APSCRoutePopMerged_47, 
                style: style_APSCRoutePopMerged_47,
                popuplayertitle: "APSC Route Pop Merged",
                interactive: true,
                title: '<img src="styles/legend/APSCRoutePopMerged_47.png" /> APSC Route Pop Merged'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KDMCBoundry_1.setVisible(true);lyr_Ambernath_2.setVisible(true);lyr_BadlapurBoundary_3.setVisible(true);lyr_BhiwandiBoundary_4.setVisible(true);lyr_UlhasnagarBoundry_5.setVisible(true);lyr_AllRoutesKDMC_6.setVisible(true);lyr_TemplesMgrd_7.setVisible(true);lyr_PublicBuildings_8.setVisible(true);lyr_Mall_9.setVisible(true);lyr_PrivateOffice_10.setVisible(true);lyr_office_government_11.setVisible(true);lyr_Medical_12.setVisible(true);lyr_Industrial_13.setVisible(true);lyr_Education_14.setVisible(true);lyr_BhiwandiRouteIntercity_15.setVisible(true);lyr_BhiwandiTerminalsIntercity_16.setVisible(true);lyr_KDMTBusStops_17.setVisible(true);lyr_RtShivajiChowktoVirar_18.setVisible(true);lyr_SCVRTerminals_19.setVisible(true);lyr_BhiwandiTerminalsIntracity_20.setVisible(true);lyr_SCVREducation_21.setVisible(true);lyr_SCVRTemples_22.setVisible(true);lyr_SCVRPSU_23.setVisible(true);lyr_SCVRIndustries_24.setVisible(true);lyr_SCVROffices_25.setVisible(true);lyr_SCVRHospitals_26.setVisible(true);lyr_SCVRStopPopulation_27.setVisible(true);lyr_SCVRRoutePop1000Mtrs_28.setVisible(true);lyr_SCVRRtPop500Mtrs_29.setVisible(true);lyr_SCVRRtPop250mtrs_30.setVisible(true);lyr_SCVRRtPop100Mtrs_31.setVisible(true);lyr_SCVRRouteMtrs_32.setVisible(true);lyr_SCVRStops_33.setVisible(true);lyr_SCVRRWI_34.setVisible(true);lyr_APSCStopPop_35.setVisible(true);lyr_APSCRtPop1000Mtrs_36.setVisible(true);lyr_APSCRtPop500Mtrs_37.setVisible(true);lyr_APSCRtPop250Mtrs_38.setVisible(true);lyr_APSCRtPop100Mtrs_39.setVisible(true);lyr_APSCRouteMtrs_40.setVisible(true);lyr_APSCStops_41.setVisible(true);lyr_APSCTerminals_42.setVisible(true);lyr_APSCRWI_43.setVisible(true);lyr_BhiwandiRWI_44.setVisible(true);lyr_BhiwandiPop_45.setVisible(true);lyr_BhiwandiDemographics_46.setVisible(true);lyr_APSCRoutePopMerged_47.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KDMCBoundry_1,lyr_Ambernath_2,lyr_BadlapurBoundary_3,lyr_BhiwandiBoundary_4,lyr_UlhasnagarBoundry_5,lyr_AllRoutesKDMC_6,lyr_TemplesMgrd_7,lyr_PublicBuildings_8,lyr_Mall_9,lyr_PrivateOffice_10,lyr_office_government_11,lyr_Medical_12,lyr_Industrial_13,lyr_Education_14,lyr_BhiwandiRouteIntercity_15,lyr_BhiwandiTerminalsIntercity_16,lyr_KDMTBusStops_17,lyr_RtShivajiChowktoVirar_18,lyr_SCVRTerminals_19,lyr_BhiwandiTerminalsIntracity_20,lyr_SCVREducation_21,lyr_SCVRTemples_22,lyr_SCVRPSU_23,lyr_SCVRIndustries_24,lyr_SCVROffices_25,lyr_SCVRHospitals_26,lyr_SCVRStopPopulation_27,lyr_SCVRRoutePop1000Mtrs_28,lyr_SCVRRtPop500Mtrs_29,lyr_SCVRRtPop250mtrs_30,lyr_SCVRRtPop100Mtrs_31,lyr_SCVRRouteMtrs_32,lyr_SCVRStops_33,lyr_SCVRRWI_34,lyr_APSCStopPop_35,lyr_APSCRtPop1000Mtrs_36,lyr_APSCRtPop500Mtrs_37,lyr_APSCRtPop250Mtrs_38,lyr_APSCRtPop100Mtrs_39,lyr_APSCRouteMtrs_40,lyr_APSCStops_41,lyr_APSCTerminals_42,lyr_APSCRWI_43,lyr_BhiwandiRWI_44,lyr_BhiwandiPop_45,lyr_BhiwandiDemographics_46,lyr_APSCRoutePopMerged_47];
lyr_KDMCBoundry_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Ambernath_2.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BadlapurBoundary_3.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BhiwandiBoundary_4.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_UlhasnagarBoundry_5.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_AllRoutesKDMC_6.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'layer': 'layer', 'path': 'path', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TemplesMgrd_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'amenity': 'amenity', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'man_made': 'man_made', 'flag_type': 'flag_type', 'addr_neigh': 'addr_neigh', 'pincode': 'pincode', 'addr_subur': 'addr_subur', 'layer': 'layer', 'polling_st': 'polling_st', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'internet_a': 'internet_a', 'baby_feedi': 'baby_feedi', 'air_condit': 'air_condit', 'entrance': 'entrance', 'wheelchair': 'wheelchair', 'shop': 'shop', 'payment_up': 'payment_up', 'level': 'level', 'addr_floor': 'addr_floor', 'service_ti': 'service_ti', 'website': 'website', 'phone': 'phone', 'access': 'access', 'check_date': 'check_date', 'name_en': 'name_en', 'place_of_w': 'place_of_w', 'descriptio': 'descriptio', 'name_hi': 'name_hi', 'alt_name': 'alt_name', 'building': 'building', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'opening_ho': 'opening_ho', 'addr_state': 'addr_state', 'addr_count': 'addr_count', 'denominati': 'denominati', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'tourism': 'tourism', 'name_mr': 'name_mr', 'name': 'name', 'Name_2': 'Name_2', 'descript_1': 'descript_1', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', 'path': 'path', });
lyr_PublicBuildings_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'operator_w': 'operator_w', 'operator': 'operator', 'tower_type': 'tower_type', 'man_made': 'man_made', 'name_en': 'name_en', 'opening_ho': 'opening_ho', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'religion': 'religion', 'name': 'name', });
lyr_Mall_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'shop': 'shop', 'building': 'building', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'name': 'name', });
lyr_PrivateOffice_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'tourism': 'tourism', 'name_hi': 'name_hi', 'operator': 'operator', 'name_mr': 'name_mr', 'internet_a': 'internet_a', 'name': 'name', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'barrier': 'barrier', 'access': 'access', 'website': 'website', 'phone': 'phone', 'opening_ho': 'opening_ho', 'name_en': 'name_en', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', });
lyr_office_government_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'opening_ho': 'opening_ho', 'name_en': 'name_en', 'name_mr': 'name_mr', 'name': 'name', 'government': 'government', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', });
lyr_Medical_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'healthcare': 'healthcare', 'healthca_1': 'healthca_1', 'name_mr': 'name_mr', 'name_etymo': 'name_etymo', 'health_fac': 'health_fac', 'descriptio': 'descriptio', 'addr_subdi': 'addr_subdi', 'wheelchair': 'wheelchair', 'opening_ho': 'opening_ho', 'operator': 'operator', 'phone': 'phone', 'website': 'website', 'operator_t': 'operator_t', 'email': 'email', 'contact_ph': 'contact_ph', 'dispensing': 'dispensing', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'name_en': 'name_en', 'emergency': 'emergency', 'addr_stree': 'addr_stree', 'name': 'name', 'addr_state': 'addr_state', 'addr_postc': 'addr_postc', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', });
lyr_Industrial_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr_house': 'addr_house', });
lyr_Education_14.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'name': 'name', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'layer': 'layer', 'path': 'path', });
lyr_BhiwandiRouteIntercity_15.set('fieldAliases', {'Name': 'Name', 'length': 'length', 'Distance K': 'Distance K', });
lyr_BhiwandiTerminalsIntercity_16.set('fieldAliases', {'Name': 'Name', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'zcoord': 'zcoord', });
lyr_KDMTBusStops_17.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '___Sr__No_': '___Sr__No_', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_RtShivajiChowktoVirar_18.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SCVRTerminals_19.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BhiwandiTerminalsIntracity_20.set('fieldAliases', {'Name': 'Name', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_SCVREducation_21.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'operator_w': 'operator_w', 'operator_s': 'operator_s', 'name_etymo': 'name_etymo', 'capacity': 'capacity', 'preschool': 'preschool', 'barrier': 'barrier', 'access': 'access', 'descriptio': 'descriptio', 'website': 'website', 'email': 'email', 'operator': 'operator', 'internet_a': 'internet_a', 'opening_ho': 'opening_ho', 'phone': 'phone', 'wheelchair': 'wheelchair', 'operator_t': 'operator_t', 'designatio': 'designatio', 'addr_house': 'addr_house', 'name_en': 'name_en', 'wikidata': 'wikidata', 'timing': 'timing', 'religion': 'religion', 'grades': 'grades', 'denominati': 'denominati', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_hou_1': 'addr_hou_1', 'addr_city': 'addr_city', 'name': 'name', 'layer': 'layer', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'short_name': 'short_name', 'level': 'level', 'internet_1': 'internet_1', 'internet_2': 'internet_2', 'isced_leve': 'isced_leve', 'roof_shape': 'roof_shape', 'roof_level': 'roof_level', 'building_l': 'building_l', 'surface': 'surface', 'alt_name': 'alt_name', 'building': 'building', 'path': 'path', });
lyr_SCVRTemples_22.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'religion': 'religion', 'service_ti': 'service_ti', 'air_condit': 'air_condit', 'addr_distr': 'addr_distr', 'name_mr': 'name_mr', 'operator_w': 'operator_w', 'operator_t': 'operator_t', 'operator_s': 'operator_s', 'operator': 'operator', 'wheelchair': 'wheelchair', 'opening_ho': 'opening_ho', 'name_en': 'name_en', 'timing': 'timing', 'name': 'name', 'grades': 'grades', 'denominati': 'denominati', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'name_hi': 'name_hi', 'layer': 'layer', 'landuse': 'landuse', 'website': 'website', 'descriptio': 'descriptio', 'building_l': 'building_l', 'roof_mater': 'roof_mater', 'roof_colou': 'roof_colou', 'height': 'height', 'alt_name': 'alt_name', 'building': 'building', 'path': 'path', });
lyr_SCVRPSU_23.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'operator_w': 'operator_w', 'operator_1': 'operator_1', 'operator_t': 'operator_t', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'addr_postc': 'addr_postc', 'name_en': 'name_en', 'addr_stree': 'addr_stree', 'ref': 'ref', 'operator': 'operator', 'name': 'name', 'office': 'office', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'landuse': 'landuse', 'building': 'building', 'layer': 'layer', 'path': 'path', });
lyr_SCVRIndustries_24.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'building_m': 'building_m', 'roof_mater': 'roof_mater', 'roof_colou': 'roof_colou', 'height': 'height', 'industrial': 'industrial', 'abandoned': 'abandoned', 'roof_shape': 'roof_shape', 'roof_level': 'roof_level', 'building_l': 'building_l', 'website': 'website', 'phone': 'phone', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'layer': 'layer', 'path': 'path', });
lyr_SCVROffices_25.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'landuse': 'landuse', 'layer': 'layer', 'addr_city': 'addr_city', 'height': 'height', 'building_l': 'building_l', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'operator': 'operator', 'opening_ho': 'opening_ho', 'short_name': 'short_name', 'name': 'name', 'building': 'building', 'brand_wiki': 'brand_wiki', 'brand': 'brand', 'branch': 'branch', 'closing_ho': 'closing_ho', 'alt_name': 'alt_name', 'postal_cod': 'postal_cod', 'phone': 'phone', 'address': 'address', 'email': 'email', 'name_en': 'name_en', 'smoking': 'smoking', 'website': 'website', 'addr_postc': 'addr_postc', 'addr_hou_1': 'addr_hou_1', 'path': 'path', });
lyr_SCVRHospitals_26.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'healthcare': 'healthcare', 'healthca_1': 'healthca_1', 'amenity': 'amenity', 'drive_thro': 'drive_thro', 'dispensing': 'dispensing', 'descriptio': 'descriptio', 'name_mr': 'name_mr', 'emergency': 'emergency', 'phone_mobi': 'phone_mobi', 'alt_name': 'alt_name', 'operator': 'operator', 'addr_subdi': 'addr_subdi', 'email': 'email', 'operator_t': 'operator_t', 'wheelchair': 'wheelchair', 'phone': 'phone', 'opening_ho': 'opening_ho', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'addr_stree': 'addr_stree', 'name_en': 'name_en', 'website': 'website', 'addr_state': 'addr_state', 'addr_postc': 'addr_postc', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', 'name': 'name', 'roof_shape': 'roof_shape', 'roof_level': 'roof_level', 'roof_mater': 'roof_mater', 'roof_colou': 'roof_colou', 'height': 'height', 'building_f': 'building_f', 'building_l': 'building_l', 'building': 'building', 'layer': 'layer', 'path': 'path', });
lyr_SCVRStopPopulation_27.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_SCVRRoutePop1000Mtrs_28.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', 'Pop': 'Pop', });
lyr_SCVRRtPop500Mtrs_29.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', 'Pop': 'Pop', });
lyr_SCVRRtPop250mtrs_30.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', 'Pop': 'Pop', });
lyr_SCVRRtPop100Mtrs_31.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', 'Pop': 'Pop', 'Pax %': 'Pax %', 'Avg Tckt': 'Avg Tckt', 'Revenue': 'Revenue', });
lyr_SCVRRouteMtrs_32.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', });
lyr_SCVRStops_33.set('fieldAliases', {'id': 'id', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_SCVRRWI_34.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', 'Pop': 'Pop', });
lyr_APSCStopPop_35.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_APSCRtPop1000Mtrs_36.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Pop': 'Pop', });
lyr_APSCRtPop500Mtrs_37.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Pop': 'Pop', });
lyr_APSCRtPop250Mtrs_38.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Pop': 'Pop', });
lyr_APSCRtPop100Mtrs_39.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Pop': 'Pop', 'Ridership': 'Ridership', 'Tckt Price': 'Tckt Price', 'Revenue': 'Revenue', });
lyr_APSCRouteMtrs_40.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', });
lyr_APSCStops_41.set('fieldAliases', {'id': 'id', });
lyr_APSCTerminals_42.set('fieldAliases', {'Name': 'Name', });
lyr_APSCRWI_43.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Pop': 'Pop', });
lyr_BhiwandiRWI_44.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BhiwandiPop_45.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', '_count': '_count', '_sum': '_sum', '_mean': '_mean', });
lyr_BhiwandiDemographics_46.set('fieldAliases', {'shapeName': 'shapeName', 'Pop': 'Pop', 'Area SqKm': 'Area SqKm', 'PeriKM': 'PeriKM', });
lyr_APSCRoutePopMerged_47.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Pop': 'Pop', 'Ridership': 'Ridership', 'Tckt Price': 'Tckt Price', 'Revenue': 'Revenue', 'layer': 'layer', 'path': 'path', });
lyr_KDMCBoundry_1.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Ambernath_2.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_BadlapurBoundary_3.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_BhiwandiBoundary_4.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_UlhasnagarBoundry_5.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_AllRoutesKDMC_6.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_TemplesMgrd_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'flag_type': 'TextEdit', 'addr_neigh': 'TextEdit', 'pincode': 'TextEdit', 'addr_subur': 'TextEdit', 'layer': 'TextEdit', 'polling_st': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'internet_a': 'TextEdit', 'baby_feedi': 'TextEdit', 'air_condit': 'TextEdit', 'entrance': 'TextEdit', 'wheelchair': 'TextEdit', 'shop': 'TextEdit', 'payment_up': 'TextEdit', 'level': 'TextEdit', 'addr_floor': 'TextEdit', 'service_ti': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'access': 'TextEdit', 'check_date': 'TextEdit', 'name_en': 'TextEdit', 'place_of_w': 'TextEdit', 'descriptio': 'TextEdit', 'name_hi': 'TextEdit', 'alt_name': 'TextEdit', 'building': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_state': 'TextEdit', 'addr_count': 'TextEdit', 'denominati': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'tourism': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', 'Name_2': 'TextEdit', 'descript_1': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', 'path': 'TextEdit', });
lyr_PublicBuildings_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'operator_w': 'TextEdit', 'operator': 'TextEdit', 'tower_type': 'TextEdit', 'man_made': 'TextEdit', 'name_en': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'religion': 'TextEdit', 'name': 'TextEdit', });
lyr_Mall_9.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'shop': 'TextEdit', 'building': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'name': 'TextEdit', });
lyr_PrivateOffice_10.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'tourism': 'TextEdit', 'name_hi': 'TextEdit', 'operator': 'TextEdit', 'name_mr': 'TextEdit', 'internet_a': 'TextEdit', 'name': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'opening_ho': 'TextEdit', 'name_en': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_house': 'TextEdit', });
lyr_office_government_11.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'opening_ho': 'TextEdit', 'name_en': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', 'government': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', });
lyr_Medical_12.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'healthcare': 'TextEdit', 'healthca_1': 'TextEdit', 'name_mr': 'TextEdit', 'name_etymo': 'TextEdit', 'health_fac': 'TextEdit', 'descriptio': 'TextEdit', 'addr_subdi': 'TextEdit', 'wheelchair': 'TextEdit', 'opening_ho': 'TextEdit', 'operator': 'TextEdit', 'phone': 'TextEdit', 'website': 'TextEdit', 'operator_t': 'TextEdit', 'email': 'TextEdit', 'contact_ph': 'TextEdit', 'dispensing': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'name_en': 'TextEdit', 'emergency': 'TextEdit', 'addr_stree': 'TextEdit', 'name': 'TextEdit', 'addr_state': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_full': 'TextEdit', 'addr_distr': 'TextEdit', });
lyr_Industrial_13.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr_house': 'TextEdit', });
lyr_Education_14.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BhiwandiRouteIntercity_15.set('fieldImages', {'Name': 'TextEdit', 'length': 'TextEdit', 'Distance K': 'TextEdit', });
lyr_BhiwandiTerminalsIntercity_16.set('fieldImages', {'Name': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', 'zcoord': 'TextEdit', });
lyr_KDMTBusStops_17.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', '___Sr__No_': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_RtShivajiChowktoVirar_18.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SCVRTerminals_19.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_BhiwandiTerminalsIntracity_20.set('fieldImages', {'Name': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', });
lyr_SCVREducation_21.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'operator_w': 'TextEdit', 'operator_s': 'TextEdit', 'name_etymo': 'TextEdit', 'capacity': 'TextEdit', 'preschool': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'descriptio': 'TextEdit', 'website': 'TextEdit', 'email': 'TextEdit', 'operator': 'TextEdit', 'internet_a': 'TextEdit', 'opening_ho': 'TextEdit', 'phone': 'TextEdit', 'wheelchair': 'TextEdit', 'operator_t': 'TextEdit', 'designatio': 'TextEdit', 'addr_house': 'TextEdit', 'name_en': 'TextEdit', 'wikidata': 'TextEdit', 'timing': 'TextEdit', 'religion': 'TextEdit', 'grades': 'TextEdit', 'denominati': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_hou_1': 'TextEdit', 'addr_city': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'short_name': 'TextEdit', 'level': 'TextEdit', 'internet_1': 'TextEdit', 'internet_2': 'TextEdit', 'isced_leve': 'TextEdit', 'roof_shape': 'TextEdit', 'roof_level': 'TextEdit', 'building_l': 'TextEdit', 'surface': 'TextEdit', 'alt_name': 'TextEdit', 'building': 'TextEdit', 'path': 'TextEdit', });
lyr_SCVRTemples_22.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'religion': 'TextEdit', 'service_ti': 'TextEdit', 'air_condit': 'TextEdit', 'addr_distr': 'TextEdit', 'name_mr': 'TextEdit', 'operator_w': 'TextEdit', 'operator_t': 'TextEdit', 'operator_s': 'TextEdit', 'operator': 'TextEdit', 'wheelchair': 'TextEdit', 'opening_ho': 'TextEdit', 'name_en': 'TextEdit', 'timing': 'TextEdit', 'name': 'TextEdit', 'grades': 'TextEdit', 'denominati': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'name_hi': 'TextEdit', 'layer': 'TextEdit', 'landuse': 'TextEdit', 'website': 'TextEdit', 'descriptio': 'TextEdit', 'building_l': 'TextEdit', 'roof_mater': 'TextEdit', 'roof_colou': 'TextEdit', 'height': 'TextEdit', 'alt_name': 'TextEdit', 'building': 'TextEdit', 'path': 'TextEdit', });
lyr_SCVRPSU_23.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'operator_w': '', 'operator_1': '', 'operator_t': '', 'brand_wiki': '', 'brand_wi_1': '', 'brand': '', 'addr_postc': '', 'name_en': '', 'addr_stree': '', 'ref': '', 'operator': '', 'name': '', 'office': '', 'addr_house': '', 'addr_city': '', 'landuse': '', 'building': '', 'layer': '', 'path': '', });
lyr_SCVRIndustries_24.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'building_m': 'TextEdit', 'roof_mater': 'TextEdit', 'roof_colou': 'TextEdit', 'height': 'TextEdit', 'industrial': 'TextEdit', 'abandoned': 'TextEdit', 'roof_shape': 'TextEdit', 'roof_level': 'TextEdit', 'building_l': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SCVROffices_25.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'landuse': 'TextEdit', 'layer': 'TextEdit', 'addr_city': 'TextEdit', 'height': 'TextEdit', 'building_l': 'TextEdit', 'addr_house': 'TextEdit', 'addr_stree': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'short_name': 'TextEdit', 'name': 'TextEdit', 'building': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand': 'TextEdit', 'branch': 'TextEdit', 'closing_ho': 'TextEdit', 'alt_name': 'TextEdit', 'postal_cod': 'TextEdit', 'phone': 'TextEdit', 'address': 'TextEdit', 'email': 'TextEdit', 'name_en': 'TextEdit', 'smoking': 'TextEdit', 'website': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_hou_1': 'TextEdit', 'path': 'TextEdit', });
lyr_SCVRHospitals_26.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'healthcare': 'TextEdit', 'healthca_1': 'TextEdit', 'amenity': 'TextEdit', 'drive_thro': 'TextEdit', 'dispensing': 'TextEdit', 'descriptio': 'TextEdit', 'name_mr': 'TextEdit', 'emergency': 'TextEdit', 'phone_mobi': 'TextEdit', 'alt_name': 'TextEdit', 'operator': 'TextEdit', 'addr_subdi': 'TextEdit', 'email': 'TextEdit', 'operator_t': 'TextEdit', 'wheelchair': 'TextEdit', 'phone': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'addr_stree': 'TextEdit', 'name_en': 'TextEdit', 'website': 'TextEdit', 'addr_state': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_full': 'TextEdit', 'addr_distr': 'TextEdit', 'name': 'TextEdit', 'roof_shape': 'TextEdit', 'roof_level': 'TextEdit', 'roof_mater': 'TextEdit', 'roof_colou': 'TextEdit', 'height': 'TextEdit', 'building_f': 'TextEdit', 'building_l': 'TextEdit', 'building': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SCVRStopPopulation_27.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_SCVRRoutePop1000Mtrs_28.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': 'TextEdit', 'Pop': 'Range', });
lyr_SCVRRtPop500Mtrs_29.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': 'TextEdit', 'Pop': 'Range', });
lyr_SCVRRtPop250mtrs_30.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': 'TextEdit', 'Pop': 'Range', });
lyr_SCVRRtPop100Mtrs_31.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': 'TextEdit', 'Pop': 'Range', 'Pax %': '', 'Avg Tckt': '', 'Revenue': '', });
lyr_SCVRRouteMtrs_32.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': 'Range', });
lyr_SCVRStops_33.set('fieldImages', {'id': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', });
lyr_SCVRRWI_34.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': 'TextEdit', 'Pop': 'TextEdit', });
lyr_APSCStopPop_35.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_APSCRtPop1000Mtrs_36.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Pop': 'Range', });
lyr_APSCRtPop500Mtrs_37.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Pop': 'Range', });
lyr_APSCRtPop250Mtrs_38.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Pop': 'Range', });
lyr_APSCRtPop100Mtrs_39.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Pop': 'Range', 'Ridership': '', 'Tckt Price': '', 'Revenue': '', });
lyr_APSCRouteMtrs_40.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': '', });
lyr_APSCStops_41.set('fieldImages', {'id': 'TextEdit', });
lyr_APSCTerminals_42.set('fieldImages', {'Name': 'TextEdit', });
lyr_APSCRWI_43.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Pop': 'TextEdit', });
lyr_BhiwandiRWI_44.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_BhiwandiPop_45.set('fieldImages', {'shapeName': '', 'shapeISO': '', 'shapeID': '', 'shapeGroup': '', 'shapeType': '', '_count': '', '_sum': '', '_mean': '', });
lyr_BhiwandiDemographics_46.set('fieldImages', {'shapeName': 'TextEdit', 'Pop': '', 'Area SqKm': '', 'PeriKM': '', });
lyr_APSCRoutePopMerged_47.set('fieldImages', {'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'Pop': '', 'Ridership': '', 'Tckt Price': '', 'Revenue': '', 'layer': '', 'path': '', });
lyr_KDMCBoundry_1.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Ambernath_2.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_BadlapurBoundary_3.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_BhiwandiBoundary_4.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_UlhasnagarBoundry_5.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_AllRoutesKDMC_6.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_TemplesMgrd_7.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'religion': 'hidden field', 'amenity': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'man_made': 'hidden field', 'flag_type': 'hidden field', 'addr_neigh': 'hidden field', 'pincode': 'hidden field', 'addr_subur': 'hidden field', 'layer': 'hidden field', 'polling_st': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'internet_a': 'hidden field', 'baby_feedi': 'hidden field', 'air_condit': 'hidden field', 'entrance': 'hidden field', 'wheelchair': 'hidden field', 'shop': 'hidden field', 'payment_up': 'hidden field', 'level': 'hidden field', 'addr_floor': 'hidden field', 'service_ti': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'access': 'hidden field', 'check_date': 'hidden field', 'name_en': 'hidden field', 'place_of_w': 'hidden field', 'descriptio': 'hidden field', 'name_hi': 'hidden field', 'alt_name': 'hidden field', 'building': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'opening_ho': 'hidden field', 'addr_state': 'hidden field', 'addr_count': 'hidden field', 'denominati': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'tourism': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', 'Name_2': 'hidden field', 'descript_1': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'inline label - visible with data', 'path': 'hidden field', });
lyr_PublicBuildings_8.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'operator_w': 'hidden field', 'operator': 'hidden field', 'tower_type': 'hidden field', 'man_made': 'hidden field', 'name_en': 'hidden field', 'opening_ho': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'religion': 'hidden field', 'name': 'header label - visible with data', });
lyr_Mall_9.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'shop': 'hidden field', 'building': 'hidden field', 'addr_stree': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'name': 'header label - visible with data', });
lyr_PrivateOffice_10.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'tourism': 'hidden field', 'name_hi': 'hidden field', 'operator': 'hidden field', 'name_mr': 'hidden field', 'internet_a': 'hidden field', 'name': 'header label - visible with data', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'opening_ho': 'hidden field', 'name_en': 'hidden field', 'addr_stree': 'hidden field', 'addr_house': 'hidden field', });
lyr_office_government_11.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'opening_ho': 'hidden field', 'name_en': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', 'government': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', });
lyr_Medical_12.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'healthcare': 'hidden field', 'healthca_1': 'hidden field', 'name_mr': 'hidden field', 'name_etymo': 'hidden field', 'health_fac': 'hidden field', 'descriptio': 'hidden field', 'addr_subdi': 'hidden field', 'wheelchair': 'hidden field', 'opening_ho': 'hidden field', 'operator': 'hidden field', 'phone': 'hidden field', 'website': 'hidden field', 'operator_t': 'hidden field', 'email': 'hidden field', 'contact_ph': 'hidden field', 'dispensing': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'name_en': 'hidden field', 'emergency': 'hidden field', 'addr_stree': 'hidden field', 'name': 'header label - visible with data', 'addr_state': 'hidden field', 'addr_postc': 'hidden field', 'addr_full': 'hidden field', 'addr_distr': 'hidden field', });
lyr_Industrial_13.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'header label - visible with data', 'addr_house': 'inline label - visible with data', });
lyr_Education_14.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'name': 'header label - visible with data', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BhiwandiRouteIntercity_15.set('fieldLabels', {'Name': 'header label - visible with data', 'length': 'inline label - visible with data', 'Distance K': 'inline label - visible with data', });
lyr_BhiwandiTerminalsIntercity_16.set('fieldLabels', {'Name': 'header label - visible with data', 'xcoord': 'inline label - visible with data', 'ycoord': 'inline label - visible with data', 'zcoord': 'hidden field', });
lyr_KDMTBusStops_17.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '___Sr__No_': 'hidden field', 'center_lat': 'inline label - visible with data', 'center_lon': 'inline label - visible with data', });
lyr_RtShivajiChowktoVirar_18.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SCVRTerminals_19.set('fieldLabels', {'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_BhiwandiTerminalsIntracity_20.set('fieldLabels', {'Name': 'header label - visible with data', 'xcoord': 'inline label - visible with data', 'ycoord': 'inline label - visible with data', });
lyr_SCVREducation_21.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'operator_w': 'hidden field', 'operator_s': 'hidden field', 'name_etymo': 'hidden field', 'capacity': 'hidden field', 'preschool': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'descriptio': 'hidden field', 'website': 'hidden field', 'email': 'hidden field', 'operator': 'hidden field', 'internet_a': 'hidden field', 'opening_ho': 'hidden field', 'phone': 'hidden field', 'wheelchair': 'hidden field', 'operator_t': 'hidden field', 'designatio': 'hidden field', 'addr_house': 'hidden field', 'name_en': 'hidden field', 'wikidata': 'hidden field', 'timing': 'hidden field', 'religion': 'hidden field', 'grades': 'hidden field', 'denominati': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_hou_1': 'hidden field', 'addr_city': 'hidden field', 'name': 'header label - visible with data', 'layer': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'short_name': 'hidden field', 'level': 'hidden field', 'internet_1': 'hidden field', 'internet_2': 'hidden field', 'isced_leve': 'hidden field', 'roof_shape': 'hidden field', 'roof_level': 'hidden field', 'building_l': 'hidden field', 'surface': 'hidden field', 'alt_name': 'hidden field', 'building': 'hidden field', 'path': 'hidden field', });
lyr_SCVRTemples_22.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'religion': 'hidden field', 'service_ti': 'hidden field', 'air_condit': 'hidden field', 'addr_distr': 'hidden field', 'name_mr': 'hidden field', 'operator_w': 'hidden field', 'operator_t': 'hidden field', 'operator_s': 'hidden field', 'operator': 'hidden field', 'wheelchair': 'hidden field', 'opening_ho': 'hidden field', 'name_en': 'hidden field', 'timing': 'hidden field', 'name': 'header label - visible with data', 'grades': 'hidden field', 'denominati': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'name_hi': 'hidden field', 'layer': 'hidden field', 'landuse': 'hidden field', 'website': 'hidden field', 'descriptio': 'hidden field', 'building_l': 'hidden field', 'roof_mater': 'hidden field', 'roof_colou': 'hidden field', 'height': 'hidden field', 'alt_name': 'hidden field', 'building': 'hidden field', 'path': 'hidden field', });
lyr_SCVRPSU_23.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'operator_w': 'hidden field', 'operator_1': 'hidden field', 'operator_t': 'hidden field', 'brand_wiki': 'hidden field', 'brand_wi_1': 'hidden field', 'brand': 'hidden field', 'addr_postc': 'hidden field', 'name_en': 'hidden field', 'addr_stree': 'hidden field', 'ref': 'hidden field', 'operator': 'hidden field', 'name': 'header label - visible with data', 'office': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'landuse': 'hidden field', 'building': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_SCVRIndustries_24.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'hidden field', 'name': 'header label - visible with data', 'building_m': 'hidden field', 'roof_mater': 'hidden field', 'roof_colou': 'hidden field', 'height': 'hidden field', 'industrial': 'hidden field', 'abandoned': 'hidden field', 'roof_shape': 'hidden field', 'roof_level': 'hidden field', 'building_l': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_SCVROffices_25.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'landuse': 'hidden field', 'layer': 'hidden field', 'addr_city': 'hidden field', 'height': 'hidden field', 'building_l': 'hidden field', 'addr_house': 'hidden field', 'addr_stree': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'short_name': 'hidden field', 'name': 'header label - visible with data', 'building': 'hidden field', 'brand_wiki': 'hidden field', 'brand': 'hidden field', 'branch': 'hidden field', 'closing_ho': 'hidden field', 'alt_name': 'hidden field', 'postal_cod': 'hidden field', 'phone': 'hidden field', 'address': 'hidden field', 'email': 'hidden field', 'name_en': 'hidden field', 'smoking': 'hidden field', 'website': 'hidden field', 'addr_postc': 'hidden field', 'addr_hou_1': 'hidden field', 'path': 'hidden field', });
lyr_SCVRHospitals_26.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'healthcare': 'hidden field', 'healthca_1': 'hidden field', 'amenity': 'hidden field', 'drive_thro': 'hidden field', 'dispensing': 'hidden field', 'descriptio': 'hidden field', 'name_mr': 'hidden field', 'emergency': 'hidden field', 'phone_mobi': 'hidden field', 'alt_name': 'hidden field', 'operator': 'hidden field', 'addr_subdi': 'hidden field', 'email': 'hidden field', 'operator_t': 'hidden field', 'wheelchair': 'hidden field', 'phone': 'hidden field', 'opening_ho': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'addr_stree': 'hidden field', 'name_en': 'hidden field', 'website': 'hidden field', 'addr_state': 'hidden field', 'addr_postc': 'hidden field', 'addr_full': 'hidden field', 'addr_distr': 'hidden field', 'name': 'header label - visible with data', 'roof_shape': 'hidden field', 'roof_level': 'hidden field', 'roof_mater': 'hidden field', 'roof_colou': 'hidden field', 'height': 'hidden field', 'building_f': 'hidden field', 'building_l': 'hidden field', 'building': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_SCVRStopPopulation_27.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_SCVRRoutePop1000Mtrs_28.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_SCVRRtPop500Mtrs_29.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_SCVRRtPop250mtrs_30.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_SCVRRtPop100Mtrs_31.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'Pax %': 'header label - always visible', 'Avg Tckt': 'inline label - visible with data', 'Revenue': 'header label - always visible', });
lyr_SCVRRouteMtrs_32.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Time': 'inline label - visible with data', });
lyr_SCVRStops_33.set('fieldLabels', {'id': 'header label - visible with data', 'xcoord': 'inline label - visible with data', 'ycoord': 'inline label - visible with data', });
lyr_SCVRRWI_34.set('fieldLabels', {'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'rwi': 'header label - visible with data', 'error': 'hidden field', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_APSCStopPop_35.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'hidden field', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'hidden field', });
lyr_APSCRtPop1000Mtrs_36.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_APSCRtPop500Mtrs_37.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_APSCRtPop250Mtrs_38.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_APSCRtPop100Mtrs_39.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'Ridership': 'header label - always visible', 'Tckt Price': 'inline label - visible with data', 'Revenue': 'header label - always visible', });
lyr_APSCRouteMtrs_40.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Time': 'inline label - visible with data', });
lyr_APSCStops_41.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_APSCTerminals_42.set('fieldLabels', {'Name': 'header label - visible with data', });
lyr_APSCRWI_43.set('fieldLabels', {'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'rwi': 'header label - visible with data', 'error': 'hidden field', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - always visible', 'PREF': 'inline label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_BhiwandiRWI_44.set('fieldLabels', {'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'rwi': 'header label - visible with data', 'error': 'hidden field', 'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_BhiwandiPop_45.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', '_count': 'hidden field', '_sum': 'inline label - visible with data', '_mean': 'hidden field', });
lyr_BhiwandiDemographics_46.set('fieldLabels', {'shapeName': 'header label - visible with data', 'Pop': 'inline label - visible with data', 'Area SqKm': 'inline label - visible with data', 'PeriKM': 'inline label - visible with data', });
lyr_APSCRoutePopMerged_47.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'Ridership': 'header label - always visible', 'Tckt Price': 'inline label - visible with data', 'Revenue': 'header label - visible with data', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_APSCRoutePopMerged_47.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
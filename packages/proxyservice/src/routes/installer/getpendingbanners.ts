import { celebrate, Joi, Segments } from "celebrate";
import { Request, Response } from "express";
import { v4 } from "uuid";
import { IPendingBannersResponse } from "../../types";

export const get = [
    celebrate({
        [Segments.QUERY]: {
            stateid: Joi.string().required(),
        },
    }),
    async (req: Request, res: Response) => {
        if (req.method !== "GET") return res.status(405);

        // TODO: I dont really see the point of implementing this
        const stateId = req.query.stateid as string;

        return res.json({
            MessageId: v4(),
            Success: true,
            Errors: [],
            Banners: [
				{
					"Id": 1000,
					"Name": "Dans Foods"
				},
				{
					"Id": 1001,
					"Name": "Market in The Square"
				},
				{
					"Id": 1002,
					"Name": "Nichols"
				},
				{
					"Id": 1003,
					"Name": "Supervalu"
				},
				{
					"Id": 1005,
					"Name": "Food Depot"
				},
				{
					"Id": 1006,
					"Name": "Foodway"
				},
				{
					"Id": 1007,
					"Name": "Winegars"
				},
				{
					"Id": 1008,
					"Name": "K & G Oil"
				},
				{
					"Id": 1009,
					"Name": "Ultra Foods"
				},
				{
					"Id": 1010,
					"Name": "Chevy Chase"
				},
				{
					"Id": 1011,
					"Name": "Wangsgards"
				},
				{
					"Id": 1012,
					"Name": "Foodmaster"
				},
				{
					"Id": 1013,
					"Name": "Redner's Warehouse Markets"
				},
				{
					"Id": 1014,
					"Name": "Zingo's"
				},
				{
					"Id": 1015,
					"Name": "Parkview Supermarket"
				},
				{
					"Id": 1016,
					"Name": "Circle K"
				},
				{
					"Id": 1017,
					"Name": "McCaffrey Supermarkets"
				},
				{
					"Id": 1018,
					"Name": "Thornton's"
				},
				{
					"Id": 1019,
					"Name": "Farmer's Foods"
				},
				{
					"Id": 1020,
					"Name": "Common Cents"
				},
				{
					"Id": 1021,
					"Name": "McDonald's"
				},
				{
					"Id": 1022,
					"Name": "US Postal Service"
				},
				{
					"Id": 1023,
					"Name": "Coinstar"
				},
				{
					"Id": 1024,
					"Name": "Quik Stop"
				},
				{
					"Id": 1025,
					"Name": "Harris Teeter"
				},
				{
					"Id": 1026,
					"Name": "Giant Food Stores"
				},
				{
					"Id": 1027,
					"Name": "Wakefield Great Valu"
				},
				{
					"Id": 1028,
					"Name": "Shop 'n Save"
				},
				{
					"Id": 1029,
					"Name": "Jumbo Foods"
				},
				{
					"Id": 1030,
					"Name": "Tom Thumb"
				},
				{
					"Id": 1031,
					"Name": "Dierbergs Market"
				},
				{
					"Id": 1032,
					"Name": "Lowes Food Store"
				},
				{
					"Id": 1033,
					"Name": "Great Valu"
				},
				{
					"Id": 1034,
					"Name": "Risoldi's GreatValu"
				},
				{
					"Id": 1035,
					"Name": "Friedmans Fresh Market"
				},
				{
					"Id": 1036,
					"Name": "Tony's Finer Foods"
				},
				{
					"Id": 1037,
					"Name": "Marine Corp Exchange"
				},
				{
					"Id": 1038,
					"Name": "Homeland Stores"
				},
				{
					"Id": 1039,
					"Name": "Jerry's Food"
				},
				{
					"Id": 1040,
					"Name": "Shakers IGA"
				},
				{
					"Id": 1041,
					"Name": "Oasis Markets"
				},
				{
					"Id": 1042,
					"Name": "Jewel"
				},
				{
					"Id": 1043,
					"Name": "Walmart Supercenter"
				},
				{
					"Id": 1044,
					"Name": "Hart Food and Drug"
				},
				{
					"Id": 1045,
					"Name": "Star"
				},
				{
					"Id": 1046,
					"Name": "Shop 'n Save"
				},
				{
					"Id": 1047,
					"Name": "Tops Markets"
				},
				{
					"Id": 1048,
					"Name": "Lenas Food Market"
				},
				{
					"Id": 1049,
					"Name": "Kent's"
				},
				{
					"Id": 1050,
					"Name": "Trade Show"
				},
				{
					"Id": 1051,
					"Name": "Bel Air Market"
				},
				{
					"Id": 1052,
					"Name": "Dahl's Foods"
				},
				{
					"Id": 1053,
					"Name": "County Market"
				},
				{
					"Id": 1054,
					"Name": "Drug Fair"
				},
				{
					"Id": 1055,
					"Name": "Casey's General Stores"
				},
				{
					"Id": 1056,
					"Name": "Fresh World International Market"
				},
				{
					"Id": 1057,
					"Name": "Reasor's"
				},
				{
					"Id": 1058,
					"Name": "Box N Save"
				},
				{
					"Id": 1059,
					"Name": "Shop N Kart"
				},
				{
					"Id": 1060,
					"Name": "Budwey Foods"
				},
				{
					"Id": 1061,
					"Name": "Strack and Van Til"
				},
				{
					"Id": 1062,
					"Name": "Town and Country"
				},
				{
					"Id": 1063,
					"Name": "Nob Hill Foods"
				},
				{
					"Id": 1064,
					"Name": "Pechin Super Foods Market"
				},
				{
					"Id": 1065,
					"Name": "Hy-Vee"
				},
				{
					"Id": 1066,
					"Name": "Albertsons"
				},
				{
					"Id": 1067,
					"Name": "Sam's Club"
				},
				{
					"Id": 1068,
					"Name": "Food-A-Rama Great Valu"
				},
				{
					"Id": 1069,
					"Name": "7-Eleven"
				},
				{
					"Id": 1070,
					"Name": "Kayo Oil Company "
				},
				{
					"Id": 1071,
					"Name": "Roy Rogers"
				},
				{
					"Id": 1072,
					"Name": "Fastrac"
				},
				{
					"Id": 1073,
					"Name": "Kohler's Food Stores"
				},
				{
					"Id": 1074,
					"Name": "Acme"
				},
				{
					"Id": 1075,
					"Name": "Stripes"
				},
				{
					"Id": 1076,
					"Name": "Mount Royal Fine Foods"
				},
				{
					"Id": 1077,
					"Name": "Longs Drug"
				},
				{
					"Id": 1078,
					"Name": "Philadelphia Int Airpot"
				},
				{
					"Id": 1079,
					"Name": "Turkey Hill"
				},
				{
					"Id": 1080,
					"Name": "Jubilee Foods"
				},
				{
					"Id": 1081,
					"Name": "Festival Foods"
				},
				{
					"Id": 1082,
					"Name": "PriceRite"
				},
				{
					"Id": 1083,
					"Name": "Zagara's Marketplace"
				},
				{
					"Id": 1084,
					"Name": "Gerlands Food Fair"
				},
				{
					"Id": 1085,
					"Name": "GetGo"
				},
				{
					"Id": 1086,
					"Name": "Breens Market"
				},
				{
					"Id": 1087,
					"Name": "Santonis"
				},
				{
					"Id": 1088,
					"Name": "D'Agostino Supermarket"
				},
				{
					"Id": 1089,
					"Name": "Save Mart"
				},
				{
					"Id": 1090,
					"Name": "Pantry"
				},
				{
					"Id": 1091,
					"Name": "Seminole"
				},
				{
					"Id": 1092,
					"Name": "Shaws Supermarket"
				},
				{
					"Id": 1093,
					"Name": "Flying J"
				},
				{
					"Id": 1094,
					"Name": "GasMart"
				},
				{
					"Id": 1095,
					"Name": "Martins"
				},
				{
					"Id": 1096,
					"Name": "Pick N Save "
				},
				{
					"Id": 1097,
					"Name": "Winn Dixie"
				},
				{
					"Id": 1098,
					"Name": "University of Maryland"
				},
				{
					"Id": 1099,
					"Name": "King Soopers"
				},
				{
					"Id": 1100,
					"Name": "Kuhn's Markets"
				},
				{
					"Id": 1101,
					"Name": "Stater Bros"
				},
				{
					"Id": 1102,
					"Name": "Cumberland Farms"
				},
				{
					"Id": 1103,
					"Name": "Riverside Super Value"
				},
				{
					"Id": 1104,
					"Name": "Other"
				},
				{
					"Id": 1105,
					"Name": "Elmer's County Market"
				},
				{
					"Id": 1106,
					"Name": "Sendik's"
				},
				{
					"Id": 1107,
					"Name": "Rays Signature"
				},
				{
					"Id": 1108,
					"Name": "Trig's Foods"
				},
				{
					"Id": 1109,
					"Name": "Weis Markets"
				},
				{
					"Id": 1110,
					"Name": "Bellettini Foods"
				},
				{
					"Id": 1111,
					"Name": "Park N Shop"
				},
				{
					"Id": 1112,
					"Name": "Road Ranger LLC"
				},
				{
					"Id": 1113,
					"Name": "Blue Goose Market"
				},
				{
					"Id": 1114,
					"Name": "Walmart Supercenter"
				},
				{
					"Id": 1115,
					"Name": "Trumansburg Shursave"
				},
				{
					"Id": 1116,
					"Name": "Karns Quality Foods"
				},
				{
					"Id": 1117,
					"Name": "Handy Way"
				},
				{
					"Id": 1118,
					"Name": "Pilot Travel Centers"
				},
				{
					"Id": 1119,
					"Name": "Mutzabaugh's Market"
				},
				{
					"Id": 1120,
					"Name": "Ried's Food Barn"
				},
				{
					"Id": 1121,
					"Name": "Quality Foods"
				},
				{
					"Id": 1122,
					"Name": "Wades Market"
				},
				{
					"Id": 1123,
					"Name": "Lins Marketplace"
				},
				{
					"Id": 1124,
					"Name": "Walmart Neighborhood Market"
				},
				{
					"Id": 1125,
					"Name": "Lucky"
				},
				{
					"Id": 1126,
					"Name": "Holiday Oil"
				},
				{
					"Id": 1127,
					"Name": "Loves Travel Centers & Country Stores, Inc."
				},
				{
					"Id": 1128,
					"Name": "Foodtown"
				},
				{
					"Id": 1129,
					"Name": "Raleys  "
				},
				{
					"Id": 1130,
					"Name": "Remke Markets"
				},
				{
					"Id": 1131,
					"Name": "Handy Foods IGA"
				},
				{
					"Id": 1132,
					"Name": "Wilson Farms"
				},
				{
					"Id": 1133,
					"Name": "Fellure Foods"
				},
				{
					"Id": 1134,
					"Name": "Price Chopper "
				},
				{
					"Id": 1135,
					"Name": "Meijer"
				},
				{
					"Id": 1136,
					"Name": "Amigos"
				},
				{
					"Id": 1137,
					"Name": "Stop & Shop"
				},
				{
					"Id": 1138,
					"Name": "Maceys Market"
				},
				{
					"Id": 1139,
					"Name": "Cub Foods"
				},
				{
					"Id": 1140,
					"Name": "Fresh Grocer"
				},
				{
					"Id": 1141,
					"Name": "Williamsburg Foods"
				},
				{
					"Id": 1142,
					"Name": "Exxon Mobil"
				},
				{
					"Id": 1143,
					"Name": "Tetco"
				},
				{
					"Id": 1144,
					"Name": "Ingles Supermarket"
				},
				{
					"Id": 1145,
					"Name": "Food Fest"
				},
				{
					"Id": 1146,
					"Name": "Broulim's "
				},
				{
					"Id": 1147,
					"Name": "Valu Market"
				},
				{
					"Id": 1148,
					"Name": "Hannaford"
				},
				{
					"Id": 1149,
					"Name": "Etna"
				},
				{
					"Id": 1150,
					"Name": "Rays Northalnd"
				},
				{
					"Id": 1151,
					"Name": "Green Hills Farms"
				},
				{
					"Id": 1152,
					"Name": "Chief Supermarket"
				},
				{
					"Id": 1153,
					"Name": "Barnes and Noble"
				},
				{
					"Id": 1154,
					"Name": "Super Foodtown"
				},
				{
					"Id": 1155,
					"Name": "redbox "
				},
				{
					"Id": 1156,
					"Name": "Lofino's"
				},
				{
					"Id": 1157,
					"Name": "XtraMart"
				},
				{
					"Id": 1158,
					"Name": "FoodMaxx"
				},
				{
					"Id": 1159,
					"Name": "King Kullen  "
				},
				{
					"Id": 1161,
					"Name": "P & C Foods"
				},
				{
					"Id": 1162,
					"Name": "Chris's Family Market"
				},
				{
					"Id": 1163,
					"Name": "Shop N Save"
				},
				{
					"Id": 1164,
					"Name": "Super 1 Foods"
				},
				{
					"Id": 1165,
					"Name": "Smith's"
				},
				{
					"Id": 1166,
					"Name": "Baesler's Market"
				},
				{
					"Id": 1167,
					"Name": "Kwik Mart"
				},
				{
					"Id": 1168,
					"Name": "Williams Discount Food"
				},
				{
					"Id": 1169,
					"Name": "Scolaris Warehouse Market"
				},
				{
					"Id": 1170,
					"Name": "Nashville Int Airport"
				},
				{
					"Id": 1171,
					"Name": "Giant Eagle Market"
				},
				{
					"Id": 1172,
					"Name": "Country Market"
				},
				{
					"Id": 1173,
					"Name": "Gerritys Supermarket"
				},
				{
					"Id": 1174,
					"Name": "Big Y Supermarket"
				},
				{
					"Id": 1175,
					"Name": "Ream's Family Foods"
				},
				{
					"Id": 1176,
					"Name": "Days Market"
				},
				{
					"Id": 1177,
					"Name": "Royal Farms"
				},
				{
					"Id": 1178,
					"Name": "Geresbeck's Food Mart"
				},
				{
					"Id": 1179,
					"Name": "Fresh Pride"
				},
				{
					"Id": 1180,
					"Name": "redbox Office"
				},
				{
					"Id": 1181,
					"Name": "Jamieson Family Foods"
				},
				{
					"Id": 1182,
					"Name": "Mackenthun's"
				},
				{
					"Id": 1183,
					"Name": "Seven Brothers Supermarket"
				},
				{
					"Id": 1184,
					"Name": "Shop N Save"
				},
				{
					"Id": 1185,
					"Name": "Golden Gallon"
				},
				{
					"Id": 1186,
					"Name": "IGA"
				},
				{
					"Id": 1187,
					"Name": "Marsh  "
				},
				{
					"Id": 1188,
					"Name": "Sentry"
				},
				{
					"Id": 1189,
					"Name": "North Scotts Food"
				},
				{
					"Id": 1190,
					"Name": "Zip Trip"
				},
				{
					"Id": 1191,
					"Name": "Travel Centers of America"
				},
				{
					"Id": 1192,
					"Name": "testing"
				},
				{
					"Id": 1193,
					"Name": "Greene Great Valu"
				},
				{
					"Id": 1194,
					"Name": "Hegedorn's"
				},
				{
					"Id": 1195,
					"Name": "Lund's"
				},
				{
					"Id": 1196,
					"Name": "Byerly's"
				},
				{
					"Id": 1197,
					"Name": "Kroger"
				},
				{
					"Id": 1198,
					"Name": "California Marketplace"
				},
				{
					"Id": 1199,
					"Name": "Dick's"
				},
				{
					"Id": 1200,
					"Name": "Rays Clocktower"
				},
				{
					"Id": 1201,
					"Name": "Ogles Foods"
				},
				{
					"Id": 1202,
					"Name": "Sinclair"
				},
				{
					"Id": 1203,
					"Name": "Shoppers Food & Pharmacy"
				},
				{
					"Id": 1204,
					"Name": "Rameys"
				},
				{
					"Id": 1205,
					"Name": "Village Farm"
				},
				{
					"Id": 1206,
					"Name": "Foodland Fresh"
				},
				{
					"Id": 1207,
					"Name": "ShopRite"
				},
				{
					"Id": 1208,
					"Name": "Sun Fresh Marketplace"
				},
				{
					"Id": 1209,
					"Name": "Daves Supermarket"
				},
				{
					"Id": 1210,
					"Name": "Walgreens"
				},
				{
					"Id": 1211,
					"Name": "Town Pump"
				},
				{
					"Id": 1212,
					"Name": "Sak and Save"
				},
				{
					"Id": 1213,
					"Name": "Terrible Herbst"
				},
				{
					"Id": 1214,
					"Name": "Spinx"
				},
				{
					"Id": 1215,
					"Name": "Redbox - Call Center"
				},
				{
					"Id": 1216,
					"Name": "Norvelt Open Pantry"
				},
				{
					"Id": 1217,
					"Name": "Tersteeg's"
				},
				{
					"Id": 1218,
					"Name": "Farm Fresh"
				},
				{
					"Id": 1219,
					"Name": "Bowmans"
				},
				{
					"Id": 1220,
					"Name": "Klein Family Markets"
				},
				{
					"Id": 1221,
					"Name": "Express Stop"
				},
				{
					"Id": 1222,
					"Name": "Scolaris Food"
				},
				{
					"Id": 1223,
					"Name": "Weis Markets"
				},
				{
					"Id": 1224,
					"Name": "Ray's Marketplace"
				},
				{
					"Id": 1225,
					"Name": "Stinkers"
				},
				{
					"Id": 1226,
					"Name": "Save-A-Lot"
				},
				{
					"Id": 1227,
					"Name": "Friedman's Freshmarket"
				},
				{
					"Id": 1228,
					"Name": "Kangaroo Express"
				},
				{
					"Id": 1229,
					"Name": "Buehler Food Market"
				},
				{
					"Id": 1230,
					"Name": "Lucky's"
				},
				{
					"Id": 1231,
					"Name": "Food Lion"
				},
				{
					"Id": 1232,
					"Name": "Boyers"
				},
				{
					"Id": 1233,
					"Name": "Fligners Supermarket"
				},
				{
					"Id": 1234,
					"Name": "Albertsons Fuel Centers"
				},
				{
					"Id": 1235,
					"Name": "Newark Liberty Int Airport"
				},
				{
					"Id": 1236,
					"Name": "Eastside Convenience Stores"
				},
				{
					"Id": 1237,
					"Name": "Jerry's Great Value"
				},
				{
					"Id": 1238,
					"Name": "K-Mart"
				},
				{
					"Id": 1239,
					"Name": "Shop 'n Save"
				},
				{
					"Id": 1240,
					"Name": "Gen Mitchell Int Airport"
				},
				{
					"Id": 1241,
					"Name": "Red Apple"
				},
				{
					"Id": 1242,
					"Name": "Rosauers Food & Drug Ctr"
				},
				{
					"Id": 1243,
					"Name": "Ahart's Market"
				},
				{
					"Id": 1244,
					"Name": "Lynn's Market"
				},
				{
					"Id": 1245,
					"Name": "Sheetz"
				},
				{
					"Id": 1246,
					"Name": "Coborn's"
				},
				{
					"Id": 1248,
					"Name": "Scotts"
				},
				{
					"Id": 1249,
					"Name": "Speedway"
				},
				{
					"Id": 1250,
					"Name": "Hamilton Corporation of Maryland"
				},
				{
					"Id": 1251,
					"Name": "Budwey's Kenmore Supermarket"
				},
				{
					"Id": 1252,
					"Name": "Stop Shop Save"
				},
				{
					"Id": 1253,
					"Name": "Marc's"
				},
				{
					"Id": 1254,
					"Name": "Burnstads"
				},
				{
					"Id": 1255,
					"Name": "Graul's Market"
				},
				{
					"Id": 1256,
					"Name": "Food Lion"
				},
				{
					"Id": 1257,
					"Name": "The Market Place"
				},
				{
					"Id": 1258,
					"Name": "World Bank"
				},
				{
					"Id": 1259,
					"Name": "Scolaris Food & Drug"
				},
				{
					"Id": 1260,
					"Name": "Jons Marketplace"
				},
				{
					"Id": 1261,
					"Name": "Yokes"
				},
				{
					"Id": 1262,
					"Name": "Harmons Market"
				},
				{
					"Id": 1263,
					"Name": "Hornbachers"
				},
				{
					"Id": 1264,
					"Name": "Maverik"
				},
				{
					"Id": 1265,
					"Name": "Lee's Market Place"
				},
				{
					"Id": 1266,
					"Name": "Viking Express Market"
				},
				{
					"Id": 1267,
					"Name": "Tha Markets at Highlandtown"
				},
				{
					"Id": 1268,
					"Name": "US Navy"
				},
				{
					"Id": 1269,
					"Name": "Gooseberries Fresh Market"
				},
				{
					"Id": 1270,
					"Name": "Food King "
				},
				{
					"Id": 1271,
					"Name": "Murphys Marketplace"
				},
				{
					"Id": 1272,
					"Name": "City Market"
				},
				{
					"Id": 1273,
					"Name": "Handy Andy Supermarket"
				},
				{
					"Id": 1274,
					"Name": "Foodland"
				},
				{
					"Id": 1275,
					"Name": "Dashs Market"
				},
				{
					"Id": 1276,
					"Name": "Community Market"
				},
				{
					"Id": 1277,
					"Name": "Wade's"
				},
				{
					"Id": 1278,
					"Name": "Shoprite Great Valu"
				},
				{
					"Id": 1279,
					"Name": "Scotchman Stores"
				},
				{
					"Id": 1280,
					"Name": "Kroger Fuel Center"
				},
				{
					"Id": 1281,
					"Name": "Biggs"
				},
				{
					"Id": 1282,
					"Name": "Wegmans"
				},
				{
					"Id": 1284,
					"Name": "Lambert-STL Int Airport"
				},
				{
					"Id": 1285,
					"Name": "Superpumper"
				},
				{
					"Id": 1286,
					"Name": "Dave's Super Duper"
				},
				{
					"Id": 1287,
					"Name": "Village Pantry"
				},
				{
					"Id": 1288,
					"Name": "Bethesda Naval Hospital"
				},
				{
					"Id": 1289,
					"Name": "Martins Food Market"
				},
				{
					"Id": 1290,
					"Name": "Valero"
				},
				{
					"Id": 1292,
					"Name": "Kum & Go"
				},
				{
					"Id": 1293,
					"Name": "Jacksons"
				},
				{
					"Id": 1294,
					"Name": "Cefco"
				},
				{
					"Id": 1295,
					"Name": "Fastrip"
				},
				{
					"Id": 1296,
					"Name": "Shell"
				},
				{
					"Id": 1297,
					"Name": "Chevron"
				},
				{
					"Id": 1298,
					"Name": "Big Red"
				},
				{
					"Id": 1299,
					"Name": "Northgate Markets"
				},
				{
					"Id": 1300,
					"Name": "SaveRite"
				},
				{
					"Id": 1301,
					"Name": "Angeli's Foods"
				},
				{
					"Id": 1302,
					"Name": "Ridley's Family Market"
				},
				{
					"Id": 1303,
					"Name": "Food Source"
				},
				{
					"Id": 1305,
					"Name": "Gary and Leo\u2019s Fresh Foods"
				},
				{
					"Id": 1306,
					"Name": "Giant"
				},
				{
					"Id": 1307,
					"Name": "Saveway Market"
				},
				{
					"Id": 1308,
					"Name": "Holiday Stationstore"
				},
				{
					"Id": 1309,
					"Name": "Timewise Food Store"
				},
				{
					"Id": 1310,
					"Name": "County Line Country Store"
				},
				{
					"Id": 1311,
					"Name": "Cinco Ranch Country Store"
				},
				{
					"Id": 1312,
					"Name": "Bashas'"
				},
				{
					"Id": 1313,
					"Name": "Food City"
				},
				{
					"Id": 1314,
					"Name": "A.J.'s"
				},
				{
					"Id": 1315,
					"Name": "Valli Produce"
				},
				{
					"Id": 1316,
					"Name": "Atlantic Supermarket"
				},
				{
					"Id": 1317,
					"Name": "Payson Market"
				},
				{
					"Id": 1318,
					"Name": "A & G Fresh Market"
				},
				{
					"Id": 1319,
					"Name": "Valu King"
				},
				{
					"Id": 1320,
					"Name": "The Store"
				},
				{
					"Id": 1321,
					"Name": "Farmer's Market"
				},
				{
					"Id": 1322,
					"Name": "Top Stop"
				},
				{
					"Id": 1323,
					"Name": "Ridge Supermarket"
				},
				{
					"Id": 1324,
					"Name": "Mega Co-Op"
				},
				{
					"Id": 1325,
					"Name": "Quality Markets"
				},
				{
					"Id": 1326,
					"Name": "Sears Tower"
				},
				{
					"Id": 1327,
					"Name": "Indianapolis Airport"
				},
				{
					"Id": 1328,
					"Name": "Marketside"
				},
				{
					"Id": 1329,
					"Name": "The Marketside"
				},
				{
					"Id": 1330,
					"Name": "Cosentino's Market"
				},
				{
					"Id": 1331,
					"Name": "Gerald Ford Inernational Airport"
				},
				{
					"Id": 1332,
					"Name": "Giant to Go"
				},
				{
					"Id": 1333,
					"Name": "Neighbor's Market"
				},
				{
					"Id": 1334,
					"Name": "Go Mart"
				},
				{
					"Id": 1335,
					"Name": "Boyett"
				},
				{
					"Id": 1336,
					"Name": "Tower Mart"
				},
				{
					"Id": 1337,
					"Name": "KJ Superstore"
				},
				{
					"Id": 1338,
					"Name": "Butera Market"
				},
				{
					"Id": 1339,
					"Name": "Piggly Wiggly"
				},
				{
					"Id": 1340,
					"Name": "EZ Mart"
				},
				{
					"Id": 1341,
					"Name": "Red Front"
				},
				{
					"Id": 1342,
					"Name": "Buy 4 Less"
				},
				{
					"Id": 1343,
					"Name": "Jack's Supermarket"
				},
				{
					"Id": 1344,
					"Name": "Reid Market"
				},
				{
					"Id": 1345,
					"Name": "Food Fair"
				},
				{
					"Id": 1346,
					"Name": "Food Town"
				},
				{
					"Id": 1347,
					"Name": "Grand Market"
				},
				{
					"Id": 1348,
					"Name": "Murphy Oil"
				},
				{
					"Id": 1349,
					"Name": "Logan International Airport"
				},
				{
					"Id": 1350,
					"Name": "Holiday Chevron"
				},
				{
					"Id": 1351,
					"Name": "Holiday Texaco"
				},
				{
					"Id": 1352,
					"Name": "Sweetbay Supermarket"
				},
				{
					"Id": 1353,
					"Name": "HEB"
				},
				{
					"Id": 1354,
					"Name": "Jack's Country Store"
				},
				{
					"Id": 1355,
					"Name": "Kangaroo"
				},
				{
					"Id": 1356,
					"Name": "Petro Express"
				},
				{
					"Id": 1357,
					"Name": "Sunflower Food Store"
				},
				{
					"Id": 1358,
					"Name": "Food Rite"
				},
				{
					"Id": 1359,
					"Name": "Stop & Shop Express"
				},
				{
					"Id": 1360,
					"Name": "Sprint"
				},
				{
					"Id": 1361,
					"Name": "Campus Store"
				},
				{
					"Id": 1362,
					"Name": "HEB Central Market"
				},
				{
					"Id": 1363,
					"Name": "HEB Plus"
				},
				{
					"Id": 1364,
					"Name": "Mi Tienda"
				},
				{
					"Id": 1365,
					"Name": "Kroger Fresh Fare"
				},
				{
					"Id": 1366,
					"Name": "Pic Quik"
				},
				{
					"Id": 1367,
					"Name": "Miller Bros."
				},
				{
					"Id": 1368,
					"Name": "Sid's Supermarket"
				},
				{
					"Id": 1369,
					"Name": "Newport Ave. Market"
				},
				{
					"Id": 1370,
					"Name": "Joseph's Marketplace"
				},
				{
					"Id": 1371,
					"Name": "Glazier's Food Market"
				},
				{
					"Id": 1372,
					"Name": "USA/Tesoro"
				},
				{
					"Id": 1373,
					"Name": "Tesoro 2Go"
				},
				{
					"Id": 1374,
					"Name": "Rocky Top"
				},
				{
					"Id": 1375,
					"Name": "Deterdings Market"
				},
				{
					"Id": 1376,
					"Name": "Dillons"
				},
				{
					"Id": 1377,
					"Name": "Hoback Market"
				},
				{
					"Id": 1378,
					"Name": "Crisp's"
				},
				{
					"Id": 1379,
					"Name": "HEB Convenience"
				},
				{
					"Id": 1380,
					"Name": "Price Cutter"
				},
				{
					"Id": 1381,
					"Name": "Plainfield Public Library"
				},
				{
					"Id": 1382,
					"Name": "Palos Verdes Library "
				},
				{
					"Id": 1383,
					"Name": "Princeton Public Library"
				},
				{
					"Id": 1384,
					"Name": "Catonsville Library"
				},
				{
					"Id": 1385,
					"Name": "Cockeysville Library"
				},
				{
					"Id": 1386,
					"Name": "Perry Hall Library"
				},
				{
					"Id": 1387,
					"Name": "Buy Low Market"
				},
				{
					"Id": 1388,
					"Name": "Western Convenience Store"
				},
				{
					"Id": 1389,
					"Name": "Super Ahorros"
				},
				{
					"Id": 1391,
					"Name": "MyGofer"
				},
				{
					"Id": 1392,
					"Name": "Kessler's"
				},
				{
					"Id": 1393,
					"Name": "Tesoro"
				},
				{
					"Id": 1394,
					"Name": "Colorado Springs Airport"
				},
				{
					"Id": 1395,
					"Name": "Supermercado de Walmart"
				},
				{
					"Id": 1396,
					"Name": "Blairs Market"
				},
				{
					"Id": 1397,
					"Name": "Lee's Family Foods"
				},
				{
					"Id": 1398,
					"Name": "Pat's Foods"
				},
				{
					"Id": 1399,
					"Name": "Super One Foods"
				},
				{
					"Id": 1400,
					"Name": "Public Library of Charlotte "
				},
				{
					"Id": 1401,
					"Name": "Lexington Public Library"
				},
				{
					"Id": 1402,
					"Name": "George Bush Intercontinental Airport"
				},
				{
					"Id": 1403,
					"Name": "William P. Hobby Airport"
				},
				{
					"Id": 1404,
					"Name": "Baker's"
				},
				{
					"Id": 1405,
					"Name": "Food-4-Less"
				},
				{
					"Id": 1406,
					"Name": "Gerbes              "
				},
				{
					"Id": 1407,
					"Name": "Soelbergs"
				},
				{
					"Id": 1408,
					"Name": "A&P"
				},
				{
					"Id": 1409,
					"Name": "Waldbaum's"
				},
				{
					"Id": 1410,
					"Name": "Food Basics"
				},
				{
					"Id": 1411,
					"Name": "Super Fresh"
				},
				{
					"Id": 1412,
					"Name": "Pathmark"
				},
				{
					"Id": 1413,
					"Name": "Payless"
				},
				{
					"Id": 1414,
					"Name": "Hilander"
				},
				{
					"Id": 1415,
					"Name": "Owen's"
				},
				{
					"Id": 1416,
					"Name": "Kroger Marketplace"
				},
				{
					"Id": 1417,
					"Name": "Wilbun\u2019s Supermarket"
				},
				{
					"Id": 1418,
					"Name": "Denny's"
				},
				{
					"Id": 1419,
					"Name": "Fred Meyer"
				},
				{
					"Id": 1420,
					"Name": "Fry's"
				},
				{
					"Id": 1421,
					"Name": "Fry's Marketplace"
				},
				{
					"Id": 1422,
					"Name": "Fry's Mercado"
				},
				{
					"Id": 1423,
					"Name": "Roche Bros Supermarket"
				},
				{
					"Id": 1424,
					"Name": "Sams Mart"
				},
				{
					"Id": 1425,
					"Name": "Fresh Fare"
				},
				{
					"Id": 1426,
					"Name": "Conoco"
				},
				{
					"Id": 1427,
					"Name": "Ralphs"
				},
				{
					"Id": 1428,
					"Name": "Food 4 Less"
				},
				{
					"Id": 1429,
					"Name": "Foods Co"
				},
				{
					"Id": 1430,
					"Name": "Wilco Hess "
				},
				{
					"Id": 1431,
					"Name": "Cincinnati Airport "
				},
				{
					"Id": 1432,
					"Name": "CATHY BALL"
				},
				{
					"Id": 1433,
					"Name": "CVS Pharmacy"
				},
				{
					"Id": 1435,
					"Name": "Foodarama"
				},
				{
					"Id": 1436,
					"Name": "The Store in Midway"
				},
				{
					"Id": 1437,
					"Name": "Quality Food Center"
				},
				{
					"Id": 1438,
					"Name": "QFC - Fresh Fare"
				},
				{
					"Id": 1439,
					"Name": "Market Basket"
				},
				{
					"Id": 1440,
					"Name": "Berkot's Super Foods"
				},
				{
					"Id": 1441,
					"Name": "Crossroads"
				},
				{
					"Id": 1442,
					"Name": "Clark's Market"
				},
				{
					"Id": 1443,
					"Name": "The Pentagon"
				},
				{
					"Id": 1444,
					"Name": "Mr. D's Food Center"
				},
				{
					"Id": 1445,
					"Name": "Loaf 'N Jug"
				},
				{
					"Id": 1446,
					"Name": "Kwik Shop"
				},
				{
					"Id": 1447,
					"Name": "Orange County Library "
				},
				{
					"Id": 1448,
					"Name": "Independence Regional Library"
				},
				{
					"Id": 1449,
					"Name": "Main Library"
				},
				{
					"Id": 1450,
					"Name": "Merchandise Mart"
				},
				{
					"Id": 1451,
					"Name": "Austin-Bergstrom airport"
				},
				{
					"Id": 1452,
					"Name": "South Creek Library"
				},
				{
					"Id": 1453,
					"Name": "Alafaya Library"
				},
				{
					"Id": 1454,
					"Name": "Green Valley Library"
				},
				{
					"Id": 1455,
					"Name": "Paseo Verde Branch"
				},
				{
					"Id": 1456,
					"Name": "Metra Chicago"
				},
				{
					"Id": 1457,
					"Name": "Winter Garden Library"
				},
				{
					"Id": 1458,
					"Name": "Rainbow Food Store"
				},
				{
					"Id": 1459,
					"Name": "Copps Food Center"
				},
				{
					"Id": 1460,
					"Name": "Arden Properties"
				},
				{
					"Id": 1461,
					"Name": "JayC"
				},
				{
					"Id": 1462,
					"Name": "JayC Plus"
				},
				{
					"Id": 1463,
					"Name": "Ruler Foods"
				},
				{
					"Id": 1464,
					"Name": "Food Market"
				},
				{
					"Id": 1465,
					"Name": "Miller's"
				},
				{
					"Id": 1466,
					"Name": "Wallys Supermarket"
				},
				{
					"Id": 1467,
					"Name": "Fresh Market"
				},
				{
					"Id": 1468,
					"Name": "Soo SuperValu Foods"
				},
				{
					"Id": 1469,
					"Name": "Interstate Foodland"
				},
				{
					"Id": 1470,
					"Name": "Cooperative Center"
				},
				{
					"Id": 1471,
					"Name": "D&S Foods"
				},
				{
					"Id": 1472,
					"Name": "Midtown Foods"
				},
				{
					"Id": 1473,
					"Name": "Marketplace"
				},
				{
					"Id": 1474,
					"Name": "Leevers County Market"
				},
				{
					"Id": 1475,
					"Name": "Murphy's Market"
				},
				{
					"Id": 1476,
					"Name": "Tri-Star Great Valu"
				},
				{
					"Id": 1477,
					"Name": "Hitchcock's"
				},
				{
					"Id": 1478,
					"Name": "Gordy's"
				},
				{
					"Id": 1479,
					"Name": "Groceryland"
				},
				{
					"Id": 1480,
					"Name": "E W Thomas"
				},
				{
					"Id": 1481,
					"Name": "Global"
				},
				{
					"Id": 1483,
					"Name": "Gordy's County Market"
				},
				{
					"Id": 1484,
					"Name": "Church Street Market"
				},
				{
					"Id": 1485,
					"Name": "Atlanta Airport Concourse T"
				},
				{
					"Id": 1486,
					"Name": "Harvey's Supermarket"
				},
				{
					"Id": 1487,
					"Name": "Arlington Central Library"
				},
				{
					"Id": 1488,
					"Name": "Danny's Family Markets"
				},
				{
					"Id": 1489,
					"Name": "Shoppers Market"
				},
				{
					"Id": 1490,
					"Name": "Ron's Food Farm"
				},
				{
					"Id": 1491,
					"Name": "Lammers Food Fest"
				},
				{
					"Id": 1492,
					"Name": "The Market at Park City"
				},
				{
					"Id": 1493,
					"Name": "Sonic"
				},
				{
					"Id": 1494,
					"Name": "Hen House Supermarket"
				},
				{
					"Id": 1495,
					"Name": "Weis Markets"
				},
				{
					"Id": 1496,
					"Name": "La Fiesta Supermarket"
				},
				{
					"Id": 1497,
					"Name": "Reynolds Market"
				},
				{
					"Id": 1498,
					"Name": "Eurofresh Market"
				},
				{
					"Id": 1499,
					"Name": "Metro Market"
				},
				{
					"Id": 1500,
					"Name": "Family Fresh Foods"
				},
				{
					"Id": 1501,
					"Name": "Sudbury Farms Store"
				},
				{
					"Id": 1502,
					"Name": "Broadway Market and Pharmacy"
				},
				{
					"Id": 1503,
					"Name": "Hess"
				},
				{
					"Id": 1504,
					"Name": "Family Thrift"
				},
				{
					"Id": 1506,
					"Name": "Simerly's"
				},
				{
					"Id": 1507,
					"Name": "Piggly Wiggly Market"
				},
				{
					"Id": 1508,
					"Name": "Cashwise"
				},
				{
					"Id": 1509,
					"Name": "Weis Markets"
				},
				{
					"Id": 1510,
					"Name": "Sedano"
				},
				{
					"Id": 1511,
					"Name": "Summerwood Country Store"
				},
				{
					"Id": 1512,
					"Name": "Sienna Market & Deli"
				},
				{
					"Id": 1513,
					"Name": "Brewer's"
				},
				{
					"Id": 1514,
					"Name": "The Westside Store"
				},
				{
					"Id": 1515,
					"Name": "Rouses Supermarkets"
				},
				{
					"Id": 1516,
					"Name": "Kens Kash"
				},
				{
					"Id": 1517,
					"Name": "Mustang"
				},
				{
					"Id": 1518,
					"Name": "Smith's Express"
				},
				{
					"Id": 1519,
					"Name": "Urbanna Great Valu"
				},
				{
					"Id": 1520,
					"Name": "Turbotville Great Valu"
				},
				{
					"Id": 1521,
					"Name": "Northwest Regional Library"
				},
				{
					"Id": 1522,
					"Name": "Raleigh-Durham Airport"
				},
				{
					"Id": 1523,
					"Name": "Sorbara's"
				},
				{
					"Id": 1524,
					"Name": "Murphy Oil Express"
				},
				{
					"Id": 1525,
					"Name": "Schnuck Market"
				},
				{
					"Id": 1526,
					"Name": "95th Street Library"
				},
				{
					"Id": 1527,
					"Name": "Nichols Library"
				},
				{
					"Id": 1528,
					"Name": "Pacemaker Countryside Market"
				},
				{
					"Id": 1529,
					"Name": "Iowa Memorial Union"
				},
				{
					"Id": 1530,
					"Name": "Kwik Serv"
				},
				{
					"Id": 1531,
					"Name": "Jack's SuperValu Foods"
				},
				{
					"Id": 1532,
					"Name": "Town and Country Foods"
				},
				{
					"Id": 1533,
					"Name": "Dan's"
				},
				{
					"Id": 1534,
					"Name": "Food Pantry"
				},
				{
					"Id": 1535,
					"Name": "KTA Supermarket"
				},
				{
					"Id": 1536,
					"Name": "Lahaina Farms"
				},
				{
					"Id": 1537,
					"Name": "Malama Market"
				},
				{
					"Id": 1538,
					"Name": "Market City Foodland"
				},
				{
					"Id": 1539,
					"Name": "Napili Market"
				},
				{
					"Id": 1540,
					"Name": "Sack N Save Market"
				},
				{
					"Id": 1541,
					"Name": "Whalers GS"
				},
				{
					"Id": 1542,
					"Name": "United Supermarkets"
				},
				{
					"Id": 1543,
					"Name": "Market Street"
				},
				{
					"Id": 1544,
					"Name": "Willis Tower"
				},
				{
					"Id": 1545,
					"Name": "Mother Hubbard"
				},
				{
					"Id": 1546,
					"Name": "UMKC Student Union"
				},
				{
					"Id": 1547,
					"Name": "Compton Union Building"
				},
				{
					"Id": 1548,
					"Name": "UTA Bookstore"
				},
				{
					"Id": 1549,
					"Name": "University Bookstore"
				},
				{
					"Id": 1550,
					"Name": "Cal Student Store"
				},
				{
					"Id": 1551,
					"Name": "Follett Purdue-West Bookstore"
				},
				{
					"Id": 1552,
					"Name": "The Bernhard Center"
				},
				{
					"Id": 1553,
					"Name": "Bartell Drugs"
				},
				{
					"Id": 1554,
					"Name": "Dollar General"
				},
				{
					"Id": 1555,
					"Name": "Dollar General Market"
				},
				{
					"Id": 1556,
					"Name": "Stewart's Marketplace"
				},
				{
					"Id": 1557,
					"Name": "LSU Bookstore"
				},
				{
					"Id": 1558,
					"Name": "J. Wayne Reitz Union"
				},
				{
					"Id": 1559,
					"Name": "CMG"
				},
				{
					"Id": 1560,
					"Name": "Convenience Management Group, LLC"
				},
				{
					"Id": 1561,
					"Name": "Florida Atlantic University Bookstore"
				},
				{
					"Id": 1562,
					"Name": "Trading Post"
				},
				{
					"Id": 1563,
					"Name": "katie"
				},
				{
					"Id": 1564,
					"Name": "Stew Leonard's"
				},
				{
					"Id": 1565,
					"Name": "McCarran International Airport"
				},
				{
					"Id": 1566,
					"Name": "Carl's Jr"
				},
				{
					"Id": 1567,
					"Name": "Hines General Store"
				},
				{
					"Id": 1568,
					"Name": "Uppy's Convenience Stores, Inc. "
				},
				{
					"Id": 1569,
					"Name": "Hy-Vee Fuel Center"
				},
				{
					"Id": 1570,
					"Name": "Coast Guard"
				},
				{
					"Id": 1571,
					"Name": "Community Supermarket"
				},
				{
					"Id": 1572,
					"Name": "Deltaville Great Valu"
				},
				{
					"Id": 1573,
					"Name": "Radcliffe's Great Valu"
				},
				{
					"Id": 1574,
					"Name": "Ram's Horn"
				},
				{
					"Id": 1575,
					"Name": "Kroger-Sav-On"
				},
				{
					"Id": 1576,
					"Name": "Banner"
				},
				{
					"Id": 1577,
					"Name": "Joe V's"
				},
				{
					"Id": 1578,
					"Name": "christian miller"
				},
				{
					"Id": 1579,
					"Name": "Maxx Value Foods"
				},
				{
					"Id": 1580,
					"Name": "Cook's Foodtown"
				},
				{
					"Id": 1581,
					"Name": "Farmer's Corner"
				},
				{
					"Id": 1582,
					"Name": "Ken's Kash"
				},
				{
					"Id": 1583,
					"Name": "Tops Express"
				},
				{
					"Id": 1584,
					"Name": "Prairie News"
				},
				{
					"Id": 1585,
					"Name": "Shop N Save Pharmacy"
				},
				{
					"Id": 1586,
					"Name": "ATOMS"
				},
				{
					"Id": 1587,
					"Name": "Weis Markets"
				},
				{
					"Id": 1588,
					"Name": "Massachusetts Bay Transportation Authority"
				},
				{
					"Id": 1589,
					"Name": "O'Malia's Marketplace"
				},
				{
					"Id": 1590,
					"Name": "Just $ave"
				},
				{
					"Id": 1591,
					"Name": "Just Save Foods"
				},
				{
					"Id": 1592,
					"Name": "Walmart Home Office"
				},
				{
					"Id": 1593,
					"Name": "Walmart"
				},
				{
					"Id": 1594,
					"Name": "randy mason"
				},
				{
					"Id": 1595,
					"Name": "Super Giant"
				},
				{
					"Id": 1596,
					"Name": "Super Stop & Shop"
				},
				{
					"Id": 1597,
					"Name": "LSU Booktstore"
				},
				{
					"Id": 1598,
					"Name": "Cowboys"
				},
				{
					"Id": 1599,
					"Name": "South End  Market"
				},
				{
					"Id": 1600,
					"Name": "Royals Foodtown"
				},
				{
					"Id": 1601,
					"Name": "Shamrock"
				},
				{
					"Id": 1602,
					"Name": "Giant Weis"
				},
				{
					"Id": 1603,
					"Name": "Kens Food Market"
				},
				{
					"Id": 1604,
					"Name": "Callao Supermarket"
				},
				{
					"Id": 1605,
					"Name": "Capitol Supermarket"
				},
				{
					"Id": 1606,
					"Name": "Cherry's IGA"
				},
				{
					"Id": 1607,
					"Name": "Cousins Supermarkets"
				},
				{
					"Id": 1608,
					"Name": "Cermak Fresh Market"
				},
				{
					"Id": 1609,
					"Name": "Dry Creek Station/Old Tulsa General Store"
				},
				{
					"Id": 1610,
					"Name": "Honey's Marketplace"
				},
				{
					"Id": 1611,
					"Name": "Family Foods"
				},
				{
					"Id": 1612,
					"Name": "Fresh County Market"
				},
				{
					"Id": 1613,
					"Name": "Incollingo's Market"
				},
				{
					"Id": 1614,
					"Name": "Ken's NewMarket"
				},
				{
					"Id": 1615,
					"Name": "Krause's"
				},
				{
					"Id": 1616,
					"Name": "New Egypt Marketplace"
				},
				{
					"Id": 1617,
					"Name": "Radermachers"
				},
				{
					"Id": 1618,
					"Name": "Corn Market"
				},
				{
					"Id": 1619,
					"Name": "Corner Market"
				},
				{
					"Id": 1620,
					"Name": "Sunflower Market"
				},
				{
					"Id": 1621,
					"Name": "Grocery Depot"
				},
				{
					"Id": 1622,
					"Name": "Sunflower"
				},
				{
					"Id": 1623,
					"Name": "Northland Food and Family"
				},
				{
					"Id": 1624,
					"Name": "Payless Foods"
				},
				{
					"Id": 1625,
					"Name": "Super Q Mart"
				},
				{
					"Id": 1626,
					"Name": "Longs Drugs"
				},
				{
					"Id": 1627,
					"Name": "Ralph's Foodfair"
				},
				{
					"Id": 1628,
					"Name": "Tower Foodfair"
				},
				{
					"Id": 1629,
					"Name": "Western Beef, Inc."
				},
				{
					"Id": 1630,
					"Name": "Western Beef"
				},
				{
					"Id": 1631,
					"Name": "Next Door Stores"
				},
				{
					"Id": 1632,
					"Name": "Call's Shop N Save"
				},
				{
					"Id": 1633,
					"Name": "Will's Shop N Save"
				},
				{
					"Id": 1634,
					"Name": "Ravena Shop N Save"
				},
				{
					"Id": 1635,
					"Name": "Indian Hill Shop N Save"
				},
				{
					"Id": 1636,
					"Name": "Paradis Shop N Save Market"
				},
				{
					"Id": 1637,
					"Name": "Grave's Shop N Save"
				},
				{
					"Id": 1638,
					"Name": "Bristol Shop N Save"
				},
				{
					"Id": 1639,
					"Name": "Bud's Shop N Save"
				},
				{
					"Id": 1640,
					"Name": "Tradewinds Marketplace"
				},
				{
					"Id": 1641,
					"Name": "Durham Marketplace"
				},
				{
					"Id": 1642,
					"Name": "Bow Street Market"
				},
				{
					"Id": 1643,
					"Name": "Tony's Foodland"
				},
				{
					"Id": 1644,
					"Name": "Marketplace Foods"
				},
				{
					"Id": 1645,
					"Name": "Knowlans Food Market"
				},
				{
					"Id": 1646,
					"Name": "Walmart Express"
				},
				{
					"Id": 1647,
					"Name": "Fred Meyer Fuel Center"
				},
				{
					"Id": 1648,
					"Name": "Davis Food & Drug"
				},
				{
					"Id": 1649,
					"Name": "Bud's Newport"
				},
				{
					"Id": 1650,
					"Name": "Davis Food and Drug"
				},
				{
					"Id": 1651,
					"Name": "Dick's Fresh Market"
				},
				{
					"Id": 1652,
					"Name": "Denny's Supervalu Foods"
				},
				{
					"Id": 1653,
					"Name": "Christopher's"
				},
				{
					"Id": 1654,
					"Name": "M\u00e1s Club"
				},
				{
					"Id": 1655,
					"Name": "Dunkin' Donuts"
				},
				{
					"Id": 1656,
					"Name": "Aisle 1"
				},
				{
					"Id": 1657,
					"Name": "Bronson's SuperValu"
				},
				{
					"Id": 1658,
					"Name": "Reese & Ray's IGA "
				},
				{
					"Id": 1659,
					"Name": "Bailey's IGA"
				},
				{
					"Id": 1660,
					"Name": "Town & Country"
				},
				{
					"Id": 1661,
					"Name": "Newton Farms"
				},
				{
					"Id": 1662,
					"Name": "Chicago Transit Authority"
				},
				{
					"Id": 1663,
					"Name": "Ralph's Food Warehouse"
				},
				{
					"Id": 1664,
					"Name": "Green Valley"
				},
				{
					"Id": 1665,
					"Name": "Stokes Fresh Food Market"
				},
				{
					"Id": 1666,
					"Name": "Edwards Family Shop N Save"
				},
				{
					"Id": 1667,
					"Name": "Oregon SuperValu"
				},
				{
					"Id": 1668,
					"Name": "CSU- Ram's Horn"
				},
				{
					"Id": 1669,
					"Name": "Food Pyramid"
				},
				{
					"Id": 1670,
					"Name": "Seneca Foods"
				},
				{
					"Id": 1671,
					"Name": "Liquor Mart"
				},
				{
					"Id": 1672,
					"Name": "Speedy Stop"
				},
				{
					"Id": 1673,
					"Name": "WinCo Foods"
				},
				{
					"Id": 1674,
					"Name": "Teal's"
				},
				{
					"Id": 1675,
					"Name": "Fiesta Market"
				},
				{
					"Id": 1676,
					"Name": "Metcalf Market"
				},
				{
					"Id": 1677,
					"Name": "Kwik Trip"
				},
				{
					"Id": 1678,
					"Name": "Silverton Grocery"
				},
				{
					"Id": 1679,
					"Name": "Golden Gate"
				},
				{
					"Id": 1680,
					"Name": "XOM TX"
				},
				{
					"Id": 1681,
					"Name": "Family Dollar"
				},
				{
					"Id": 1682,
					"Name": "Miller's Market"
				},
				{
					"Id": 1683,
					"Name": "Presto"
				},
				{
					"Id": 1684,
					"Name": "Market Fresh Foods"
				},
				{
					"Id": 1685,
					"Name": "Plaza Super One"
				},
				{
					"Id": 1686,
					"Name": "Tilton"
				},
				{
					"Id": 1687,
					"Name": "Tacoma City Grocery"
				},
				{
					"Id": 1688,
					"Name": "Pine River Family Market"
				},
				{
					"Id": 1689,
					"Name": "Family Express"
				},
				{
					"Id": 1690,
					"Name": "LeBlanc's Food Store"
				},
				{
					"Id": 1691,
					"Name": "Everyday Shop"
				},
				{
					"Id": 1692,
					"Name": "Young's"
				},
				{
					"Id": 1693,
					"Name": "Giant Eagle Express"
				},
				{
					"Id": 1694,
					"Name": "Miniature Market"
				},
				{
					"Id": 1695,
					"Name": "Benedicts Market"
				},
				{
					"Id": 1696,
					"Name": "Bestway Supermarket"
				},
				{
					"Id": 1697,
					"Name": "Be-Lo Supermarkets"
				},
				{
					"Id": 1698,
					"Name": "Bridgewater Foods Supermarket"
				},
				{
					"Id": 1699,
					"Name": "Main Street Market"
				},
				{
					"Id": 1700,
					"Name": "Andy Vander Veur"
				},
				{
					"Id": 1701,
					"Name": "Jr. Market"
				},
				{
					"Id": 1702,
					"Name": "Vienna Foodland Fresh"
				},
				{
					"Id": 1703,
					"Name": "Super Saver Foods"
				},
				{
					"Id": 1704,
					"Name": "Sunoco"
				},
				{
					"Id": 1705,
					"Name": "Big M Market"
				},
				{
					"Id": 1706,
					"Name": "Safeway"
				},
				{
					"Id": 1707,
					"Name": "Dominicks"
				},
				{
					"Id": 1708,
					"Name": "Vons"
				},
				{
					"Id": 1709,
					"Name": "Pak N Save"
				},
				{
					"Id": 1710,
					"Name": "Randalls"
				},
				{
					"Id": 1711,
					"Name": "Mahomet IGA"
				},
				{
					"Id": 1712,
					"Name": "RaceTrac"
				},
				{
					"Id": 1713,
					"Name": "Shoppers Drug Mart"
				},
				{
					"Id": 1714,
					"Name": "Publix"
				},
				{
					"Id": 1715,
					"Name": "Pharmaprix"
				},
				{
					"Id": 1716,
					"Name": "Family Thrift Center"
				},
				{
					"Id": 1717,
					"Name": "Sunmart"
				},
				{
					"Id": 1718,
					"Name": "Econofoods"
				},
				{
					"Id": 1719,
					"Name": "Family Fresh Market"
				},
				{
					"Id": 1720,
					"Name": "Prairie Market"
				},
				{
					"Id": 1721,
					"Name": "Genuardi's"
				},
				{
					"Id": 1722,
					"Name": "Pavilions"
				},
				{
					"Id": 1723,
					"Name": "Atkinsons Market"
				},
				{
					"Id": 1724,
					"Name": "Super Dollar Discount Foods"
				},
				{
					"Id": 1725,
					"Name": "Midway Market"
				},
				{
					"Id": 1726,
					"Name": "No Frills"
				},
				{
					"Id": 1727,
					"Name": "U-Save Foods"
				},
				{
					"Id": 1728,
					"Name": "Bottom Dollar"
				},
				{
					"Id": 1729,
					"Name": "Reid's"
				},
				{
					"Id": 1730,
					"Name": "Rite Aid"
				},
				{
					"Id": 1731,
					"Name": "Brookshire Food Store"
				},
				{
					"Id": 1732,
					"Name": "Brookshire Brothers"
				},
				{
					"Id": 1733,
					"Name": "Polk Pick-it-Up"
				},
				{
					"Id": 1734,
					"Name": "BI-LO"
				},
				{
					"Id": 1735,
					"Name": "Sabar"
				},
				{
					"Id": 1736,
					"Name": "Corner Store"
				},
				{
					"Id": 1737,
					"Name": "Woodman's Food Market"
				},
				{
					"Id": 1738,
					"Name": "Pueblo"
				},
				{
					"Id": 1739,
					"Name": "Quik Trip"
				},
				{
					"Id": 1740,
					"Name": "Extra Foods"
				},
				{
					"Id": 1741,
					"Name": "Loblaws    "
				},
				{
					"Id": 1742,
					"Name": "Real Canadian Superstore"
				},
				{
					"Id": 1743,
					"Name": "Zehrs "
				},
				{
					"Id": 1744,
					"Name": "Nice N Easy"
				},
				{
					"Id": 1745,
					"Name": "Marathon"
				},
				{
					"Id": 1746,
					"Name": "Fas Mart"
				},
				{
					"Id": 1747,
					"Name": "BP"
				},
				{
					"Id": 1748,
					"Name": "Gristedes Supermarkets"
				},
				{
					"Id": 1749,
					"Name": "Greyhound"
				},
				{
					"Id": 1750,
					"Name": "Duane Reade"
				},
				{
					"Id": 1751,
					"Name": "Al's Supermarket"
				},
				{
					"Id": 1752,
					"Name": "Fred's Stores"
				},
				{
					"Id": 1753,
					"Name": "Alpine Market "
				},
				{
					"Id": 1754,
					"Name": "Cash Saver"
				},
				{
					"Id": 1755,
					"Name": "Banks Grocery"
				},
				{
					"Id": 1756,
					"Name": "Mars Shop N Save"
				},
				{
					"Id": 1757,
					"Name": "Leevers Foods"
				},
				{
					"Id": 1758,
					"Name": "Teal's Market"
				},
				{
					"Id": 1759,
					"Name": "United Express"
				},
				{
					"Id": 1760,
					"Name": "Country Harvest Great Valu"
				},
				{
					"Id": 1761,
					"Name": "Three Bears"
				},
				{
					"Id": 1762,
					"Name": "Tim Horton's "
				},
				{
					"Id": 1763,
					"Name": "Verizon"
				},
				{
					"Id": 1764,
					"Name": "Giant Tiger"
				},
				{
					"Id": 1765,
					"Name": "Flextronics"
				},
				{
					"Id": 1766,
					"Name": "Smith\u2019s Shop n\u2019 Save"
				},
				{
					"Id": 1767,
					"Name": "Pix"
				},
				{
					"Id": 1768,
					"Name": "Green Farm Market"
				},
				{
					"Id": 1769,
					"Name": "LoLo"
				},
				{
					"Id": 1770,
					"Name": "KTA Super Stores"
				},
				{
					"Id": 1771,
					"Name": "Hanke's Sentry Foods"
				},
				{
					"Id": 1772,
					"Name": "ecoATM"
				},
				{
					"Id": 1773,
					"Name": "Corner Store"
				},
				{
					"Id": 1774,
					"Name": "EXCHANGE"
				},
				{
					"Id": 1775,
					"Name": "Landis Market"
				},
				{
					"Id": 1776,
					"Name": "Walton Life Fitness Center"
				},
				{
					"Id": 1777,
					"Name": "Good Cents"
				},
				{
					"Id": 1778,
					"Name": "My Goods Market"
				},
				{
					"Id": 1779,
					"Name": "Glassport Shop N Save"
				},
				{
					"Id": 1780,
					"Name": "Schinnston Shop n Save"
				},
				{
					"Id": 1781,
					"Name": "Deep Creek Shop N Save"
				},
				{
					"Id": 1782,
					"Name": "Brownsville Shop N Save"
				},
				{
					"Id": 1783,
					"Name": "Walnut Hill Shop n Save"
				},
				{
					"Id": 1784,
					"Name": "Zelienople Market"
				},
				{
					"Id": 1785,
					"Name": "Market District Express "
				},
				{
					"Id": 1786,
					"Name": "MaxFuel"
				},
				{
					"Id": 1787,
					"Name": "Richter's Marketplace"
				},
				{
					"Id": 1788,
					"Name": "Alexandria County Market"
				},
				{
					"Id": 1789,
					"Name": "Bethe Park Shop n Save"
				},
				{
					"Id": 1790,
					"Name": "Wilkins Shop n Save"
				},
				{
					"Id": 1791,
					"Name": "Sunnyway Foods"
				},
				{
					"Id": 1792,
					"Name": "Minyards Food Stores"
				},
				{
					"Id": 1793,
					"Name": "USA"
				},
				{
					"Id": 1794,
					"Name": "Haggens"
				},
				{
					"Id": 1795,
					"Name": "Albertsons Market"
				},
				{
					"Id": 1796,
					"Name": "American Gas and Oil"
				},
				{
					"Id": 1797,
					"Name": "Family Fare"
				},
				{
					"Id": 1798,
					"Name": "ROBERT WAGNER JR."
				},
				{
					"Id": 1799,
					"Name": "Shoppers Value Foods"
				},
				{
					"Id": 1800,
					"Name": "Market 32"
				},
				{
					"Id": 1801,
					"Name": "Ephraim Market Fresh"
				},
				{
					"Id": 1802,
					"Name": "Superior Grocers"
				},
				{
					"Id": 1803,
					"Name": "Quality Foods IGA"
				},
				{
					"Id": 1804,
					"Name": "Colonial Energy"
				},
				{
					"Id": 1805,
					"Name": "Gordy's Eau Claire Clairemont Foods, Inc."
				},
				{
					"Id": 1806,
					"Name": "Publix GreenWise Market"
				},
				{
					"Id": 1807,
					"Name": "Gordys Market"
				},
				{
					"Id": 1808,
					"Name": "Ellis Family Market Shop n Save"
				},
				{
					"Id": 1809,
					"Name": "North Country Shop n Save"
				},
				{
					"Id": 1810,
					"Name": "Carl's Food Center - IGA"
				},
				{
					"Id": 1811,
					"Name": "Fresco y Mas"
				},
				{
					"Id": 1812,
					"Name": "M&W Market"
				},
				{
					"Id": 1813,
					"Name": "Rackspace Inc"
				},
				{
					"Id": 1814,
					"Name": "Fresh World Manassas"
				},
				{
					"Id": 1815,
					"Name": "Dollar Tree"
				},
				{
					"Id": 1816,
					"Name": "Peterson's Fresh Market"
				},
				{
					"Id": 1817,
					"Name": "Rebel"
				},
				{
					"Id": 1818,
					"Name": "USA Gas"
				},
				{
					"Id": 1819,
					"Name": "Mobil"
				},
				{
					"Id": 1820,
					"Name": "Freedom Valu Center"
				},
				{
					"Id": 1821,
					"Name": "Joes Kwik Mart"
				},
				{
					"Id": 1822,
					"Name": "Express Lane"
				},
				{
					"Id": 1823,
					"Name": "Rocky Top Markets"
				},
				{
					"Id": 1824,
					"Name": "Zoomerz"
				},
				{
					"Id": 1825,
					"Name": "Choice"
				},
				{
					"Id": 1826,
					"Name": "Jiffi Stop"
				},
				{
					"Id": 1827,
					"Name": "Road Ranger"
				},
				{
					"Id": 1828,
					"Name": "Shore Stop"
				},
				{
					"Id": 1829,
					"Name": "Lil Cricket"
				},
				{
					"Id": 1830,
					"Name": "Jumpin Jimmys"
				},
				{
					"Id": 1831,
					"Name": "Apple Market"
				},
				{
					"Id": 1832,
					"Name": "Hometown "
				},
				{
					"Id": 1833,
					"Name": "Small's Food Center"
				},
				{
					"Id": 1834,
					"Name": "Bells Food Store"
				},
				{
					"Id": 1835,
					"Name": "Lowes"
				},
				{
					"Id": 1836,
					"Name": "Fairvalue Hometown Foods"
				},
				{
					"Id": 1837,
					"Name": "Slaughters Supermarket"
				},
				{
					"Id": 1838,
					"Name": "Harolds"
				},
				{
					"Id": 1839,
					"Name": "Mountain Fresh Grocery"
				},
				{
					"Id": 1840,
					"Name": "Phillipsburg Hometown Market "
				},
				{
					"Id": 1841,
					"Name": "Pittmans"
				},
				{
					"Id": 1842,
					"Name": "Sandy Ridge Market "
				},
				{
					"Id": 1843,
					"Name": "Sistersville Foodland"
				},
				{
					"Id": 1844,
					"Name": "Spring Market"
				},
				{
					"Id": 1845,
					"Name": "Gomarlos Food & Circus"
				},
				{
					"Id": 1846,
					"Name": "Fiesta Mart"
				},
				{
					"Id": 1847,
					"Name": "Caesars Palace"
				},
				{
					"Id": 1848,
					"Name": "Orchard Mesa Market"
				},
				{
					"Id": 1849,
					"Name": "Don's Market"
				},
				{
					"Id": 1850,
					"Name": "Rex's Market"
				},
				{
					"Id": 1851,
					"Name": "Mike's Foodtown"
				},
				{
					"Id": 1852,
					"Name": "Al's Foodtown"
				},
				{
					"Id": 1853,
					"Name": "Gunnison Market"
				},
				{
					"Id": 1854,
					"Name": "Village Market"
				},
				{
					"Id": 1855,
					"Name": "gordy"
				},
				{
					"Id": 1856,
					"Name": "Merchants Distributors LLC"
				},
				{
					"Id": 1857,
					"Name": "smith"
				},
				{
					"Id": 1858,
					"Name": "Lemmon IGA"
				},
				{
					"Id": 1859,
					"Name": "Khoury Fresh Market"
				},
				{
					"Id": 1860,
					"Name": "Jacksons Whole Grocer"
				},
				{
					"Id": 1861,
					"Name": "Logans Market"
				},
				{
					"Id": 1862,
					"Name": "Brookshire Brothers Express"
				},
				{
					"Id": 1863,
					"Name": "B & B Food"
				},
				{
					"Id": 1864,
					"Name": "David's"
				},
				{
					"Id": 1865,
					"Name": "Davids Express"
				},
				{
					"Id": 1866,
					"Name": "Davids Express"
				},
				{
					"Id": 1867,
					"Name": "Pecan Foods"
				},
				{
					"Id": 1868,
					"Name": "Brookshire Bros Pharmacy"
				},
				{
					"Id": 1869,
					"Name": "Flash Foods"
				},
				{
					"Id": 1870,
					"Name": "Watts Ranch Market"
				},
				{
					"Id": 1871,
					"Name": "Corys Valley Market"
				},
				{
					"Id": 1872,
					"Name": "Bobs Supermarket"
				},
				{
					"Id": 1873,
					"Name": "Finleys Food Farm"
				},
				{
					"Id": 1874,
					"Name": "Select Super Market"
				},
				{
					"Id": 1875,
					"Name": "Panaca Market"
				},
				{
					"Id": 1876,
					"Name": "A & A Market"
				},
				{
					"Id": 1877,
					"Name": "Dove Creek Superette"
				},
				{
					"Id": 1878,
					"Name": "Sunshine Market"
				},
				{
					"Id": 1879,
					"Name": "Roy's"
				},
				{
					"Id": 1880,
					"Name": "PJs Grocery Market"
				},
				{
					"Id": 1881,
					"Name": "Tedeschi"
				},
				{
					"Id": 1882,
					"Name": "Bigley's Piggly Wiggly"
				},
				{
					"Id": 1883,
					"Name": "Grant's Supermarket"
				},
				{
					"Id": 1884,
					"Name": "D & W Fresh Markets"
				},
				{
					"Id": 1885,
					"Name": "Frank's Shop-Rite"
				},
				{
					"Id": 1886,
					"Name": "Frank's Supermarket"
				},
				{
					"Id": 1887,
					"Name": "Fresh Foods"
				},
				{
					"Id": 1888,
					"Name": "Hansen Foods"
				},
				{
					"Id": 1889,
					"Name": "Heartland Market"
				},
				{
					"Id": 1890,
					"Name": "Holiday Market"
				},
				{
					"Id": 1891,
					"Name": "Hometown Market"
				},
				{
					"Id": 1892,
					"Name": "Hugos"
				},
				{
					"Id": 1893,
					"Name": "Kens Village Market"
				},
				{
					"Id": 1894,
					"Name": "Lukes Super Market"
				},
				{
					"Id": 1895,
					"Name": "Middleville Marketplace"
				},
				{
					"Id": 1896,
					"Name": "Rogers Foodland"
				},
				{
					"Id": 1897,
					"Name": "Taylor's IGA "
				},
				{
					"Id": 1898,
					"Name": "V G Food Center"
				},
				{
					"Id": 1899,
					"Name": "Village Food Pride"
				},
				{
					"Id": 1900,
					"Name": "Vinckier Food "
				},
				{
					"Id": 1901,
					"Name": "Wagoners Hometown Food"
				},
				{
					"Id": 1902,
					"Name": "Wholesale Food Outlet"
				},
				{
					"Id": 1903,
					"Name": "Wingerts's"
				},
				{
					"Id": 1904,
					"Name": "Barney's"
				},
				{
					"Id": 1905,
					"Name": "Bruggeman's SuperValu "
				},
				{
					"Id": 1906,
					"Name": "Ray's Food Place"
				},
				{
					"Id": 1907,
					"Name": "Shop Smart"
				},
				{
					"Id": 1908,
					"Name": "Stan's SuperValu"
				},
				{
					"Id": 1909,
					"Name": "Hinrichs SuperValu"
				},
				{
					"Id": 1910,
					"Name": "Hartman's"
				},
				{
					"Id": 1911,
					"Name": "Hickman's IGA"
				},
				{
					"Id": 1912,
					"Name": "Frontier IGA"
				},
				{
					"Id": 1913,
					"Name": "Cash Wise Foods"
				},
				{
					"Id": 1914,
					"Name": "Rochester Athletic Club"
				},
				{
					"Id": 1915,
					"Name": "Thriftway"
				},
				{
					"Id": 1916,
					"Name": "Fazers Foods"
				},
				{
					"Id": 1917,
					"Name": "Palubickis SuperValu"
				},
				{
					"Id": 1918,
					"Name": "Willys SuperValu "
				},
				{
					"Id": 1919,
					"Name": "Ruebs SuperValu"
				},
				{
					"Id": 1920,
					"Name": "Ekness SuperValu"
				},
				{
					"Id": 1921,
					"Name": "Jims SuperValu"
				},
				{
					"Id": 1922,
					"Name": "Rons SuperValu "
				},
				{
					"Id": 1923,
					"Name": "Tuckers SuperValu"
				},
				{
					"Id": 1924,
					"Name": "Darrington IGA"
				},
				{
					"Id": 1925,
					"Name": "Star Store"
				},
				{
					"Id": 1926,
					"Name": "Lakewood SuperValu"
				},
				{
					"Id": 1927,
					"Name": "Thorp SuperValu"
				},
				{
					"Id": 1928,
					"Name": "Jims Market"
				},
				{
					"Id": 1929,
					"Name": "Lynn's Dakotamart"
				},
				{
					"Id": 1930,
					"Name": "Farmers Store Of Hallock"
				},
				{
					"Id": 1931,
					"Name": "Fishers Food Center"
				},
				{
					"Id": 1932,
					"Name": "Gallatin County IGA"
				},
				{
					"Id": 1933,
					"Name": "Garys Super Foods"
				},
				{
					"Id": 1934,
					"Name": "Hicksons Family Market"
				},
				{
					"Id": 1935,
					"Name": "Louies Super Foods"
				},
				{
					"Id": 1936,
					"Name": "Nelsons Food Pride"
				},
				{
					"Id": 1937,
					"Name": "Plantenbergs Food Pride"
				},
				{
					"Id": 1938,
					"Name": "Rhodes Family Foods"
				},
				{
					"Id": 1939,
					"Name": "Rosatis Marketplace"
				},
				{
					"Id": 1940,
					"Name": "Smiths Red & White Market"
				},
				{
					"Id": 1941,
					"Name": "Tadychs Econo Foods"
				},
				{
					"Id": 1942,
					"Name": "Tims Food Pride"
				},
				{
					"Id": 1943,
					"Name": "Zups Foods Market"
				},
				{
					"Id": 1944,
					"Name": "The Grocery Store"
				},
				{
					"Id": 1945,
					"Name": "Community Markets"
				},
				{
					"Id": 1946,
					"Name": "Weber's IGA"
				},
				{
					"Id": 1947,
					"Name": "Don's Food Pride"
				},
				{
					"Id": 1948,
					"Name": "Ivie's Market"
				},
				{
					"Id": 1949,
					"Name": "Mountain Village"
				},
				{
					"Id": 1950,
					"Name": "Old Pine Market"
				},
				{
					"Id": 1951,
					"Name": "Riggins Whitewater"
				},
				{
					"Id": 1952,
					"Name": "ShopKo"
				},
				{
					"Id": 1953,
					"Name": "SuperAmerica"
				},
				{
					"Id": 1954,
					"Name": "Miller & Brandes"
				},
				{
					"Id": 1955,
					"Name": "South Dayton Supermarket"
				},
				{
					"Id": 1956,
					"Name": "Modern Market"
				},
				{
					"Id": 1957,
					"Name": "Greggs Market Place"
				},
				{
					"Id": 1958,
					"Name": "Sinclairville Superette"
				},
				{
					"Id": 1959,
					"Name": "Park & Shop"
				},
				{
					"Id": 1960,
					"Name": "McKeans Shurfine"
				},
				{
					"Id": 1961,
					"Name": "Costa's Supermarket"
				},
				{
					"Id": 1962,
					"Name": "Kennedy Super Market"
				},
				{
					"Id": 1963,
					"Name": "Northshore Market"
				},
				{
					"Id": 1964,
					"Name": "Samuels Market"
				},
				{
					"Id": 1965,
					"Name": "Giant Food Mart"
				},
				{
					"Id": 1966,
					"Name": "Carlie C's IGA"
				},
				{
					"Id": 1967,
					"Name": "Five Star"
				},
				{
					"Id": 1968,
					"Name": "Mandalay Bay"
				},
				{
					"Id": 1969,
					"Name": "Dorothy Lane Market"
				},
				{
					"Id": 1970,
					"Name": "Circle Country Market"
				},
				{
					"Id": 1971,
					"Name": "Springfield Market"
				},
				{
					"Id": 1972,
					"Name": "Barnesville Grocery"
				},
				{
					"Id": 1973,
					"Name": "Service Foods SuperValu"
				},
				{
					"Id": 1974,
					"Name": "Redlake Foods"
				},
				{
					"Id": 1975,
					"Name": "Darolds SuperValu Market"
				},
				{
					"Id": 1976,
					"Name": "Town Center SuperValu"
				},
				{
					"Id": 1977,
					"Name": "Almichs Market"
				},
				{
					"Id": 1978,
					"Name": "Jims IGA"
				},
				{
					"Id": 1979,
					"Name": "K & Ds IGA"
				},
				{
					"Id": 1980,
					"Name": "Westfield Supervalu"
				},
				{
					"Id": 1981,
					"Name": "Dicks Family Foods"
				},
				{
					"Id": 1982,
					"Name": "Marchants Foods Store"
				},
				{
					"Id": 1983,
					"Name": "Charlies Country Market"
				},
				{
					"Id": 1984,
					"Name": "Shop N Save Express"
				},
				{
					"Id": 1985,
					"Name": "Wheelers IGA Market"
				},
				{
					"Id": 1986,
					"Name": "Broadus IGA Market"
				},
				{
					"Id": 1987,
					"Name": "Lame Deer Trading IGA"
				},
				{
					"Id": 1988,
					"Name": "Little Horn IGA"
				},
				{
					"Id": 1989,
					"Name": "Joliet Foods"
				},
				{
					"Id": 1990,
					"Name": "Gary & Leos Fresh Food IGA"
				},
				{
					"Id": 1991,
					"Name": "Walters IGA"
				},
				{
					"Id": 1992,
					"Name": "Saylors Market"
				},
				{
					"Id": 1993,
					"Name": "IGA Market"
				},
				{
					"Id": 1994,
					"Name": "Tims Food Store"
				},
				{
					"Id": 1995,
					"Name": "Sunflower IGA Food Store"
				},
				{
					"Id": 1996,
					"Name": "Libby Empire Foods"
				},
				{
					"Id": 1997,
					"Name": "Cedar Village IGA"
				},
				{
					"Id": 1998,
					"Name": "Blantons IGA Market"
				},
				{
					"Id": 1999,
					"Name": "Saars Market Place"
				},
				{
					"Id": 2000,
					"Name": "Sids IGA"
				},
				{
					"Id": 2001,
					"Name": "Sun N Fun RV Resort"
				},
				{
					"Id": 2002,
					"Name": "East Bay Sports"
				},
				{
					"Id": 2003,
					"Name": "Fresh Eats Mkt"
				},
				{
					"Id": 2004,
					"Name": "Bethel Shop n Save"
				},
				{
					"Id": 2005,
					"Name": "Double D Market"
				},
				{
					"Id": 2006,
					"Name": "Glenrock Super Foods"
				},
				{
					"Id": 2007,
					"Name": "Fresh Express Market"
				},
				{
					"Id": 2008,
					"Name": "Food Pride Supermarket"
				},
				{
					"Id": 2009,
					"Name": "Fresh Approach"
				},
				{
					"Id": 2010,
					"Name": "Value Fresh Marketplace"
				},
				{
					"Id": 2011,
					"Name": "Riverside Market "
				},
				{
					"Id": 2012,
					"Name": "Tom\u2019s Food Center "
				},
				{
					"Id": 2013,
					"Name": "Hardings Market"
				},
				{
					"Id": 2014,
					"Name": "Foodtown Temperance"
				},
				{
					"Id": 2015,
					"Name": "Nooner's"
				},
				{
					"Id": 2016,
					"Name": "Portage Meat and Market"
				},
				{
					"Id": 2017,
					"Name": "Bills Superette"
				},
				{
					"Id": 2018,
					"Name": "Super Save"
				},
				{
					"Id": 2019,
					"Name": "United Supermarket"
				},
				{
					"Id": 2020,
					"Name": "Mentinks Market"
				},
				{
					"Id": 2021,
					"Name": "99 Cents Only"
				},
				{
					"Id": 2022,
					"Name": "Castles"
				},
				{
					"Id": 2023,
					"Name": "Akins Harvest Foods"
				},
				{
					"Id": 2024,
					"Name": "Dennys Harvest Foods"
				},
				{
					"Id": 2025,
					"Name": "Walla Walla Harvest Foods"
				},
				{
					"Id": 2026,
					"Name": "Blacktail Family Foods"
				},
				{
					"Id": 2027,
					"Name": "Clarks Empire Foods"
				},
				{
					"Id": 2028,
					"Name": "Millers One Stop Market"
				},
				{
					"Id": 2029,
					"Name": "Cloningers Harvest Foods"
				},
				{
					"Id": 2030,
					"Name": "Benewah Market"
				},
				{
					"Id": 2031,
					"Name": "Bluecreek Mercantile"
				},
				{
					"Id": 2032,
					"Name": "Dayton Mercantile"
				},
				{
					"Id": 2033,
					"Name": "Food Court"
				},
				{
					"Id": 2034,
					"Name": "Floyds Harvest Foods"
				},
				{
					"Id": 2035,
					"Name": "Dollar Stretcher"
				},
				{
					"Id": 2036,
					"Name": "Johns Foods"
				},
				{
					"Id": 2037,
					"Name": "Mid Valley Market"
				},
				{
					"Id": 2038,
					"Name": "Harvest Foods"
				},
				{
					"Id": 2039,
					"Name": "White Pine Foods"
				},
				{
					"Id": 2040,
					"Name": "Rods Harvest Foods"
				},
				{
					"Id": 2041,
					"Name": "Royal City Harvest Foods"
				},
				{
					"Id": 2042,
					"Name": "Valley Foods"
				},
				{
					"Id": 2043,
					"Name": "Barneys Harvest Foods"
				},
				{
					"Id": 2044,
					"Name": "Lep Re Kon Harvest Foods"
				},
				{
					"Id": 2045,
					"Name": "Cowiche Harvest Foods"
				},
				{
					"Id": 2046,
					"Name": "Brewster Marketplace"
				},
				{
					"Id": 2047,
					"Name": "Kibe Market"
				},
				{
					"Id": 2048,
					"Name": "Western Market"
				},
				{
					"Id": 2049,
					"Name": "St Johns Hometown"
				},
				{
					"Id": 2050,
					"Name": "Market at Telluride"
				},
				{
					"Id": 2051,
					"Name": "Ridgway Mountain Market"
				},
				{
					"Id": 2052,
					"Name": "Asker's Harvest Foods"
				},
				{
					"Id": 2053,
					"Name": "Andersons Grocery"
				},
				{
					"Id": 2054,
					"Name": "Grants Market"
				},
				{
					"Id": 2055,
					"Name": "Bigfork Harvest Foods"
				},
				{
					"Id": 2056,
					"Name": "Family Food"
				},
				{
					"Id": 2057,
					"Name": "Peoples Harvest Foods"
				},
				{
					"Id": 2058,
					"Name": "Leg up Farmers Market"
				},
				{
					"Id": 2059,
					"Name": "Dino Stop"
				},
				{
					"Id": 2060,
					"Name": "St Jude Childresns Research Hospital Inc"
				},
				{
					"Id": 2061,
					"Name": "Cancun Vacation Plan Owners Association"
				},
				{
					"Id": 2062,
					"Name": "United Pacific"
				},
				{
					"Id": 2063,
					"Name": "Whitney's Family Supermarket"
				},
				{
					"Id": 2064,
					"Name": "Melvin's Fir Street Market"
				},
				{
					"Id": 2065,
					"Name": "Clarksburg SNS"
				},
				{
					"Id": 2066,
					"Name": "Bridgeport SHOP 'n SAVE"
				},
				{
					"Id": 2067,
					"Name": "Idyllwild Village Market"
				},
				{
					"Id": 2068,
					"Name": "Jerry's Woodbury"
				},
				{
					"Id": 2069,
					"Name": "Sullivan IGA"
				},
				{
					"Id": 2070,
					"Name": "West Vigo IGA"
				},
				{
					"Id": 2071,
					"Name": "Steins Market"
				},
				{
					"Id": 2072,
					"Name": "D 9 Market"
				},
				{
					"Id": 2073,
					"Name": "Blue Mountain Foods"
				},
				{
					"Id": 2074,
					"Name": "DJs Thriftway"
				},
				{
					"Id": 2075,
					"Name": "Okanogan Market"
				},
				{
					"Id": 2076,
					"Name": "Valley Market"
				},
				{
					"Id": 2077,
					"Name": "Associated Food Store Inc"
				},
				{
					"Id": 2078,
					"Name": "Barretts Market"
				},
				{
					"Id": 2079,
					"Name": "Lucky California"
				},
				{
					"Id": 2080,
					"Name": "Mt Nebo Market"
				},
				{
					"Id": 2081,
					"Name": "Oneida Valley Grocery"
				},
				{
					"Id": 2082,
					"Name": "Watertown Great American"
				},
				{
					"Id": 2083,
					"Name": "Oneida Valley Grocery"
				},
				{
					"Id": 2084,
					"Name": "Central Shop Rite Supermarket"
				},
				{
					"Id": 2085,
					"Name": "LKR Enterprises Inc"
				},
				{
					"Id": 2086,
					"Name": "Keystone Grocery"
				},
				{
					"Id": 2087,
					"Name": "Bucehes Food World"
				},
				{
					"Id": 2088,
					"Name": "Star Lake Great American "
				},
				{
					"Id": 2089,
					"Name": "Safeway Southern"
				},
				{
					"Id": 2090,
					"Name": "Needler's Fresh Market"
				},
				{
					"Id": 2091,
					"Name": "Mitchell's Harvest Foods"
				},
				{
					"Id": 2092,
					"Name": "Plaza SuperJet"
				},
				{
					"Id": 2093,
					"Name": "K V Food Mart"
				},
				{
					"Id": 2094,
					"Name": "Symbol Retail"
				},
				{
					"Id": 2095,
					"Name": "Fast Market"
				},
				{
					"Id": 2096,
					"Name": "White Oak Station"
				},
				{
					"Id": 2097,
					"Name": "oneida"
				},
				{
					"Id": 2098,
					"Name": "Carter's Market"
				},
				{
					"Id": 2099,
					"Name": "Pablo Family Foods"
				},
				{
					"Id": 2100,
					"Name": "Glazier's Food Marketplace"
				},
				{
					"Id": 2101,
					"Name": "CALs Convenience, Inc."
				},
				{
					"Id": 2102,
					"Name": "Jims Foods IGA"
				},
				{
					"Id": 2103,
					"Name": "Jim's Foods IGA"
				},
				{
					"Id": 2104,
					"Name": "El Super"
				},
				{
					"Id": 2105,
					"Name": "Advance Market"
				},
				{
					"Id": 2106,
					"Name": "Best Bargain Supermarket"
				},
				{
					"Id": 2107,
					"Name": "Frazier Park Market"
				},
				{
					"Id": 2108,
					"Name": "Village Fresh Market Grocery"
				},
				{
					"Id": 2109,
					"Name": "Pat'S Foods - Norway"
				},
				{
					"Id": 2110,
					"Name": "Sierra Hills Market"
				},
				{
					"Id": 2111,
					"Name": "Rio Ranch Market"
				},
				{
					"Id": 2112,
					"Name": "Jensens Finest Foods"
				},
				{
					"Id": 2113,
					"Name": "Tresierras Market"
				},
				{
					"Id": 2114,
					"Name": "Corner Mart"
				},
				{
					"Id": 2115,
					"Name": "Gas N Wash "
				},
				{
					"Id": 2116,
					"Name": "Beaver Supermarket"
				},
				{
					"Id": 2117,
					"Name": "Middletown Super Market LLC"
				},
				{
					"Id": 2118,
					"Name": "Middletown Cash Saver"
				},
				{
					"Id": 2119,
					"Name": "Eagle Foods Inc"
				},
				{
					"Id": 2120,
					"Name": "SNS Foods Inc"
				},
				{
					"Id": 2121,
					"Name": "SNS Food Inc"
				},
				{
					"Id": 2122,
					"Name": "FARM MARKET"
				},
				{
					"Id": 2123,
					"Name": "LILAC FOODS MARKET"
				},
				{
					"Id": 2124,
					"Name": "NORMANDY PARK MARKET"
				},
				{
					"Id": 2125,
					"Name": "PRICE CHOICE FOOD"
				},
				{
					"Id": 2126,
					"Name": "MILAM S MARKET"
				},
				{
					"Id": 2127,
					"Name": "MORTONS SIESTA MARKET"
				},
				{
					"Id": 2128,
					"Name": "HOWARD S MARKET"
				},
				{
					"Id": 2129,
					"Name": "Chavez Supermarket"
				},
				{
					"Id": 2130,
					"Name": "State Market"
				},
				{
					"Id": 2131,
					"Name": "Danforth's Down Home Supermarket"
				},
				{
					"Id": 2132,
					"Name": "2 Go Mart"
				},
				{
					"Id": 2133,
					"Name": "Town Pump Store"
				},
				{
					"Id": 2134,
					"Name": "Town Pump Food Store"
				},
				{
					"Id": 2135,
					"Name": "Quik Way Retail Associates II LTD"
				},
				{
					"Id": 2136,
					"Name": "Lakeland Grocery, LLC"
				},
				{
					"Id": 2137,
					"Name": "Piggly Wiggly Apalachicola"
				},
				{
					"Id": 2138,
					"Name": "PTG LLC"
				},
				{
					"Id": 2139,
					"Name": "PTGC LLC"
				},
				{
					"Id": 2140,
					"Name": "Alta Convenience"
				},
				{
					"Id": 2141,
					"Name": "Marshall Cinema"
				},
				{
					"Id": 2142,
					"Name": "Buffalo Shoals IGA"
				},
				{
					"Id": 2143,
					"Name": "Lowe\u2019s"
				},
				{
					"Id": 2144,
					"Name": "Shop N Save Market "
				},
				{
					"Id": 2145,
					"Name": "ACE"
				},
				{
					"Id": 2146,
					"Name": "Archbold SuperValu"
				},
				{
					"Id": 2147,
					"Name": "Rolands Thriftway"
				},
				{
					"Id": 2148,
					"Name": "Liras Supermarket"
				},
				{
					"Id": 2149,
					"Name": "United Market"
				},
				{
					"Id": 2150,
					"Name": "Ross Granville Market IGA"
				},
				{
					"Id": 2151,
					"Name": "Big T IGA Market"
				},
				{
					"Id": 2152,
					"Name": "Darolds SuperValu Foods"
				},
				{
					"Id": 2153,
					"Name": "Toms Market"
				},
				{
					"Id": 2154,
					"Name": "Selecto Market"
				},
				{
					"Id": 2155,
					"Name": "Bartram & Son Supermarket"
				},
				{
					"Id": 2156,
					"Name": "Festival Foods Supermarket"
				},
				{
					"Id": 2157,
					"Name": "Sunset Food Mart"
				},
				{
					"Id": 2158,
					"Name": "Pick Rite Thriftway"
				},
				{
					"Id": 2159,
					"Name": "Town & Country"
				},
				{
					"Id": 2160,
					"Name": "Nielsens Market"
				},
				{
					"Id": 2161,
					"Name": "Viva Supermarket"
				},
				{
					"Id": 2162,
					"Name": "Ojai Valley Ranch Market"
				},
				{
					"Id": 2163,
					"Name": "Silver Lakes Market"
				},
				{
					"Id": 2164,
					"Name": "El Super Toro Loco"
				},
				{
					"Id": 2165,
					"Name": "Island Pacific Supermarket"
				},
				{
					"Id": 2166,
					"Name": "Lunardis Supermarket"
				},
				{
					"Id": 2167,
					"Name": "Mollie Stones Market"
				},
				{
					"Id": 2168,
					"Name": "Numero Uno Market"
				},
				{
					"Id": 2169,
					"Name": "Super A Foods"
				},
				{
					"Id": 2170,
					"Name": "Smitty's Food Mart"
				},
				{
					"Id": 2171,
					"Name": "Carlie Cs IGA"
				},
				{
					"Id": 2172,
					"Name": "Harveys Supermarket"
				},
				{
					"Id": 2173,
					"Name": "Cardenas Market"
				},
				{
					"Id": 2174,
					"Name": "Fiesta Foods"
				},
				{
					"Id": 2175,
					"Name": "H Mart"
				},
				{
					"Id": 2176,
					"Name": "Mission Ranch Market"
				},
				{
					"Id": 2177,
					"Name": "Cost Less Market"
				},
				{
					"Id": 2178,
					"Name": "Lakeside Supermarket"
				},
				{
					"Id": 2179,
					"Name": "Mashoons Foodland"
				},
				{
					"Id": 2180,
					"Name": "McNallys Foods"
				},
				{
					"Id": 2181,
					"Name": "Fresh Food Depot"
				},
				{
					"Id": 2182,
					"Name": "Shady Cove Select Market"
				},
				{
					"Id": 2183,
					"Name": "Willamina Select Market"
				},
				{
					"Id": 2184,
					"Name": "Martins Market Place IGA"
				},
				{
					"Id": 2185,
					"Name": "Family Grocer"
				},
				{
					"Id": 2186,
					"Name": "Mattawa Red Apple"
				},
				{
					"Id": 2187,
					"Name": "Red Apple Market"
				},
				{
					"Id": 2188,
					"Name": "Vashon Market Fresh IGA"
				},
				{
					"Id": 2189,
					"Name": "Price N Pride Market"
				},
				{
					"Id": 2190,
					"Name": "The Market"
				},
				{
					"Id": 2191,
					"Name": "Everson Market"
				},
				{
					"Id": 2192,
					"Name": "Food Pavilion"
				},
				{
					"Id": 2193,
					"Name": "International Market"
				},
				{
					"Id": 2194,
					"Name": "Uwajimaya"
				},
				{
					"Id": 2195,
					"Name": "Vallarta Supermarket"
				},
				{
					"Id": 2196,
					"Name": "Cheat Lake Price Cutter"
				},
				{
					"Id": 2197,
					"Name": "A Plus Mini Market"
				},
				{
					"Id": 2198,
					"Name": "Marvins Food"
				},
				{
					"Id": 2199,
					"Name": "Darvi Mart"
				},
				{
					"Id": 2200,
					"Name": "Dari Mart"
				},
				{
					"Id": 2201,
					"Name": "Manor Market"
				},
				{
					"Id": 2202,
					"Name": "Berkeley Bowl"
				},
				{
					"Id": 2203,
					"Name": "Fair Deal Market"
				},
				{
					"Id": 2204,
					"Name": "88 Ranch Marketplace"
				},
				{
					"Id": 2205,
					"Name": "Kings Market"
				},
				{
					"Id": 2206,
					"Name": "College Market"
				},
				{
					"Id": 2207,
					"Name": "Ben Lomond Market"
				},
				{
					"Id": 2208,
					"Name": "Fairway Foods"
				},
				{
					"Id": 2209,
					"Name": "Orcas Island Market"
				},
				{
					"Id": 2210,
					"Name": "Cash & Carry"
				},
				{
					"Id": 2211,
					"Name": "Stop N Save"
				},
				{
					"Id": 2212,
					"Name": "Sentry Foods"
				},
				{
					"Id": 2213,
					"Name": "Cookie Crock Market"
				},
				{
					"Id": 2214,
					"Name": "Raymond Thriftway"
				},
				{
					"Id": 2215,
					"Name": "Plaza Market"
				},
				{
					"Id": 2216,
					"Name": "Desert Pantry"
				},
				{
					"Id": 2217,
					"Name": "Farmers Sentry Market"
				},
				{
					"Id": 2218,
					"Name": "Mom N Me Food Store"
				},
				{
					"Id": 2219,
					"Name": "Ludlums IGA Food Mart"
				},
				{
					"Id": 2220,
					"Name": "Paxton IGA Foods"
				},
				{
					"Id": 2221,
					"Name": "Supremo Food Market"
				},
				{
					"Id": 2222,
					"Name": "Washington Square Market"
				},
				{
					"Id": 2223,
					"Name": "Big Saver Foods No. 2"
				},
				{
					"Id": 2224,
					"Name": "Murphys Market"
				},
				{
					"Id": 2225,
					"Name": "La Premier"
				},
				{
					"Id": 2226,
					"Name": "Kennys IGA Village Market"
				},
				{
					"Id": 2227,
					"Name": "Lolas Market"
				},
				{
					"Id": 2228,
					"Name": "Smart & Final Extra"
				},
				{
					"Id": 2229,
					"Name": "Vashon Thriftway"
				},
				{
					"Id": 2230,
					"Name": "Wrays Market Place"
				},
				{
					"Id": 2231,
					"Name": "Prosser Food Depot"
				},
				{
					"Id": 2232,
					"Name": "Pats Foods IGA Supermarket"
				},
				{
					"Id": 2233,
					"Name": "Banning Village Market"
				},
				{
					"Id": 2234,
					"Name": "Hy Vee Drugstore"
				},
				{
					"Id": 2235,
					"Name": "Food Mart"
				},
				{
					"Id": 2236,
					"Name": "Kwik Star"
				},
				{
					"Id": 2237,
					"Name": "Hirri Foods, Inc."
				},
				{
					"Id": 2238,
					"Name": "Snax Max"
				},
				{
					"Id": 2239,
					"Name": "Supermercado Nuestra Familia"
				},
				{
					"Id": 2240,
					"Name": "Beartooth Market IGA"
				},
				{
					"Id": 2241,
					"Name": "Trig's"
				},
				{
					"Id": 2242,
					"Name": "First-Tek, Inc."
				},
				{
					"Id": 2243,
					"Name": "KJR"
				},
				{
					"Id": 2244,
					"Name": "Grafton Sparkle Market"
				},
				{
					"Id": 2245,
					"Name": "Rays Marketplace"
				},
				{
					"Id": 2246,
					"Name": "Market Place"
				},
				{
					"Id": 2247,
					"Name": "Reds Piggly Wiggly"
				},
				{
					"Id": 2248,
					"Name": "Food Fresh"
				},
				{
					"Id": 2249,
					"Name": "Minit Mart"
				},
				{
					"Id": 2250,
					"Name": "SKY PLAZA IGA"
				},
				{
					"Id": 2251,
					"Name": "Daniel's Market"
				},
				{
					"Id": 2252,
					"Name": "Buschs Fresh Food Market"
				},
				{
					"Id": 2253,
					"Name": "Central Valley"
				},
				{
					"Id": 2254,
					"Name": "Andeavor"
				},
				{
					"Id": 2255,
					"Name": "Garden Fresh Marketplace"
				},
				{
					"Id": 2256,
					"Name": "Centro Ahorros Villalba"
				},
				{
					"Id": 2257,
					"Name": "Radc"
				},
				{
					"Id": 2258,
					"Name": "Orchard Fresh"
				},
				{
					"Id": 2259,
					"Name": "Broward Meat and Fish"
				},
				{
					"Id": 2260,
					"Name": "Gomarlos Supermarket"
				},
				{
					"Id": 2261,
					"Name": "Kishmans IGA Market"
				},
				{
					"Id": 2262,
					"Name": "Marianos"
				},
				{
					"Id": 2263,
					"Name": "Sanders Market"
				},
				{
					"Id": 2264,
					"Name": "Publix Super Markets, Inc"
				},
				{
					"Id": 2265,
					"Name": "Albertsons Express"
				},
				{
					"Id": 2266,
					"Name": "Franklin Market"
				},
				{
					"Id": 2267,
					"Name": "Arpo, LLC"
				},
				{
					"Id": 2268,
					"Name": "Apro, LLC"
				},
				{
					"Id": 2269,
					"Name": "Yumm Market"
				},
				{
					"Id": 2270,
					"Name": "A-F County Market"
				},
				{
					"Id": 2271,
					"Name": "Albrecht's Sentry Foods"
				},
				{
					"Id": 2272,
					"Name": "Babbs Supermarket"
				},
				{
					"Id": 2273,
					"Name": "Beartooth"
				},
				{
					"Id": 2274,
					"Name": "Boyer's Food Market"
				},
				{
					"Id": 2275,
					"Name": "Bridgewater Foods"
				},
				{
					"Id": 2276,
					"Name": "Broadus IGA"
				},
				{
					"Id": 2277,
					"Name": "Bronson's Marketplace"
				},
				{
					"Id": 2278,
					"Name": "Bruggeman's SuperValu Foods"
				},
				{
					"Id": 2279,
					"Name": "Camp's Sentry Foods"
				},
				{
					"Id": 2280,
					"Name": "Casey IGA"
				},
				{
					"Id": 2281,
					"Name": "Cedar Valley IGA"
				},
				{
					"Id": 2282,
					"Name": "Cermark Fresh Market"
				},
				{
					"Id": 2283,
					"Name": "D & S Foods"
				},
				{
					"Id": 2284,
					"Name": "Daniel's Sentry Foods"
				},
				{
					"Id": 2285,
					"Name": "Deltaville Market"
				},
				{
					"Id": 2286,
					"Name": "Deterding's Family Supermarket"
				},
				{
					"Id": 2287,
					"Name": "Dick's Family Foods"
				},
				{
					"Id": 2288,
					"Name": "E W Thomas Supermarket"
				},
				{
					"Id": 2289,
					"Name": "Eureka IGA"
				},
				{
					"Id": 2290,
					"Name": "Food Market at Lake Kathryn"
				},
				{
					"Id": 2291,
					"Name": "Food-A-Rama"
				},
				{
					"Id": 2292,
					"Name": "GreatVALU Foods"
				},
				{
					"Id": 2293,
					"Name": "Green Valley Marketplace"
				},
				{
					"Id": 2294,
					"Name": "Hatman's SuperValu Foods"
				},
				{
					"Id": 2295,
					"Name": "Hinrichs SuperValu Foods"
				},
				{
					"Id": 2296,
					"Name": "Hitchcock's Newberry Market"
				},
				{
					"Id": 2297,
					"Name": "Hitchcocks Supervalu Foods"
				},
				{
					"Id": 2298,
					"Name": "Hometown Market Place"
				},
				{
					"Id": 2299,
					"Name": "Jack's Fresh Market"
				},
				{
					"Id": 2300,
					"Name": "Jerrys GreatVALU"
				},
				{
					"Id": 2301,
					"Name": "Jim's Market"
				},
				{
					"Id": 2302,
					"Name": "Lame Deer Trading Post"
				},
				{
					"Id": 2303,
					"Name": "Landis Supermarket"
				},
				{
					"Id": 2304,
					"Name": "Lilac Foods"
				},
				{
					"Id": 2305,
					"Name": "Lira's"
				},
				{
					"Id": 2306,
					"Name": "Lunds & Byerly's"
				},
				{
					"Id": 2307,
					"Name": "McCaffrey's Food Market"
				},
				{
					"Id": 2308,
					"Name": "Melvin's"
				},
				{
					"Id": 2309,
					"Name": "Metcalfe's"
				},
				{
					"Id": 2310,
					"Name": "Milam's Market"
				},
				{
					"Id": 2311,
					"Name": "Miller's Food & Drug"
				},
				{
					"Id": 2312,
					"Name": "Miller's New Market"
				},
				{
					"Id": 2313,
					"Name": "Miller's SuperValu Foods"
				},
				{
					"Id": 2314,
					"Name": "Morton's Siesta Market"
				},
				{
					"Id": 2315,
					"Name": "Mount Royal Market"
				},
				{
					"Id": 2316,
					"Name": "Pechin"
				},
				{
					"Id": 2317,
					"Name": "Pierce's Express Market"
				},
				{
					"Id": 2318,
					"Name": "Radcliffe's GreatVALU"
				},
				{
					"Id": 2319,
					"Name": "Reid Super Save Market"
				},
				{
					"Id": 2320,
					"Name": "Riverside Marketplace"
				},
				{
					"Id": 2321,
					"Name": "Rockville IGA"
				},
				{
					"Id": 2322,
					"Name": "Roland's Supermarket"
				},
				{
					"Id": 2323,
					"Name": "Shopper Value Foods"
				},
				{
					"Id": 2324,
					"Name": "SuperValu Foods"
				},
				{
					"Id": 2325,
					"Name": "The Marketplace"
				},
				{
					"Id": 2326,
					"Name": "Town Center SuperValu Foods"
				},
				{
					"Id": 2327,
					"Name": "Tresierras Supermarkets"
				},
				{
					"Id": 2328,
					"Name": "Village Fresh Market"
				},
				{
					"Id": 2329,
					"Name": "Woodland Marketplace"
				},
				{
					"Id": 2330,
					"Name": "Zingo's Supermarket"
				},
				{
					"Id": 2331,
					"Name": "Borowiaks IGA"
				},
				{
					"Id": 2332,
					"Name": "Camano Plaza IGA"
				},
				{
					"Id": 2333,
					"Name": "Capri IGA"
				},
				{
					"Id": 2334,
					"Name": "Dierberg's"
				},
				{
					"Id": 2335,
					"Name": "Dissmore's IGA"
				},
				{
					"Id": 2336,
					"Name": "Food Market at Key Center"
				},
				{
					"Id": 2337,
					"Name": "Gladestone SuperValu Foods"
				},
				{
					"Id": 2338,
					"Name": "Krause's SuperValu Foods"
				},
				{
					"Id": 2339,
					"Name": "Kress IGA"
				},
				{
					"Id": 2340,
					"Name": "Leroy IGA"
				},
				{
					"Id": 2341,
					"Name": "Mackinaw IGA"
				},
				{
					"Id": 2342,
					"Name": "Mt. Sterling IGA"
				},
				{
					"Id": 2343,
					"Name": "Murphys in the Pines"
				},
				{
					"Id": 2344,
					"Name": "Ocean Shores IGA"
				},
				{
					"Id": 2345,
					"Name": "Paulbeck's County Market"
				},
				{
					"Id": 2346,
					"Name": "Peqot Lakes SuperValu Foods"
				},
				{
					"Id": 2347,
					"Name": "St. Joseph IGA"
				},
				{
					"Id": 2348,
					"Name": "Stodola's IGA"
				},
				{
					"Id": 2349,
					"Name": "Sunflower IGA"
				},
				{
					"Id": 2350,
					"Name": "Viking Village Foods"
				},
				{
					"Id": 2351,
					"Name": "Willie's SuperValu Foods"
				},
				{
					"Id": 2352,
					"Name": "Farm Market"
				},
				{
					"Id": 2353,
					"Name": "Normandy Park Market"
				},
				{
					"Id": 2354,
					"Name": "SHOP 'n SAVE"
				},
				{
					"Id": 2355,
					"Name": "SHOP N SAVE Express"
				},
				{
					"Id": 2356,
					"Name": "White Pine Land Company"
				},
				{
					"Id": 2357,
					"Name": "Grab & Go"
				},
				{
					"Id": 2358,
					"Name": "Kuhn\u2019s Market"
				},
				{
					"Id": 2359,
					"Name": "Carrs Quality Center"
				},
				{
					"Id": 2360,
					"Name": "Eagle Quality Center"
				},
				{
					"Id": 2361,
					"Name": "Haggen"
				},
				{
					"Id": 2362,
					"Name": "Portland"
				},
				{
					"Id": 2363,
					"Name": "Westgate Resorts "
				},
				{
					"Id": 2364,
					"Name": "Nebo Market "
				},
				{
					"Id": 2365,
					"Name": "Safeway Express"
				},
				{
					"Id": 2366,
					"Name": "LAKES HARVEST FOODS"
				},
				{
					"Id": 2367,
					"Name": "Southgate Center Market"
				},
				{
					"Id": 2368,
					"Name": "Safeway Fuel"
				},
				{
					"Id": 2369,
					"Name": "PIYUSH-TEST11"
				},
				{
					"Id": 2370,
					"Name": "B&T Foods"
				},
				{
					"Id": 2371,
					"Name": "KJ Market"
				},
				{
					"Id": 2372,
					"Name": "Marathon 51"
				},
				{
					"Id": 2373,
					"Name": "Macey's Granger"
				},
				{
					"Id": 2374,
					"Name": "Power Market"
				},
				{
					"Id": 2375,
					"Name": "Long Beach Shop N Kart "
				},
				{
					"Id": 2376,
					"Name": "New Sentry LLC"
				},
				{
					"Id": 2377,
					"Name": "Darrlington Supermarket, LLC "
				},
				{
					"Id": 2378,
					"Name": "Macey's 21st South"
				},
				{
					"Id": 2379,
					"Name": "Red Apple University"
				},
				{
					"Id": 2380,
					"Name": "Otterbein Foods LLC"
				},
				{
					"Id": 2381,
					"Name": "Otterbein Express"
				},
				{
					"Id": 2382,
					"Name": "Dollar Fresh Hy-Vee"
				},
				{
					"Id": 2383,
					"Name": "Hop In"
				},
				{
					"Id": 2384,
					"Name": "Grand Union Supermarket"
				},
				{
					"Id": 2385,
					"Name": "Lambs Market"
				},
				{
					"Id": 2386,
					"Name": "CSSE"
				},
				{
					"Id": 2387,
					"Name": "In & Out"
				},
				{
					"Id": 2388,
					"Name": "In and Out"
				}
			],
        } as IPendingBannersResponse);
    },
];

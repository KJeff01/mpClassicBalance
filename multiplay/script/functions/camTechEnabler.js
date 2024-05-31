function completeResearchOnTime(time, playnum)
{
	for (const tech in allRes)
	{
		if (allRes[tech] <= time)
		{
			completeResearch(tech, playnum);
		}
	}
}

var allRes = {
	"R-Vehicle-Prop-Wheels": 0,
	"R-Sys-Spade1Mk1": 0,
	"R-Vehicle-Body01": 0,
	"R-Wpn-MG1Mk1": 5,
	"R-Defense-Tower01": 48,
	"R-Wpn-MG-Damage01": 48,
	"R-Sys-Sensor-Turret01": 65,
	"R-Sys-Engineering01": 86,
	"R-Defense-HardcreteWall": 129,
	"R-Defense-TankTrap01": 129,
	"R-Sys-MobileRepairTurret01": 129,
	"R-Sys-Sensor-Tower01": 129,
	"R-Wpn-MG-Damage02": 134,
	"R-Vehicle-Engine01": 172,
	"R-Vehicle-Prop-Halftracks": 172,
	"R-Struc-Factory-Cyborg": 176,
	"R-Defense-WallUpgrade01": 215,
	"R-Struc-CommandRelay": 215,
	"R-Wpn-Flamer01Mk1": 215,
	"R-Wpn-Cannon1Mk1": 219,
	"R-Defense-Pillbox01": 219,
	"R-Cyborg-Wpn-MG": 219,
	"R-Wpn-MG2Mk1": 219,
	"R-Wpn-Rocket05-MiniPod": 258,
	"R-Wpn-Flamer-Damage01": 258,
	"R-Struc-PowerModuleMk1": 262,
	"R-Cyborg-Wpn-Flamer": 284,
	"R-Struc-Materials01": 301,
	"R-Cyborg-Sys-ComEng": 301,
	"R-Cyborg-Sys-Mechanic": 301,
	"R-Wpn-MG-Damage03": 305,
	"R-Struc-Research-Module": 305,
	"R-Wpn-Cannon-Damage01": 305,
	"R-Defense-Pillbox05": 317,
	"R-Defense-WallTower02": 320,
	"R-Cyborg-Wpn-Cannon": 320,
	"R-Vehicle-Prop-Tracks": 331,
	"R-Vehicle-Engine02": 331,
	"R-Wpn-Flamer-Damage02": 331,
	"R-Wpn-Rocket-Damage01": 331,
	"R-Comp-CommandTurret01": 334,
	"R-Defense-Pillbox04": 345,
	"R-Defense-WallUpgrade02": 362,
	"R-Wpn-MG3Mk1": 362,
	"R-Struc-Research-Upgrade01": 374,
	"R-Wpn-Flamer-ROF01": 376,
	"R-Defense-Tower06": 385,
	"R-Struc-Factory-Module": 388,
	"R-Struc-Materials02": 408,
	"R-Wpn-AAGun03": 411,
	"R-Defense-WallTower01": 411,
	"R-Wpn-Cannon-Damage02": 411,
	"R-Sys-Sensor-Tower02": 411,
	"R-Wpn-Rocket-Damage02": 432,
	"R-Wpn-Rocket02-MRL": 432,
	"R-Wpn-Flamer-Damage03": 434,
	"R-Cyborg-Metals01": 434,
	"R-Vehicle-Body05": 434,
	"R-Vehicle-Metals01": 457,
	"R-Struc-Research-Upgrade02": 466,
	"R-Defense-MRL": 477,
	"R-Struc-Factory-Upgrade01": 479,
	"R-Struc-RepairFacility": 479,
	"R-Wpn-Mortar01Lt": 479,
	"R-Defense-WallUpgrade03": 498,
	"R-Vehicle-Body04": 499,
	"R-Cyborg-Wpn-Grenade": 509,
	"R-Vehicle-Engine03": 518,
	"R-Vehicle-Prop-Hover": 519,
	"R-Cyborg-Metals02": 519,
	"R-Defense-MortarPit": 519,
	"R-Struc-Materials03": 536,
	"R-Wpn-Cannon-Accuracy01": 539,
	"R-Wpn-Cannon-Damage03": 539,
	"R-Wpn-Mortar-Damage01": 539,
	"R-Wpn-Rocket-Accuracy01": 557,
	"R-Wpn-Rocket-Damage03": 557,
	"R-Wpn-Rocket01-LtAT": 557,
	"R-Defense-AASite-QuadMg1": 558,
	"R-Wpn-Cannon2Mk1": 559,
	"R-Struc-RprFac-Upgrade01": 579,
	"R-Vehicle-Metals02": 579,
	"R-Struc-Research-Upgrade03": 587,
	"R-Cyborg-Wpn-Rocket": 587,
	"R-Defense-Pillbox06": 604,
	"R-Defense-WallTower06": 604,
	"R-Wpn-AAGun-Damage01": 615,
	"R-Wpn-MG-ROF01": 615,
	"R-Defense-WallTower03": 615,
	"R-Wpn-RocketSlow-Damage01": 631,
	"R-Cyborg-Metals03": 633,
	"R-Struc-Factory-Upgrade02": 650,
	"R-Wpn-Mortar-Acc01": 650,
	"R-Wpn-Mortar-Damage02": 650,
	"R-Vehicle-Body08": 650,
	"R-Vehicle-Body11": 650,
	"R-Wpn-Flamer-Damage04": 668,
	"R-Wpn-Rocket-Damage04": 703,
	"R-Vehicle-Prop-VTOL": 719,
	"R-Wpn-AAGun-ROF01": 721,
	"R-Wpn-Rocket-ROF01": 721,
	"R-Struc-Research-Upgrade04": 728,
	"R-Wpn-RocketSlow-Accuracy01": 736,
	"R-Wpn-RocketSlow-Damage02": 736,
	"R-Vehicle-Metals03": 738,
	"R-Wpn-MG-ROF02": 753,
	"R-Struc-RprFac-Upgrade02": 753,
	"R-Wpn-Cannon-Damage04": 759,
	"R-Wpn-Rocket-Accuracy02": 769,
	"R-Sys-Sensor-Upgrade01": 776,
	"R-Wpn-Rocket-ROF02": 817,
	"R-Wpn-AAGun-Damage02": 831,
	"R-Struc-Factory-Upgrade03": 848,
	"R-Wpn-Cannon3Mk1": 848,
	"R-Wpn-Mortar02Hvy": 848,
	"R-Sys-Engineering02": 855,
	"R-Wpn-AAGun-ROF02": 855,
	"R-Wpn-Cannon-Accuracy02": 855,
	"R-Wpn-RocketSlow-Damage03": 863,
	"R-Wpn-Flame2": 864,
	"R-Wpn-Mortar-Damage03": 864,
	"R-Wpn-Rocket-Damage05": 864,
	"R-Wpn-RocketSlow-ROF01": 864,
	"R-Wpn-RocketSlow-Accuracy02": 864,
	"R-Wpn-Cannon-ROF01": 865,
	"R-Wpn-Bomb01": 865,
	"R-Sys-Sensor-Upgrade02": 871,
	"R-Cyborg-Metals04": 876,
	"R-Struc-VTOLFactory": 878,
	"R-Struc-Power-Upgrade01": 886,
	"R-Struc-Research-Upgrade05": 886,
	"R-Cyborg-Wpn-Thermite": 888,
	"R-Wpn-Mortar-ROF01": 909,
	"R-Wpn-Flamer-Damage05": 913,
	"R-Wpn-Mortar-Acc02": 915,
	"R-Defense-WallTower04": 915,
	"R-Wpn-MG-ROF03": 928,
	"R-Vehicle-Metals04": 933,
	"R-Defense-HvyMor": 938,
	"R-Wpn-Cannon-Damage05": 943,
	"R-Wpn-AAGun01": 950,
	"R-Sys-CBSensor-Tower01": 952,
	"R-Cyborg-Armor-Heat01": 963,
	"R-Cyborg-Transport": 965,
	"R-Struc-VTOLPad": 965,
	"R-Struc-RprFac-Upgrade03": 966,
	"R-Wpn-Rocket03-HvAT": 979,
	"R-Defense-HvyFlamer": 981,
	"R-Wpn-Rocket-ROF03": 995,
	"R-Defense-WallUpgrade04": 1001,
	"R-Wpn-RocketSlow-Damage04": 1008,
	"R-Wpn-Flamer-ROF02": 1009,
	"R-Struc-Power-Upgrade01b": 1031,
	"R-Wpn-AAGun-Damage03": 1036,
	"R-Wpn-RocketSlow-Accuracy03": 1038,
	"R-Wpn-Bomb03": 1038,
	"R-Vehicle-Armor-Heat01": 1047,
	"R-Wpn-Mortar-ROF02": 1052,
	"R-Vehicle-Engine04": 1053,
	"R-Wpn-RocketSlow-ROF02": 1057,
	"R-Wpn-Rocket-Damage06": 1057,
	"R-Cyborg-Metals05": 1058,
	"R-SuperTransport": 1062,
	"R-Defense-AASite-QuadBof": 1065,
	"R-Sys-CBSensor-Turret01": 1067,
	"R-Struc-Factory-Upgrade04": 1071,
	"R-Vehicle-Body02": 1076,
	"R-Struc-Research-Upgrade06": 1077,
	"R-Cyborg-Armor-Heat02": 1077,
	"R-Struc-VTOLPad-Upgrade01": 1079,
	"R-Wpn-Mortar-Damage04": 1084,
	"R-Wpn-Bomb-Damage01": 1085,
	"R-Wpn-MG4": 1097,
	"R-Struc-RprFac-Upgrade04": 1106,
	"R-Wpn-Rocket06-IDF": 1119,
	"R-Wpn-Cannon4AMk1": 1128,
	"R-Sys-VTOLStrike-Tower01": 1130,
	"R-Wpn-Cannon-Damage06": 1136,
	"R-Struc-Materials04": 1137,
	"R-Vehicle-Metals05": 1153,
	"R-Cyborg-Hvywpn-Mcannon": 1153,
	"R-Struc-Power-Upgrade01c": 1164,
	"R-Wpn-Flamer-Damage06": 1169,
	"R-Wpn-AAGun-Accuracy01": 1170,
	"R-Defense-WallUpgrade05": 1179,
	"R-Wpn-RocketSlow-Damage05": 1186,
	"R-Wpn-Flamer-ROF03": 1187,
	"R-Wpn-Cannon-ROF02": 1199,
	"R-Vehicle-Armor-Heat02": 1200,
	"R-Defense-Pillbox-RotMG": 1200,
	"R-Defense-RotMG": 1200,
	"R-Defense-Emplacement-HPVcannon": 1204,
	"R-Cyborg-Armor-Heat03": 1205,
	"R-Struc-VTOLPad-Upgrade02": 1207,
	"R-Defense-IDFRocket": 1221,
	"R-Wpn-Mortar-ROF03": 1225,
	"R-Wpn-AAGun04": 1225,
	"R-Wpn-Rocket07-Tank-Killer": 1228,
	"R-Vehicle-Body06": 1229,
	"R-Vehicle-Body12": 1229,
	"R-Wpn-Bomb04": 1238,
	"R-Wpn-Bomb02": 1239,
	"R-Vehicle-Engine05": 1247,
	"R-Cyborg-Wpn-RotMG": 1251,
	"R-Cyborg-Metals06": 1264,
	"R-Wpn-HowitzerMk1": 1276,
	"R-Struc-RprFac-Upgrade05": 1276,
	"R-Wpn-Bomb-Damage02": 1281,
	"R-Sys-VTOLCBS-Tower01": 1283,
	"R-Sys-VTOLStrike-Turret01": 1283,
	"R-Struc-Research-Upgrade07": 1290,
	"R-Defense-Wall-RotMg": 1301,
	"R-Struc-Materials05": 1306,
	"R-Struc-Factory-Upgrade05": 1309,
	"R-Wpn-Mortar-Damage05": 1320,
	"R-Defense-HvyA-Trocket": 1327,
	"R-Wpn-Cannon-Damage07": 1337,
	"R-Defense-AASite-QuadRotMg": 1348,
	"R-Wpn-AAGun-ROF03": 1348,
	"R-Defense-Super-Cannon": 1353,
	"R-Wpn-Mortar-Incendiary": 1361,
	"R-Wpn-Cannon-ROF03": 1364,
	"R-Struc-VTOLPad-Upgrade03": 1370,
	"R-Defense-Howitzer": 1371,
	"R-Defense-WallTower-HvyA-Trocket": 1374,
	"R-Defense-WallUpgrade06": 1384,
	"R-Vehicle-Armor-Heat03": 1388,
	"R-Wpn-RocketSlow-Damage06": 1390,
	"R-Wpn-RocketSlow-ROF03": 1390,
	"R-Vehicle-Metals06": 1391,
	"R-Wpn-Howitzer-Damage01": 1395,
	"R-Vehicle-Body09": 1399,
	"R-Cyborg-Hvywpn-HPV": 1400,
	"R-Defense-MortarPit-Incendiary": 1408,
	"R-Wpn-Howitzer-Accuracy01": 1418,
	"R-Defense-WallTower-HPVcannon": 1423,
	"R-Defense-Super-Rocket": 1423,
	"R-Wpn-Mortar3": 1429,
	"R-Wpn-Plasmite-Flamer": 1431,
	"R-Sys-VTOLCBS-Turret01": 1449,
	"R-Vehicle-Engine06": 1467,
	"R-Struc-Power-Upgrade02": 1467,
	"R-Struc-RprFac-Upgrade06": 1474,
	"R-Cyborg-Metals07": 1494,
	"R-Wpn-Bomb-Damage03": 1502,
	"R-Struc-Materials06": 1502,
	"R-Defense-RotMor": 1524,
	"R-Struc-Research-Upgrade08": 1525,
	"R-Defense-PlasmiteFlamer": 1526,
	"R-Cyborg-Hvywpn-TK": 1527,
	"R-Wpn-Cannon5": 1539,
	"R-Wpn-Cannon-Damage08": 1547,
	"R-Wpn-Howitzer-Damage02": 1550,
	"R-Wpn-AAGun-Accuracy02": 1557,
	"R-Wpn-Cannon-ROF04": 1557,
	"R-Struc-VTOLPad-Upgrade04": 1564,
	"R-Struc-Factory-Upgrade06": 1565,
	"R-Sys-Sensor-WS": 1569,
	"R-Wpn-Missile2A-T": 1569,
	"R-Defense-WallTower-DoubleAAgun": 1574,
	"R-Wpn-Mortar-Damage06": 1575,
	"R-Wpn-MG5": 1580,
	"R-Wpn-Howitzer-Accuracy02": 1594,
	"R-Defense-Wall-VulcanCan": 1627,
	"R-Cyborg-Armor-Heat04": 1642,
	"R-Vehicle-Metals07": 1648,
	"R-Wpn-Flamer-Damage07": 1678,
	"R-Struc-Power-Upgrade03": 1689,
	"R-Wpn-Mortar-Acc03": 1693,
	"R-Sys-Engineering03": 1700,
	"R-Wpn-AAGun-ROF04": 1703,
	"R-Sys-MobileRepairTurretHvy": 1711,
	"R-Cyborg-Hvywpn-Acannon": 1721,
	"R-Wpn-AAGun-Damage04": 1722,
	"R-Wpn-Howitzer-Damage03": 1732,
	"R-Wpn-HvyHowitzer": 1732,
	"R-Wpn-Mortar-ROF04": 1740,
	"R-Cyborg-Metals08": 1744,
	"R-Wpn-Cannon6TwinAslt": 1758,
	"R-Wpn-Cannon-Damage09": 1765,
	"R-Wpn-Cannon-ROF05": 1776,
	"R-Struc-Research-Upgrade09": 1780,
	"R-Struc-VTOLPad-Upgrade05": 1782,
	"R-Sys-Autorepair-General": 1787,
	"R-Wpn-RailGun01": 1787,
	"R-Wpn-Howitzer-Accuracy03": 1796,
	"R-Wpn-Bomb05": 1800,
	"R-Cyborg-Armor-Heat05": 1821,
	"R-Cyborg-Wpn-ATMiss": 1828,
	"R-Defense-GuardTower-ATMiss": 1828,
	"R-Defense-WallTower-A-Tmiss": 1828,
	"R-Wpn-Missile-LtSAM": 1828,
	"R-Wpn-Missile-ROF01": 1828,
	"R-Struc-Factory-Upgrade07": 1837,
	"R-Defense-HvyHowitzer": 1837,
	"R-Wpn-Howitzer-ROF01": 1837,
	"R-Vehicle-Armor-Heat04": 1844,
	"R-Sys-Sensor-WSTower": 1866,
	"R-Defense-Cannon6": 1868,
	"R-Wpn-AAGun-ROF05": 1878,
	"R-Defense-WallTower-QuadRotAA": 1898,
	"R-Struc-Power-Upgrade03a": 1899,
	"R-Vehicle-Body03": 1902,
	"R-Wpn-AAGun-Damage05": 1909,
	"R-Defense-WallUpgrade07": 1909,
	"R-Vehicle-Metals08": 1922,
	"R-Wpn-Howitzer-Incendiary": 1939,
	"R-Wpn-Howitzer03-Rot": 1939,
	"R-Wpn-Flamer-Damage08": 1943,
	"R-Wpn-Howitzer-ROF02": 1973,
	"R-Cyborg-Metals09": 2011,
	"R-Wpn-Cannon-ROF06": 2014,
	"R-Struc-VTOLPad-Upgrade06": 2019,
	"R-Defense-RotHow": 2024,
	"R-Wpn-Laser01": 2024,
	"R-Cyborg-Armor-Heat06": 2025,
	"R-Defense-Howitzer-Incendiary": 2025,
	"R-Cyborg-Wpn-Rail1": 2031,
	"R-Defense-GuardTower-Rail1": 2031,
	"R-Wpn-Rail-Damage01": 2031,
	"R-Vehicle-Armor-Heat05": 2065,
	"R-Wpn-Missile-Damage01": 2072,
	"R-Defense-SamSite1": 2081,
	"R-Wpn-AAGun-ROF06": 2082,
	"R-Cyborg-Hvywpn-A-T": 2092,
	"R-Defense-WallTower-TwinAGun": 2102,
	"R-Wpn-Howitzer-Damage04": 2109,
	"R-Sys-SpyTurret": 2111,
	"R-Wpn-AAGun-Damage06": 2113,
	"R-Struc-Materials07": 2113,
	"R-Vehicle-Engine07": 2122,
	"R-Struc-Factory-Upgrade08": 2129,
	"R-Wpn-Howitzer-ROF03": 2143,
	"R-Defense-WallUpgrade08": 2147,
	"R-Sys-Resistance-Circuits": 2172,
	"R-Sys-Sensor-UpLink": 2194,
	"R-Vehicle-Metals09": 2220,
	"R-Sys-SpyTower": 2233,
	"R-Wpn-Flamer-Damage09": 2235,
	"R-Cyborg-Armor-Heat07": 2262,
	"R-Cyborg-Wpn-Laser1": 2269,
	"R-Defense-PrisLas": 2269,
	"R-Defense-WallTower-PulseLas": 2269,
	"R-Wpn-Energy-Accuracy01": 2269,
	"R-Wpn-Rail-Accuracy01": 2276,
	"R-Wpn-Howitzer-Damage05": 2312,
	"R-Wpn-Missile-ROF02": 2316,
	"R-Wpn-Missile-Accuracy01": 2316,
	"R-Vehicle-Armor-Heat06": 2319,
	"R-Wpn-Howitzer-ROF04": 2346,
	"R-Struc-Materials08": 2350,
	"R-Vehicle-Body07": 2410,
	"R-Wpn-AAGun-Accuracy03": 2418,
	"R-Defense-WallUpgrade09": 2418,
	"R-Struc-Factory-Upgrade09": 2455,
	"R-Wpn-Laser02": 2513,
	"R-Wpn-Energy-Damage01": 2513,
	"R-Wpn-Rail-Damage02": 2520,
	"R-Wpn-Rail-ROF01": 2520,
	"R-Cyborg-Armor-Heat08": 2534,
	"R-Wpn-Howitzer-Damage06": 2550,
	"R-Wpn-Missile-Damage02": 2560,
	"R-Defense-WallTower-SamSite": 2590,
	"R-Vehicle-Armor-Heat07": 2607,
	"R-Struc-Materials09": 2622,
	"R-Vehicle-Engine08": 2665,
	"R-Wpn-EMPCannon": 2721,
	"R-Defense-WallUpgrade10": 2723,
	"R-Defense-PulseLas": 2757,
	"R-Wpn-Energy-ROF01": 2757,
	"R-Cyborg-Hvywpn-PulseLsr": 2791,
	"R-Wpn-MdArtMissile": 2805,
	"R-Wpn-Missile-Accuracy02": 2805,
	"R-Cyborg-Armor-Heat09": 2839,
	"R-Vehicle-Armor-Heat08": 2930,
	"R-Wpn-Energy-Damage02": 3001,
	"R-Wpn-RailGun02": 3008,
	"R-Wpn-Rail-ROF02": 3008,
	"R-Defense-MdArtMissile": 3049,
	"R-Wpn-Missile-ROF03": 3051,
	"R-Defense-WallUpgrade11": 3097,
	"R-Wpn-HvyLaser": 3123,
	"R-Vehicle-Body10": 3143,
	"R-Wpn-Bomb06": 3145,
	"R-Wpn-LasSat": 3154,
	"R-Defense-EMPCannon": 3210,
	"R-Wpn-Energy-ROF02": 3246,
	"R-Defense-Rail2": 3252,
	"R-Defense-WallTower-Rail2": 3252,
	"R-Vehicle-Armor-Heat09": 3286,
	"R-Wpn-Missile-Damage03": 3293,
	"R-Cyborg-Hvywpn-RailGunner": 3296,
	"R-Vehicle-Engine09": 3431,
	"R-Wpn-PlasmaCannon": 3462,
	"R-Defense-HeavyLas": 3469,
	"R-Defense-WallUpgrade12": 3504,
	"R-Defense-EMPMortar": 3698,
	"R-Wpn-Energy-Damage03": 3734,
	"R-Wpn-Rail-Damage03": 3740,
	"R-Wpn-Rail-ROF03": 3741,
	"R-Wpn-HvArtMissile": 3781,
	"R-Wpn-Missile-HvSAM": 3781,
	"R-Defense-PlasmaCannon": 3808,
	"R-Defense-Super-Missile": 3899,
	"R-Wpn-Energy-ROF03": 3978,
	"R-Defense-SamSite2": 4270,
	"R-Vehicle-Body13": 4279,
	"R-Defense-WallTower-SamHvy": 4290,
	"R-Defense-HvyArtMissile": 4297,
	"R-Wpn-AALaser": 4467,
	"R-Wpn-RailGun03": 4473,
	"R-Defense-WallTower-Rail3": 4717,
	"R-Defense-AA-Laser": 4955,
	"R-Defense-Rail3": 4961,
	"R-Vehicle-Body14": 5211,
	"R-Defense-MassDriver": 5321
};

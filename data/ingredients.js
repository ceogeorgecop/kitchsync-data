const MASTER_INGREDIENT_DB = [
  {
    "name": "หมูสับ",
    "en": "raw minced pork",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 300,
    "days": 2,
    "priceRange": "55-65",
    "avgPrice": 60
  },
  {
    "name": "หมูบด",
    "en": "raw minced pork",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 300,
    "days": 2,
    "priceRange": "55-65",
    "avgPrice": 60
  },
  {
    "name": "เนื้อหมู",
    "en": "sliced raw pork meat",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 500,
    "days": 4,
    "priceRange": "75-90",
    "avgPrice": 82
  },
  {
    "name": "หมู",
    "en": "sliced raw pork meat",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 500,
    "days": 4,
    "priceRange": "75-90",
    "avgPrice": 82
  },
  {
    "name": "เนื้อวัว",
    "en": "fresh sliced raw beef meat",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 400,
    "days": 3,
    "priceRange": "110-140",
    "avgPrice": 125
  },
  {
    "name": "เนื้อ",
    "en": "fresh sliced raw beef meat",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 400,
    "days": 3,
    "priceRange": "110-140",
    "avgPrice": 125
  },
  {
    "name": "หมูสามชั้น",
    "en": "raw pork belly slices",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 400,
    "days": 4,
    "priceRange": "85-105",
    "avgPrice": 95
  },
  {
    "name": "กระดูกหมู",
    "en": "raw pork ribs soup bones",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 500,
    "days": 5,
    "priceRange": "70-85",
    "avgPrice": 78
  },
  {
    "name": "อกไก่",
    "en": "fresh raw skinless chicken breast",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 400,
    "days": 2,
    "priceRange": "45-58",
    "avgPrice": 52
  },
  {
    "name": "ปีกไก่",
    "en": "fresh raw chicken wings",
    "category": "เนื้อสัตว์",
    "unit": "แพ็ค",
    "defaultQty": 1,
    "days": 4,
    "priceRange": "65-80",
    "avgPrice": 72
  },
  {
    "name": "ปีกกลางไก่",
    "en": "raw chicken mid-joint wings",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 300,
    "days": 4,
    "priceRange": "60-75",
    "avgPrice": 68
  },
  {
    "name": "ปีกบนไก่",
    "en": "raw chicken wingettes drumettes",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 350,
    "days": 5,
    "priceRange": "55-68",
    "avgPrice": 62
  },
  {
    "name": "น่องไก่",
    "en": "fresh raw chicken drumsticks",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 400,
    "days": 4,
    "priceRange": "55-70",
    "avgPrice": 62
  },
  {
    "name": "ปลาสลิด",
    "en": "salted sun-dried gourami fish",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 300,
    "days": 7,
    "priceRange": "80-110",
    "avgPrice": 95
  },
  {
    "name": "เนื้อปลา",
    "en": "fresh white fish fillet",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 300,
    "days": 2,
    "priceRange": "70-95",
    "avgPrice": 80
  },
  {
    "name": "ปลาทู",
    "en": "Thai steamed mackerel fish pla too",
    "category": "เนื้อสัตว์",
    "unit": "ตัว",
    "defaultQty": 2,
    "days": 3,
    "priceRange": "35-55",
    "avgPrice": 45
  },
  {
    "name": "ปลานิล",
    "en": "fresh tilapia fish",
    "category": "เนื้อสัตว์",
    "unit": "ตัว",
    "defaultQty": 1,
    "days": 2,
    "priceRange": "60-85",
    "avgPrice": 72
  },
  {
    "name": "ปลากะพง",
    "en": "fresh sea bass fillet",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 300,
    "days": 2,
    "priceRange": "95-135",
    "avgPrice": 115
  },
  {
    "name": "ปลาแซลมอน",
    "en": "fresh salmon fillet",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 200,
    "days": 2,
    "priceRange": "140-190",
    "avgPrice": 165
  },
  {
    "name": "กุ้งสด",
    "en": "fresh raw white prawns shrimp",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 300,
    "days": 2,
    "priceRange": "85-120",
    "avgPrice": 100
  },
  {
    "name": "กุ้ง",
    "en": "fresh raw white prawns shrimp",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 300,
    "days": 2,
    "priceRange": "85-120",
    "avgPrice": 100
  },
  {
    "name": "ปลาหมึก",
    "en": "fresh squid rings",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 300,
    "days": 2,
    "priceRange": "80-115",
    "avgPrice": 95
  },
  {
    "name": "หมูสันนอก",
    "en": "raw pork loin",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 400,
    "days": 4,
    "priceRange": "75-90",
    "avgPrice": 82
  },
  {
    "name": "สันนอกหมู",
    "en": "raw pork loin",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 400,
    "days": 4,
    "priceRange": "75-90",
    "avgPrice": 82
  },
  {
    "name": "สันคอหมู",
    "en": "raw pork collar neck",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 400,
    "days": 4,
    "priceRange": "85-105",
    "avgPrice": 95
  },
  {
    "name": "หมูสันใน",
    "en": "raw pork tenderloin",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 400,
    "days": 4,
    "priceRange": "80-98",
    "avgPrice": 88
  },
  {
    "name": "สันในหมู",
    "en": "raw pork tenderloin",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 400,
    "days": 4,
    "priceRange": "80-98",
    "avgPrice": 88
  },
  {
    "name": "ไก่สับ",
    "en": "raw minced chicken",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 300,
    "days": 2,
    "priceRange": "40-55",
    "avgPrice": 48
  },
  {
    "name": "ไก่บด",
    "en": "raw minced chicken",
    "category": "เนื้อสัตว์",
    "unit": "กรัม",
    "defaultQty": 300,
    "days": 2,
    "priceRange": "40-55",
    "avgPrice": 48
  },
  {
    "name": "ต้นหอม",
    "en": "fresh green spring onions scallions",
    "category": "ผัก",
    "unit": "กำ",
    "defaultQty": 1,
    "days": 3,
    "priceRange": "12-18",
    "avgPrice": 15
  },
  {
    "name": "โหระพา",
    "en": "fresh Thai sweet basil leaves bundle",
    "category": "ผัก",
    "unit": "กำ",
    "defaultQty": 1,
    "days": 2,
    "priceRange": "10-15",
    "avgPrice": 12
  },
  {
    "name": "ฟักทอง",
    "en": "fresh cut Thai pumpkin wedge orange flesh",
    "category": "ผัก",
    "unit": "ชิ้น",
    "defaultQty": 1,
    "days": 18,
    "priceRange": "25-35",
    "avgPrice": 30
  },
  {
    "name": "แครอท",
    "en": "fresh orange carrot",
    "category": "ผัก",
    "unit": "หัว",
    "defaultQty": 2,
    "days": 20,
    "priceRange": "18-25",
    "avgPrice": 22
  },
  {
    "name": "พริกขี้หนู",
    "en": "fresh red Thai bird eye chilies",
    "category": "ผัก",
    "unit": "กรัม",
    "defaultQty": 100,
    "days": 10,
    "priceRange": "20-28",
    "avgPrice": 24
  },
  {
    "name": "กระเทียม",
    "en": "fresh Thai garlic bulbs",
    "category": "ผัก",
    "unit": "หัว",
    "defaultQty": 3,
    "days": 30,
    "priceRange": "20-30",
    "avgPrice": 25
  },
  {
    "name": "คื่นช่าย",
    "en": "fresh Chinese celery stalks",
    "category": "ผัก",
    "unit": "กำ",
    "defaultQty": 1,
    "days": 4,
    "priceRange": "12-18",
    "avgPrice": 15
  },
  {
    "name": "เห็ด",
    "en": "fresh shimeji oyster mushrooms",
    "category": "ผัก",
    "unit": "แพ็ค",
    "defaultQty": 1,
    "days": 4,
    "priceRange": "25-35",
    "avgPrice": 30
  },
  {
    "name": "ผักกาดขาว",
    "en": "fresh napa cabbage",
    "category": "ผัก",
    "unit": "หัว",
    "defaultQty": 1,
    "days": 7,
    "priceRange": "25-40",
    "avgPrice": 32
  },
  {
    "name": "ผักบุ้ง",
    "en": "fresh morning glory water spinach",
    "category": "ผัก",
    "unit": "กำ",
    "defaultQty": 1,
    "days": 3,
    "priceRange": "10-18",
    "avgPrice": 15
  },
  {
    "name": "ผักคะน้า",
    "en": "fresh Chinese kale",
    "category": "ผัก",
    "unit": "กำ",
    "defaultQty": 1,
    "days": 4,
    "priceRange": "15-25",
    "avgPrice": 20
  },
  {
    "name": "ผักกวางตุ้ง",
    "en": "fresh choy sum",
    "category": "ผัก",
    "unit": "กำ",
    "defaultQty": 1,
    "days": 4,
    "priceRange": "15-22",
    "avgPrice": 18
  },
  {
    "name": "กะหล่ำปลี",
    "en": "fresh green cabbage",
    "category": "ผัก",
    "unit": "หัว",
    "defaultQty": 1,
    "days": 10,
    "priceRange": "25-40",
    "avgPrice": 32
  },
  {
    "name": "มะเขือเปราะ",
    "en": "Thai green eggplant",
    "category": "ผัก",
    "unit": "กรัม",
    "defaultQty": 200,
    "days": 6,
    "priceRange": "15-25",
    "avgPrice": 20
  },
  {
    "name": "มะเขือพวง",
    "en": "pea eggplant",
    "category": "ผัก",
    "unit": "กรัม",
    "defaultQty": 100,
    "days": 5,
    "priceRange": "12-20",
    "avgPrice": 15
  },
  {
    "name": "มะเขือยาว",
    "en": "long green eggplant",
    "category": "ผัก",
    "unit": "ลูก",
    "defaultQty": 2,
    "days": 6,
    "priceRange": "18-28",
    "avgPrice": 22
  },
  {
    "name": "บวบ",
    "en": "angled luffa gourd",
    "category": "ผัก",
    "unit": "ลูก",
    "defaultQty": 2,
    "days": 6,
    "priceRange": "18-28",
    "avgPrice": 22
  },
  {
    "name": "ตำลึง",
    "en": "ivy gourd leaves",
    "category": "ผัก",
    "unit": "กำ",
    "defaultQty": 1,
    "days": 2,
    "priceRange": "10-15",
    "avgPrice": 12
  },
  {
    "name": "ชะอม",
    "en": "climbing wattle cha-om",
    "category": "ผัก",
    "unit": "กำ",
    "defaultQty": 1,
    "days": 3,
    "priceRange": "15-25",
    "avgPrice": 20
  },
  {
    "name": "บรอกโคลี",
    "en": "fresh green broccoli",
    "category": "ผัก",
    "unit": "หัว",
    "defaultQty": 1,
    "days": 6,
    "priceRange": "30-45",
    "avgPrice": 38
  },
  {
    "name": "กะหล่ำดอก",
    "en": "fresh cauliflower",
    "category": "ผัก",
    "unit": "หัว",
    "defaultQty": 1,
    "days": 6,
    "priceRange": "30-45",
    "avgPrice": 38
  },
  {
    "name": "หน่อไม้ฝรั่ง",
    "en": "fresh green asparagus",
    "category": "ผัก",
    "unit": "กำ",
    "defaultQty": 1,
    "days": 4,
    "priceRange": "30-45",
    "avgPrice": 38
  },
  {
    "name": "มันฝรั่ง",
    "en": "fresh potatoes",
    "category": "ผัก",
    "unit": "ลูก",
    "defaultQty": 2,
    "days": 25,
    "priceRange": "20-35",
    "avgPrice": 28
  },
  {
    "name": "หอมหัวใหญ่",
    "en": "yellow onions",
    "category": "ผัก",
    "unit": "หัว",
    "defaultQty": 2,
    "days": 25,
    "priceRange": "18-28",
    "avgPrice": 22
  },
  {
    "name": "หัวหอมใหญ่",
    "en": "yellow onions",
    "category": "ผัก",
    "unit": "หัว",
    "defaultQty": 2,
    "days": 25,
    "priceRange": "18-28",
    "avgPrice": 22
  },
  {
    "name": "แตงกวา",
    "en": "fresh cucumbers",
    "category": "ผัก",
    "unit": "กรัม",
    "defaultQty": 300,
    "days": 5,
    "priceRange": "15-25",
    "avgPrice": 20
  },
  {
    "name": "ถั่วฝักยาว",
    "en": "yardlong beans",
    "category": "ผัก",
    "unit": "กำ",
    "defaultQty": 1,
    "days": 4,
    "priceRange": "12-20",
    "avgPrice": 15
  },
  {
    "name": "ถั่วลันเตา",
    "en": "fresh green snow peas sugar snap peas",
    "category": "ผัก",
    "unit": "กรัม",
    "defaultQty": 150,
    "days": 5,
    "priceRange": "20-35",
    "avgPrice": 25
  },
  {
    "name": "ถั่วงอก",
    "en": "fresh mung bean sprouts",
    "category": "ผัก",
    "unit": "กรัม",
    "defaultQty": 200,
    "days": 3,
    "priceRange": "10-15",
    "avgPrice": 12
  },
  {
    "name": "ถั่วพู",
    "en": "winged beans",
    "category": "ผัก",
    "unit": "แพ็ค",
    "defaultQty": 1,
    "days": 4,
    "priceRange": "15-25",
    "avgPrice": 20
  },
  {
    "name": "ผักชี",
    "en": "fresh coriander cilantro",
    "category": "ผัก",
    "unit": "กำ",
    "defaultQty": 1,
    "days": 3,
    "priceRange": "12-20",
    "avgPrice": 15
  },
  {
    "name": "กะเพรา",
    "en": "Thai holy basil leaves",
    "category": "ผัก",
    "unit": "กำ",
    "defaultQty": 1,
    "days": 2,
    "priceRange": "10-15",
    "avgPrice": 12
  },
  {
    "name": "ข้าวโพดอ่อน",
    "en": "fresh baby corn",
    "category": "ผัก",
    "unit": "กรัม",
    "defaultQty": 100,
    "days": 5,
    "priceRange": "15-25",
    "avgPrice": 20
  },
  {
    "name": "ข้าวโพดหวาน",
    "en": "sweet yellow corn ears",
    "category": "ผัก",
    "unit": "ฝัก",
    "defaultQty": 2,
    "days": 7,
    "priceRange": "20-35",
    "avgPrice": 28
  },
  {
    "name": "ผักกาดหอม",
    "en": "fresh green lettuce",
    "category": "ผัก",
    "unit": "กำ",
    "defaultQty": 1,
    "days": 4,
    "priceRange": "15-25",
    "avgPrice": 20
  },
  {
    "name": "มะนาว",
    "en": "fresh green Thai limes",
    "category": "ผัก",
    "unit": "ลูก",
    "defaultQty": 3,
    "days": 14,
    "priceRange": "12-20",
    "avgPrice": 15
  },
  {
    "name": "ขิง",
    "en": "fresh ginger root",
    "category": "ผัก",
    "unit": "แง่ง",
    "defaultQty": 1,
    "days": 14,
    "priceRange": "12-20",
    "avgPrice": 15
  },
  {
    "name": "ข่า",
    "en": "fresh galangal root",
    "category": "ผัก",
    "unit": "แง่ง",
    "defaultQty": 1,
    "days": 14,
    "priceRange": "10-18",
    "avgPrice": 14
  },
  {
    "name": "ตะไคร้",
    "en": "fresh lemongrass stalks",
    "category": "ผัก",
    "unit": "กำ",
    "defaultQty": 1,
    "days": 10,
    "priceRange": "10-15",
    "avgPrice": 12
  },
  {
    "name": "ใบมะกรูด",
    "en": "fresh kaffir lime leaves",
    "category": "ผัก",
    "unit": "กำ",
    "defaultQty": 1,
    "days": 7,
    "priceRange": "10-15",
    "avgPrice": 12
  },
  {
    "name": "ไข่ไก่",
    "en": "fresh brown chicken eggs",
    "category": "ไข่และผลิตภัณฑ์",
    "unit": "ฟอง",
    "defaultQty": 10,
    "days": 14,
    "priceRange": "48-58",
    "avgPrice": 52
  },
  {
    "name": "ไข่ไก่สด",
    "en": "fresh brown chicken eggs",
    "category": "ไข่และผลิตภัณฑ์",
    "unit": "ฟอง",
    "defaultQty": 10,
    "days": 14,
    "priceRange": "48-58",
    "avgPrice": 52
  },
  {
    "name": "ไข่เป็ด",
    "en": "fresh white duck eggs",
    "category": "ไข่และผลิตภัณฑ์",
    "unit": "ฟอง",
    "defaultQty": 6,
    "days": 14,
    "priceRange": "35-45",
    "avgPrice": 40
  },
  {
    "name": "เต้าหู้ไข่",
    "en": "yellow Japanese egg tofu tube",
    "category": "ไข่และผลิตภัณฑ์",
    "unit": "หลอด",
    "defaultQty": 2,
    "days": 5,
    "priceRange": "12-16",
    "avgPrice": 28
  },
  {
    "name": "นมสด",
    "en": "pasteurized fresh milk bottle",
    "category": "นมและผลิตภัณฑ์",
    "unit": "ขวด",
    "defaultQty": 1,
    "days": 7,
    "priceRange": "45-48",
    "avgPrice": 47
  },
  {
    "name": "นมเมจิ",
    "en": "Meiji pasteurized fresh milk plastic bottle with blue cap",
    "category": "นมและผลิตภัณฑ์",
    "unit": "ขวด",
    "defaultQty": 1,
    "days": 7,
    "priceRange": "45-48",
    "avgPrice": 47
  },
  {
    "name": "เนยเค็ม",
    "en": "yellow salted butter block",
    "category": "นมและผลิตภัณฑ์",
    "unit": "ก้อน",
    "defaultQty": 1,
    "days": 45,
    "priceRange": "85-115",
    "avgPrice": 95
  },
  {
    "name": "ผงปรุงรสหมู",
    "en": "Thai pork seasoning powder packet",
    "category": "เครื่องปรุง",
    "unit": "ซอง",
    "defaultQty": 1,
    "days": 90,
    "priceRange": "18-28",
    "avgPrice": 24
  },
  {
    "name": "น้ำมันพืช",
    "en": "clear bottle of golden vegetable cooking oil",
    "category": "เครื่องปรุง",
    "unit": "ขวด",
    "defaultQty": 1,
    "days": 180,
    "priceRange": "48-58",
    "avgPrice": 52
  },
  {
    "name": "น้ำปลา",
    "en": "traditional Thai fish sauce glass bottle",
    "category": "เครื่องปรุง",
    "unit": "ขวด",
    "defaultQty": 1,
    "days": 180,
    "priceRange": "32-42",
    "avgPrice": 37
  },
  {
    "name": "น้ำมันหอย",
    "en": "Thai oyster sauce glass bottle",
    "category": "เครื่องปรุง",
    "unit": "ขวด",
    "defaultQty": 1,
    "days": 180,
    "priceRange": "35-55",
    "avgPrice": 45
  },
  {
    "name": "กล้วย",
    "en": "ripe yellow Cavendish bananas bunch",
    "category": "ผลไม้",
    "unit": "หวี",
    "defaultQty": 1,
    "days": 6,
    "priceRange": "35-55",
    "avgPrice": 45
  },
  {
    "name": "ส้มสายน้ำผึ้ง",
    "en": "fresh Thai honey tangerine orange",
    "category": "ผลไม้",
    "unit": "กิโลกรัม",
    "defaultQty": 1,
    "days": 12,
    "priceRange": "65-85",
    "avgPrice": 75
  },
  {
    "name": "เกี๊ยวซ่าแช่แข็ง",
    "en": "frozen Japanese gyoza dumplings pack",
    "category": "อาหารแช่แข็ง",
    "unit": "แพ็ค",
    "defaultQty": 1,
    "days": 60,
    "priceRange": "69-89",
    "avgPrice": 79
  },
  {
    "name": "นักเก็ตไก่แช่แข็ง",
    "en": "frozen crispy chicken nuggets pack",
    "category": "อาหารแช่แข็ง",
    "unit": "แพ็ค",
    "defaultQty": 1,
    "days": 60,
    "priceRange": "75-99",
    "avgPrice": 85
  },
  {
    "name": "ผักรวมแช่แข็ง",
    "en": "frozen mixed vegetables corn peas carrots",
    "category": "อาหารแช่แข็ง",
    "unit": "ถุง",
    "defaultQty": 1,
    "days": 90,
    "priceRange": "45-65",
    "avgPrice": 55
  },
  {
    "name": "บะหมี่กึ่งสำเร็จรูป",
    "en": "Thai instant noodles pack",
    "category": "อาหารกึ่งสำเร็จรูป",
    "unit": "ซอง",
    "defaultQty": 5,
    "days": 180,
    "priceRange": "35-45",
    "avgPrice": 38
  },
  {
    "name": "โจ๊กกึ่งสำเร็จรูป",
    "en": "instant rice porridge cup packet",
    "category": "อาหารกึ่งสำเร็จรูป",
    "unit": "ซอง",
    "defaultQty": 3,
    "days": 180,
    "priceRange": "45-55",
    "avgPrice": 48
  },
  {
    "name": "ปลากระป๋อง",
    "en": "canned sardines in tomato sauce",
    "category": "เครื่องกระป๋อง",
    "unit": "กระป๋อง",
    "defaultQty": 2,
    "days": 365,
    "priceRange": "40-50",
    "avgPrice": 44
  },
  {
    "name": "ทูน่ากระป๋อง",
    "en": "canned tuna in mineral water",
    "category": "เครื่องกระป๋อง",
    "unit": "กระป๋อง",
    "defaultQty": 2,
    "days": 365,
    "priceRange": "70-95",
    "avgPrice": 82
  },
  {
    "name": "กุนเชียง",
    "en": "Chinese sweet pork sausage",
    "category": "อาหารแปรรูป",
    "unit": "แพ็ค",
    "defaultQty": 1,
    "days": 60,
    "priceRange": "65-95",
    "avgPrice": 80
  },
  {
    "name": "วุ้นเส้น",
    "en": "glass noodles mung bean vermicelli",
    "category": "อาหารแปรรูป",
    "unit": "แพ็ค",
    "defaultQty": 2,
    "days": 180,
    "priceRange": "25-40",
    "avgPrice": 32
  },
  {
    "name": "ขนมปัง",
    "en": "sliced white bread loaf",
    "category": "ผลิตภัณฑ์จากแป้ง",
    "unit": "แถว",
    "defaultQty": 1,
    "days": 7,
    "priceRange": "35-48",
    "avgPrice": 42
  },
  {
    "name": "ขนมปังโฮลวีต",
    "en": "sliced whole wheat bread",
    "category": "ผลิตภัณฑ์จากแป้ง",
    "unit": "แถว",
    "defaultQty": 1,
    "days": 7,
    "priceRange": "42-58",
    "avgPrice": 50
  },
  {
    "name": "แป้งสาลีอเนกประสงค์",
    "en": "all-purpose wheat flour bag",
    "category": "ผลิตภัณฑ์จากแป้ง",
    "unit": "ถุง",
    "defaultQty": 1,
    "days": 180,
    "priceRange": "32-45",
    "avgPrice": 38
  },
  {
    "name": "แป้งทอดกรอบ",
    "en": "crispy frying flour mix",
    "category": "ผลิตภัณฑ์จากแป้ง",
    "unit": "ถุง",
    "defaultQty": 1,
    "days": 180,
    "priceRange": "25-38",
    "avgPrice": 30
  },
  {
    "name": "แป้งข้าวโพด",
    "en": "cornstarch powder",
    "category": "ผลิตภัณฑ์จากแป้ง",
    "unit": "ถุง",
    "defaultQty": 1,
    "days": 180,
    "priceRange": "22-35",
    "avgPrice": 28
  },
  {
    "name": "แป้งมัน",
    "en": "tapioca starch flour",
    "category": "ผลิตภัณฑ์จากแป้ง",
    "unit": "ถุง",
    "defaultQty": 1,
    "days": 180,
    "priceRange": "22-35",
    "avgPrice": 28
  },
  {
    "name": "เส้นใหญ่",
    "en": "fresh flat wide rice noodles",
    "category": "ผลิตภัณฑ์จากแป้ง",
    "unit": "ถุง",
    "defaultQty": 1,
    "days": 5,
    "priceRange": "20-30",
    "avgPrice": 25
  },
  {
    "name": "เส้นเล็ก",
    "en": "thin rice stick noodles",
    "category": "ผลิตภัณฑ์จากแป้ง",
    "unit": "ถุง",
    "defaultQty": 1,
    "days": 14,
    "priceRange": "22-35",
    "avgPrice": 28
  },
  {
    "name": "เส้นหมี่",
    "en": "rice vermicelli noodles",
    "category": "ผลิตภัณฑ์จากแป้ง",
    "unit": "ห่อ",
    "defaultQty": 1,
    "days": 180,
    "priceRange": "20-32",
    "avgPrice": 25
  },
  {
    "name": "บะหมี่ไข่",
    "en": "fresh yellow egg noodles",
    "category": "ผลิตภัณฑ์จากแป้ง",
    "unit": "แพ็ค",
    "defaultQty": 1,
    "days": 7,
    "priceRange": "28-42",
    "avgPrice": 35
  },
  {
    "name": "สปาเก็ตตี้",
    "en": "dry spaghetti pasta",
    "category": "ผลิตภัณฑ์จากแป้ง",
    "unit": "ถุง",
    "defaultQty": 1,
    "days": 365,
    "priceRange": "45-68",
    "avgPrice": 55
  },
  {
    "name": "มักกะโรนี",
    "en": "elbow macaroni pasta",
    "category": "ผลิตภัณฑ์จากแป้ง",
    "unit": "ถุง",
    "defaultQty": 1,
    "days": 365,
    "priceRange": "38-55",
    "avgPrice": 45
  },
  {
    "name": "แผ่นเกี๊ยว",
    "en": "yellow wonton wrappers",
    "category": "ผลิตภัณฑ์จากแป้ง",
    "unit": "แพ็ค",
    "defaultQty": 1,
    "days": 7,
    "priceRange": "22-32",
    "avgPrice": 26
  }
];
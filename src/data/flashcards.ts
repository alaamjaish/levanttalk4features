export interface Flashcard {
  id: number;
  arabic: string;
  english: string;
  pronunciation: string;
  category: string;
}

export const flashcardDecks = {
  greetings: {
    name: 'Greetings & Basic Phrases',
    cards: [
      {
        id: 1,
        arabic: 'مرحبا',
        english: 'Hello',
        pronunciation: 'marhaba',
        category: 'Greetings'
      },
      {
        id: 2,
        arabic: 'كيف حالك؟',
        english: 'How are you?',
        pronunciation: 'keef halak?',
        category: 'Greetings'
      },
      {
        id: 3,
        arabic: 'شو في؟',
        english: "What's up?",
        pronunciation: 'shu fi?',
        category: 'Greetings'
      }
    ]
  },
  food: {
    name: 'Food & Dining',
    cards: [
      {
        id: 40,
        arabic: 'أكل',
        english: 'Food',
        pronunciation: 'akl',
        category: 'Food'
      },
      {
        id: 41,
        arabic: 'مطعم',
        english: 'Restaurant',
        pronunciation: 'mat3am',
        category: 'Food'
      },
      {
        id: 42,
        arabic: 'منيو',
        english: 'Menu',
        pronunciation: 'menyu',
        category: 'Food'
      },
      {
        id: 43,
        arabic: 'فطور',
        english: 'Breakfast',
        pronunciation: 'fotur',
        category: 'Food'
      },
      {
        id: 44,
        arabic: 'غدا',
        english: 'Lunch',
        pronunciation: 'ghada',
        category: 'Food'
      },
      {
        id: 45,
        arabic: 'عشا',
        english: 'Dinner',
        pronunciation: '3asha',
        category: 'Food'
      },
      {
        id: 46,
        arabic: 'مقبلات',
        english: 'Appetizers',
        pronunciation: 'muqabilaat',
        category: 'Food'
      },
      {
        id: 47,
        arabic: 'صحن رئيسي',
        english: 'Main dish',
        pronunciation: 'sahn raisi',
        category: 'Food'
      },
      {
        id: 48,
        arabic: 'تحلية',
        english: 'Dessert',
        pronunciation: 'tahliye',
        category: 'Food'
      },
      {
        id: 49,
        arabic: 'مشروب',
        english: 'Drink',
        pronunciation: 'mashrub',
        category: 'Food'
      },
      {
        id: 50,
        arabic: 'ميّ',
        english: 'Water',
        pronunciation: 'mayy',
        category: 'Food'
      },
      {
        id: 51,
        arabic: 'شاي',
        english: 'Tea',
        pronunciation: 'shay',
        category: 'Food'
      },
      {
        id: 52,
        arabic: 'قهوة',
        english: 'Coffee',
        pronunciation: 'ahwe',
        category: 'Food'
      },
      {
        id: 53,
        arabic: 'عصير',
        english: 'Juice',
        pronunciation: '3asir',
        category: 'Food'
      },
      {
        id: 54,
        arabic: 'كاسة',
        english: 'Glass/Cup',
        pronunciation: 'kase',
        category: 'Food'
      },
      {
        id: 55,
        arabic: 'خبز',
        english: 'Bread',
        pronunciation: 'khubz',
        category: 'Food'
      },
      {
        id: 56,
        arabic: 'لحمة',
        english: 'Meat',
        pronunciation: 'lahme',
        category: 'Food'
      },
      {
        id: 57,
        arabic: 'دجاج',
        english: 'Chicken',
        pronunciation: 'dajaj',
        category: 'Food'
      },
      {
        id: 58,
        arabic: 'سمك',
        english: 'Fish',
        pronunciation: 'samak',
        category: 'Food'
      },
      {
        id: 59,
        arabic: 'خضرة',
        english: 'Vegetables',
        pronunciation: 'khudra',
        category: 'Food'
      },
      {
        id: 60,
        arabic: 'فاكهة',
        english: 'Fruit',
        pronunciation: 'fakahe',
        category: 'Food'
      },
      {
        id: 61,
        arabic: 'رز',
        english: 'Rice',
        pronunciation: 'ruz',
        category: 'Food'
      },
      {
        id: 62,
        arabic: 'بطاطا',
        english: 'Potato',
        pronunciation: 'batata',
        category: 'Food'
      },
      {
        id: 63,
        arabic: 'بيض',
        english: 'Eggs',
        pronunciation: 'bayd',
        category: 'Food'
      },
      {
        id: 64,
        arabic: 'جبنة',
        english: 'Cheese',
        pronunciation: 'jubne',
        category: 'Food'
      },
      {
        id: 65,
        arabic: 'زيت زيتون',
        english: 'Olive oil',
        pronunciation: 'zeit zeitun',
        category: 'Food'
      },
      {
        id: 66,
        arabic: 'بهارات',
        english: 'Spices',
        pronunciation: 'baharat',
        category: 'Food'
      },
      {
        id: 67,
        arabic: 'ملح',
        english: 'Salt',
        pronunciation: 'melah',
        category: 'Food'
      },
      {
        id: 68,
        arabic: 'فلفل',
        english: 'Pepper',
        pronunciation: 'filfil',
        category: 'Food'
      },
      {
        id: 69,
        arabic: 'حلو كتير!',
        english: 'Very delicious!',
        pronunciation: 'hilu ktir!',
        category: 'Food'
      },
      {
        id: 70,
        arabic: 'الطعم رائع',
        english: 'The taste is amazing',
        pronunciation: 'it-ta3m ra2e3',
        category: 'Food'
      },
      {
        id: 71,
        arabic: 'أنا شبعان/أنا شبعانة',
        english: "I'm full (m/f)",
        pronunciation: 'ana shab3an/ana shab3ane',
        category: 'Food'
      },
      {
        id: 72,
        arabic: 'عندكن أكل نباتي؟',
        english: 'Do you have vegetarian food?',
        pronunciation: '3indakun akl nabati?',
        category: 'Food'
      },
      {
        id: 73,
        arabic: 'ما باكل لحمة',
        english: "I don't eat meat",
        pronunciation: 'ma bakul lahme',
        category: 'Food'
      },
      {
        id: 74,
        arabic: 'بدي صحن...',
        english: 'I want a plate of…',
        pronunciation: 'baddi sahn...',
        category: 'Food'
      },
      {
        id: 75,
        arabic: 'شو بتنصحني؟',
        english: 'What do you recommend?',
        pronunciation: 'shu bitnashni?',
        category: 'Food'
      },
      {
        id: 76,
        arabic: 'الأكل بارد',
        english: 'The food is cold',
        pronunciation: 'il-akl bard',
        category: 'Food'
      },
      {
        id: 77,
        arabic: 'الأكل حامي',
        english: 'The food is hot (spicy)',
        pronunciation: 'il-akl hamy',
        category: 'Food'
      },
      {
        id: 78,
        arabic: 'الحساب لو سمحت',
        english: 'The bill, please',
        pronunciation: 'il-hisab law samaht',
        category: 'Food'
      },
      {
        id: 79,
        arabic: 'قديش الحساب؟',
        english: 'How much is the bill?',
        pronunciation: 'addish il-hisab?',
        category: 'Food'
      },
      {
        id: 80,
        arabic: 'فيك تعطيني ميّة؟',
        english: 'Can you give me water?',
        pronunciation: 'fik ta3tini mayye?',
        category: 'Food'
      },
      {
        id: 81,
        arabic: 'أنا بحب الأكل الحار',
        english: 'I love spicy food',
        pronunciation: 'ana bhibb il-akl il-har',
        category: 'Food'
      },
      {
        id: 82,
        arabic: 'ما بحب الحلو كتير',
        english: "I don't like very sweet food",
        pronunciation: 'ma bhibb il-hilu ktir',
        category: 'Food'
      },
      {
        id: 83,
        arabic: 'بدّك شي تاني؟',
        english: 'Do you want anything else?',
        pronunciation: 'baddak shi tani?',
        category: 'Food'
      },
      {
        id: 84,
        arabic: 'كل شي طيب هون',
        english: "Everything's tasty here",
        pronunciation: 'kil shi tayyib hoon',
        category: 'Food'
      }
    ]
  },
  shopping: {
    name: 'Shopping',
    cards: [
      {
        id: 7,
        arabic: 'بكم هاد؟',
        english: 'How much is this?',
        pronunciation: 'bikam had?',
        category: 'Shopping'
      },
      {
        id: 8,
        arabic: 'غالي كتير',
        english: "That's too expensive",
        pronunciation: 'ghali ktir',
        category: 'Shopping'
      },
      {
        id: 9,
        arabic: 'في خصم؟',
        english: 'Is there a discount?',
        pronunciation: 'fi khasem?',
        category: 'Shopping'
      }
    ]
  },
  travel: {
    name: 'Travel',
    cards: [
      {
        id: 10,
        arabic: 'مطار',
        english: 'Airport',
        pronunciation: 'matar',
        category: 'Travel'
      },
      {
        id: 11,
        arabic: 'طيّارة',
        english: 'Airplane',
        pronunciation: 'tayyara',
        category: 'Travel'
      },
      {
        id: 12,
        arabic: 'جواز سفر',
        english: 'Passport',
        pronunciation: 'jawaz safar',
        category: 'Travel'
      },
      {
        id: 13,
        arabic: 'تذكرة',
        english: 'Ticket',
        pronunciation: 'tazkira',
        category: 'Travel'
      },
      {
        id: 14,
        arabic: 'شنطة سفر',
        english: 'Suitcase',
        pronunciation: 'shanta safar',
        category: 'Travel'
      },
      {
        id: 15,
        arabic: 'فيزا',
        english: 'Visa',
        pronunciation: 'viza',
        category: 'Travel'
      },
      {
        id: 16,
        arabic: 'تأشيرة دخول',
        english: 'Entry visa',
        pronunciation: 'tashira dukhul',
        category: 'Travel'
      },
      {
        id: 17,
        arabic: 'خروج',
        english: 'Exit',
        pronunciation: 'khuruj',
        category: 'Travel'
      },
      {
        id: 18,
        arabic: 'وصول',
        english: 'Arrival',
        pronunciation: 'wusul',
        category: 'Travel'
      },
      {
        id: 19,
        arabic: 'مغادرة',
        english: 'Departure',
        pronunciation: 'mughadara',
        category: 'Travel'
      },
      {
        id: 20,
        arabic: 'بوّابة',
        english: 'Gate',
        pronunciation: 'bawwaba',
        category: 'Travel'
      },
      {
        id: 21,
        arabic: 'رحلة',
        english: 'Trip/Journey',
        pronunciation: 'rihla',
        category: 'Travel'
      },
      {
        id: 22,
        arabic: 'رحلة داخلية',
        english: 'Domestic flight',
        pronunciation: 'rihla dakhiliyye',
        category: 'Travel'
      },
      {
        id: 23,
        arabic: 'رحلة دولية',
        english: 'International flight',
        pronunciation: 'rihla dawliyye',
        category: 'Travel'
      },
      {
        id: 24,
        arabic: 'حجز',
        english: 'Reservation/Booking',
        pronunciation: 'hajz',
        category: 'Travel'
      },
      {
        id: 25,
        arabic: 'مكتب الحجز',
        english: 'Booking office',
        pronunciation: 'maktab il-hajz',
        category: 'Travel'
      },
      {
        id: 26,
        arabic: 'بطاقة الصعود',
        english: 'Boarding pass',
        pronunciation: 'bitaqa aṣ-ṣu3ud',
        category: 'Travel'
      },
      {
        id: 27,
        arabic: 'كم ساعة بتوصل؟',
        english: 'How many hours to arrive?',
        pronunciation: 'kam sa3a btusul?',
        category: 'Travel'
      },
      {
        id: 28,
        arabic: 'وين بوّابة رقم...؟',
        english: 'Where is gate number...?',
        pronunciation: 'wain bawwaba raqam...?',
        category: 'Travel'
      },
      {
        id: 29,
        arabic: 'الطيّارة تأخّرت',
        english: 'The plane is delayed',
        pronunciation: 'aṭ-ṭayyāra taakhkharat',
        category: 'Travel'
      },
      {
        id: 30,
        arabic: 'في أي ساعة الإقلاع؟',
        english: 'What time is the departure?',
        pronunciation: 'fī ayy sāʿa el-iqlaaʿ?',
        category: 'Travel'
      },
      {
        id: 31,
        arabic: 'أنا ضيّعت طيّارتي',
        english: 'I missed my flight',
        pronunciation: 'ana ḍayyaʿt ṭayyārtī',
        category: 'Travel'
      },
      {
        id: 32,
        arabic: 'الشنطة ضاعت',
        english: 'The bag is lost',
        pronunciation: 'ash-shanṭa ḍāʿat',
        category: 'Travel'
      },
      {
        id: 33,
        arabic: 'تفتيش أمني',
        english: 'Security check',
        pronunciation: 'taftish amni',
        category: 'Travel'
      },
      {
        id: 34,
        arabic: 'ممنوع التدخين',
        english: 'No smoking',
        pronunciation: 'mamnu3 at-tadkhin',
        category: 'Travel'
      },
      {
        id: 35,
        arabic: 'وين موقف التاكسي؟',
        english: "Where's the taxi stand?",
        pronunciation: 'wain mawqaf at-taksi?',
        category: 'Travel'
      },
      {
        id: 36,
        arabic: 'فيه حدا يحكي إنجليزي؟',
        english: 'Is there someone who speaks English?',
        pronunciation: 'fī ḥada yiḥkī inglīzī?',
        category: 'Travel'
      },
      {
        id: 37,
        arabic: 'قديش الأجرة للمطار؟',
        english: 'How much is the fare to the airport?',
        pronunciation: 'addish el-ujra lal-matar?',
        category: 'Travel'
      },
      {
        id: 38,
        arabic: 'أنا سائح/أنا سايحة',
        english: "I'm a tourist (m/f)",
        pronunciation: 'ana sayeh/ana sayha',
        category: 'Travel'
      },
      {
        id: 39,
        arabic: 'بدي خريطة',
        english: 'I want a map',
        pronunciation: 'baddi khariṭa',
        category: 'Travel'
      }
    ]
  },
  work: {
    name: 'Work Environment',
    cards: [
      {
        id: 85,
        arabic: 'مكتب',
        english: 'Office',
        pronunciation: 'maktab',
        category: 'Work Environment'
      },
      {
        id: 86,
        arabic: 'مدير',
        english: 'Manager',
        pronunciation: 'mudeer',
        category: 'Work Environment'
      },
      {
        id: 87,
        arabic: 'زميل',
        english: 'Colleague',
        pronunciation: 'zameel',
        category: 'Work Environment'
      },
      {
        id: 88,
        arabic: 'اجتماع',
        english: 'Meeting',
        pronunciation: 'ijtima3',
        category: 'Work Environment'
      },
      {
        id: 89,
        arabic: 'مشروع',
        english: 'Project',
        pronunciation: 'mashroo3',
        category: 'Work Environment'
      },
      {
        id: 90,
        arabic: 'دوام',
        english: 'Work hours',
        pronunciation: 'dawam',
        category: 'Work Environment'
      },
      {
        id: 91,
        arabic: 'عطلة',
        english: 'Vacation/Day off',
        pronunciation: '3otla',
        category: 'Work Environment'
      },
      {
        id: 92,
        arabic: 'راتب',
        english: 'Salary',
        pronunciation: 'ratib',
        category: 'Work Environment'
      },
      {
        id: 93,
        arabic: 'عقد',
        english: 'Contract',
        pronunciation: '3a2d',
        category: 'Work Environment'
      },
      {
        id: 94,
        arabic: 'وظيفة',
        english: 'Job/Position',
        pronunciation: 'wazife',
        category: 'Work Environment'
      },
      {
        id: 95,
        arabic: 'مسؤول',
        english: 'Responsible',
        pronunciation: 'masuool',
        category: 'Work Environment'
      },
      {
        id: 96,
        arabic: 'موظّف',
        english: 'Employee',
        pronunciation: 'mwazzaf',
        category: 'Work Environment'
      },
      {
        id: 97,
        arabic: 'ترقية',
        english: 'Promotion',
        pronunciation: 'tar2iye',
        category: 'Work Environment'
      },
      {
        id: 98,
        arabic: 'مقابلة عمل',
        english: 'Job interview',
        pronunciation: 'mu2abalet 3amal',
        category: 'Work Environment'
      },
      {
        id: 99,
        arabic: 'تدريب',
        english: 'Training',
        pronunciation: 'tadreeb',
        category: 'Work Environment'
      },
      {
        id: 100,
        arabic: 'قسم',
        english: 'Department',
        pronunciation: '2ism',
        category: 'Work Environment'
      },
      {
        id: 101,
        arabic: 'تقرير',
        english: 'Report',
        pronunciation: 'ta2reer',
        category: 'Work Environment'
      },
      {
        id: 102,
        arabic: 'طلب إجازة',
        english: 'Leave request',
        pronunciation: 'talab ijaaza',
        category: 'Work Environment'
      },
      {
        id: 103,
        arabic: 'مهمة',
        english: 'Task',
        pronunciation: 'muhimme',
        category: 'Work Environment'
      },
      {
        id: 104,
        arabic: 'ضغط شغل',
        english: 'Work pressure',
        pronunciation: 'da3t shughl',
        category: 'Work Environment'
      },
      {
        id: 105,
        arabic: 'ساعات إضافية',
        english: 'Overtime',
        pronunciation: 'sa3aat idafiyye',
        category: 'Work Environment'
      },
      {
        id: 106,
        arabic: 'اجازة مرضية',
        english: 'Sick leave',
        pronunciation: 'ijaaza maradiyye',
        category: 'Work Environment'
      },
      {
        id: 107,
        arabic: 'اجتماع طارئ',
        english: 'Emergency meeting',
        pronunciation: 'ijtima3 tare2',
        category: 'Work Environment'
      },
      {
        id: 108,
        arabic: 'حوافز',
        english: 'Incentives',
        pronunciation: '7awafez',
        category: 'Work Environment'
      },
      {
        id: 109,
        arabic: 'إنتاجية',
        english: 'Productivity',
        pronunciation: 'intaajiyye',
        category: 'Work Environment'
      },
      {
        id: 110,
        arabic: 'مهارات',
        english: 'Skills',
        pronunciation: 'maharat',
        category: 'Work Environment'
      },
      {
        id: 111,
        arabic: 'التزام',
        english: 'Commitment',
        pronunciation: 'iltezaam',
        category: 'Work Environment'
      },
      {
        id: 112,
        arabic: 'زحمة شغل',
        english: 'Busy work',
        pronunciation: 'za7met shughl',
        category: 'Work Environment'
      },
      {
        id: 113,
        arabic: 'دوام كامل',
        english: 'Full-time',
        pronunciation: 'dawam kamel',
        category: 'Work Environment'
      },
      {
        id: 114,
        arabic: 'دوام جزئي',
        english: 'Part-time',
        pronunciation: 'dawam juz2i',
        category: 'Work Environment'
      },
      {
        id: 115,
        arabic: 'إستقالة',
        english: 'Resignation',
        pronunciation: 'ista2ale',
        category: 'Work Environment'
      },
      {
        id: 116,
        arabic: 'اجتماع على الزوم',
        english: 'Zoom meeting',
        pronunciation: 'ijtima3 3ala Zoom',
        category: 'Work Environment'
      },
      {
        id: 117,
        arabic: 'ايميل',
        english: 'Email',
        pronunciation: 'email',
        category: 'Work Environment'
      },
      {
        id: 118,
        arabic: 'حاسوب',
        english: 'Computer',
        pronunciation: '7asoub',
        category: 'Work Environment'
      },
      {
        id: 119,
        arabic: 'طابعة',
        english: 'Printer',
        pronunciation: 'tabi3a',
        category: 'Work Environment'
      },
      {
        id: 120,
        arabic: 'ملف',
        english: 'File',
        pronunciation: 'malaf',
        category: 'Work Environment'
      },
      {
        id: 121,
        arabic: 'نسخة',
        english: 'Copy',
        pronunciation: 'nuskha',
        category: 'Work Environment'
      },
      {
        id: 122,
        arabic: 'جدول أعمال',
        english: 'Agenda',
        pronunciation: 'jadwal a3maal',
        category: 'Work Environment'
      },
      {
        id: 123,
        arabic: 'وقت الإستراحة',
        english: 'Break time',
        pronunciation: 'wa2t il-istiraa7a',
        category: 'Work Environment'
      },
      {
        id: 124,
        arabic: 'بريد إلكتروني',
        english: 'Electronic mail',
        pronunciation: 'bareed elektronik',
        category: 'Work Environment'
      },
      {
        id: 125,
        arabic: 'رئيس القسم',
        english: 'Head of department',
        pronunciation: 'ra2ees il-2ism',
        category: 'Work Environment'
      },
      {
        id: 126,
        arabic: 'سجل الحضور',
        english: 'Attendance sheet',
        pronunciation: 'sijil il-7udoor',
        category: 'Work Environment'
      },
      {
        id: 127,
        arabic: 'تأخير',
        english: 'Delay',
        pronunciation: 'ta2kheer',
        category: 'Work Environment'
      },
      {
        id: 128,
        arabic: 'إنتاج الفريق',
        english: 'Team productivity',
        pronunciation: 'intaaj il-faree2',
        category: 'Work Environment'
      },
      {
        id: 129,
        arabic: 'موعد التسليم',
        english: 'Deadline',
        pronunciation: 'maw3ed it-tasleem',
        category: 'Work Environment'
      }
    ]
  },
  market: {
    name: 'Market',
    cards: [
      {
        id: 130,
        arabic: 'سوق',
        english: 'Market',
        pronunciation: 'sou2',
        category: 'Market'
      },
      {
        id: 131,
        arabic: 'محل',
        english: 'Shop/Store',
        pronunciation: 'ma7al',
        category: 'Market'
      },
      {
        id: 132,
        arabic: 'بقالة',
        english: 'Grocery store',
        pronunciation: 'ba2ale',
        category: 'Market'
      },
      {
        id: 133,
        arabic: 'سوبرماركت',
        english: 'Supermarket',
        pronunciation: 'supermarket',
        category: 'Market'
      },
      {
        id: 134,
        arabic: 'سعر',
        english: 'Price',
        pronunciation: 'se3r',
        category: 'Market'
      },
      {
        id: 135,
        arabic: 'كم السعر؟',
        english: 'How much is it?',
        pronunciation: 'kam il-se3r?',
        category: 'Market'
      },
      {
        id: 136,
        arabic: 'قديش حقه؟',
        english: 'How much does it cost?',
        pronunciation: 'addeesh 7a22o?',
        category: 'Market'
      },
      {
        id: 137,
        arabic: 'تخفيضات',
        english: 'Discounts',
        pronunciation: 'ta5feeḍat',
        category: 'Market'
      },
      {
        id: 138,
        arabic: 'عروض خاصة',
        english: 'Special offers',
        pronunciation: '3urooḍ 5aṣṣa',
        category: 'Market'
      },
      {
        id: 139,
        arabic: 'غالي',
        english: 'Expensive',
        pronunciation: 'ghali',
        category: 'Market'
      },
      {
        id: 140,
        arabic: 'رخيص',
        english: 'Cheap',
        pronunciation: 'rekheeṣ',
        category: 'Market'
      },
      {
        id: 141,
        arabic: 'مفاوضة',
        english: 'Bargaining',
        pronunciation: 'mufaawaḍa',
        category: 'Market'
      },
      {
        id: 142,
        arabic: 'بتخفّض السعر؟',
        english: 'Can you lower the price?',
        pronunciation: 'btkhaffeḍ il-se3r?',
        category: 'Market'
      },
      {
        id: 143,
        arabic: 'قسيمة',
        english: 'Coupon',
        pronunciation: '2aseeme',
        category: 'Market'
      },
      {
        id: 144,
        arabic: 'فاتورة',
        english: 'Receipt',
        pronunciation: 'faatoora',
        category: 'Market'
      },
      {
        id: 145,
        arabic: 'كاش',
        english: 'Cash',
        pronunciation: 'cash',
        category: 'Market'
      },
      {
        id: 146,
        arabic: 'بطاقة ائتمان',
        english: 'Credit card',
        pronunciation: 'biṭa2at i2timaan',
        category: 'Market'
      },
      {
        id: 147,
        arabic: 'مصاري',
        english: 'Money',
        pronunciation: 'maṣari',
        category: 'Market'
      },
      {
        id: 148,
        arabic: 'صرف الفلوس',
        english: 'Exchange money',
        pronunciation: 'ṣarf il-floos',
        category: 'Market'
      },
      {
        id: 149,
        arabic: 'كميّة',
        english: 'Quantity',
        pronunciation: 'kamiyye',
        category: 'Market'
      },
      {
        id: 150,
        arabic: 'وزن',
        english: 'Weight',
        pronunciation: 'wazn',
        category: 'Market'
      },
      {
        id: 151,
        arabic: 'كيلو',
        english: 'Kilo',
        pronunciation: 'keelo',
        category: 'Market'
      },
      {
        id: 152,
        arabic: 'نص كيلو',
        english: 'Half a kilo',
        pronunciation: 'nuṣṣ keelo',
        category: 'Market'
      },
      {
        id: 153,
        arabic: 'علبة',
        english: 'Box/Can',
        pronunciation: '3ilbe',
        category: 'Market'
      },
      {
        id: 154,
        arabic: 'كيس',
        english: 'Bag',
        pronunciation: 'kees',
        category: 'Market'
      },
      {
        id: 155,
        arabic: 'دزّينة',
        english: 'Dozen',
        pronunciation: 'dazeene',
        category: 'Market'
      },
      {
        id: 156,
        arabic: 'طازة',
        english: 'Fresh',
        pronunciation: 'ṭaza',
        category: 'Market'
      },
      {
        id: 157,
        arabic: 'قديم',
        english: 'Old (not fresh)',
        pronunciation: '2adeem',
        category: 'Market'
      },
      {
        id: 158,
        arabic: 'جودة عالية',
        english: 'High quality',
        pronunciation: 'jowde 3aalyye',
        category: 'Market'
      },
      {
        id: 159,
        arabic: 'نوعية',
        english: 'Type/Quality',
        pronunciation: 'naw3iyye',
        category: 'Market'
      },
      {
        id: 160,
        arabic: 'منتج',
        english: 'Product',
        pronunciation: 'muntaj',
        category: 'Market'
      },
      {
        id: 161,
        arabic: 'منتجات محلية',
        english: 'Local products',
        pronunciation: 'muntajāt ma7aliyye',
        category: 'Market'
      },
      {
        id: 162,
        arabic: 'أعطيني نص كيلو...',
        english: 'Give me half a kilo of…',
        pronunciation: '3ṭeeni nuṣṣ keelo…',
        category: 'Market'
      },
      {
        id: 163,
        arabic: 'بدي علبة ميّ',
        english: 'I want a bottle of water',
        pronunciation: 'baddī 3ilbet mayy',
        category: 'Market'
      },
      {
        id: 164,
        arabic: 'وين الكاشير؟',
        english: "Where's the cashier?",
        pronunciation: 'wēn il-cashier?',
        category: 'Market'
      },
      {
        id: 165,
        arabic: 'فيه ضمان؟',
        english: 'Is there a warranty?',
        pronunciation: 'fī ḍamaan?',
        category: 'Market'
      },
      {
        id: 166,
        arabic: 'بدي جرب قبل ما اشتري',
        english: 'I want to try before I buy',
        pronunciation: 'baddī jarrib 2abel ma ishtree',
        category: 'Market'
      },
      {
        id: 167,
        arabic: 'فيه توصيل للبيت؟',
        english: 'Is there home delivery?',
        pronunciation: 'fī tawṣeel lal-bēt?',
        category: 'Market'
      },
      {
        id: 168,
        arabic: 'فتح المحل؟',
        english: 'Is the shop open?',
        pronunciation: 'fta7 il-ma7al?',
        category: 'Market'
      },
      {
        id: 169,
        arabic: 'سكر المحل؟',
        english: 'Is the shop closed?',
        pronunciation: 'sakkar il-ma7al?',
        category: 'Market'
      },
      {
        id: 170,
        arabic: 'ساعة كم بيفتح؟',
        english: 'What time does it open?',
        pronunciation: 'sa3a kam byifta7?',
        category: 'Market'
      },
      {
        id: 171,
        arabic: 'ساعة كم بيسكر؟',
        english: 'What time does it close?',
        pronunciation: 'sa3a kam byisakkir?',
        category: 'Market'
      },
      {
        id: 172,
        arabic: 'تسوق سعيد!',
        english: 'Happy shopping!',
        pronunciation: 'tasawwoq sa3eed!',
        category: 'Market'
      },
      {
        id: 173,
        arabic: 'وين قسم الملابس؟',
        english: "Where's the clothing section?",
        pronunciation: 'wēn 2ism il-malābes?',
        category: 'Market'
      },
      {
        id: 174,
        arabic: 'بدّي قياس أكبر/أصغر',
        english: 'I need a bigger/smaller size',
        pronunciation: 'baddī qiyās akbar/aṣghar',
        category: 'Market'
      }
    ]
  },
  hospital: {
    name: 'Hospital',
    cards: [
      {
        id: 175,
        arabic: 'مستشفى',
        english: 'Hospital',
        pronunciation: 'mustashfa',
        category: 'Hospital'
      },
      {
        id: 176,
        arabic: 'عيادة',
        english: 'Clinic',
        pronunciation: '3iyaade',
        category: 'Hospital'
      },
      {
        id: 177,
        arabic: 'صيدلية',
        english: 'Pharmacy',
        pronunciation: 'ṣaydaliyye',
        category: 'Hospital'
      },
      {
        id: 178,
        arabic: 'دكتور/دكتورة',
        english: 'Doctor (m/f)',
        pronunciation: 'doktoor/doktoora',
        category: 'Hospital'
      },
      {
        id: 179,
        arabic: 'مريض/مريضة',
        english: 'Patient (m/f)',
        pronunciation: 'mareeḍ/mareeḍa',
        category: 'Hospital'
      },
      {
        id: 180,
        arabic: 'ممرضة',
        english: 'Nurse',
        pronunciation: 'mumarriḍa',
        category: 'Hospital'
      },
      {
        id: 181,
        arabic: 'موعد',
        english: 'Appointment',
        pronunciation: 'maw3id',
        category: 'Hospital'
      },
      {
        id: 182,
        arabic: 'وصفة طبية',
        english: 'Prescription',
        pronunciation: 'waṣfe ṭibbiye',
        category: 'Hospital'
      },
      {
        id: 183,
        arabic: 'ألم',
        english: 'Pain',
        pronunciation: 'alam',
        category: 'Hospital'
      },
      {
        id: 184,
        arabic: 'وجع',
        english: 'Ache',
        pronunciation: 'waja3',
        category: 'Hospital'
      },
      {
        id: 185,
        arabic: 'صداع',
        english: 'Headache',
        pronunciation: 'ṣudaa3',
        category: 'Hospital'
      },
      {
        id: 186,
        arabic: 'دوخة',
        english: 'Dizziness',
        pronunciation: 'daw5a',
        category: 'Hospital'
      },
      {
        id: 187,
        arabic: 'حرارة',
        english: 'Fever',
        pronunciation: '7araara',
        category: 'Hospital'
      },
      {
        id: 188,
        arabic: 'رشح',
        english: 'Cold (illness)',
        pronunciation: 'rasha7',
        category: 'Hospital'
      },
      {
        id: 189,
        arabic: 'سعال',
        english: 'Cough',
        pronunciation: 'su3aal',
        category: 'Hospital'
      },
      {
        id: 190,
        arabic: 'ضيق نفس',
        english: 'Shortness of breath',
        pronunciation: 'ḍee2 nafas',
        category: 'Hospital'
      },
      {
        id: 191,
        arabic: 'غثيان',
        english: 'Nausea',
        pronunciation: 'gathyaan',
        category: 'Hospital'
      },
      {
        id: 192,
        arabic: 'استفراغ',
        english: 'Vomiting',
        pronunciation: 'istifraagh',
        category: 'Hospital'
      },
      {
        id: 193,
        arabic: 'ضغط دم',
        english: 'Blood pressure',
        pronunciation: 'ḍaġṭ damm',
        category: 'Hospital'
      },
      {
        id: 194,
        arabic: 'تحليل دم',
        english: 'Blood test',
        pronunciation: 'ta7leel damm',
        category: 'Hospital'
      },
      {
        id: 195,
        arabic: 'أشعة',
        english: 'X-ray',
        pronunciation: 'ash3a',
        category: 'Hospital'
      },
      {
        id: 196,
        arabic: 'طوارئ',
        english: 'Emergency',
        pronunciation: 'ṭawaari2',
        category: 'Hospital'
      },
      {
        id: 197,
        arabic: 'إسعاف',
        english: 'Ambulance',
        pronunciation: 'is3aaf',
        category: 'Hospital'
      },
      {
        id: 198,
        arabic: 'غرفة العمليات',
        english: 'Operating room',
        pronunciation: 'ghurfet il-3amaliyyaat',
        category: 'Hospital'
      },
      {
        id: 199,
        arabic: 'غرفة الإنعاش',
        english: 'ICU/Recovery room',
        pronunciation: 'ghurfet il-in3aash',
        category: 'Hospital'
      },
      {
        id: 200,
        arabic: 'عناية مركزة',
        english: 'Intensive care',
        pronunciation: '3ināye murakkaza',
        category: 'Hospital'
      },
      {
        id: 201,
        arabic: 'تخدير',
        english: 'Anesthesia',
        pronunciation: 'ta5deer',
        category: 'Hospital'
      },
      {
        id: 202,
        arabic: 'عملية جراحية',
        english: 'Surgery',
        pronunciation: '3amaliyye jaraa7iyye',
        category: 'Hospital'
      },
      {
        id: 203,
        arabic: 'جبيرة',
        english: 'Cast',
        pronunciation: 'jabeera',
        category: 'Hospital'
      },
      {
        id: 204,
        arabic: 'غرز',
        english: 'Stitches',
        pronunciation: 'ghuraz',
        category: 'Hospital'
      },
      {
        id: 205,
        arabic: 'أدوية',
        english: 'Medicines',
        pronunciation: 'adwiyye',
        category: 'Hospital'
      },
      {
        id: 206,
        arabic: 'مضاد حيوي',
        english: 'Antibiotic',
        pronunciation: 'muḍaadd 7ayawi',
        category: 'Hospital'
      },
      {
        id: 207,
        arabic: 'مسكن ألم',
        english: 'Painkiller',
        pronunciation: 'musakkin alam',
        category: 'Hospital'
      },
      {
        id: 208,
        arabic: 'حساسية',
        english: 'Allergy',
        pronunciation: '7asaasiyye',
        category: 'Hospital'
      },
      {
        id: 209,
        arabic: 'ضغط مرتفع',
        english: 'High blood pressure',
        pronunciation: 'ḍaġṭ murtafi3',
        category: 'Hospital'
      },
      {
        id: 210,
        arabic: 'سكري',
        english: 'Diabetes',
        pronunciation: 'sukkari',
        category: 'Hospital'
      },
      {
        id: 211,
        arabic: 'نوبة قلبية',
        english: 'Heart attack',
        pronunciation: 'nawbe 2albiye',
        category: 'Hospital'
      },
      {
        id: 212,
        arabic: 'جلطة',
        english: 'Stroke/Clot',
        pronunciation: 'jalṭa',
        category: 'Hospital'
      },
      {
        id: 213,
        arabic: 'نقل دم',
        english: 'Blood transfusion',
        pronunciation: 'na2l damm',
        category: 'Hospital'
      },
      {
        id: 214,
        arabic: 'عكاز',
        english: 'Crutch',
        pronunciation: '3ukkaaz',
        category: 'Hospital'
      },
      {
        id: 215,
        arabic: 'كرسي متحرك',
        english: 'Wheelchair',
        pronunciation: 'kursi muta7arrik',
        category: 'Hospital'
      },
      {
        id: 216,
        arabic: 'كم تكلفة العلاج؟',
        english: 'How much is the treatment?',
        pronunciation: 'kam taklefet il-3ilaaj?',
        category: 'Hospital'
      },
      {
        id: 217,
        arabic: 'أنا عندي تأمين صحي',
        english: 'I have health insurance',
        pronunciation: 'ana 3andi ta2meen ṣi77i',
        category: 'Hospital'
      },
      {
        id: 218,
        arabic: 'بدي موعد مع دكتور',
        english: 'I need an appointment with a doctor',
        pronunciation: 'baddī maw3id ma3 doktoor',
        category: 'Hospital'
      },
      {
        id: 219,
        arabic: 'فيك توصّفلي دوا؟',
        english: 'Can you prescribe me medicine?',
        pronunciation: 'fīk tawaṣṣeflī dawa?',
        category: 'Hospital'
      }
    ]
  },
  dailyLife: {
    name: 'Daily Life',
    cards: [
      {
        id: 220,
        arabic: 'صباح الخير',
        english: 'Good morning',
        pronunciation: 'ṣaba7 il-kheer',
        category: 'Daily Life'
      },
      {
        id: 221,
        arabic: 'مساء الخير',
        english: 'Good evening',
        pronunciation: 'masa2 il-kheer',
        category: 'Daily Life'
      },
      {
        id: 222,
        arabic: 'تصبح على خير',
        english: 'Good night',
        pronunciation: 'tiṣba7 3ala kheer',
        category: 'Daily Life'
      },
      {
        id: 223,
        arabic: 'كيفك؟',
        english: 'How are you?',
        pronunciation: 'keefak? (m) / keefik? (f)',
        category: 'Daily Life'
      },
      {
        id: 224,
        arabic: 'منيح/منيحة',
        english: 'I’m good',
        pronunciation: 'mnee7/mnee7a',
        category: 'Daily Life'
      },
      {
        id: 225,
        arabic: 'شو الأخبار؟',
        english: 'What’s up?',
        pronunciation: 'shoo il-akhbaar?',
        category: 'Daily Life'
      },
      {
        id: 226,
        arabic: 'الحمدلله',
        english: 'Thank God',
        pronunciation: 'il-7amdillah',
        category: 'Daily Life'
      },
      {
        id: 227,
        arabic: 'مع السلامة',
        english: 'Goodbye',
        pronunciation: 'ma3 il-salaame',
        category: 'Daily Life'
      },
      {
        id: 228,
        arabic: 'بشوفك بعدين',
        english: 'See you later',
        pronunciation: 'bshoofak ba3deen',
        category: 'Daily Life'
      },
      {
        id: 229,
        arabic: 'لو سمحت',
        english: 'Please',
        pronunciation: 'law sama7t',
        category: 'Daily Life'
      },
      {
        id: 230,
        arabic: 'شكراً',
        english: 'Thank you',
        pronunciation: 'shukran',
        category: 'Daily Life'
      },
      {
        id: 231,
        arabic: 'عفواً',
        english: 'You’re welcome / Excuse me',
        pronunciation: '3afwan',
        category: 'Daily Life'
      },
      {
        id: 232,
        arabic: 'آسف/آسفة',
        english: 'Sorry',
        pronunciation: 'aasif/aasfe',
        category: 'Daily Life'
      },
      {
        id: 233,
        arabic: 'ماشي الحال؟',
        english: 'Is everything okay?',
        pronunciation: 'maashi il-7aal?',
        category: 'Daily Life'
      },
      {
        id: 234,
        arabic: 'ماشي',
        english: 'Okay/Alright',
        pronunciation: 'maashi',
        category: 'Daily Life'
      },
      {
        id: 235,
        arabic: 'شو رأيك؟',
        english: 'What do you think?',
        pronunciation: 'shoo ra2yak?',
        category: 'Daily Life'
      },
      {
        id: 236,
        arabic: 'أنا تعبان/تعبانة',
        english: 'I’m tired',
        pronunciation: 'ana ta3baan/ta3baane',
        category: 'Daily Life'
      },
      {
        id: 237,
        arabic: 'أنا مشغول/مشغولة',
        english: 'I’m busy',
        pronunciation: 'ana mashghool/mashghoole',
        category: 'Daily Life'
      },
      {
        id: 238,
        arabic: 'أنا فاضي/فاضية',
        english: 'I’m free',
        pronunciation: 'ana faaḍi/faaḍye',
        category: 'Daily Life'
      },
      {
        id: 239,
        arabic: 'شو عم تعمل؟',
        english: 'What are you doing?',
        pronunciation: 'shoo 3am ta3mil?',
        category: 'Daily Life'
      },
      {
        id: 240,
        arabic: 'ما بفهم',
        english: 'I don’t understand',
        pronunciation: 'ma bafham',
        category: 'Daily Life'
      },
      {
        id: 241,
        arabic: 'فهمت؟',
        english: 'Did you understand?',
        pronunciation: 'fhimt?',
        category: 'Daily Life'
      },
      {
        id: 242,
        arabic: 'فهمت عليك',
        english: 'I got you / I understand',
        pronunciation: 'fhimt 3alayk',
        category: 'Daily Life'
      },
      {
        id: 243,
        arabic: 'شو يعني؟',
        english: 'What does it mean?',
        pronunciation: 'shoo ya3ni?',
        category: 'Daily Life'
      },
      {
        id: 244,
        arabic: 'أنا جوعان/جوعانة',
        english: 'I’m hungry',
        pronunciation: 'ana joo3aan/joo3aane',
        category: 'Daily Life'
      },
      {
        id: 245,
        arabic: 'أنا عطشان/عطشانة',
        english: 'I’m thirsty',
        pronunciation: 'ana 3aṭshaan/3aṭshaane',
        category: 'Daily Life'
      },
      {
        id: 246,
        arabic: 'بردان/بردانة',
        english: 'I’m cold',
        pronunciation: 'bardan/bardane',
        category: 'Daily Life'
      },
      {
        id: 247,
        arabic: 'شو في جديد؟',
        english: 'What’s new?',
        pronunciation: 'shoo fi jdeed?',
        category: 'Daily Life'
      },
      {
        id: 248,
        arabic: 'عن جد؟',
        english: 'Really?',
        pronunciation: '3an jad?',
        category: 'Daily Life'
      },
      {
        id: 249,
        arabic: 'مزبوط',
        english: 'Exactly / That’s right',
        pronunciation: 'maẓbooṭ',
        category: 'Daily Life'
      },
      {
        id: 250,
        arabic: 'ولا يهمك',
        english: 'Don’t worry',
        pronunciation: 'wala yhemmak',
        category: 'Daily Life'
      },
      {
        id: 251,
        arabic: 'خد راحتك',
        english: 'Take your time',
        pronunciation: 'khood ra7tak',
        category: 'Daily Life'
      },
      {
        id: 252,
        arabic: 'شو رأيك نطلع؟',
        english: 'What do you think about going out?',
        pronunciation: 'shoo ra2yak neṭla3?',
        category: 'Daily Life'
      },
      {
        id: 253,
        arabic: 'وينك؟',
        english: 'Where are you?',
        pronunciation: 'wēnak?',
        category: 'Daily Life'
      },
      {
        id: 254,
        arabic: 'أنا بالبيت',
        english: 'I’m at home',
        pronunciation: 'ana bil-bēt',
        category: 'Daily Life'
      },
      {
        id: 255,
        arabic: 'بدي روح عالسوق',
        english: 'I want to go to the market',
        pronunciation: 'baddī roo7 3al-sou2',
        category: 'Daily Life'
      },
      {
        id: 256,
        arabic: 'استنى شوي',
        english: 'Wait a little',
        pronunciation: 'istanna shway',
        category: 'Daily Life'
      },
      {
        id: 257,
        arabic: 'خمس دقايق وراجع',
        english: "Five minutes and I’m back",
        pronunciation: '5ams da2aye2 w raje3',
        category: 'Daily Life'
      },
      {
        id: 258,
        arabic: 'أنا تعبان وراح ارتاح',
        english: "I’m tired and I’m going to rest",
        pronunciation: 'ana ta3ban w ra7 irtaa7',
        category: 'Daily Life'
      },
      {
        id: 259,
        arabic: 'حلو اليوم؟',
        english: 'Is today nice? (Weather or mood)',
        pronunciation: '7ilw il-yoom?',
        category: 'Daily Life'
      },
      {
        id: 260,
        arabic: 'وين المفتاح؟',
        english: "Where’s the key?",
        pronunciation: 'wēn il-miftaa7?',
        category: 'Daily Life'
      },
      {
        id: 261,
        arabic: 'سكّر الباب',
        english: 'Close the door',
        pronunciation: 'sakkir il-baab',
        category: 'Daily Life'
      },
      {
        id: 262,
        arabic: 'شغّل الضوء',
        english: 'Turn on the light',
        pronunciation: 'shaggil il-ḍaw',
        category: 'Daily Life'
      },
      {
        id: 263,
        arabic: 'طفّي التلفزيون',
        english: 'Turn off the TV',
        pronunciation: 'ṭaffi il-telefzyoon',
        category: 'Daily Life'
      },
      {
        id: 264,
        arabic: 'يلا نروح؟',
        english: 'Shall we go?',
        pronunciation: 'yalla nroo7?',
        category: 'Daily Life'
      }
    ]
  },
  actions: {
    name: 'Actions',
    cards: [
      {
        id: 265,
        arabic: 'أنا بحكي',
        english: 'I speak',
        pronunciation: 'ana ba7ki',
        category: 'Actions'
      },
      {
        id: 266,
        arabic: 'أنا بكتب',
        english: 'I write',
        pronunciation: 'ana baktob',
        category: 'Actions'
      },
      {
        id: 267,
        arabic: 'أنا بقرأ',
        english: 'I read',
        pronunciation: 'ana ba2ra',
        category: 'Actions'
      },
      {
        id: 268,
        arabic: 'أنا بفهم',
        english: 'I understand',
        pronunciation: 'ana bafham',
        category: 'Actions'
      },
      {
        id: 269,
        arabic: 'أنا بسمع',
        english: 'I listen/hear',
        pronunciation: 'ana basma3',
        category: 'Actions'
      },
      {
        id: 270,
        arabic: 'أنا بشوف',
        english: 'I see',
        pronunciation: 'ana bashoof',
        category: 'Actions'
      },
      {
        id: 271,
        arabic: 'أنا بروح',
        english: 'I go',
        pronunciation: 'ana broo7',
        category: 'Actions'
      },
      {
        id: 272,
        arabic: 'أنا بجي',
        english: 'I come',
        pronunciation: 'ana bji',
        category: 'Actions'
      },
      {
        id: 273,
        arabic: 'أنا بأكل',
        english: 'I eat',
        pronunciation: 'ana bākol',
        category: 'Actions'
      },
      {
        id: 274,
        arabic: 'أنا بشرب',
        english: 'I drink',
        pronunciation: 'ana bashrab',
        category: 'Actions'
      },
      {
        id: 275,
        arabic: 'أنا بنام',
        english: 'I sleep',
        pronunciation: 'ana bnaam',
        category: 'Actions'
      },
      {
        id: 276,
        arabic: 'أنا بصحى',
        english: 'I wake up',
        pronunciation: 'ana bṣi7a',
        category: 'Actions'
      },
      {
        id: 277,
        arabic: 'أنا بشتغل',
        english: 'I work',
        pronunciation: 'ana bashtighil',
        category: 'Actions'
      },
      {
        id: 278,
        arabic: 'أنا بلعب',
        english: 'I play',
        pronunciation: 'ana bala3ab',
        category: 'Actions'
      },
      {
        id: 279,
        arabic: 'أنا بدرس',
        english: 'I study',
        pronunciation: 'ana badros',
        category: 'Actions'
      },
      {
        id: 280,
        arabic: 'أنا بفكر',
        english: 'I think',
        pronunciation: 'ana bafakker',
        category: 'Actions'
      },
      {
        id: 281,
        arabic: 'أنا بحب',
        english: 'I love/like',
        pronunciation: 'ana ba7ibb',
        category: 'Actions'
      },
      {
        id: 282,
        arabic: 'أنا بكره',
        english: 'I hate',
        pronunciation: 'ana bakrah',
        category: 'Actions'
      },
      {
        id: 283,
        arabic: 'أنا بضحك',
        english: 'I laugh',
        pronunciation: 'ana baḍ7ak',
        category: 'Actions'
      },
      {
        id: 284,
        arabic: 'أنا ببكي',
        english: 'I cry',
        pronunciation: 'ana babki',
        category: 'Actions'
      },
      {
        id: 285,
        arabic: 'أنا بسافر',
        english: 'I travel',
        pronunciation: 'ana basafer',
        category: 'Actions'
      },
      {
        id: 286,
        arabic: 'أنا بلبس',
        english: 'I wear',
        pronunciation: 'ana balbas',
        category: 'Actions'
      },
      {
        id: 287,
        arabic: 'أنا بغسل',
        english: 'I wash',
        pronunciation: 'ana baghsil',
        category: 'Actions'
      },
      {
        id: 288,
        arabic: 'أنا بطبخ',
        english: 'I cook',
        pronunciation: 'ana baṭbo5',
        category: 'Actions'
      },
      {
        id: 289,
        arabic: 'أنا بفتح',
        english: 'I open',
        pronunciation: 'ana bafta7',
        category: 'Actions'
      },
      {
        id: 290,
        arabic: 'أنا بسكّر',
        english: 'I close',
        pronunciation: 'ana basker',
        category: 'Actions'
      },
      {
        id: 291,
        arabic: 'أنا بشتري',
        english: 'I buy',
        pronunciation: 'ana bashtari',
        category: 'Actions'
      },
      {
        id: 292,
        arabic: 'أنا ببيع',
        english: 'I sell',
        pronunciation: 'ana babe3',
        category: 'Actions'
      },
      {
        id: 293,
        arabic: 'أنا بدفع',
        english: 'I pay',
        pronunciation: 'ana badfa3',
        category: 'Actions'
      },
      {
        id: 294,
        arabic: 'أنا بستنى',
        english: 'I wait',
        pronunciation: 'ana bastanna',
        category: 'Actions'
      },
      {
        id: 295,
        arabic: 'أنا بحس',
        english: 'I feel',
        pronunciation: 'ana ba7ess',
        category: 'Actions'
      },
      {
        id: 296,
        arabic: 'أنا بحتاج',
        english: 'I need',
        pronunciation: 'ana ba7taaj',
        category: 'Actions'
      },
      {
        id: 297,
        arabic: 'أنا بعرف',
        english: 'I know',
        pronunciation: 'ana ba3ref',
        category: 'Actions'
      },
      {
        id: 298,
        arabic: 'أنا بفوت',
        english: 'I enter',
        pronunciation: 'ana bfoot',
        category: 'Actions'
      },
      {
        id: 299,
        arabic: 'أنا بطلع',
        english: 'I go out',
        pronunciation: 'ana baṭla3',
        category: 'Actions'
      },
      {
        id: 300,
        arabic: 'أنا برجع',
        english: 'I return',
        pronunciation: 'ana birja3',
        category: 'Actions'
      },
      {
        id: 301,
        arabic: 'أنا بشتاق',
        english: 'I miss',
        pronunciation: 'ana bshte2',
        category: 'Actions'
      },
      {
        id: 302,
        arabic: 'أنا بساعد',
        english: 'I help',
        pronunciation: 'ana basa3ed',
        category: 'Actions'
      },
      {
        id: 303,
        arabic: 'أنا بجرب',
        english: 'I try',
        pronunciation: 'ana bajarrib',
        category: 'Actions'
      },
      {
        id: 304,
        arabic: 'أنا بقدر',
        english: 'I can',
        pronunciation: 'ana ba2dar',
        category: 'Actions'
      },
      {
        id: 305,
        arabic: 'أنا بختار',
        english: 'I choose',
        pronunciation: 'ana bakhtar',
        category: 'Actions'
      },
      {
        id: 306,
        arabic: 'أنا بغيّر',
        english: 'I change',
        pronunciation: 'ana bghayyir',
        category: 'Actions'
      },
      {
        id: 307,
        arabic: 'أنا بتذكّر',
        english: 'I remember',
        pronunciation: 'ana btzakkar',
        category: 'Actions'
      },
      {
        id: 308,
        arabic: 'أنا بنسى',
        english: 'I forget',
        pronunciation: 'ana binsa',
        category: 'Actions'
      },
      {
        id: 309,
        arabic: 'أنا بحلم',
        english: 'I dream',
        pronunciation: 'ana ba7lam',
        category: 'Actions'
      }
    ]
  },
  famousAdjectives: {
    name: 'Famous Adjectives',
    cards: [
      {
        id: 310,
        arabic: 'كبير/كبيرة',
        english: 'Big',
        pronunciation: 'kbeer/kbeere',
        category: 'Famous Adjectives'
      },
      {
        id: 311,
        arabic: 'صغير/صغيرة',
        english: 'Small',
        pronunciation: 'ṣgheer/ṣgheere',
        category: 'Famous Adjectives'
      },
      {
        id: 312,
        arabic: 'طويل/طويلة',
        english: 'Tall/Long',
        pronunciation: 'ṭaweel/ṭaweele',
        category: 'Famous Adjectives'
      },
      {
        id: 313,
        arabic: 'قصير/قصيرة',
        english: 'Short',
        pronunciation: 'ʾaṣeer/ʾaṣeera',
        category: 'Famous Adjectives'
      },
      {
        id: 314,
        arabic: 'حلو/حلوة',
        english: 'Beautiful/Sweet',
        pronunciation: '7ilu/7ilwe',
        category: 'Famous Adjectives'
      },
      {
        id: 315,
        arabic: 'بشع/بشعة',
        english: 'Ugly',
        pronunciation: 'bishe3/bishe3a',
        category: 'Famous Adjectives'
      },
      {
        id: 316,
        arabic: 'سريع/سريعة',
        english: 'Fast',
        pronunciation: 'saree3/saree3a',
        category: 'Famous Adjectives'
      },
      {
        id: 317,
        arabic: 'بطيء/بطيئة',
        english: 'Slow',
        pronunciation: 'baṭee2/baṭee2a',
        category: 'Famous Adjectives'
      },
      {
        id: 318,
        arabic: 'قوي/قوية',
        english: 'Strong',
        pronunciation: '2awi/2awiyye',
        category: 'Famous Adjectives'
      },
      {
        id: 319,
        arabic: 'ضعيف/ضعيفة',
        english: 'Weak',
        pronunciation: 'ḍa3eef/ḍa3eefe',
        category: 'Famous Adjectives'
      },
      {
        id: 320,
        arabic: 'ذكي/ذكية',
        english: 'Smart',
        pronunciation: 'zaki/zakiye',
        category: 'Famous Adjectives'
      },
      {
        id: 321,
        arabic: 'غبي/غبية',
        english: 'Stupid',
        pronunciation: 'ghabi/ghabiye',
        category: 'Famous Adjectives'
      },
      {
        id: 322,
        arabic: 'نظيف/نظيفة',
        english: 'Clean',
        pronunciation: 'naḍeef/naḍeefe',
        category: 'Famous Adjectives'
      },
      {
        id: 323,
        arabic: 'وسخ/وسخة',
        english: 'Dirty',
        pronunciation: 'wisaḵ/wisḵa',
        category: 'Famous Adjectives'
      },
      {
        id: 324,
        arabic: 'قريب/قريبة',
        english: 'Near',
        pronunciation: '2areeb/2areebe',
        category: 'Famous Adjectives'
      },
      {
        id: 325,
        arabic: 'بعيد/بعيدة',
        english: 'Far',
        pronunciation: 'b3eed/b3eede',
        category: 'Famous Adjectives'
      },
      {
        id: 326,
        arabic: 'جديد/جديدة',
        english: 'New',
        pronunciation: 'jdeed/jdeede',
        category: 'Famous Adjectives'
      },
      {
        id: 327,
        arabic: 'قديم/قديمة',
        english: 'Old',
        pronunciation: '2adeem/2adeeme',
        category: 'Famous Adjectives'
      },
      {
        id: 328,
        arabic: 'سعيد/سعيدة',
        english: 'Happy',
        pronunciation: 'sa3eed/sa3eede',
        category: 'Famous Adjectives'
      },
      {
        id: 329,
        arabic: 'زعلان/زعلانة',
        english: 'Upset',
        pronunciation: 'za3laan/za3laane',
        category: 'Famous Adjectives'
      },
      {
        id: 330,
        arabic: 'تعبان/تعبانة',
        english: 'Tired',
        pronunciation: 'ta3baan/ta3baane',
        category: 'Famous Adjectives'
      },
      {
        id: 331,
        arabic: 'غالي/غالية',
        english: 'Expensive',
        pronunciation: 'ghali/ghaliyye',
        category: 'Famous Adjectives'
      },
      {
        id: 332,
        arabic: 'رخيص/رخيصة',
        english: 'Cheap',
        pronunciation: 'rekheeṣ/rekheeṣa',
        category: 'Famous Adjectives'
      },
      {
        id: 333,
        arabic: 'مهم/مهمة',
        english: 'Important',
        pronunciation: 'muhem/muheme',
        category: 'Famous Adjectives'
      },
      {
        id: 334,
        arabic: 'مشهور/مشهورة',
        english: 'Famous',
        pronunciation: 'mashhoor/mashhoora',
        category: 'Famous Adjectives'
      },
      {
        id: 335,
        arabic: 'سهل/سهلة',
        english: 'Easy',
        pronunciation: 'sahel/sahle',
        category: 'Famous Adjectives'
      },
      {
        id: 336,
        arabic: 'صعب/صعبة',
        english: 'Hard/Difficult',
        pronunciation: 'ṣa3eb/ṣa3be',
        category: 'Famous Adjectives'
      },
      {
        id: 337,
        arabic: 'قريب/قريبة',
        english: 'Close',
        pronunciation: '2areeb/2areebe',
        category: 'Famous Adjectives'
      },
      {
        id: 338,
        arabic: 'مشغول/مشغولة',
        english: 'Busy',
        pronunciation: 'mashghool/mashghoole',
        category: 'Famous Adjectives'
      },
      {
        id: 339,
        arabic: 'مفتوح/مفتوحة',
        english: 'Open',
        pronunciation: 'maftoo7/maftoo7a',
        category: 'Famous Adjectives'
      },
      {
        id: 340,
        arabic: 'مسكّر/مسكّرة',
        english: 'Closed',
        pronunciation: 'msakkar/msakkara',
        category: 'Famous Adjectives'
      },
      {
        id: 341,
        arabic: 'هادئ/هادية',
        english: 'Calm',
        pronunciation: 'haade2/haadiye',
        category: 'Famous Adjectives'
      },
      {
        id: 342,
        arabic: 'عصبي/عصبية',
        english: 'Nervous',
        pronunciation: '3aṣabi/3aṣabiyye',
        category: 'Famous Adjectives'
      },
      {
        id: 343,
        arabic: 'لطيف/لطيفة',
        english: 'Nice/Kind',
        pronunciation: 'laṭeef/laṭeefe',
        category: 'Famous Adjectives'
      },
      {
        id: 344,
        arabic: 'بارد/باردة',
        english: 'Cold',
        pronunciation: 'baared/baarde',
        category: 'Famous Adjectives'
      },
      {
        id: 345,
        arabic: 'حامي/حامية',
        english: 'Hot',
        pronunciation: '7aami/7aamiye',
        category: 'Famous Adjectives'
      },
      {
        id: 346,
        arabic: 'خفيف/خفيفة',
        english: 'Light (weight)',
        pronunciation: 'khafeef/khafeefe',
        category: 'Famous Adjectives'
      },
      {
        id: 347,
        arabic: 'ثقيل/ثقيلة',
        english: 'Heavy',
        pronunciation: 'th2eel/th2eela',
        category: 'Famous Adjectives'
      },
      {
        id: 348,
        arabic: 'قوي/قوية',
        english: 'Strong',
        pronunciation: '2awi/2awiyye',
        category: 'Famous Adjectives'
      },
      {
        id: 349,
        arabic: 'ضعيف/ضعيفة',
        english: 'Weak',
        pronunciation: 'ḍa3eef/ḍa3eefe',
        category: 'Famous Adjectives'
      },
      {
        id: 350,
        arabic: 'مهم/مهمة',
        english: 'Important',
        pronunciation: 'muhem/muheme',
        category: 'Famous Adjectives'
      },
      {
        id: 351,
        arabic: 'مزعج/مزعجة',
        english: 'Annoying',
        pronunciation: 'muza3ij/muza3je',
        category: 'Famous Adjectives'
      },
      {
        id: 352,
        arabic: 'ممتع/ممتعة',
        english: 'Fun/Enjoyable',
        pronunciation: 'mumti3/mumti3a',
        category: 'Famous Adjectives'
      },
      {
        id: 353,
        arabic: 'بارز/بارزة',
        english: 'Outstanding',
        pronunciation: 'barez/bareze',
        category: 'Famous Adjectives'
      },
      {
        id: 354,
        arabic: 'غريب/غريبة',
        english: 'Strange',
        pronunciation: 'ghareeb/ghareebe',
        category: 'Famous Adjectives'
      }
    ]
  }
  
  
  
}; 



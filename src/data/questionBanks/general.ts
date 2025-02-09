import { Question } from '@/types/quiz';
import { randomizeOptions } from './utils';

/**
 * GENERAL QUESTION BANK
 * Contains general proficiency questions that test overall Syrian Arabic language skills.
 * Questions are organized by level for easier maintenance:
 * 
 * BEGINNER (index 1-50):
 * - Basic greetings
 * - Simple expressions
 * - Numbers and counting
 * - Days and time
 * - Basic question words
 * 
 * INTERMEDIATE (index 51-100):
 * - Common expressions
 * - Daily life situations
 * - Shopping and bargaining
 * - Giving directions
 * - Weather and seasons
 * 
 * ADVANCED (index 101-150):
 * - Idioms and proverbs
 * - Complex social situations
 * - Cultural references
 * - Humor and jokes
 * - Regional variations
 */

// Original questions
const originalQuestions: Question[] = [
  // =============================================
  // BEGINNER LEVEL QUESTIONS (1-50)
  // =============================================
  {
    id: 'general-b1',
    title: 'Basic Greetings',
    text: 'What\'s the most common way to say "hello" in Syrian Arabic?',
    options: ['مرحبا', 'السلام عليكم', 'صباح الخير', 'هاي'],
    correctAnswer: 0,
    explanation: 'مرحبا (marhaba) is the most casual and common way to say hello in Syrian Arabic. It can be used at any time of day with anyone.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b2',
    title: 'Basic Needs',
    text: 'How do you say "I\'m hungry" in Syrian Arabic?',
    options: ['جوعان', 'بدي أكل', 'أنا جائع', 'عندي جوع'],
    correctAnswer: 0,
    explanation: 'جوعان (jo3an) is the common way to say "I\'m hungry". It\'s much more natural than the formal أنا جائع.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b3',
    title: 'Shopping Basics',
    text: 'How do you ask "how much?" in Syrian Arabic?',
    options: ['أديش؟', 'كم السعر؟', 'بكم هاد؟', 'ما هو الثمن؟'],
    correctAnswer: 0,
    explanation: 'أديش؟ (addesh) is the most common way to ask about price in Syrian Arabic. It\'s short and used everywhere.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b4',
    title: 'Basic Questions',
    text: 'What\'s the Syrian Arabic way to ask "where"?',
    options: ['وين', 'أين', 'فين', 'منين'],
    correctAnswer: 0,
    explanation: 'وين (wen) is the Syrian word for "where". It\'s used in questions like وين رايح؟ (where are you going?)',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b5',
    title: 'Common Responses',
    text: 'How do you say "okay" in Syrian Arabic?',
    options: ['ماشي', 'حسناً', 'طيب', 'موافق'],
    correctAnswer: 0,
    explanation: 'ماشي (mashi) is the most common way to say "okay" or "alright" in Syrian Arabic.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b6',
    title: 'Numbers in Context',
    text: 'How do you say "I want two kilos" in Syrian Arabic?',
    options: ['بدي كيلوين', 'اثنان كيلو', 'كيلوهات اثنين', 'جوج كيلو'],
    correctAnswer: 0,
    explanation: 'بدي كيلوين (biddi kilwen) is how you order two kilos in Syrian Arabic. Notice the dual form كيلوين.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b7',
    title: 'Time Expressions',
    text: 'How do you say "now" in Syrian Arabic?',
    options: ['هلق', 'الآن', 'دلوقتي', 'هسه'],
    correctAnswer: 0,
    explanation: 'هلق (halla2) is the Syrian way to say "now". It\'s very different from formal Arabic الآن or other dialects.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b8',
    title: 'Basic Feelings',
    text: 'How do you say "I\'m tired" in Syrian Arabic?',
    options: ['تعبان', 'مرهق', 'مش قادر', 'خلصان'],
    correctAnswer: 0,
    explanation: 'تعبان (ta3ban) is the common way to express being tired in Syrian Arabic.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b9',
    title: 'Weather Talk',
    text: 'How do you say "it\'s cold" in Syrian Arabic?',
    options: ['برد', 'الجو بارد', 'طقس بارد', 'شتاء'],
    correctAnswer: 0,
    explanation: 'Simply saying برد (barid) is the most natural way to say it\'s cold in Syrian Arabic.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b10',
    title: 'Basic Directions',
    text: 'How do you say "go straight" in Syrian Arabic?',
    options: ['دغري', 'على طول', 'مباشرة', 'قدام'],
    correctAnswer: 0,
    explanation: 'دغري (dughri) is the Syrian way to say "go straight". It\'s a very distinctive Syrian word.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b11',
    title: 'Family Terms',
    text: 'What\'s the common way to say "my brother" in Syrian Arabic?',
    options: ['خيي', 'أخي', 'أخويا', 'شقيقي'],
    correctAnswer: 0,
    explanation: 'خيي (khayyi) is the Syrian way to say "my brother". It\'s much more common than the formal أخي.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b12',
    title: 'Daily Activities',
    text: 'How do you say "I want to sleep" in Syrian Arabic?',
    options: ['بدي نام', 'أريد النوم', 'عايز أنام', 'حابب أنام'],
    correctAnswer: 0,
    explanation: 'بدي نام (biddi nam) is how Syrians express wanting to sleep. بدي is the Syrian way to say "I want".',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b13',
    title: 'Basic Needs',
    text: 'How do you say "I\'m thirsty" in Syrian Arabic?',
    options: ['عطشان', 'ظمآن', 'بدي مي', 'محتاج ماء'],
    correctAnswer: 0,
    explanation: 'عطشان (3atshan) is the common way to express being thirsty in Syrian Arabic.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b14',
    title: 'Common Questions',
    text: 'How do you ask "what\'s your name?" in Syrian Arabic?',
    options: ['شو اسمك؟', 'ما اسمك؟', 'مين انت؟', 'كيف بنادوك؟'],
    correctAnswer: 0,
    explanation: 'شو اسمك؟ (shu ismak?) is the common way to ask someone\'s name in Syrian Arabic.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b15',
    title: 'Basic Responses',
    text: 'How do you say "I don\'t know" in Syrian Arabic?',
    options: ['ما بعرف', 'لا أعلم', 'مش عارف', 'ما أدري'],
    correctAnswer: 0,
    explanation: 'ما بعرف (ma ba3ref) is the Syrian way to say "I don\'t know".',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b16',
    title: 'Shopping Questions',
    text: 'How do you ask "do you have?" in Syrian Arabic?',
    options: ['عندك؟', 'هل لديك؟', 'موجود؟', 'في منو؟'],
    correctAnswer: 0,
    explanation: 'عندك؟ (3indak?) is the simple way to ask if someone has something.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b17',
    title: 'Basic Colors',
    text: 'How do you say "I want the red one" in Syrian Arabic?',
    options: ['بدي الأحمر', 'أريد الأحمر', 'عايز الحمرا', 'اعطيني الأحمر'],
    correctAnswer: 0,
    explanation: 'بدي الأحمر (biddi el ahmar) is how you specify wanting the red item.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b18',
    title: 'Simple Requests',
    text: 'How do you say "give me" in Syrian Arabic?',
    options: ['عطيني', 'اعطني', 'هات لي', 'ناولني'],
    correctAnswer: 0,
    explanation: 'عطيني (3atini) is the common way to say "give me" in Syrian Arabic.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b19',
    title: 'Basic Time',
    text: 'How do you ask "what time is it?" in Syrian Arabic?',
    options: ['أديش الساعة؟', 'كم الساعة؟', 'الوقت؟', 'أي ساعة؟'],
    correctAnswer: 0,
    explanation: 'أديش الساعة؟ (addesh el sa3a?) is how Syrians ask for the time.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b20',
    title: 'Food Preferences',
    text: 'How do you say "delicious" in Syrian Arabic?',
    options: ['طيب', 'لذيذ', 'زاكي', 'حلو'],
    correctAnswer: 0,
    explanation: 'طيب (tayeb) is the most common way to say food is delicious in Syrian Arabic.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b21',
    title: 'Basic Agreement',
    text: 'How do you say "of course" in Syrian Arabic?',
    options: ['أكيد', 'طبعاً', 'بالتأكيد', 'من غير شك'],
    correctAnswer: 0,
    explanation: 'أكيد (akeed) is the common way to say "of course" or "surely" in Syrian Arabic.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b22',
    title: 'Simple Directions',
    text: 'How do you say "turn right" in Syrian Arabic?',
    options: ['لف يمين', 'انعطف يميناً', 'على اليمين', 'يميناً'],
    correctAnswer: 0,
    explanation: 'لف يمين (lef yameen) is how you tell someone to turn right.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b23',
    title: 'Basic Quantities',
    text: 'How do you say "a little bit" in Syrian Arabic?',
    options: ['شوي', 'قليلاً', 'بسيط', 'خفيف'],
    correctAnswer: 0,
    explanation: 'شوي (shway) is the common way to say "a little bit" in Syrian Arabic.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b24',
    title: 'Common Adjectives',
    text: 'How do you say "big" in Syrian Arabic?',
    options: ['كبير', 'ضخم', 'عظيم', 'واسع'],
    correctAnswer: 0,
    explanation: 'كبير (kbeer) is the standard way to say "big" in Syrian Arabic.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b25',
    title: 'Basic Feelings',
    text: 'How do you say "I\'m happy" in Syrian Arabic?',
    options: ['مبسوط', 'سعيد', 'فرحان', 'مسرور'],
    correctAnswer: 0,
    explanation: 'مبسوط (mabsoot) is the common way to express being happy in Syrian Arabic.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b26',
    title: 'Daily Life',
    text: 'How do you say "I\'m late" in Syrian Arabic?',
    options: ['عم تأخر', 'متأخر', 'تأخرت', 'فات الوقت'],
    correctAnswer: 0,
    explanation: 'عم تأخر (3am t2akhar) is how you say "I\'m late" in Syrian Arabic.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b27',
    title: 'Basic Needs',
    text: 'How do you say "I need help" in Syrian Arabic?',
    options: ['بدي مساعدة', 'ساعدني', 'احتاج معونة', 'النجدة'],
    correctAnswer: 0,
    explanation: 'بدي مساعدة (biddi musa3ada) is how you ask for help in Syrian Arabic.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b28',
    title: 'Common Questions',
    text: 'How do you ask "what happened?" in Syrian Arabic?',
    options: ['شو صار؟', 'ماذا حدث؟', 'ايش في؟', 'شو المشكلة؟'],
    correctAnswer: 0,
    explanation: 'شو صار؟ (shu sar?) is the common way to ask what happened.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b29',
    title: 'Basic Locations',
    text: 'How do you say "next to" in Syrian Arabic?',
    options: ['جنب', 'بجانب', 'قرب', 'محاذي'],
    correctAnswer: 0,
    explanation: 'جنب (janeb) is the simple way to say "next to" in Syrian Arabic.',
    level: 'beginner',
    category: 'general'
  },
  {
    id: 'general-b30',
    title: 'Simple Questions',
    text: 'How do you ask "when?" in Syrian Arabic?',
    options: ['إيمتى؟', 'متى؟', 'وقتيش؟', 'أي وقت؟'],
    correctAnswer: 0,
    explanation: 'إيمتى؟ (emta?) is the Syrian way to ask "when?"',
    level: 'beginner',
    category: 'general'
  },

  // =============================================
  // INTERMEDIATE LEVEL QUESTIONS (51-100)
  // =============================================
  {
    id: 'general-i1',
    title: 'Shopping Expressions',
    text: 'What\'s the Syrian expression for "it\'s too expensive"?',
    options: ['غالي كتير', 'السعر مرتفع', 'فوق طاقتي', 'مو معي مصاري'],
    correctAnswer: 0,
    explanation: 'غالي كتير (ghali kteer) is how Syrians express that something is too expensive. Very common during bargaining.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i2',
    title: 'Daily Expressions',
    text: 'What does عراسي mean when someone thanks you?',
    options: ['على راسي', 'من عيوني', 'على قلبي', 'تكرم عينك'],
    correctAnswer: 0,
    explanation: 'عراسي (3a rasi), literally "on my head," is a warm response meaning "my pleasure" or "you\'re welcome".',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i3',
    title: 'Local Expressions',
    text: 'What does يي mean in Syrian Arabic?',
    options: [
      'واو / تعبير عن المفاجأة',
      'نعم',
      'لا',
      'مع السلامة'
    ],
    correctAnswer: 0,
    explanation: 'يي (yee) is an expression of surprise or amazement, similar to "wow" in English.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i4',
    title: 'Social Situations',
    text: 'What\'s the appropriate response to عن إذنك (excuse me)?',
    options: [
      'تفضل',
      'مع السلامة',
      'شكراً',
      'أهلاً وسهلاً'
    ],
    correctAnswer: 0,
    explanation: 'تفضل (tfaddal) is the proper response, meaning "go ahead" or "you\'re excused".',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i5',
    title: 'Market Bargaining',
    text: 'What\'s the Syrian way to say "give me a better price"?',
    options: [
      'ظبطلي السعر',
      'خفض السعر',
      'أريد سعر أقل',
      'قلل الثمن'
    ],
    correctAnswer: 0,
    explanation: 'ظبطلي السعر (zabetli el se3er) is how Syrians negotiate prices in markets.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i6',
    title: 'Food Ordering',
    text: 'How would you ask for the food to be "spicy" in Syrian Arabic?',
    options: [
      'حر شوي',
      'حار',
      'فلفل زيادة',
      'سخن'
    ],
    correctAnswer: 0,
    explanation: 'حر شوي (har shway) is how Syrians ask for their food to be spicy. شوي means "a little".',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i7',
    title: 'Phone Conversations',
    text: 'How do Syrians typically answer the phone?',
    options: [
      'آلو',
      'نعم',
      'مرحبا',
      'السلام عليكم'
    ],
    correctAnswer: 0,
    explanation: 'آلو (alo) is the standard way to answer the phone in Syria, similar to "hello" in English.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i8',
    title: 'Transportation',
    text: 'How do you tell a taxi driver to "stop here" in Syrian Arabic?',
    options: [
      'وقف هون',
      'قف هنا',
      'توقف',
      'انزلني'
    ],
    correctAnswer: 0,
    explanation: 'وقف هون (wa22ef hon) is how you tell a driver to stop. هون means "here" in Syrian.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i9',
    title: 'Restaurant Etiquette',
    text: 'How do you say "the check, please" in Syrian Arabic?',
    options: [
      'الحساب لو سمحت',
      'كم يكلف؟',
      'أريد أن أدفع',
      'فاتورة رجاءً'
    ],
    correctAnswer: 0,
    explanation: 'الحساب لو سمحت (el hsab law samaht) is how you ask for the bill in restaurants.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i10',
    title: 'Social Invitations',
    text: 'How do you invite someone for coffee in Syrian Arabic?',
    options: [
      'تفضل نشرب قهوة',
      'هل تريد قهوة',
      'أدعوك للقهوة',
      'نشرب قهوة معاً'
    ],
    correctAnswer: 0,
    explanation: 'تفضل نشرب قهوة (tfaddal nishrab ahwe) is a warm way to invite someone for coffee.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i11',
    title: 'Weather Comments',
    text: 'How do Syrians typically complain about hot weather?',
    options: [
      'شو هالحر',
      'الجو حار',
      'درجة الحرارة مرتفعة',
      'الطقس ساخن'
    ],
    correctAnswer: 0,
    explanation: 'شو هالحر (shu hal har) is the common way to complain about heat.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i12',
    title: 'Shopping Bargaining',
    text: 'How do you say "that\'s your last price?" in Syrian Arabic?',
    options: [
      'هاد آخر سعر؟',
      'لا يمكن أقل؟',
      'السعر نهائي؟',
      'هل تخفض السعر؟'
    ],
    correctAnswer: 0,
    explanation: 'هاد آخر سعر؟ (had akher se3er?) is used when bargaining to ask if this is the final price.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i13',
    title: 'Daily Complaints',
    text: 'How do you say "there\'s no electricity" in Syrian Arabic?',
    options: [
      'ما في كهربا',
      'الكهرباء مقطوعة',
      'لا يوجد تيار',
      'انقطعت الكهرباء'
    ],
    correctAnswer: 0,
    explanation: 'ما في كهربا (ma fi kahraba) is how Syrians commonly express power outages.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i14',
    title: 'Transportation',
    text: 'How do you ask "where\'s the bus station?" in Syrian Arabic?',
    options: [
      'وين موقف الباص؟',
      'أين محطة الحافلات؟',
      'على وين الباصات؟',
      'فين الموقف؟'
    ],
    correctAnswer: 0,
    explanation: 'وين موقف الباص؟ (wen maw2ef el bas?) is how you ask for the bus station.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i15',
    title: 'Phone Conversations',
    text: 'How do you say "I\'ll call you back" in Syrian Arabic?',
    options: [
      'برجع برنلك',
      'سأتصل بك لاحقاً',
      'أعاود الاتصال',
      'اتصل بعدين'
    ],
    correctAnswer: 0,
    explanation: 'برجع برنلك (birja3 brennlak) is how you say you\'ll call someone back.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i16',
    title: 'Household Issues',
    text: 'How do you say "the water is cut off" in Syrian Arabic?',
    options: [
      'مقطوعة المي',
      'لا يوجد ماء',
      'انقطع الماء',
      'المياه متوقفة'
    ],
    correctAnswer: 0,
    explanation: 'مقطوعة المي (ma2tu3a el mayy) is how Syrians express that there\'s no water supply.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i17',
    title: 'Social Situations',
    text: 'What do you say when someone sneezes in Syrian Arabic?',
    options: [
      'صحة',
      'يرحمك الله',
      'الحمد لله',
      'بالعافية'
    ],
    correctAnswer: 0,
    explanation: 'صحة (sahha) is what Syrians say when someone sneezes, equivalent to "bless you".',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i18',
    title: 'Giving Directions',
    text: 'How do you say "take the first right" in Syrian Arabic?',
    options: [
      'خود أول يمين',
      'انعطف يميناً',
      'اتجه يميناً',
      'الطريق الأيمن'
    ],
    correctAnswer: 0,
    explanation: 'خود أول يمين (khod awwal yameen) is how you direct someone to take the first right.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i19',
    title: 'Shopping',
    text: 'How do you say "I\'m just looking" in Syrian Arabic?',
    options: [
      'بس عم تفرج',
      'أشاهد فقط',
      'لا أريد الشراء',
      'مجرد نظرة'
    ],
    correctAnswer: 0,
    explanation: 'بس عم تفرج (bas 3am tfarraj) is what you say when browsing without intention to buy.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i20',
    title: 'Daily Life',
    text: 'How do you say "the internet is slow" in Syrian Arabic?',
    options: [
      'النت بطيء',
      'الإنترنت ضعيف',
      'الشبكة بطيئة',
      'اتصال سيء'
    ],
    correctAnswer: 0,
    explanation: 'النت بطيء (en-net bati2) is how Syrians complain about slow internet.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i21',
    title: 'Restaurant Orders',
    text: 'How do you ask for "a little more salt" in Syrian Arabic?',
    options: [
      'شوية ملح كمان',
      'زيد الملح',
      'ملح إضافي',
      'أريد ملحاً'
    ],
    correctAnswer: 0,
    explanation: 'شوية ملح كمان (shwayyet meleh kman) is how you ask for a bit more salt.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i22',
    title: 'Transportation',
    text: 'How do you ask "is this seat taken?" in Syrian Arabic?',
    options: [
      'هالمحل فاضي؟',
      'هل الكرسي محجوز؟',
      'يمكن الجلوس؟',
      'أحد جالس هنا؟'
    ],
    correctAnswer: 0,
    explanation: 'هالمحل فاضي؟ (hal mahal fadi?) is how you ask if a seat is available.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i23',
    title: 'Weather',
    text: 'How do you say "it might rain" in Syrian Arabic?',
    options: [
      'يمكن تشتي',
      'احتمال مطر',
      'ربما تمطر',
      'جو ماطر'
    ],
    correctAnswer: 0,
    explanation: 'يمكن تشتي (yimken teshti) is how Syrians express possibility of rain.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i24',
    title: 'Social Plans',
    text: 'How do you suggest "let\'s meet tomorrow" in Syrian Arabic?',
    options: [
      'نتلاقى بكرا؟',
      'موعدنا غداً',
      'نجتمع غداً',
      'نتقابل بكرا'
    ],
    correctAnswer: 0,
    explanation: 'نتلاقى بكرا؟ (netla2a bukra?) is how you suggest meeting tomorrow.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i25',
    title: 'Shopping',
    text: 'How do you ask "do you have it in blue?" in Syrian Arabic?',
    options: [
      'في منو أزرق؟',
      'هل يوجد باللون الأزرق؟',
      'أريد اللون الأزرق',
      'الأزرق موجود؟'
    ],
    correctAnswer: 0,
    explanation: 'في منو أزرق؟ (fi minno azra2?) is how you ask about color availability.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i26',
    title: 'Daily Life',
    text: 'How do you say "I\'m busy" in Syrian Arabic?',
    options: ['مشغول', 'عم شغل', 'مشتغل', 'مشغولة'],
    correctAnswer: 0,
    explanation: 'مشغول (mashghool) is how you say "I\'m busy" in Syrian Arabic.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i27',
    title: 'Basic Needs',
    text: 'How do you say "I need a doctor" in Syrian Arabic?',
    options: ['بدي دكتور', 'أحتاج طبيب', 'دكتور رجاءً', 'أريد طبيباً'],
    correctAnswer: 0,
    explanation: 'بدي دكتور (biddi doktoor) is how you ask for a doctor in Syrian Arabic.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i28',
    title: 'Common Questions',
    text: 'How do you ask "how old are you?" in Syrian Arabic?',
    options: ['كم عمرك؟', 'عمرك كم؟', 'شو عمرك؟', 'أي عمر انت؟'],
    correctAnswer: 0,
    explanation: 'كم عمرك؟ (kam 3omrak?) is the common way to ask someone\'s age.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i29',
    title: 'Basic Locations',
    text: 'How do you say "in front of" in Syrian Arabic?',
    options: ['قدام', 'أمام', 'قبل', 'فوق'],
    correctAnswer: 0,
    explanation: 'قدام (qadam) is the simple way to say "in front of" in Syrian Arabic.',
    level: 'intermediate',
    category: 'general'
  },
  {
    id: 'general-i30',
    title: 'Simple Questions',
    text: 'How do you ask "why?" in Syrian Arabic?',
    options: ['ليش؟', 'لماذا؟', 'شو السبب؟', 'عشان إيه؟'],
    correctAnswer: 0,
    explanation: 'ليش؟ (leish?) is the Syrian way to ask "why?"',
    level: 'intermediate',
    category: 'general'
  },

  // =============================================
  // ADVANCED LEVEL QUESTIONS (101-150)
  // =============================================
  {
    id: 'general-a1',
    title: 'Syrian Proverbs',
    text: 'What does the Syrian expression الحكي عليك والطحين بالجرة mean?',
    options: [
      'كلامك صحيح لكن الواقع مختلف',
      'الكلام سهل',
      'الحياة صعبة',
      'المال مهم'
    ],
    correctAnswer: 0,
    explanation: 'This proverb literally means "the talk is on you but the flour is in the jar" - used when someone makes promises but reality is different.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a2',
    title: 'Cultural References',
    text: 'In Syrian culture, what does يا عيب الشوم typically express?',
    options: [
      'استنكار شديد للتصرف',
      'فرح وسعادة',
      'حزن عميق',
      'لا مبالاة'
    ],
    correctAnswer: 0,
    explanation: 'يا عيب الشوم (ya 3eb el shom) expresses strong disapproval or shame. It\'s used when someone does something very inappropriate.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a3',
    title: 'Complex Expressions',
    text: 'What does دخيلك mean in its deeper cultural context?',
    options: [
      'توسل وطلب الحماية',
      'مجرد كلمة شكر',
      'تحية بسيطة',
      'وداع'
    ],
    correctAnswer: 0,
    explanation: 'دخيلك (dakhilak) literally means "I\'m your protectee" - it\'s a deep cultural expression of seeking protection or making a heartfelt request.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a4',
    title: 'Regional Expressions',
    text: 'The expression شو هالحكي is used to express:',
    options: [
      'استنكار ورفض لما يقال',
      'موافقة على الكلام',
      'طلب التوضيح',
      'الترحيب'
    ],
    correctAnswer: 0,
    explanation: 'شو هالحكي (shu hal haki) expresses disapproval or rejection of what\'s being said, often with a tone of disbelief.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a5',
    title: 'Complex Expressions',
    text: 'What does مالك عم تاكل هوا mean in Syrian Arabic?',
    options: [
      'ليش عم تضيع وقتك',
      'لا يوجد وقت',
      'الطعام غير جيد',
      'الجو جميل'
    ],
    correctAnswer: 0,
    explanation: 'مالك عم تاكل هوا (malak 3am tekol hawa) literally means "why are you eating air" but is used to say "why are you wasting your time?"',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a6',
    title: 'Idiomatic Expressions',
    text: 'The phrase حاطط راسو براس الحيط means someone is:',
    options: [
      'عنيد جداً ولا يستمع للآخرين',
      'ذكي جداً',
      'متعب كثيراً',
      'سعيد جداً'
    ],
    correctAnswer: 0,
    explanation: 'حاطط راسو براس الحيط (hatet raso bras el het) literally means "putting their head against the wall" - used to describe a very stubborn person.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a7',
    title: 'Cultural Sayings',
    text: 'When someone says الله يجبر بخاطرك, they are:',
    options: [
      'يواسي شخص حزين',
      'يهنئ بالنجاح',
      'يشكر على خدمة',
      'يرحب بالضيف'
    ],
    correctAnswer: 0,
    explanation: 'الله يجبر بخاطرك (allah yejbor b khatrak) is a deep expression used to console someone who is sad or has suffered a loss.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a8',
    title: 'Emotional Expressions',
    text: 'The phrase حرقلي دمي means:',
    options: [
      'أزعجني كثيراً',
      'ساعدني كثيراً',
      'أكل طعامي',
      'زارني اليوم'
    ],
    correctAnswer: 0,
    explanation: 'حرقلي دمي (hara2li dammi) literally means "burned my blood" but is used to say "they really annoyed me".',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a9',
    title: 'Social Wisdom',
    text: 'The expression الجار قبل الدار means:',
    options: [
      'اختر جيرانك قبل منزلك',
      'المنزل أهم شيء',
      'الجيران مزعجون',
      'ابحث عن منزل كبير'
    ],
    correctAnswer: 0,
    explanation: 'الجار قبل الدار (el jar abel el dar) means "the neighbor before the house" - advising to check who your neighbors are before buying/renting a house.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a10',
    title: 'Local Humor',
    text: 'When someone says شو هالطلة, they are:',
    options: [
      'يمدح مظهر شخص ما',
      'ينتقد الملابس',
      'يتحدث عن الطقس',
      'يشتكي من الوقت'
    ],
    correctAnswer: 0,
    explanation: 'شو هالطلة (shu hal talle) is a compliment about someone\'s appearance, similar to "looking good!"',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a11',
    title: 'Complex Situations',
    text: 'What does راحت عليك mean in context?',
    options: [
      'خسرت الفرصة',
      'ذهبت إليك',
      'ستعود قريباً',
      'انتهى الوقت'
    ],
    correctAnswer: 0,
    explanation: 'راحت عليك (rahet 3lek) means "you missed your chance" or "you lost this one".',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a12',
    title: 'Sarcastic Expressions',
    text: 'What does عم تحكي جد mean when said sarcastically?',
    options: [
      'لا تقول شيئاً غير معقول',
      'تكلم بجدية',
      'أنا أصدقك',
      'كلامك صحيح'
    ],
    correctAnswer: 0,
    explanation: 'عم تحكي جد (3am tehki jad) literally means "are you speaking seriously" but is used sarcastically to say "you must be joking".',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a13',
    title: 'Cultural Understanding',
    text: 'The phrase على راسي و عيني expresses:',
    options: [
      'احترام وموافقة تامة',
      'رفض مؤدب',
      'عدم الاهتمام',
      'غضب مكتوم'
    ],
    correctAnswer: 0,
    explanation: 'على راسي و عيني (3ala rasi w 3eni) literally means "on my head and eye" and expresses deep respect and complete agreement.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a14',
    title: 'Social Wisdom',
    text: 'The expression شو ما زرعت هيك بتحصد means:',
    options: [
      'نتائج أفعالك من أفعالك',
      'الزراعة مهمة',
      'العمل صعب',
      'الحياة قاسية'
    ],
    correctAnswer: 0,
    explanation: 'شو ما زرعت هيك بتحصد (shu ma zara3t hek btehsod) means "you reap what you sow" - your results come from your actions.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a15',
    title: 'Complex Metaphors',
    text: 'When someone says بدي فك الخط, they mean:',
    options: [
      'بدي أنهي المكالمة',
      'سأصلح الهاتف',
      'سأغير الخط',
      'سأتصل لاحقاً'
    ],
    correctAnswer: 0,
    explanation: 'بدي فك الخط (biddi fik el khat) literally means "I want to undo the line" but is used to say "I need to hang up".',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a16',
    title: 'Cultural Expressions',
    text: 'The phrase تحت أمرك expresses:',
    options: [
      'استعداد تام للمساعدة',
      'خضوع إجباري',
      'عدم الرغبة',
      'موافقة بسيطة'
    ],
    correctAnswer: 0,
    explanation: 'تحت أمرك (taht amrak) literally means "under your command" but expresses complete willingness to help.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a17',
    title: 'Complex Situations',
    text: 'When someone says بدك تطلع من عقلي, they mean:',
    options: [
      'تريد أن تجنني',
      'تريد أن تفهمني',
      'تريد مساعدتي',
      'تريد نصيحتي'
    ],
    correctAnswer: 0,
    explanation: 'بدك تطلع من عقلي (baddak tla3 min 3a2li) means "you want to drive me crazy".',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a18',
    title: 'Social Wisdom',
    text: 'The expression العتب على النظر means:',
    options: [
      'اللوم على من لم ير المشكلة',
      'العين تؤلم',
      'النظر مهم',
      'يجب الانتباه'
    ],
    correctAnswer: 0,
    explanation: 'العتب على النظر (el 3atab 3al nazar) means "blame is on those who didn\'t notice" - used when someone should have noticed a problem.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a19',
    title: 'Idiomatic Expressions',
    text: 'What does طالع عينو mean?',
    options: [
      'تعب كثيراً لإنجاز شيء',
      'نظر بعيداً',
      'فقد بصره',
      'أصيب بعينه'
    ],
    correctAnswer: 0,
    explanation: 'طالع عينو (tale3 3ayno) literally means "his eye came out" but means "he worked extremely hard".',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a20',
    title: 'Local Expressions',
    text: 'The phrase ما بيطلع بإيدي شي means:',
    options: [
      'لا أستطيع فعل شيء حيال الأمر',
      'يدي فارغة',
      'لا أملك المال',
      'لست قوياً'
    ],
    correctAnswer: 0,
    explanation: 'ما بيطلع بإيدي شي (ma bitle3 bi idi shi) means "there\'s nothing I can do about it".',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a21',
    title: 'Cultural References',
    text: 'When someone says عم تحكي بالعرض, they mean:',
    options: [
      'تتكلم بشكل غير مباشر',
      'تتكلم بصوت عالي',
      'تتكلم بسرعة',
      'تتكلم كثيراً'
    ],
    correctAnswer: 0,
    explanation: 'عم تحكي بالعرض (3am tehki bil 3ard) means "you\'re talking indirectly/beating around the bush".',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a22',
    title: 'Complex Metaphors',
    text: 'The phrase راسو ناشف means someone is:',
    options: [
      'عنيد جداً ولا يستمع للآخرين',
      'ذكي جداً',
      'متعب كثيراً',
      'مريض'
    ],
    correctAnswer: 0,
    explanation: 'راسو ناشف (raso nashef) literally means "his head is dry" but describes someone very stubborn.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a23',
    title: 'Social Commentary',
    text: 'When someone says مو شايف حالو, they mean:',
    options: [
      'متكبر ولا يعرف حدوده',
      'لا يرى جيداً',
      'متواضع جداً',
      'مريض'
    ],
    correctAnswer: 0,
    explanation: 'مو شايف حالو (mu shayef halo) literally means "he doesn\'t see himself" but describes someone arrogant.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a24',
    title: 'Emotional Expressions',
    text: 'The phrase قلبي عم يدق means:',
    options: [
      'أشعر بالخوف أو التوتر',
      'أركض بسرعة',
      'سعيد جداً',
      'مريض'
    ],
    correctAnswer: 0,
    explanation: 'قلبي عم يدق (2albi 3am yedo2) literally means "my heart is beating" but expresses fear or anxiety.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a25',
    title: 'Cultural Understanding',
    text: 'The expression بدي روح فيها means:',
    options: [
      'أتوقع أن أقع في مشكلة',
      'أريد الذهاب',
      'سأموت',
      'سأنجح'
    ],
    correctAnswer: 0,
    explanation: 'بدي روح فيها (baddi rooh fiha) literally means "I will go in it" but means "I\'m going to get in trouble".',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a26',
    title: 'Social Wisdom',
    text: 'The phrase لا تقل لحد ما يصير means:',
    options: [
      'لا تتكلم حتى يحدث',
      'لا تنتظر حتى يحدث',
      'لا تقل حتى يحدث',
      'لا تفكر حتى يحدث'
    ],
    correctAnswer: 0,
    explanation: 'لا تقل لحد ما يصير (la t2ol lahd ma yseer) means "don\'t say until it happens" - advising not to speak about something until it actually happens.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a27',
    title: 'Cultural References',
    text: 'The expression يا عين عمي means:',
    options: [
      'أنا حزين',
      'أنا سعيد',
      'أنا غاضب',
      'أنا خائف'
    ],
    correctAnswer: 0,
    explanation: 'يا عين عمي (ya 3ein 3ami) is an expression of sadness or sorrow.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a28',
    title: 'Idiomatic Expressions',
    text: 'What does طلع عقلو mean?',
    options: [
      'أصبح ذكياً',
      'أصبح غبياً',
      'أصبح حزيناً',
      'أصبح سعيداً'
    ],
    correctAnswer: 0,
    explanation: 'طلع عقلو (tala3 3a2lo) literally means "his mind came out" but means "he became smart".',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a29',
    title: 'Social Commentary',
    text: 'When someone says مو حلو, they mean:',
    options: [
      'ليس جيداً',
      'جيد جداً',
      'سعيد جداً',
      'حزين جداً'
    ],
    correctAnswer: 0,
    explanation: 'مو حلو (mu helo) literally means "not good" but is used to express disapproval or dislike.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a30',
    title: 'Cultural Understanding',
    text: 'The phrase بلاش كلام فاضي means:',
    options: [
      'لا تتكلم كثيراً',
      'لا تتكلم بلا فائدة',
      'لا تتكلم بصوت عال',
      'لا تتكلم بسرعة'
    ],
    correctAnswer: 0,
    explanation: 'بلاش كلام فاضي (balash kalam fadi) means "no useless talk" - advising against speaking unnecessarily.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a31',
    title: 'Literary Arabic',
    text: 'What\'s the meaning of the poetic expression يا شام يا ذات الياسمين?',
    options: [
      'تعبير عن جمال دمشق وعبق الياسمين فيها',
      'وصف لحديقة',
      'اسم أغنية شعبية',
      'نوع من الحلويات'
    ],
    correctAnswer: 0,
    explanation: 'This is a poetic reference to Damascus (الشام) and its famous jasmine flowers, symbolizing its beauty and cultural richness.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a32',
    title: 'Regional Expressions',
    text: 'The phrase على راسي و عيني when used in a formal context means:',
    options: [
      'موافقة تامة مع احترام وتقدير',
      'رفض مهذب',
      'طلب التفكير',
      'تعبير عن الحيرة'
    ],
    correctAnswer: 0,
    explanation: 'على راسي و عيني (3ala rasi w 3eini) literally means "on my head and eye" - it\'s a formal way to show complete respect and willing compliance.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a33',
    title: 'Professional Language',
    text: 'In a formal business context, how would you politely disagree with someone\'s proposal?',
    options: [
      'مع احترامي لرأيك، بس عندي وجهة نظر مختلفة',
      'لا، مو هيك',
      'ما بوافق',
      'غلط'
    ],
    correctAnswer: 0,
    explanation: 'مع احترامي لرأيك (ma3 ihtirami li ra\'yak) is the most professional way to express disagreement while maintaining respect.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a34',
    title: 'Cultural Metaphors',
    text: 'The expression متل القمر في تمامه is used to describe:',
    options: [
      'شخص أو شيء في قمة جماله وكماله',
      'ليلة مقمرة',
      'وقت الغروب',
      'ضوء القمر'
    ],
    correctAnswer: 0,
    explanation: 'متل القمر في تمامه (mitel il-amar bi tamamoh) literally means "like a full moon" - used to describe something or someone at their peak of beauty or perfection.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a35',
    title: 'Historical References',
    text: 'What does the phrase من باب توما لباب الجابية refer to?',
    options: [
      'المسافة التاريخية عبر دمشق القديمة',
      'اسم مطعم',
      'طريق تجاري',
      'حي سكني'
    ],
    correctAnswer: 0,
    explanation: 'This phrase refers to the historical path through Old Damascus, from Bab Touma to Bab al-Jabiye, often used to describe the full extent of something.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a36',
    title: 'Complex Social Situations',
    text: 'When someone says بيني وبينك القمر, they are expressing:',
    options: [
      'عهد قوي وصداقة عميقة',
      'وصف للطقس',
      'موعد في المساء',
      'مكان لقاء'
    ],
    correctAnswer: 0,
    explanation: 'بيني وبينك القمر (beini w beinak il-amar) literally means "the moon is between us" - it\'s a deep expression of strong bonds and unbreakable friendship.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a37',
    title: 'Traditional Wisdom',
    text: 'The saying العتب على النظر means:',
    options: [
      'اللوم على من لم ير العيب قبل الشراء',
      'مشكلة في العين',
      'صعوبة الرؤية',
      'نظرة سيئة'
    ],
    correctAnswer: 0,
    explanation: 'This traditional saying means "blame is on the one who looked" - used in commerce to indicate that the buyer should have checked thoroughly before purchasing.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a38',
    title: 'Philosophical Expressions',
    text: 'The phrase الدنيا دوارة in its deeper meaning represents:',
    options: [
      'فلسفة تقلب الحال وعدم ثبات الظروف',
      'دوران الأرض',
      'تغير الطقس',
      'مرور الوقت'
    ],
    correctAnswer: 0,
    explanation: 'الدنيا دوارة (id-dinya dawara) literally means "life is rotating" - a philosophical expression about the cyclical nature of life and fortune.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a39',
    title: 'Classical References',
    text: 'The expression يا مال الشام is traditionally used to:',
    options: [
      'التعبير عن الإعجاب بجمال أو قيمة شيء',
      'الإشارة إلى المال',
      'وصف التجارة',
      'الحديث عن الثروة'
    ],
    correctAnswer: 0,
    explanation: 'يا مال الشام (ya mal il-sham) is a classical expression of admiration, literally meaning "Oh wealth of Damascus" but used to express appreciation of beauty or value.',
    level: 'advanced',
    category: 'general'
  },
  {
    id: 'general-a40',
    title: 'Cultural Etiquette',
    text: 'In formal situations, the phrase تكرم عينك is used to:',
    options: [
      'تلطيف الحديث عن شيء غير مستحب',
      'الإشارة إلى العين',
      'طلب النظر',
      'تحية بسيطة'
    ],
    correctAnswer: 0,
    explanation: 'تكرم عينك (tikram 3einak) literally means "may your eye be honored" - used as a polite way to discuss something potentially unpleasant or inappropriate.',
    level: 'advanced',
    category: 'general'
  }
];

// Export randomized questions
export const generalQuestions = originalQuestions.map(randomizeOptions);

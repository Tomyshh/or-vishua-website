export interface NewsItem {
    id: number;
    title: string;
    excerpt: string;
    content?: string; // Full content for the single page
    category: string;
    date: string;
    readTime: string;
    image: string;
    color: string;
}

export const newsItems: NewsItem[] = [
    {
        id: 1,
        title: "גיוס המונים - שותפים לדרך",
        excerpt: "הצטרפו אלינו למסע של בנייה והתחדשות. יחד נבנה את עתיד הישיבה והקהילה.",
        content: `
      <p>אנו נרגשים להכריז על קמפיין גיוס ההמונים השנתי שלנו. השנה, המטרה שלנו היא להרחיב את פעילות הישיבה ולהגיע לקהלים חדשים.</p>
      <p>התרומה שלכם תאפשר לנו:</p>
      <ul>
        <li>לשפץ את בית המדרש</li>
        <li>להוסיף מלגות לתלמידים מצטיינים</li>
        <li>לקיים אירועים לקהילה הרחבה</li>
      </ul>
      <p>כל תרומה, קטנה כגדולה, עוזרת לנו להמשיך ולהאיר את חיפה באור התורה.</p>
    `,
        category: "חדשות הישיבה",
        date: "1 אוגוסט, 2024",
        readTime: "3 דקות קריאה",
        image: "/images/news/gioushared.png",
        color: "from-cyan-500 to-blue-500"
    },
    {
        id: 2,
        title: "ערב ראיונות - בואו להכיר",
        excerpt: "הזמנה לערב פתוח למתעניינים. הזדמנות לפגוש את הצוות, לשמוע על התוכנית ולהתרשם.",
        content: `
      <p>הישיבה פותחת את שעריה לערב היכרות מיוחד.</p>
      <p>בתוכנית:</p>
      <ul>
        <li>שיחה עם ראש הישיבה</li>
        <li>מפגש עם הר"מים</li>
        <li>סיור בקמפוס</li>
        <li>שיחות אישיות עם תלמידים</li>
      </ul>
      <p>בואו להרגיש את האווירה המיוחדת ולהבין למה אור וישועה היא המקום בשבילכם.</p>
    `,
        category: "אירועים",
        date: "15 יולי, 2024",
        readTime: "2 דקות קריאה",
        image: "/images/news/entretienfrancais.jpg",
        color: "from-purple-500 to-pink-500"
    },
    {
        id: 3,
        title: "אירועי הקיץ בישיבה",
        excerpt: "לוח אירועים עשיר ומגוון לקיץ הקרוב. שיעורים, סדנאות ומפגשים מיוחדים.",
        content: `
      <p>הקיץ הזה הולך להיות חם בישיבה! הכנו עבורכם תוכנית עשירה ומגוונת:</p>
      <ul>
        <li>סדרת שיעורים בנושא "אמונה בעידן המודרני"</li>
        <li>סדנאות לימוד בחברותא</li>
        <li>ימי עיון מרוכזים</li>
        <li>פעילויות גיבוש וטיולים</li>
      </ul>
      <p>הצטרפו אלינו לקיץ של צמיחה והתחדשות.</p>
    `,
        category: "עדכונים",
        date: "10 יוני, 2024",
        readTime: "5 דקות קריאה",
        image: "/images/news/banderollle1.jpeg",
        color: "from-amber-500 to-orange-500"
    }
];

export function getNewsItem(id: number): NewsItem | undefined {
    return newsItems.find(item => item.id === id);
}

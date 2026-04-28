export interface Education {
  degree: string;
  school?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string; // Defaults to "Professor" or specific title
  image: string;
  degrees: string[]; // Short titles for the card
  education: Education[];
  specialization: string;
  titles: string; // Professional descriptions
}

export const facultyData: FacultyMember[] = [
  {
    id: "joval-kisinamal",
    name: "Rev. Joval Kisinamal",
    role: "Professor",
    image: "/images/faculty/joval.jpg",
    degrees: ["Ph.D.", "MA", "B.Th"],
    education: [
      { degree: "Ph.D. in Visual Arts", school: "Brethren Evangelical School of Theology" },
      { degree: "Master of Arts in Inter-Cultural Studies (Ongoing)", school: "Presbyterian Theological Seminary College & Advanced Studies" },
      { degree: "Units in Master of Divinity", school: "Presbyterian Theological Seminary College & Advanced Studies" },
      { degree: "Bachelor of Theology", school: "Presbyterian Theological Seminary College & Advanced Studies" },
      { degree: "TESOL Certified", school: "TESOL Comuniversity" }
    ],
    specialization: "Major in Church History, Theology, Hermeneutics, and Christian Counseling",
    titles: "Missionary • Visual Artist • Graphic Designer • Animator • Teacher"
  },
  {
    id: "kyo-sung-lee",
    name: "Rev. Kyo Sung Lee",
    role: "Professor",
    image: "/images/faculty/kyo.jpg",
    degrees: ["D.Min", "MA", "B.Th"],
    education: [
      { degree: "Doctor of Ministry", school: "Fuller Theological Seminary" },
      { degree: "Master of Arts in Pastoral Studies", school: "Presbyterian Theological Seminary Korea" },
      { degree: "Bachelor in Theology", school: "Presbyterian Theological Seminary College & Advanced Studies" },
      { degree: "Master in Professional Studies (Church Ministry)", school: "Presbyterian Theological Seminary Korea" }
    ],
    specialization: "Church Government and Reformed Worship",
    titles: "Minister • Academic Scholar"
  },
  {
    id: "kyung-ja-kim-lee",
    name: "Mrs. Kyung Ja Kim Lee",
    role: "Professor",
    image: "/images/faculty/kyung.jpg",
    degrees: ["D.Miss (Cand.)", "M.Div", "B.Th"],
    education: [
      { degree: "Cand. Doctor of Missiology", school: "Asia Graduate School of Theology - Pacific" },
      { degree: "Master of Divinity", school: "Presbyterian Theological Seminary College & Advanced Studies" },
      { degree: "Master of Cross-Cultural Ministry Theology", school: "International Chongshin University" },
      { degree: "Bachelor in Theology", school: "Presbyterian Theological Seminary College & Advanced Studies" }
    ],
    specialization: "Missiology and Cross-Cultural Ministry",
    titles: "Missionary • Educator"
  },
  {
    id: "ernesto-norio",
    name: "Rev. Ernesto Norio Jr.",
    role: "Professor",
    image: "/images/faculty/ernesto.jpg",
    degrees: ["MA", "BA", "LPT"],
    education: [
      { degree: "Master of Arts in Christian Ministry", school: "Westminster Graduate School of Divinity" },
      { degree: "Bachelor of Arts in Theology", school: "Presbyterian Bible Seminary Inc." },
      { degree: "Certificate in Professional Education", school: "Mabalacat City College" },
      { degree: "Licensed Professional Teacher", school: "Professional Regulation Commission" }
    ],
    specialization: "Church Government, Theology, Reformed Worship",
    titles: "Licensed Teacher • Minister"
  },
  {
    id: "ignacio-asuncion",
    name: "Rev. Ignacio Asuncion Jr.",
    role: "Professor",
    image: "/images/faculty/ignacio.jpg",
    degrees: ["MA", "B.Th"],
    education: [
      { degree: "Master of Arts in Inter-Cultural Studies", school: "Presbyterian Bible Seminary Inc." },
      { degree: "Bachelor of Theology", school: "Presbyterian Bible Seminary Inc." }
    ],
    specialization: "Epistles and Old Testament Prophets",
    titles: "Biblical Scholar • Minister"
  },
  {
    id: "augosto-guzman",
    name: "Rev. Augosto Guzman",
    role: "Professor",
    image: "/images/faculty/augosto.jpg",
    degrees: ["MA"],
    education: [
      { degree: "Master of Arts in Inter-Cultural Studies", school: "Presbyterian Bible Seminary Inc." }
    ],
    specialization: "Church Government and Biblical Survey",
    titles: "Minister • Academic Instructor"
  },
  {
    id: "arnel-timbol",
    name: "Pastor Arnel Timbol",
    role: "Professor",
    image: "/images/faculty/arnel.jpg",
    degrees: ["MA", "B.Th"],
    education: [
      { degree: "Master of Arts in Inter-Cultural Studies", school: "Presbyterian Bible Seminary Inc." },
      { degree: "Bachelor of Theology", school: "Presbyterian Bible Seminary Inc." },
      { degree: "Undergraduate of BSCE (Civil Engineering)", school: "Angeles University Foundation" }
    ],
    specialization: "Theology, Hermeneutics, Church History",
    titles: "Pastor • Educator"
  },
  {
    id: "andy-orongan",
    name: "Rev. Andy Gaad Orongan",
    role: "Professor",
    image: "/images/faculty/andy.jfif",
    degrees: ["MA", "B.Th", "BSIEd"],
    education: [
      { degree: "Bachelor of Science in Industrial Education", school: "Mindoro State University" },
      { degree: "Bachelor of Theology", school: "Asia-Pacific Christian College and Seminary" },
      { degree: "Master of Arts in Transformational Leadership", school: "Asian Theological Seminary" }
    ],
    specialization: "Leadership and Christian Education",
    titles: "Minister • Industrial Educator"
  },
  {
    id: "ian-fel-metal",
    name: "Ian Fel Metal",
    role: "Assistant Professor",
    image: "/images/faculty/ian.jfif",
    degrees: ["Ph.D. (Ongoing)", "MS", "M.Div", "BA"],
    education: [
      { degree: "Doctor of Philosophy in Clinical Psychology (Ongoing)", school: "University of Santo Tomas" },
      { degree: "Master of Science in Psychology", school: "Holy Angel University" },
      { degree: "Master of Divinity", school: "Presbyterian Theological Seminary" },
      { degree: "Bachelor of Arts in Psychology", school: "University of the Philippines" }
    ],
    specialization: "Counseling, Clinical Psychology",
    titles: "Registered Clinical Psychologist • Assistant Professor"
  },
  {
    id: "samuel-suyao",
    name: "Rev. Samuel T. Suyao",
    role: "Professor",
    image: "/images/faculty/Samuel.jpg",
    degrees: ["MA", "B.Th"],
    education: [
      { degree: "Certificate of Ministerial Training for Church Planter" },
      { degree: "Bachelor of Theology" },
      { degree: "Certificate in Teaching Secondary Education – Major in Counseling" },
      { degree: "Master of Arts in Education" }
    ],
    specialization: "Counseling and Ministerial Training",
    titles: "Church Planter • Educator"
  },
  {
    id: "marino-bituin",
    name: "Rev. Marino G. Bituin",
    role: "Professor",
    image: "/images/faculty/Marino.jpg",
    degrees: ["BSCE", "Dip.Th"],
    education: [
      { degree: "Bachelor of Science in Civil Engineering", school: "Holy Angel University" },
      { degree: "Diploma in Theological Studies", school: "Presbyterian Bible Seminary Inc." },
      { degree: "Ordained Minister" },
      { degree: "Churchplanter" }
    ],
    specialization: "Church Planting & Mission",
    titles: "Civil Engineer • Ordained Minister"
  },
  {
    id: "tim-lewis",
    name: "Rev. Tim Lewis",
    role: "Professor",
    image: "/images/faculty/Tim.jpg",
    degrees: ["M.Div", "BA"],
    education: [
      { degree: "Master of Divinity", school: "Western Seminary" },
      { degree: "Bachelor of Arts in History", school: "San José State University" },
      { degree: "Major in Languages (Hebrew, Greek) and Homiletics", school: "San José State University" }
    ],
    specialization: "Biblical Languages and Homiletics",
    titles: "Minister • Historian • Linguist"
  }
];
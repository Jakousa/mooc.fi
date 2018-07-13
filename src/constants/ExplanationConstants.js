import MoocIcon from "@material-ui/icons/Book";
import DefaIcon from "@material-ui/icons/LocationCity";
import TeacherIcon from "@material-ui/icons/People";

export const finnishExplanations = {
  headlineContent: "Laadukkaita, avoimia ja ilmaisia verkkokursseja kaikille",
  leadContent:
    "Helsingin yliopiston tietojenkäsittelytieteen osasto tarjoaa avoimia laadukkaita ja ilmaisia verkkokursseja kaikille. Aloittelija voi lähteä liikkeelle Ohjelmoinnin MOOCista tai tekoälyn perusteisiin keskittyvästä Elements of AI -kurssista. Osaamistaan päivittävä voi syventyä vaikkapa tietoturvaan tai Fullstack -ohjelmointiin.",
  expansionPanelItems: [
    {
      title: "Kaikille avoimia kursseja",
      shortDescription:
        "Verkko-oppimista parhaillaan. Älä huolehdi kurssimaksuista tai koulumatkoista, vaan opiskele missä sinulle sopii.",
      longDescription:
        "MOOCit eli kaikille avoimet verkkokurssit (massive open online course) ovat nimensä mukaisesti kaikki kurssit ovat avoimia, ilmaisia ja verkkopohjaisia.",
      icon: MoocIcon
    },
    {
      title: "Ensimmäisen vuoden opinnot kaikille",
      shortDescription:
        "Digital Education for All -hanke avaa tietojenkäsittelytieteen ensimmäisen vuoden kaikille.",
      longDescription:
        "Helsingin yliopiston johtamassa Digital Education for All -hankeeessa myös mukana Aalto-yliopisto, Jyväskylän yliopisto, Oulun yliopisto ja Turun yliopisto.",
      icon: DefaIcon,
      buttonLink: "http://helsinki.fi/digital-education-for-all",
      buttonText: "Lisätietoa DEFA:sta"
    },
    {
      title: "Opeta kursseja omassa luokassasi",
      shortDescription:
        "Opettaja! Haluatko kurssimme luokkaasi omilla pistelistoillasi ja omalla aikataulullasi.",
      longDescription:
        "Kaikkia kurssejamme saa käyttää osana omaa opetustaan. Katso lisää Opettajalle-sivulta!",
      icon: TeacherIcon,
      buttonLink: "/teachers",
      buttonText: "Opettajille-sivu"
    }
  ]
};

export const englishExplanations = {
  headlineContent:
    "High-quality, open, and free courses from University of Helsinki",
  leadContent:
    "University of Helsinki's Department of Computer Science offers high quality, free open online courses for everyone. No prior knowledge is required -- beginners can start to learn programming basics from the Object-Oriented Programming with Java course, or start to get familiar with artificial intelligence from the course Elements of AI.",
  expansionPanelItems: [
    {
      title: "Open courses for all",
      shortDescription:
        "Online learning at its best. Don't worry about course fees or trips to learning facilities. Study where it is convenient for you!",
      longDescription:
        "MOOCs (Massive Online Open Course) are online learning at its best. As per its name, all courses are open, free of charge, and fully available online. No need to worry about course fees or travelling to learning facilities. Just study whenever you want, wherever you are.",
      icon: MoocIcon
    },
    {
      title: "Teach courses in your own classroom",
      shortDescription:
        "Teacher! You can have your own courses, with point lists and schedules tailored for you.",
      longDescription:
        "Teacher! You can have some of our courses for your classes for free with some customizations for your needs, for example by setting your own deadlines. For more information, see our teacher's manual!",
      icon: TeacherIcon,
      buttonLink: "/en/teachers",
      buttonText: "Teacher's manual"
    }
  ]
};
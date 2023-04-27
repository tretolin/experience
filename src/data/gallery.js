import detail1 from './project-1.js'
import detail2 from './project-2.js'
import detail3 from './project-3.js'
import detail4 from './project-4.js'
import detail5 from './project-5.js'

const path = "/src/img/gallery/";
const gallery = [
    {
        name:"Envíaflores.com",
        project:"Rediseño integral",
        image:path + "project-1.jpg",
        description:detail1,
        cover:path + "ef-project.jpg",
    },
    {
        name:"Wardi",
        project:"Expansión de aplicación",
        image:path + "project-2.jpg",
        description:detail2,
        cover:path + "wardi-project.jpeg",
    },
    {
        name:"Barbería Dominó",
        project:"Nueva imagen",
        image:path + "project-5.jpg",
        description:detail3,
        cover:path + "domino-project.jpeg",
    },
    {
        name:"Jammin' Togheter",
        project:"Administración",
        image:path + "project-3.jpg",
        description:detail4,
        cover:path + "jt-project.jpeg",
    },
    {
        name:"Identifica",
        project:"Editor para demo",
        image:path + "project-4.jpg",
        description:detail5,
        cover:path + "photocapture.jpeg",
    },
];

export default gallery;
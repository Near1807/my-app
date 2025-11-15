import { Contact, Card, Divider, Subtext, Subtitle, Title, Text, PersonalImage} from "../components/cv";

export default function CV() {
 return (
    <div className="transition-colors duration-200 grid lg:grid-cols-4 gap-4 p-4 bg-white min-h-screen dark:bg-black">
        <Card className="lg:col-span-1 col-span-4">
            <PersonalImage/>
            <Title className="text-center"> Thomas Leman </Title>
            <Subtext className="text-center">Software Devlopper</Subtext>
            <Divider/>
            <Subtitle className="">Présentation</Subtitle>
            <Text className="px-2">Curieux et passionné, j’aime apprendre et 
                développer mes compétences dans de 
                nombreux domaines, en particulier en 
                informatique. Je souhaite mettre à profit 
                ce stage pour renforcer ma pratique, 
                gagner en expérience de terrain et 
                continuer à progresser dans un cadre 
                professionnel.
            </Text>
            <Divider/>
            <Subtitle className="">Qualitées</Subtitle>
            <Text className="px-2">Motivé et Enthousiaste</Text>
            <Text className="px-2">Bonne communication et contact social </Text>
            <Text className="px-2">Inventif et inspiré </Text>
            <br />
            <Subtitle className="">Skills</Subtitle>
            <Text className="px-2"> C / C# / Python / MySQL </Text>
            <Text className="px-2"> C / C# / Python / MySQL </Text>
            <Text className="px-2">Solidworks / MatLab / Altium Designer </Text>
            <Text className="px-2">HTML / CSS / TailwindCSS</Text>
            <br />
            <Subtitle className="">Langues</Subtitle>
            <Text className="px-2">Francais</Text>
            <Text className="px-2">Anglais C1</Text>
            <Text className="px-2">Néerlandais</Text>
        </Card>
        <Card className="lg:col-span-3 grow col-span-4">
            <Title>Parcour Académique</Title>
            <Subtitle className="">2014-2015</Subtitle>
            <Subtext className="px-2">6ème au Collège Melle (néerlandais)</Subtext>
            <Subtitle className="">2015-2020</Subtitle>
            <Subtext className="px-2">Secondaires au Collège Cardinal Mercier (BLA) </Subtext>
            <Subtitle className="">2021-2026 (ECAM)</Subtitle>
            <Subtext className="px-2">Etudes en Ingénierie Industrielle orienté Informatique et électronique  </Subtext>
            <br />
            <Title>Experience</Title>
            <Subtitle className="text-gray-500 ml-2">Scoutisme</Subtitle>
            <ul className="list-disc ml-8">
            <li className="dark:text-gray-300">4 ans en tant que chef baladin (+- 35 animés)</li>
            <li className="dark:text-gray-300">Animé de mes 6 à 8 ans</li>
            </ul>
            <br />
            <Title>Communication</Title>
            <Text className="px-2">Grâce à mon engagement dans le scoutisme, j’ai acquis de 
                solides compétences en gestion de projet, en organisation et 
                en communication (coordination avec les parents et le staff, 
                gestion de locations, préparation de camps, animation de 
                réunions hebdomadaires, etc.). 
                Je souhaite aujourd’hui mettre à profit ces expériences dans 
                un cadre professionnel, développer de nouvelles 
                compétences et approfondir mes connaissances au travers 
                de ce stage. 
            </Text>
        </Card>
        <Card className="col-span-4">
            <Title>Contact</Title>
            <Contact className="w-5 h-5 bg-contain bg-center bg-no-repeat bg-[url(/images/mail-n.png)] dark:bg-[url(/images/mail-b.png)]">leman.thomas.praet@gmail.com</Contact>
            <Contact className="w-5 h-5 bg-contain bg-center bg-no-repeat bg-[url(/images/phone-n.png)] dark:bg-[url(/images/phone-b.png)]">+32 475 82 74 61</Contact>
            <Contact className="w-5 h-5 bg-contain bg-center bg-no-repeat bg-[url(/images/linkedin-logo-n.png)] dark:bg-[url(/images/linkedin-logo-b.png)]">Leman Thomas</Contact>
        </Card>
    </div>  
    )
}

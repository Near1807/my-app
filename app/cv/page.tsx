import { Card, Divider, Subtext, Subtitle, Title, Text, PersonalImage} from "../components/cv";

export default function CV() {
 return (
    <div className="grid lg:grid-cols-4 gap-4 p-4">
        <Card className="lg:col-span-1 col-span-4">
            <PersonalImage/>
            <Title className="text-center"> Thomas Leman </Title>
            <Subtext className="text-center">Software Devlopper</Subtext>
            <Divider/>
            <Subtitle className="text-gray-500">Skills</Subtitle>
            <Text>JavaScript / TypeScript</Text>
            <Text>React / Next.js</Text>
            <Text>HTML / CSS / TailwindCSS</Text>
            <Text>Python</Text>
            <Text>C / C++</Text>
        </Card>
        <Card className="lg:col-span-3 grow col-span-4">
            <Title>About me</Title>
            <Text>
                Passionate software developer with experience in building web applications using modern technologies. 
                Skilled in JavaScript, TypeScript, React, and Python. 
                Eager to learn new skills and take on challenging projects.
            </Text>
            <br />
            <Title>Experience</Title>
            <Subtitle className="text-gray-500">Software Developer Intern</Subtitle>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum
            </Text>
            <Subtext className="text-right">At XYZ-Compagny 2024-2025</Subtext>
            <br />
            <Subtitle className="text-gray-500">Software Developer Intern</Subtitle>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum
            </Text>
            <Subtext className="text-right">At XYZ-Compagny 2024-2025</Subtext>
            <br />
            <Subtitle className="text-gray-500">Software Developer Intern</Subtitle>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum
            </Text>
            <Subtext className="text-right">At XYZ-Compagny 2024-2025</Subtext>
        </Card>
        <Card className="col-span-4">
            <Title>Contact</Title>
        </Card>
    </div>)
}

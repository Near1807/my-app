import { Card } from "./cv";

export function QuizCard(props: {className?: string; children:React.ReactNode}) {
    return(
        <Card className={`flex justify-center items-center ${props.className}`}>
            {props.children}
        </Card>
    )
}

export function QuizLink(props:{href:string; children:React.ReactNode}) {
    return(
    <a className="flex items-center justify-center rounded-2xl w-20 h-8 bg-sky-100 hover:bg-sky-200" href={props.href}>
        {props.children}
    </a>
    )
}

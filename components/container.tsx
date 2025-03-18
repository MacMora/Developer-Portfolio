
import * as React from "react";
import {HeroUIProvider} from "@heroui/react";

interface ContainerProps {
    children: React.ReactNode
}

const  ContainerPage = (props: ContainerProps) => {
    const { children } = props

    return(
        <HeroUIProvider>
        <div className="flex flex-col items-center w-full px-4 pb-40 mx-auto mt-40 md:pb-0 md:px-6">
            {children}
        </div>
        </HeroUIProvider>
    )
}

export default ContainerPage;
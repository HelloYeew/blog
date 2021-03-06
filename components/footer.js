import Container from './container'

export default function Footer() {
    return (
        <footer className="bg-accent-1 border-t border-accent-2">
            <Container>
                <div className="py-28 flex flex-col lg:flex-row items-center">
                    <h4 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                        Made with ❤️ by HelloYeew
                    </h4>
                    <div className="flex flex-col lg:flex-row justify-end items-end lg:pl-4 lg:w-1/2">
                        <a
                            href={`https://github.com/HelloYeew/blog`}
                            className="mx-3 font-bold hover:underline"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
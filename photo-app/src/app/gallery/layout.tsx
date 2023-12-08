import Nav from "../components/nav";


export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className='container mx-auto'>
                <Nav />
                {children}
            </body>
        </html>
    )
}
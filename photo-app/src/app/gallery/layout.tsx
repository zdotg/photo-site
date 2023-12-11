
import Nav from "../components/nav";


export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return (
        <div lang="en">
            <div className='container mx-auto'>
                <Nav />
                {children}
            </div>
        </div>
    )
}


export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className='container mx-auto py-20'>
                {children}
            </body>
        </html>
    )
}
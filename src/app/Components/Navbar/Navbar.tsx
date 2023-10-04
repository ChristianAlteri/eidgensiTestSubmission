'use client'
import { useRouter } from 'next/navigation';
import Container from "../Container";

const Navbar = () => {
    const router = useRouter();
    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px] flex'>
                <Container>
                    <div className="flex ">
                                <div className="flex items-center justify-center cursor-pointer" onClick={() => router.push(`/`)}>
                                    <div>TEST SUBMISSION</div>
                                </div>

                    </div>

                </Container>
            </div>
        </div>
    );
}

export default Navbar;

import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react';
export default function Header() {

    const { data: session, status } = useSession();

    return (
        <div className="flex items-center justify-between p-5">
            <div className="flex flex-col items-center ">
                <div className="font-primary font-bold tracking-wider bg-gradient-to-r from-[#CEA07E] to-[#BB5656] inline-block text-transparent bg-clip-text">
                    <h2>RESTAURANT</h2>
                </div>
                <Link href='/'>
                    <div className="flex scale-[0.8]">
                        <div class="  
            border-t-[15px] border-t-transparent
            border-r-[15px] border-r-white
            border-b-[15px] border-b-transparent">
                        </div>
                        <div className="flex w-[80px] text-sm items-center justify-center bg-white text-zinc-600">
                            DMLUASN
                        </div>
                        <div class="
            border-t-[15px] border-t-transparent
            border-l-[15px] border-l-white
            border-b-[15px] border-b-transparent">
                        </div>
                    </div>
                </Link>

            </div>
            <div>
            <div className="flex space-x-3 items-center">
                    <div className="flex items-center gap-5">
                        <div style={{
                            backgroundImage: `url(/home-image.jpg)`,
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}
                            className="w-14 h-14 rounded-full">
                        </div>
                        <div className="flex flex-col">
                            <span className="font-primary tracking-wider text-xl">
                                {session?.user?.name}
                            </span>
                            <span className="text-md text-zinc-700">
                                {session?.user?.image.toUpperCase()}
                            </span>
                        </div>
                    </div>

                    <button onClick={signOut} type="button" className="scale-[0.9] w-fit h-fit bg-zinc-400 hover:text-white text-md text-black p-2 font-semibold transition-all duration-400 rounded-full hover:bg-gradient-to-r from-[#CEA07E] to-[#BB5656]">
                        Sign Out
                    </button>

                </div>
            </div>
        </div>
    )
}
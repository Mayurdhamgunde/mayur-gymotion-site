import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">

        {/* 1ST */}
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo} />
                <h3 className="mt-9 font-bold text-lg">OUR GYMS </h3>
                <h3 className="my-3 font-bold text-lg">DAILY WORKOUT </h3>
                <p className="mt-6 font-normal">© Evogym All Rights Reserved.</p>

            </div>

            {/* 2ND */}
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold my-2 text-xl">LINKS</h4>
                <p className="my-2 font-semibold text-lg">blog </p>
                <p className="my-2 font-semibold text-lg">about </p>
                <p className="my-2 font-semibold text-lg">how it works </p>
                <p className="my-2 font-semibold text-lg">contact </p>
            </div>
            
            {/* 3RD */}
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold my-2 text-xl">CONTACT US</h4>
                <h3 className="semibold text-lg">+91-9284675626</h3>


            </div>
            <div></div>
        </div>
    </footer>
)
}

export default Footer
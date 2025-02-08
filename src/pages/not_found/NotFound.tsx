import { Helmet } from "react-helmet";
import { URLConstants } from "../../constants/url";



export const NotFoundPage = () => {

    return (
        <>
            <Helmet>
                <title>404 | Not Found</title>
            </Helmet>
            <div className="min-h-screen min-w-screen bg-slate-800 flex items-center justify-center">
                <div className="flex flex-col font-bold text-2xl text-center" data-aos="fade-up">
                    <h2 className="text-9xl">404</h2>
                    <h3 className="pt-10">The page you finding is not found!</h3>
                    <a href={URLConstants.BASE} className="text-lg text-slate-300 hover:opacity-70 transition-opacity duration-300">
                        Back to home
                    </a>

                </div>
            </div>
        </>
    );
}
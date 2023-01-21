import { ServerIcon } from "@heroicons/react/outline";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect } from "react-router-dom";
import { auth } from "../firebase";

function Home(){
    

        const [user] = useAuthState(auth);

        return<>{!user && <Redirect to="/" />}
        <div>
            <div>
                <div className="server-default hover:bg-discord_purple">
                    <img src="https://rb.gy/kuaslg" alt="" className="h-5 "/>
                </div>
                <hr className="border-gray-700 border w-8 mx-auto"/>
                <ServerIcon image="https://rb.gy/qidcpp" />
                <ServerIcon image="https://rb.gy/zxo0lz" />
                <ServerIcon image="https://rb.gy/qidcpp" />
                <ServerIcon image="https://rb.gy/zxo0lz" />
            </div>
        </div>
        </>;

}

export default Home;
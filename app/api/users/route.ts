import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const url = `https://api.github.com/users/wiredbrat`;
    try {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error(`error, ${res.status}: ${res.statusText}`)
        } 

        const data = await res.json();

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
    } catch (error) {
        return new Response(JSON.stringify(error), {
            status: 400,
            headers: {
                'Content-Type': 'json/application'
            }
        }) 
    }
    
}
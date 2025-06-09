import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.KIT_API_KEY;
const FORM_ID = process.env.KIT_FORM_ID;
const BASE_URL = "https://api.convertkit.com/v3/";
const emailRequiredMessage = "Email is Required";
const errorMessage = "There was a problem, please try again";
const successMessage = "Success";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const email = body?.email;

    if (!email) {
        return NextResponse.json({ message: emailRequiredMessage }, { status: 400 });
    }

    try {
        const url = [BASE_URL, `forms`, FORM_ID, 'subscribe'].join('/');
        const data = {
            api_key: API_KEY,
            email: email,
        };
        const response = await fetch(url, {
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
        });

        const result = await response.json();
        // console.log(result);

        if (response.status == 200) {
            return NextResponse.json({ message: successMessage });
        } else {
            return NextResponse.json({ message: errorMessage }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ message: error as Error }, { status: 500 });
    }
}